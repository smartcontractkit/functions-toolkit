import { fetchRequestCommitment, SubscriptionManager } from '../../src'
import { setupLocalTestnetFixture } from '../utils'

import { Wallet, ethers, JsonRpcProvider, BaseContract } from 'ethers'

jest.retryTimes(2, { logErrorsBeforeRetry: true })

describe('fetchRequestCommitment', () => {
  let donId: string
  let linkTokenAddress: string
  let functionsRouterAddress: string
  let exampleClient: BaseContract
  let close: () => Promise<void>
  let allowlistedUser_A: Wallet

  beforeAll(async () => {
    const testSetup = await setupLocalTestnetFixture(8004)
    donId = testSetup.donId
    linkTokenAddress = testSetup.linkTokenAddress
    functionsRouterAddress = testSetup.functionsRouterAddress
    exampleClient = testSetup.exampleConsumer
    close = testSetup.close
    allowlistedUser_A = testSetup.user_A
  })

  afterAll(async () => {
    await close()
  })

  it('returns the commitment for a given request ID', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: ethers.parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.getAddress(),
      txOptions: {
        confirmations: 1,
      },
    })

    const reqTx = await exampleClient.getFunction('sendRequest')(
      'return Functions.encodeUint256(1)',
      1,
      [],
      [],
      [],
      subscriptionId,
      100_000,
    )
    const req = await reqTx.wait()
    const reqId = req.events[0].topics[1]

    const commitment = await fetchRequestCommitment({
      requestId: reqId,
      provider: new JsonRpcProvider('http://localhost:8004/'),
      functionsRouterAddress,
      donId,
    })

    expect(commitment.requestId).toEqual(reqId)
  })

  it('returns the commitment for a given request ID within a given block range', async () => {
    const subscriptionManager = new SubscriptionManager({
      signer: allowlistedUser_A,
      linkTokenAddress,
      functionsRouterAddress,
    })
    await subscriptionManager.initialize()

    const subscriptionId = await subscriptionManager.createSubscription()
    await subscriptionManager.fundSubscription({
      juelsAmount: ethers.parseUnits('1', 'ether').toString(),
      subscriptionId,
    })
    await subscriptionManager.addConsumer({
      subscriptionId,
      consumerAddress: await exampleClient.getAddress(),
      txOptions: {
        confirmations: 1,
      },
    })

    const reqTx = await exampleClient.getFunction('sendRequest')(
      'return Functions.encodeUint256(1)',
      1,
      [],
      [],
      [],
      subscriptionId,
      100_000,
    )
    const req = await reqTx.wait()
    const reqId = req.events[0].topics[1]

    const commitment = await fetchRequestCommitment({
      requestId: reqId,
      provider: new JsonRpcProvider('http://localhost:8004/'),
      functionsRouterAddress,
      donId,
      toBlock: 1000,
      pastBlocksToSearch: 1001,
    })

    expect(commitment.requestId).toEqual(reqId)
  })

  it('Throws error when unable to fetch coordinator', async () => {
    await expect(async () => {
      await fetchRequestCommitment({
        requestId: '0xDummyRequestId',
        provider: new JsonRpcProvider('http://localhost:8004/'),
        functionsRouterAddress,
        donId: 'invalid donId',
      })
    }).rejects.toThrowError(
      /Error encountered when attempting to fetch the FunctionsCoordinator address/,
    )
  })

  it('Throws error when unable to fetch matching request', async () => {
    await expect(async () => {
      await fetchRequestCommitment({
        requestId: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        provider: new JsonRpcProvider('http://localhost:8004/'),
        functionsRouterAddress,
        donId,
      })
    }).rejects.toThrowError(
      /No request commitment event found for the provided requestId in block range/,
    )
  })
})
