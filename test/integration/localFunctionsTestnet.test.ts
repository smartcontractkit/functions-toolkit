import {
  SubscriptionManager,
  simulatedDonId,
  decodeResult,
  ResponseListener,
  ReturnType,
} from '../../src'
import { setupLocalTestnetFixture } from '../utils'

import { utils } from 'ethers'

import type { GetFunds } from '../../src'

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

    const req = await reqTx.wait()
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
        source: 'return Functions.encodeUint256(Math.floor((Math.random() + 0.1) * 1_000_000_000))',
        encryptedSecretsReference: '0xabcd',
        requestSignature: [],
        args: ['hello', 'world'],
        bytesArgs: ['0x1234', '0x5678'],
      },
      subscriptionId,
      utils.formatBytes32String(simulatedDonId),
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
        source: 'throw Error(`${Math.floor((Math.random() + 0.1) * 100)}`)',
        encryptedSecretsReference: '0xabcd',
        requestSignature: [],
        args: ['hello', 'world'],
        bytesArgs: ['0x1234', '0x5678'],
      },
      subscriptionId,
      utils.formatBytes32String(simulatedDonId),
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
