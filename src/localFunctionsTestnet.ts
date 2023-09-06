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
} from './simulationConfig'
import {
  LinkTokenSource,
  MockV3AggregatorSource,
  FunctionsRouterSource,
  MockFunctionsCoordinatorSource,
  TermsOfServiceAllowListSource,
  FunctionsClientExampleSource,
} from './v1_contract_sources'

import type { Server, Ethereum } from 'ganache'

import type { FunctionsRequestParams, RequestCommitment } from './types'

export interface RequestEventData {
  requestId: string
  requestingContract: string
  requestInitiator: string
  subscriptionId: any
  subscriptionOwner: string
  data: string
  dataVersion: number
  flags: string
  callbackGasLimit: number
  commitment: RequestCommitment
}

interface FunctionsContracts {
  linkToken: Contract
  router: Contract
  mockCoordinator: Contract
  exampleClient: Contract
}

export const startLocalFunctionsTestnet = async (
  port = 8545,
): Promise<
  {
    server: Server
    adminWallet: {
      address: string
      privateKey: string
    }
    getFunds: (
      address: string,
      { ethAmount, linkAmount }: { ethAmount: number; linkAmount: number },
    ) => Promise<void>
    close: () => Promise<void>
  } & FunctionsContracts
> => {
  const server = Ganache.server({
    logging: {
      debug: false,
      verbose: false,
      quiet: true,
    },
  })

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

  contracts.mockCoordinator.on(
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
      handleOracleRequest(requestEvent, contracts.mockCoordinator, admin)
    },
  )

  const getFunds = async (
    address: string,
    { ethAmount, linkAmount }: { ethAmount: number; linkAmount: number },
  ): Promise<void> => {
    const weiAmount = utils.parseEther(ethAmount.toString())
    const juelsAmount = utils.parseEther(linkAmount.toString())

    const ethTx = await admin.sendTransaction({
      to: address,
      value: weiAmount,
    })
    const linkTx = await contracts.linkToken.connect(admin).transfer(address, juelsAmount)
    await ethTx.wait(1)
    await linkTx.wait(1)
    console.log(`Sent ${ethAmount} ETH and ${linkAmount} LINK to ${address}`)
  }

  const close = async (): Promise<void> => {
    contracts.mockCoordinator.removeAllListeners('OracleRequest')
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
) => {
  const requestData = await constructRequestDataObject(requestEventData.data)
  const response = await simulateScript({
    source: requestData.source,
    secrets: {}, // TODO: Decrypt secrets
    args: requestData.args,
    // TODO: Support bytes args
  })
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
    // TODO: support encrypted secrets & bytesArgs
    switch (elem) {
      case 'codeLocation':
        requestDataObject.codeLocation = decodedRequestData[i + 1]
        break
      // case 'secretsLocation':
      //   requestDataObject.secretsLocation = decodedRequestData[i + 1]
      //   break
      case 'language':
        requestDataObject.codeLanguage = decodedRequestData[i + 1]
        break
      case 'source':
        requestDataObject.source = decodedRequestData[i + 1]
        break
      // case 'encryptedSecretsReference':
      //   requestDataObject.encryptedSecretsReference = decodedRequestData[i + 1]
      //   break
      case 'args':
        requestDataObject.args = decodedRequestData[i + 1]
        break
      // case 'bytesArgs':
      //   requestDataObject.bytesArgs = decodedRequestData[i + 1]
      //   break
      // default:
      //   throw Error(`Invalid request data key ${elem}`)
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

  const exampleClientFactory = new ContractFactory(
    FunctionsClientExampleSource.abi,
    FunctionsClientExampleSource.bytecode,
    deployer,
  )
  const exampleClient = await exampleClientFactory.connect(deployer).deploy(router.address)

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

  return { linkToken, router, mockCoordinator, exampleClient }
}
