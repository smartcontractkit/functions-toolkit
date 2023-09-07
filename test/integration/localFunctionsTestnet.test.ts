import {
  SubscriptionManager,
  startLocalFunctionsTestnet,
  simulatedDonId,
  decodeResult,
  ResponseListener,
  ReturnType,
} from '../../src'
import { createTestWallets } from '../utils'

import { Contract, Wallet, utils } from 'ethers'

describe('Local Functions Testnet', () => {
  let linkTokenAddress: string
  let functionsRouterAddress: string
  let exampleClient: Contract
  let close: () => Promise<void>

  let allowlistedUser_A: Wallet

  beforeAll(async () => {
    const mockSecrets = {
      test: 'hello world',
    }

    const port = 8003
    const localFunctionsTestnet = await startLocalFunctionsTestnet(port, mockSecrets, {
      logging: {
        debug: false,
        verbose: false,
        quiet: true,
      },
    })

    linkTokenAddress = localFunctionsTestnet.linkToken.address
    functionsRouterAddress = localFunctionsTestnet.router.address
    exampleClient = localFunctionsTestnet.exampleClient
    close = localFunctionsTestnet.close

    const [_admin, walletA, _] = createTestWallets(localFunctionsTestnet.server, port)
    allowlistedUser_A = walletA

    await localFunctionsTestnet.getFunds(allowlistedUser_A.address, {
      ethAmount: 0,
      linkAmount: 100,
    })
  })

  afterAll(async () => {
    await close()
  })

  it('Successfully fulfills a request', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: utils.parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: exampleClient.address,
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendRequest(
      {
        codeLocation: 0,
        secretsLocation: 1,
        language: 0,
        source:
          'return Functions.encodeString(secrets.test + " " + args[0] + " " + args[1] + bytesArgs[0] + bytesArgs[1])',
        encryptedSecretsReference: '0xabcd',
        requestSignature: [],
        args: ['hello', 'world'],
        bytesArgs: ['0x1234', '0x5678'],
      },
      subscriptionId,
      utils.formatBytes32String(simulatedDonId),
    )

    const req = await reqTx.wait(1)
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    const responseString = decodeResult(response.responseBytesHexstring, ReturnType.string)
    expect(responseString).toBe('hello world hello world0x12340x5678')
  })

  it('Successfully aggregates a random number', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: utils.parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: exampleClient.address,
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendRequest(
      {
        codeLocation: 0,
        secretsLocation: 1,
        language: 0,
        source: 'return Functions.encodeUint256(Math.floor(Math.random() * 1_000_000_000))',
        encryptedSecretsReference: '0xabcd',
        requestSignature: [],
        args: ['hello', 'world'],
        bytesArgs: ['0x1234', '0x5678'],
      },
      subscriptionId,
      utils.formatBytes32String(simulatedDonId),
    )

    const req = await reqTx.wait(1)
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    expect(response.responseBytesHexstring.length).toBeGreaterThan(2)
  })

  it('Successfully aggregates a random error', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: utils.parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: exampleClient.address,
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendRequest(
      {
        codeLocation: 0,
        secretsLocation: 1,
        language: 0,
        source: 'throw Error(`${Math.floor(Math.random() * 100)}`)',
        encryptedSecretsReference: '0xabcd',
        requestSignature: [],
        args: ['hello', 'world'],
        bytesArgs: ['0x1234', '0x5678'],
      },
      subscriptionId,
      utils.formatBytes32String(simulatedDonId),
    )

    const req = await reqTx.wait(1)
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    expect(parseInt(response.errorString)).toBeGreaterThan(0)
  })
})
