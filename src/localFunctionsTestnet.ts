import { Wallet, Contract, ContractFactory, utils, providers } from 'ethers'
import Ganache from 'ganache'
import cbor from 'cbor'

import { simulateScript } from './simulateScript'
import {
  simulatedRouterConfig,
  simulatedCoordinatorConfig,
  simulatedAllowListConfig,
  simulatedDonId,
  simulatedAllowListId,
  simulatedLinkEthPrice,
  callReportGasLimit,
  simulatedSecretsKeys,
  simulatedTransmitters,
  numberOfSimulatedNodeExecutions,
} from './simulationConfig'
import {
  LinkTokenSource,
  MockV3AggregatorSource,
  FunctionsRouterSource,
  MockFunctionsCoordinatorSource,
  TermsOfServiceAllowListSource,
} from './v1_contract_sources'

import type { ServerOptions } from 'ganache'

import type {
  FunctionsRequestParams,
  RequestCommitment,
  LocalFunctionsTestnet,
  GetFunds,
  FunctionsContracts,
  RequestEventData,
} from './types'

export const startLocalFunctionsTestnet = async (
  secrets?: Record<string, string>,
  options?: ServerOptions,
  port = 8545,
): Promise<LocalFunctionsTestnet> => {
  const server = Ganache.server(options)

  server.listen(port, 'localhost', (err: Error | null) => {
    if (err) {
      throw Error(`Error starting Ganache server:\n${err}`)
    }
    console.log(`Ganache server started on port ${port}`)
  })

  const accounts = server.provider.getInitialAccounts()
  const firstAccount = Object.keys(accounts)[0]
  const admin = new Wallet(
    accounts[firstAccount].secretKey.slice(2),
    new providers.JsonRpcProvider(`http://localhost:${port}`),
  )

  const contracts = await deployFunctionsOracle(admin)

  contracts.functionsMockCoordinatorContract.on(
    'OracleRequest',
    (
      requestId,
      requestingContract,
      requestInitiator,
      subscriptionId,
      subscriptionOwner,
      data,
      dataVersion,
      flags,
      callbackGasLimit,
      commitment,
    ) => {
      const requestEvent: RequestEventData = {
        requestId,
        requestingContract,
        requestInitiator,
        subscriptionId,
        subscriptionOwner,
        data,
        dataVersion,
        flags,
        callbackGasLimit,
        commitment,
      }
      handleOracleRequest(requestEvent, contracts.functionsMockCoordinatorContract, admin, secrets)
    },
  )

  const getFunds: GetFunds = async (address, { weiAmount, juelsAmount }) => {
    if (!juelsAmount) {
      juelsAmount = BigInt(0)
    }
    if (!weiAmount) {
      weiAmount = BigInt(0)
    }
    if (typeof weiAmount !== 'string' && typeof weiAmount !== 'bigint') {
      throw Error(`weiAmount must be a BigInt or string, got ${typeof weiAmount}`)
    }
    if (typeof juelsAmount !== 'string' && typeof juelsAmount !== 'bigint') {
      throw Error(`juelsAmount must be a BigInt or string, got ${typeof juelsAmount}`)
    }
    weiAmount = BigInt(weiAmount)
    juelsAmount = BigInt(juelsAmount)
    const ethTx = await admin.sendTransaction({
      to: address,
      value: weiAmount.toString(),
    })
    const linkTx = await contracts.linkTokenContract.connect(admin).transfer(address, juelsAmount)
    await ethTx.wait(1)
    await linkTx.wait(1)
    console.log(
      `Sent ${utils.formatEther(weiAmount.toString())} ETH and ${utils.formatEther(
        juelsAmount.toString(),
      )} LINK to ${address}`,
    )
  }

  const close = async (): Promise<void> => {
    contracts.functionsMockCoordinatorContract.removeAllListeners('OracleRequest')
    await server.close()
  }

  return {
    server,
    adminWallet: {
      address: admin.address,
      privateKey: admin.privateKey,
    },
    ...contracts,
    getFunds,
    close,
  }
}

const handleOracleRequest = async (
  requestEventData: RequestEventData,
  mockCoordinator: Contract,
  admin: Wallet,
  secrets: Record<string, string> = {},
) => {
  const requestData = await constructRequestDataObject(requestEventData.data)
  const response = await simulateDONExecution(requestData, secrets)

  const errorHexstring = response.errorString
    ? '0x' + Buffer.from(response.errorString.toString()).toString('hex')
    : undefined
  const encodedReport = encodeReport(
    requestEventData.requestId,
    requestEventData.commitment,
    response.responseBytesHexstring,
    errorHexstring,
  )

  const transmitters31AddressArray = Array(31).fill('0x0000000000000000000000000000000000000000')
  simulatedTransmitters.forEach((transmitter, i) => {
    transmitters31AddressArray[i] = transmitter
  })
  const reportTx = await mockCoordinator
    .connect(admin)
    .callReport(encodedReport, transmitters31AddressArray, { gasLimit: callReportGasLimit })
  await reportTx.wait(1)
}

const simulateDONExecution = async (
  requestData: FunctionsRequestParams,
  secrets: Record<string, string>,
): Promise<{ responseBytesHexstring?: string; errorString?: string }> => {
  // Perform the simulation numberOfSimulatedNodeExecution times
  const simulations = [...Array(numberOfSimulatedNodeExecutions)].map(() =>
    simulateScript({
      source: requestData.source,
      secrets,
      args: requestData.args,
      bytesArgs: requestData.bytesArgs,
    }),
  )
  const responses = await Promise.all(simulations)

  const successfulResponses = responses.filter(response => response.errorString === undefined)
  const errorResponses = responses.filter(response => response.errorString !== undefined)

  if (successfulResponses.length > errorResponses.length) {
    return {
      responseBytesHexstring: aggregateMedian(
        successfulResponses.map(response => response.responseBytesHexstring!),
      ),
    }
  } else {
    return {
      errorString: aggregateModeString(errorResponses.map(response => response.errorString!)),
    }
  }
}

const aggregateMedian = (responses: string[]): string => {
  const bufResponses = responses.map(response => Buffer.from(response.slice(2), 'hex'))

  bufResponses.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    }
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        return a[i] - b[i]
      }
    }
    return 0
  })

  return '0x' + bufResponses[Math.floor((bufResponses.length - 1) / 2)].toString('hex')
}

const aggregateModeString = (items: string[]): string => {
  const counts = new Map<string, number>()

  for (const str of items) {
    const existingCount = counts.get(str) || 0
    counts.set(str, existingCount + 1)
  }

  let modeString = items[0]
  let maxCount = counts.get(modeString) || 0

  for (const [str, count] of counts.entries()) {
    if (count > maxCount) {
      maxCount = count
      modeString = str
    }
  }

  return modeString
}

const encodeReport = (
  requestId: string,
  commitment: RequestCommitment,
  result?: string,
  error?: string,
): string => {
  const encodedCommitment = utils.defaultAbiCoder.encode(
    [
      'bytes32',
      'address',
      'uint96',
      'address',
      'uint64',
      'uint32',
      'uint72',
      'uint72',
      'uint40',
      'uint40',
      'uint32',
    ],
    [
      commitment.requestId,
      commitment.coordinator,
      commitment.estimatedTotalCostJuels,
      commitment.client,
      commitment.subscriptionId,
      commitment.callbackGasLimit,
      commitment.adminFee,
      commitment.donFee,
      commitment.gasOverheadBeforeCallback,
      commitment.gasOverheadAfterCallback,
      commitment.timeoutTimestamp,
    ],
  )
  const encodedReport = utils.defaultAbiCoder.encode(
    ['bytes32[]', 'bytes[]', 'bytes[]', 'bytes[]', 'bytes[]'],
    [[requestId], [result ?? []], [error ?? []], [encodedCommitment], [[]]],
  )
  return encodedReport
}

const constructRequestDataObject = async (requestData: string): Promise<FunctionsRequestParams> => {
  const decodedRequestData = await cbor.decodeAll(Buffer.from(requestData.slice(2), 'hex'))

  const requestDataObject = {} as FunctionsRequestParams

  for (let i = 0; i < decodedRequestData.length - 1; i += 2) {
    const elem = decodedRequestData[i]
    switch (elem) {
      case 'codeLocation':
        requestDataObject.codeLocation = decodedRequestData[i + 1]
        break
      case 'secretsLocation':
        // Unused as secrets provided as an argument to startLocalFunctionsTestnet() are used instead
        break
      case 'language':
        requestDataObject.codeLanguage = decodedRequestData[i + 1]
        break
      case 'source':
        requestDataObject.source = decodedRequestData[i + 1]
        break
      case 'secrets':
        // Unused as secrets provided as an argument to startLocalFunctionsTestnet() are used instead
        break
      case 'args':
        requestDataObject.args = decodedRequestData[i + 1]
        break
      case 'bytesArgs':
        requestDataObject.bytesArgs = decodedRequestData[i + 1].map((bytesArg: Buffer) => {
          return '0x' + bytesArg.toString('hex')
        })
        break
      default:
      // Ignore unknown keys
    }
  }

  return requestDataObject
}

export const deployFunctionsOracle = async (deployer: Wallet): Promise<FunctionsContracts> => {
  const linkTokenFactory = new ContractFactory(
    LinkTokenSource.abi,
    LinkTokenSource.bytecode,
    deployer,
  )
  const linkToken = await linkTokenFactory.connect(deployer).deploy()

  const linkPriceFeedFactory = new ContractFactory(
    MockV3AggregatorSource.abi,
    MockV3AggregatorSource.bytecode,
    deployer,
  )
  const linkPriceFeed = await linkPriceFeedFactory
    .connect(deployer)
    .deploy(18, simulatedLinkEthPrice)

  const routerFactory = new ContractFactory(
    FunctionsRouterSource.abi,
    FunctionsRouterSource.bytecode,
    deployer,
  )
  const router = await routerFactory
    .connect(deployer)
    .deploy(linkToken.address, simulatedRouterConfig)

  const mockCoordinatorFactory = new ContractFactory(
    MockFunctionsCoordinatorSource.abi,
    MockFunctionsCoordinatorSource.bytecode,
    deployer,
  )
  const mockCoordinator = await mockCoordinatorFactory
    .connect(deployer)
    .deploy(router.address, simulatedCoordinatorConfig, linkPriceFeed.address)

  const allowlistFactory = new ContractFactory(
    TermsOfServiceAllowListSource.abi,
    TermsOfServiceAllowListSource.bytecode,
    deployer,
  )
  const allowlist = await allowlistFactory.connect(deployer).deploy(simulatedAllowListConfig)

  const setAllowListIdTx = await router.setAllowListId(
    utils.formatBytes32String(simulatedAllowListId),
  )
  await setAllowListIdTx.wait(1)

  const allowlistId = await router.getAllowListId()
  const proposeContractsTx = await router.proposeContractsUpdate(
    [allowlistId, utils.formatBytes32String(simulatedDonId)],
    [allowlist.address, mockCoordinator.address],
    {
      gasLimit: 1_000_000,
    },
  )
  await proposeContractsTx.wait(1)
  await router.updateContracts({ gasLimit: 1_000_000 })

  await mockCoordinator.connect(deployer).setDONPublicKey(simulatedSecretsKeys.donKey.publicKey)
  await mockCoordinator
    .connect(deployer)
    .setThresholdPublicKey(
      '0x' + Buffer.from(simulatedSecretsKeys.thresholdKeys.publicKey).toString('hex'),
    )
  await mockCoordinator.connect(deployer).setTransmitters(simulatedTransmitters)

  return {
    donId: simulatedDonId,
    linkTokenContract: linkToken,
    functionsRouterContract: router,
    functionsMockCoordinatorContract: mockCoordinator,
  }
}
