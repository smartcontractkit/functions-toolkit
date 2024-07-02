import {
  AbiCoder,
  Wallet,
  Contract,
  ContractFactory,
  formatEther,
  JsonRpcProvider,
  encodeBytes32String,
} from 'ethers'
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
  DEFAULT_MAX_ON_CHAIN_RESPONSE_BYTES,
  numberOfSimulatedNodeExecutions,
  simulatedLinkUsdPrice,
} from './simulationConfig'
import {
  LinkTokenSource,
  MockV3AggregatorSource,
  FunctionsRouterSource,
  FunctionsCoordinatorTestHelperSource,
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
  simulationConfigPath?: string,
  options?: ServerOptions,
  port = 8545,
): Promise<LocalFunctionsTestnet> => {
  const server = Ganache.server(options)

  server.listen(port, 'localhost', (err: Error | null) => {
    if (err) {
      throw Error(`Error starting local Functions testnet server:\n${err}`)
    }
    console.log(`Local Functions testnet server started on port ${port}`)
  })

  const accounts = server.provider.getInitialAccounts()
  const firstAccount = Object.keys(accounts)[0]
  const admin = new Wallet(
    accounts[firstAccount].secretKey.slice(2),
    new JsonRpcProvider(`http://localhost:${port}`),
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
      handleOracleRequest(
        requestEvent,
        contracts.functionsMockCoordinatorContract,
        admin,
        simulationConfigPath,
      )
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
    const linkTx = await (contracts.linkTokenContract.connect(admin) as Contract).transfer(
      address,
      juelsAmount,
    )
    await ethTx.wait(1)
    await linkTx.wait(1)
    console.log(
      `Sent ${formatEther(weiAmount.toString())} ETH and ${formatEther(
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
  simulationConfigPath?: string,
) => {
  const response = await simulateDONExecution(requestEventData, simulationConfigPath)

  const errorHexstring = response.errorString
    ? '0x' + Buffer.from(response.errorString.toString()).toString('hex')
    : undefined
  const encodedReport = encodeReport(
    requestEventData.requestId,
    requestEventData.commitment,
    response.responseBytesHexstring,
    errorHexstring,
  )

  const reportTx = await (mockCoordinator.connect(admin) as Contract).callReport(encodedReport, {
    gasLimit: callReportGasLimit,
  })
  await reportTx.wait(1)
}

const simulateDONExecution = async (
  requestEventData: RequestEventData,
  simulationConfigPath?: string,
): Promise<{ responseBytesHexstring?: string; errorString?: string }> => {
  let requestData: FunctionsRequestParams
  try {
    requestData = await buildRequestObject(requestEventData.data)
  } catch {
    return {
      errorString: 'CBOR parsing error',
    }
  }

  const simulationConfig = simulationConfigPath ? require(simulationConfigPath) : {}

  // Perform the simulation numberOfSimulatedNodeExecution times
  const simulations = [...Array(numberOfSimulatedNodeExecutions)].map(async () => {
    try {
      return await simulateScript({
        source: requestData.source,
        secrets: simulationConfig.secrets, // Secrets are taken from simulationConfig, not request data included in transaction
        args: requestData.args,
        bytesArgs: requestData.bytesArgs,
        maxOnChainResponseBytes: simulationConfig.maxOnChainResponseBytes,
        maxExecutionTimeMs: simulationConfig.maxExecutionTimeMs,
        maxMemoryUsageMb: simulationConfig.maxMemoryUsageMb,
        numAllowedQueries: simulationConfig.numAllowedQueries,
        maxQueryDurationMs: simulationConfig.maxQueryDurationMs,
        maxQueryUrlLength: simulationConfig.maxQueryUrlLength,
        maxQueryRequestBytes: simulationConfig.maxQueryRequestBytes,
        maxQueryResponseBytes: simulationConfig.maxQueryResponseBytes,
      })
    } catch (err) {
      const errorString = (err as Error).message.slice(
        0,
        simulationConfig.maxOnChainResponseBytes ?? DEFAULT_MAX_ON_CHAIN_RESPONSE_BYTES,
      )
      return {
        errorString,
        capturedTerminalOutput: '',
      }
    }
  })
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
  const encodedCommitment = AbiCoder.defaultAbiCoder().encode(
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
  const encodedReport = AbiCoder.defaultAbiCoder().encode(
    ['bytes32[]', 'bytes[]', 'bytes[]', 'bytes[]', 'bytes[]'],
    [[requestId], [result ?? []], [error ?? []], [encodedCommitment], [[]]],
  )
  return encodedReport
}

const buildRequestObject = async (
  requestDataHexString: string,
): Promise<FunctionsRequestParams> => {
  const decodedRequestData = await cbor.decodeAll(Buffer.from(requestDataHexString.slice(2), 'hex'))

  if (typeof decodedRequestData[0] === 'object') {
    if (decodedRequestData[0].bytesArgs) {
      decodedRequestData[0].bytesArgs = decodedRequestData[0].bytesArgs?.map((bytesArg: Buffer) => {
        return '0x' + bytesArg?.toString('hex')
      })
    }
    decodedRequestData[0].secrets = undefined
    return decodedRequestData[0] as FunctionsRequestParams
  }
  const requestDataObject = {} as FunctionsRequestParams
  // The decoded request data is an array of alternating keys and values, therefore we can iterate over it in steps of 2
  for (let i = 0; i < decodedRequestData.length - 1; i += 2) {
    const requestDataKey = decodedRequestData[i]
    const requestDataValue = decodedRequestData[i + 1]
    switch (requestDataKey) {
      case 'codeLocation':
        requestDataObject.codeLocation = requestDataValue
        break
      case 'secretsLocation':
        // Unused as secrets provided as an argument to startLocalFunctionsTestnet() are used instead
        break
      case 'language':
        requestDataObject.codeLanguage = requestDataValue
        break
      case 'source':
        requestDataObject.source = requestDataValue
        break
      case 'secrets':
        // Unused as secrets provided as an argument to startLocalFunctionsTestnet() are used instead
        break
      case 'args':
        requestDataObject.args = requestDataValue
        break
      case 'bytesArgs':
        requestDataObject.bytesArgs = requestDataValue?.map((bytesArg: Buffer) => {
          return '0x' + bytesArg?.toString('hex')
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
  const linkToken = (await linkTokenFactory.connect(deployer).deploy()) as Contract

  const linkPriceFeedFactory = new ContractFactory(
    MockV3AggregatorSource.abi,
    MockV3AggregatorSource.bytecode,
    deployer,
  )
  const linkEthPriceFeed = await linkPriceFeedFactory
    .connect(deployer)
    .deploy(18, simulatedLinkEthPrice)
  const linkUsdPriceFeed = await linkPriceFeedFactory
    .connect(deployer)
    .deploy(8, simulatedLinkUsdPrice)

  const routerFactory = new ContractFactory(
    FunctionsRouterSource.abi,
    FunctionsRouterSource.bytecode,
    deployer,
  )
  const router = (await routerFactory
    .connect(deployer)
    .deploy(await linkToken.getAddress(), simulatedRouterConfig)) as Contract

  const mockCoordinatorFactory = new ContractFactory(
    FunctionsCoordinatorTestHelperSource.abi,
    FunctionsCoordinatorTestHelperSource.bytecode,
    deployer,
  )
  const mockCoordinator = (await mockCoordinatorFactory
    .connect(deployer)
    .deploy(
      await router.getAddress(),
      simulatedCoordinatorConfig,
      await linkEthPriceFeed.getAddress(),
      await linkUsdPriceFeed.getAddress(),
    )) as Contract

  const allowlistFactory = new ContractFactory(
    TermsOfServiceAllowListSource.abi,
    TermsOfServiceAllowListSource.bytecode,
    deployer,
  )
  const initialAllowedSenders: string[] = []
  const initialBlockedSenders: string[] = []
  const allowlist = await allowlistFactory
    .connect(deployer)
    .deploy(simulatedAllowListConfig, initialAllowedSenders, initialBlockedSenders)

  const setAllowListIdTx = await router.setAllowListId(encodeBytes32String(simulatedAllowListId))
  await setAllowListIdTx.wait(1)

  const allowlistId = await router.getAllowListId()
  const proposeContractsTx = await router.proposeContractsUpdate(
    [allowlistId, encodeBytes32String(simulatedDonId)],
    [await allowlist.getAddress(), await mockCoordinator.getAddress()],
    {
      gasLimit: 1_000_000,
    },
  )
  await proposeContractsTx.wait(1)
  await router.updateContracts({ gasLimit: 1_000_000 })

  await (mockCoordinator.connect(deployer) as Contract).setDONPublicKey(
    simulatedSecretsKeys.donKey.publicKey,
  )
  await (mockCoordinator.connect(deployer) as Contract).setThresholdPublicKey(
    '0x' + Buffer.from(simulatedSecretsKeys.thresholdKeys.publicKey).toString('hex'),
  )

  return {
    donId: simulatedDonId,
    linkTokenContract: linkToken,
    functionsRouterContract: router,
    functionsMockCoordinatorContract: mockCoordinator,
  }
}
