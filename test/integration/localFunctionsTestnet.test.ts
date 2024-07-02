import cbor from 'cbor'
import {
  SubscriptionManager,
  decodeResult,
  ResponseListener,
  ReturnType,
  buildRequestCBOR,
  Location,
  CodeLanguage,
} from '../../src'
import { setupLocalTestnetFixture } from '../utils'

import type { GetFunds } from '../../src'

import { parseUnits } from 'ethers'
import type { Contract, Wallet } from 'ethers'

describe('Local Functions Testnet', () => {
  let linkTokenAddress: string
  let functionsRouterAddress: string
  let exampleClient: Contract
  let close: () => Promise<void>
  let allowlistedUser_A: Wallet
  let getFunds: GetFunds

  beforeAll(async () => {
    const testSetup = await setupLocalTestnetFixture(8003)
    linkTokenAddress = testSetup.linkTokenAddress
    functionsRouterAddress = testSetup.functionsRouterAddress
    exampleClient = testSetup.exampleConsumer
    close = testSetup.close
    allowlistedUser_A = testSetup.user_A
    getFunds = testSetup.getFunds
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
      juelsAmount: parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.getAddress(),
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider!,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendRequest(
      'return Functions.encodeString(secrets.test + " " + args[0] + " " + args[1] + bytesArgs[0] + bytesArgs[1])',
      1,
      '0xabcd',
      ['hello', 'world'],
      ['0x1234', '0x5678'],
      subscriptionId,
      100_000,
    )

    const req = await reqTx.wait()
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    const responseString = decodeResult(response.responseBytesHexstring, ReturnType.string)
    expect(responseString).toBe('hello world hello world0x12340x5678')
  })

  it('Successfully handles a request that was encoded off-chain', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.getAddress(),
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider!,
      functionsRouterAddress,
    })

    const encodedRequestBytes = buildRequestCBOR({
      source:
        'return Functions.encodeString(secrets.test + " " + args[0] + " " + args[1] + bytesArgs[0] + bytesArgs[1])',
      codeLanguage: CodeLanguage.JavaScript,
      codeLocation: Location.Inline,
      args: ['hello', 'world'],
      bytesArgs: ['0x1234', '0x5678'],
      secretsLocation: Location.Remote,
      encryptedSecretsReference: '0xabcd',
    })

    const reqTx = await exampleClient.sendEncodedRequest(
      encodedRequestBytes,
      subscriptionId,
      100_000,
    )

    const req = await reqTx.wait()
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    const responseString = decodeResult(response.responseBytesHexstring, ReturnType.string)
    expect(responseString).toBe('hello world hello world0x12340x5678')
  })

  it('Successfully handles a request that has incorrect types', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.address(),
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider!,
      functionsRouterAddress,
    })

    const encodedRequestBytes =
      '0x' +
      cbor
        .encodeCanonical({
          codeLocation: Location.Inline,
          codeLanguage: CodeLanguage.JavaScript,
          source: 1234,
        })
        .toString('hex')

    const reqTx = await exampleClient.sendEncodedRequest(
      encodedRequestBytes,
      subscriptionId,
      100_000,
    )

    const req = await reqTx.wait()
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    expect(response.errorString).toBe('source param is missing or invalid')
  })

  it('Successfully handles invalid request data', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.address(),
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider!,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendEncodedRequest('0xabcd', subscriptionId, 100_000)

    const req = await reqTx.wait()
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    expect(response.errorString).toBe('CBOR parsing error')
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
      juelsAmount: parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.address(),
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider!,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendRequest(
      'return Functions.encodeUint256(Math.floor((Math.random() + 0.1) * 1_000_000_000))',
      1,
      '0xabcd',
      ['hello', 'world'],
      ['0x1234', '0x5678'],
      subscriptionId,
      100_000,
    )

    const req = await reqTx.wait()
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
      juelsAmount: parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.getAddress(),
      txOptions: {
        confirmations: 1,
      },
    })

    const functionsListener = new ResponseListener({
      provider: allowlistedUser_A.provider!,
      functionsRouterAddress,
    })

    const reqTx = await exampleClient.sendRequest(
      'throw Error(`${Math.floor((Math.random() + 0.1) * 100)}`)',
      1,
      '0xabcd',
      ['hello', 'world'],
      ['0x1234', '0x5678'],
      subscriptionId,
      100_000,
    )

    const req = await reqTx.wait()
    const requestId = req.events[0].topics[1]
    const response = await functionsListener.listenForResponse(requestId)

    expect(parseInt(response.errorString)).toBeGreaterThan(0)
  })

  it('getFunds throws error for invalid weiAmount', async () => {
    expect(async () => {
      // @ts-ignore
      await getFunds('0xc0ffee254729296a45a3885639AC7E10F9d54979', { weiAmount: 1 })
    }).rejects.toThrow(/weiAmount must be a BigInt or string/)
  })

  it('getFunds throws error for invalid juelsAmount', async () => {
    expect(async () => {
      // @ts-ignore
      await getFunds('0xc0ffee254729296a45a3885639AC7E10F9d54979', { juelsAmount: 1 })
    }).rejects.toThrow(/juelsAmount must be a BigInt or string/)
  })
})
