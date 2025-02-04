import EventEmitter from 'events'
import {
  FulfillmentCode,
  FunctionsResponse,
  SubscriptionManager,
  ResponseListener,
} from '../../src'
import { setupLocalTestnetFixture } from '../utils'

import { Contract, Wallet, utils } from 'ethers'

describe('Functions toolkit classes', () => {
  let linkTokenAddress: string
  let functionsRouterAddress: string
  let exampleClient: Contract
  let close: () => Promise<void>
  let allowlistedUser_A: Wallet

  beforeAll(async () => {
    const testSetup = await setupLocalTestnetFixture(8002)
    linkTokenAddress = testSetup.linkTokenAddress
    functionsRouterAddress = testSetup.functionsRouterAddress
    exampleClient = testSetup.exampleConsumer
    close = testSetup.close
    allowlistedUser_A = testSetup.user_A
  })

  afterAll(async () => {
    await close()
  })

  describe('Functions Listener', () => {
    it('Successfully waits for single response', async () => {
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

      const succReqTx = await exampleClient.sendRequest(
        'return Functions.encodeUint256(1)',
        1,
        [],
        [],
        [],
        subscriptionId,
        100_000,
      )

      const succReq = await succReqTx.wait()
      const succRequestId = succReq.events[0].topics[1]

      const succResponse = await functionsListener.listenForResponse(succRequestId)

      expect(succResponse.requestId).toBe(succRequestId)
      expect(succResponse.responseBytesHexstring).toBe(
        '0x0000000000000000000000000000000000000000000000000000000000000001',
      )
      expect(succResponse.errorString).toBe('')
      expect(succResponse.returnDataBytesHexstring).toBe('0x')
      expect(succResponse.fulfillmentCode).toBe(FulfillmentCode.FULFILLED)

      const errReqTx = await exampleClient.sendRequest(
        'return Functions.encodeUint256(1',
        1,
        [],
        [],
        [],
        subscriptionId,
        100_000,
      )

      const errReq = await errReqTx.wait(1)
      const errRequestId = errReq.events[0].topics[1]

      const errResponse = await functionsListener.listenForResponse(errRequestId)

      expect(errResponse.requestId).toBe(errRequestId)
      expect(errResponse.responseBytesHexstring).toBe('0x')
      expect(errResponse.errorString).toBe('syntax error, RAM exceeded, or other error')
      expect(errResponse.returnDataBytesHexstring).toBe('0x')
      expect(errResponse.fulfillmentCode).toBe(FulfillmentCode.FULFILLED)
    })

    it('Successfully waits for single response from transaction hash', async () => {
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

      const succReqTx = await exampleClient.sendRequest(
        'return Functions.encodeUint256(1)',
        1,
        [],
        [],
        [],
        subscriptionId,
        100_000,
      )

      const succReq = await succReqTx.wait()
      const succResponse = await functionsListener.listenForResponseFromTransaction(
        succReq.transactionHash,
        1000000,
        0,
      )

      expect(succResponse.responseBytesHexstring).toBe(
        '0x0000000000000000000000000000000000000000000000000000000000000001',
      )
      expect(succResponse.errorString).toBe('')
      expect(succResponse.returnDataBytesHexstring).toBe('0x')
      expect(succResponse.fulfillmentCode).toBe(FulfillmentCode.FULFILLED)

      const errReqTx = await exampleClient.sendRequest(
        'return Functions.encodeUint256(1',
        1,
        [],
        [],
        [],
        subscriptionId,
        100_000,
      )

      const errReq = await errReqTx.wait(1)
      const errRequestId = errReq.events[0].topics[1]

      const errResponse = await functionsListener.listenForResponse(errRequestId)

      expect(errResponse.requestId).toBe(errRequestId)
      expect(errResponse.responseBytesHexstring).toBe('0x')
      expect(errResponse.errorString).toBe('syntax error, RAM exceeded, or other error')
      expect(errResponse.returnDataBytesHexstring).toBe('0x')
      expect(errResponse.fulfillmentCode).toBe(FulfillmentCode.FULFILLED)
    })

    it('Successfully listens for responses', async () => {
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

      const responseEventEmitter = new EventEmitter()
      const waitForResponse = new Promise(resolve => {
        responseEventEmitter.on('response', resolve)
      })

      let functionsResponse: FunctionsResponse
      const responseCallback = (response: FunctionsResponse) => {
        functionsResponse = response
        responseEventEmitter.emit('response')
      }

      const subIdString = subscriptionId.toString()
      functionsListener.listenForResponses(subIdString, responseCallback)

      await exampleClient.sendRequest(
        'return Functions.encodeUint256(1)',
        1,
        [],
        [],
        [],
        subscriptionId,
        100_000,
      )

      await waitForResponse
      expect(functionsResponse!.responseBytesHexstring).toBe(
        '0x0000000000000000000000000000000000000000000000000000000000000001',
      )
      expect(functionsResponse!.errorString).toBe('')
      expect(functionsResponse!.returnDataBytesHexstring).toBe('0x')
      expect(functionsResponse!.fulfillmentCode).toBe(FulfillmentCode.FULFILLED)

      functionsListener.stopListeningForResponses()
    })
  })
})
