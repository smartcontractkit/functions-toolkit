import EventEmitter from 'events'
import {
  FulfillmentCode,
  FunctionsResponse,
  SubscriptionManager,
  ResponseListener,
  startLocalFunctionsTestnet,
  simulatedDonId,
} from '../../src'
import { createTestWallets } from '../utils'

import { Contract, Wallet, utils } from 'ethers'

describe('Functions toolkit classes', () => {
  let linkTokenAddress: string
  let functionsRouterAddress: string
  let exampleClient: Contract
  let close: () => Promise<void>

  let allowlistedUser_A: Wallet

  beforeAll(async () => {
    const port = 9501
    const localFunctionsTestnet = await startLocalFunctionsTestnet(port)

    linkTokenAddress = localFunctionsTestnet.linkToken.address
    functionsRouterAddress = localFunctionsTestnet.router.address
    exampleClient = localFunctionsTestnet.exampleClient
    close = localFunctionsTestnet.close

    const [admin, walletA, walletB, walletC, _] = createTestWallets(
      localFunctionsTestnet.server,
      port,
    )
    allowlistedUser_A = walletA

    await localFunctionsTestnet.getFunds(allowlistedUser_A.address, {
      ethAmount: 0,
      linkAmount: 100,
    })
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
        {
          codeLocation: 0,
          secretsLocation: 1,
          language: 0,
          source: 'return Functions.encodeUint256(1)',
          encryptedSecretsReference: [],
          requestSignature: [],
          args: [],
          bytesArgs: [],
        },
        subscriptionId,
        utils.formatBytes32String(simulatedDonId),
      )

      const succReq = await succReqTx.wait(1)
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
        {
          codeLocation: 0,
          secretsLocation: 1,
          language: 0,
          source: 'return Functions.encodeUint256(1',
          encryptedSecretsReference: [],
          requestSignature: [],
          args: [],
          bytesArgs: [],
        },
        subscriptionId,
        utils.formatBytes32String(simulatedDonId),
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

      functionsListener.listenForResponses(subscriptionId, responseCallback)

      await exampleClient.sendRequest(
        {
          codeLocation: 0,
          secretsLocation: 1,
          language: 0,
          source: 'return Functions.encodeUint256(1)',
          encryptedSecretsReference: [],
          requestSignature: [],
          args: [],
          bytesArgs: [],
        },
        subscriptionId,
        utils.formatBytes32String(simulatedDonId),
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
