import EthCrypto from 'eth-crypto'
import {
  SubscriptionManager,
  SecretsManager,
  RequestCommitment,
  simulatedDonId,
  simulatedSecretsKeys,
} from '../../src'
import { mockOffchainSecretsEndpoints, mockGatewayUrl } from './apiFixture'
import { setupLocalTestnetFixture } from '../utils'

import { Wallet, ethers, BaseContract, toBigInt } from 'ethers'

jest.retryTimes(2, { logErrorsBeforeRetry: true })

describe('Functions toolkit classes', () => {
  let donId = simulatedDonId
  let linkTokenContract: BaseContract
  let linkTokenAddress: string
  let functionsCoordinator: BaseContract
  let functionsRouterAddress: string
  let exampleClient: BaseContract
  let consumerAddress: string
  let close: () => Promise<void>
  let allowlistedUser_A: Wallet
  let allowlistedUser_B_NoLINK: Wallet
  let subFunder_A: Wallet

  beforeAll(async () => {
    const testSetup = await setupLocalTestnetFixture(8001)
    donId = testSetup.donId
    linkTokenContract = testSetup.linkTokenContract
    linkTokenAddress = testSetup.linkTokenAddress
    functionsCoordinator = testSetup.functionsCoordinator
    functionsRouterAddress = testSetup.functionsRouterAddress
    exampleClient = testSetup.exampleConsumer
    consumerAddress = testSetup.exampleConsumerAddress
    close = testSetup.close
    allowlistedUser_A = testSetup.user_A
    allowlistedUser_B_NoLINK = testSetup.user_B_NoLINK
    subFunder_A = testSetup.subFunder
  })

  afterAll(async () => {
    await close()
  })

  describe('Subscription Management', () => {
    describe('Initialization', () => {
      it('throws error when provider is missing', () => {
        const signer = Wallet.createRandom()

        expect(() => {
          new SubscriptionManager({ signer, linkTokenAddress, functionsRouterAddress })
        }).toThrowError(
          'The signer used to instantiate the SubscriptionManager must have a provider',
        )
      })

      it('throws error when uninitialized', () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })

        expect(async () => {
          await subscriptionManager.createSubscription()
        }).rejects.toThrowError(
          'SubscriptionManager has not been initialized. Call the initialize() method first.',
        )
      })
    })

    describe('Subscription creation', () => {
      it('creates subscription', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        expect(typeof subscriptionId === 'number').toBe(true)
      })

      // TODO: Re-enable test when allowlist is enabled
      // it('errors for unallowlisted user', async () => {
      //   const subscriptionManager = new SubscriptionManager(
      //     unallowlistedUser,
      //     functionsOracleAddress,
      //     functionsBillingRegistryAddress,
      //     linkTokenAddress,
      //   )

      //   await expect(async () => {
      //     await subscriptionManager.createSubscription()
      //   }).rejects.toThrowError(
      //     'Chainlink Functions is currently in a closed testing phase.\nFor access sign up here:\nhttps://functions.chain.link\n',
      //   )
      // })

      it('utilizes transaction overrides', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          await subscriptionManager.createSubscription({
            txOptions: { overrides: { gasLimit: 1 } },
          })
        }).rejects.toThrowError(/intrinsic gas too low/)
      })

      it('creates subscription with consumer', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription({
          consumerAddress: '0xE92B7A100F5891D9BD3897a70774b0A9F64Ce49b',
        })

        expect(typeof subscriptionId === 'number').toBe(true)
      })

      it('throws for invalid address for subscription creation with consumer', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          await subscriptionManager.createSubscription({
            consumerAddress: '0xInvalidAddress',
          })
        }).rejects.toThrowError(/invalid address/)
      })

      it('utilizes transaction overrides for subscription creation with consumer', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          await subscriptionManager.createSubscription({
            consumerAddress: '0xE92B7A100F5891D9BD3897a70774b0A9F64Ce49b',
            txOptions: { overrides: { gasLimit: 1 } },
          })
        }).rejects.toThrowError(/intrinsic gas too low/)
      })
    })

    describe('Add consumer', () => {
      it('adds consumer', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await subscriptionManager.addConsumer({
          subscriptionId,
          consumerAddress,
          txOptions: {
            confirmations: 1,
          },
        })

        const subInfo = await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(subInfo.consumers.length).toBe(1)
        expect(subInfo.consumers[0]).toBe(consumerAddress)
      })

      it('Converts string subscriptionId to BigInt', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionIdBigInt = await subscriptionManager.createSubscription()
        const subscriptionId = subscriptionIdBigInt.toString()
        await subscriptionManager.addConsumer({
          subscriptionId,
          consumerAddress,
        })

        const subInfo = await subscriptionManager.getSubscriptionInfo(BigInt(subscriptionId))

        expect(subInfo.consumers.length).toBe(1)
        expect(subInfo.consumers[0]).toBe(consumerAddress)
      })

      it('utilizes transaction overrides', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.addConsumer({
            subscriptionId,
            consumerAddress,
            txOptions: {
              overrides: { gasLimit: 1 },
            },
          })
        }).rejects.toThrowError(/intrinsic gas too low/)
      })

      it('throws if missing contract address', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.addConsumer({ subscriptionId, consumerAddress: undefined })
        }).rejects.toThrowError(/Missing consumer contract address/)
      })

      it('throws with invalid contract address', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.addConsumer({
            subscriptionId,
            consumerAddress: '0xInvalidAddress',
          })
        }).rejects.toThrowError(/invalid address/)
      })

      it('throws if called by non-owner', async () => {
        const subscriptionManager_A = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager_A.initialize()

        const subscriptionManager_B = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager_B.initialize()

        const unOwnedSubId = await subscriptionManager_A.createSubscription()
        await subscriptionManager_B.createSubscription()

        await expect(async () => {
          await subscriptionManager_B.addConsumer({ subscriptionId: unOwnedSubId, consumerAddress })
        }).rejects.toThrowError(/not the owner/)
      })

      it('throws with invalid/non-existent subscriptionId', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const nonExistent = 123

        await expect(async () => {
          await subscriptionManager.addConsumer({ subscriptionId: nonExistent, consumerAddress })
        }).rejects.toThrowError(/Error fetching details for subscription ID/)
      })

      it('throws if consumer already authorized', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.addConsumer({ subscriptionId, consumerAddress })

        await expect(async () => {
          await subscriptionManager.addConsumer({ subscriptionId, consumerAddress })
        }).rejects.toThrowError(/is already authorized/)
      })
    })

    describe('Remove consumer', () => {
      it('removes consumer', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await subscriptionManager.addConsumer({
          subscriptionId,
          consumerAddress,
        })
        await subscriptionManager.removeConsumer({
          subscriptionId,
          consumerAddress,
        })

        const subInfo = await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(subInfo.consumers.length).toBe(0)
      })

      it('utilizes transaction overrides', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.addConsumer({
          subscriptionId,
          consumerAddress,
        })

        await expect(async () => {
          await subscriptionManager.removeConsumer({
            subscriptionId,
            consumerAddress,
            txOptions: {
              overrides: { gasLimit: 1 },
            },
          })
        }).rejects.toThrowError(/intrinsic gas too low/)
      })

      it('throws if missing contract address', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.addConsumer({ subscriptionId, consumerAddress })

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.removeConsumer({ subscriptionId, consumerAddress: undefined })
        }).rejects.toThrowError(/Missing consumer contract address/)
      })

      it('throws with invalid contract address', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.addConsumer({ subscriptionId, consumerAddress })

        await expect(async () => {
          await subscriptionManager.removeConsumer({
            subscriptionId,
            consumerAddress: '0xInvalidAddress',
          })
        }).rejects.toThrowError(/invalid address/)
      })

      it('throws if called by non-owner', async () => {
        const subscriptionManager_A = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager_A.initialize()

        const unOwnedSubId = await subscriptionManager_A.createSubscription()
        await subscriptionManager_A.addConsumer({ subscriptionId: unOwnedSubId, consumerAddress })

        const subscriptionManager_B = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager_B.initialize()

        await expect(async () => {
          await subscriptionManager_B.removeConsumer({
            subscriptionId: unOwnedSubId,
            consumerAddress,
          })
        }).rejects.toThrowError(/not the owner/)
      })

      it('throws with invalid/non-existent subscriptionId', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const nonExistent = 234

        await expect(async () => {
          await subscriptionManager.removeConsumer({ subscriptionId: nonExistent, consumerAddress })
        }).rejects.toThrowError(/Error fetching details for subscription ID/)
      })

      it('throws if consumer is not authorized', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.addConsumer({ subscriptionId, consumerAddress })
        await subscriptionManager.removeConsumer({ subscriptionId, consumerAddress })

        // add consumer again
        await expect(async () => {
          await subscriptionManager.removeConsumer({ subscriptionId, consumerAddress })
        }).rejects.toThrowError(/is not authorized on Subscription/)
      })
    })

    describe('Fund subscription', () => {
      it('Sub Owner funds subscription - BigInt', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const juelsAmount = BigInt(ethers.parseUnits('2', 'ether').toString())
        const subscriptionId = await subscriptionManager.createSubscription()

        await subscriptionManager.fundSubscription({
          subscriptionId,
          juelsAmount,
        })

        const { balance, owner, consumers } =
          await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(balance.toString()).toBe(juelsAmount.toString())
        expect(owner.toString()).toBe(allowlistedUser_A.address)
        expect(consumers.length).toBe(0)
      })

      it('Sub owner funds subscription - number', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const juelsAmount = Number(ethers.parseUnits('2.723', 'ether').toString())
        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.fundSubscription({
            subscriptionId,
            // @ts-ignore
            juelsAmount,
          })
        }).rejects.toThrowError(/Juels funding amount must be a string or BigInt/)
      })

      it('Sub Owner funds subscription - string', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const juelsAmount = ethers.parseUnits('2', 'ether').toString()
        const subscriptionId = await subscriptionManager.createSubscription()

        await subscriptionManager.fundSubscription({
          subscriptionId,
          juelsAmount,
        })

        const { balance, owner, consumers } =
          await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(balance.toString()).toBe(juelsAmount)
        expect(owner.toString()).toBe(allowlistedUser_A.address)
        expect(consumers.length).toBe(0)
      })

      it('Non-owner funds subscription - with overrides', async () => {
        const subOwner = allowlistedUser_B_NoLINK // Has no LINK
        const subscriptionManager = new SubscriptionManager({
          signer: subOwner,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const juelsAmount = ethers.parseUnits('2', 'ether').toString()
        const subscriptionId = await subscriptionManager.createSubscription()
        const gasLimit = toBigInt(10_000_000)

        const funderSubManager = new SubscriptionManager({
          signer: allowlistedUser_A, // Has LINK
          linkTokenAddress,
          functionsRouterAddress,
        })
        await funderSubManager.initialize()

        await funderSubManager.fundSubscription({
          subscriptionId,
          juelsAmount,
          txOptions: { overrides: { gasLimit } },
        })

        const { balance, owner, consumers } =
          await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(balance.toString()).toBe(juelsAmount)
        expect(owner.toString()).toBe(subOwner.address)
        expect(owner.toString()).not.toBe(subFunder_A.address)
        expect(consumers.length).toBe(0)
      })

      it('throws if Juels amount invalid', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        const juelsAmount = undefined

        await expect(async () => {
          await subscriptionManager.fundSubscription({
            subscriptionId,
            // @ts-ignore
            juelsAmount,
          })
        }).rejects.toThrowError(/Juels funding amount invalid/)
      })

      it('throws with 0 Link', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        const juelsAmount = ethers.parseUnits('0', 'ether').toString()

        await expect(async () => {
          await subscriptionManager.fundSubscription({
            subscriptionId,
            juelsAmount,
          })
        }).rejects.toThrowError(/Juels funding amount must be greater than 0/)
      })

      it('throws if subscription fetch fails ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const juelsAmount = ethers.parseUnits('2', 'ether').toString()
        const nonExistent = 345

        await expect(async () => {
          await subscriptionManager.fundSubscription({
            subscriptionId: nonExistent,
            juelsAmount,
          })
        }).rejects.toThrowError(/Error fetching details for subscription ID/)
      })

      it('throws if insufficient LINK ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK, // No LINK
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        const juelsAmount = ethers.parseUnits('2', 'ether').toString()

        await expect(async () => {
          await subscriptionManager.fundSubscription({
            subscriptionId,
            juelsAmount,
          })
        }).rejects.toThrowError(/Insufficient LINK balance/)
      })
    })

    describe('Subscription cancellation', () => {
      it('cancels subscription - no LINK to refund', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.cancelSubscription({ subscriptionId })

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.getSubscriptionInfo(subscriptionId)
        }).rejects.toThrowError(/Error fetching information for subscription ID/)
      })

      it('cancels subscription with Tx options', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.cancelSubscription({
          subscriptionId,
          txOptions: { overrides: { gasLimit: 150_000 } },
        })

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.getSubscriptionInfo(subscriptionId)
        }).rejects.toThrowError(/Error fetching information for subscription ID/)
      })

      it('cancels and owner gets refunded', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        const juelsAmount = ethers.parseUnits('1.057', 'ether').toString()
        await subscriptionManager.fundSubscription({
          subscriptionId: subscriptionId.toString(),
          juelsAmount,
        })
        const startingBal = await linkTokenContract.getFunction('balanceOf')(
          allowlistedUser_A.address,
        )

        await subscriptionManager.cancelSubscription({ subscriptionId })
        const endingBal = await linkTokenContract.getFunction('balanceOf')(
          allowlistedUser_A.address,
        )

        expect((BigInt(endingBal.toString()) - BigInt(startingBal.toString())).toString()).toBe(
          juelsAmount,
        )
      })

      it('cancels and third party gets refunded', async () => {
        const recipient = Wallet.createRandom()
        const recipientStartingBal = await linkTokenContract.getFunction('balanceOf')(
          recipient.address,
        )

        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const juelsAmount = ethers.parseUnits('0.2599', 'ether').toString()
        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.fundSubscription({ subscriptionId, juelsAmount })

        await subscriptionManager.cancelSubscription({
          subscriptionId,
          refundAddress: recipient.address,
        })

        const recipientEndingBal = await linkTokenContract.getFunction('balanceOf')(
          recipient.address,
        )

        expect(recipientStartingBal.toString()).toBe('0')
        expect(
          (
            BigInt(recipientEndingBal.toString()) - BigInt(recipientStartingBal.toString())
          ).toString(),
        ).toBe(juelsAmount)
      })

      it('throws with invalid/non-existent subscriptionId', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const nonExistentSubId = '999'

        await expect(async () => {
          await subscriptionManager.cancelSubscription({ subscriptionId: nonExistentSubId })
        }).rejects.toThrowError(/Error fetching details for subscription ID/)
      })

      it('throws if called by non-owner', async () => {
        const subscriptionManager_Owner = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager_Owner.initialize()

        const subscriptionId = await subscriptionManager_Owner.createSubscription()

        const subscriptionManager_NonOwner = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager_NonOwner.initialize()

        await expect(async () => {
          await subscriptionManager_NonOwner.cancelSubscription({ subscriptionId })
        }).rejects.toThrowError(/not the owner/)
      })

      it('throws of missing subID', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await subscriptionManager.createSubscription()

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.cancelSubscription({ subscriptionId: undefined })
        }).rejects.toThrowError(/Missing Subscription ID/)
      })

      it('throws given invalid refund address', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.cancelSubscription({ subscriptionId, refundAddress: '0x' })
        }).rejects.toThrowError(/is an invalid address/)
      })
    })

    describe('Subscription Transfer', () => {
      it('transfers subscription', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()
        await subscriptionManager.addConsumer({
          subscriptionId,
          consumerAddress,
        })
        await subscriptionManager.fundSubscription({
          subscriptionId,
          juelsAmount: ethers.parseUnits('0.1', 'ether').toString(),
          txOptions: { overrides: { gasLimit: 150_000 } },
        })

        const {
          balance: oldBalance,
          owner: oldOwner,
          consumers: oldConsumers,
        } = await subscriptionManager.getSubscriptionInfo(subscriptionId)

        await subscriptionManager.requestSubscriptionTransfer({
          subscriptionId,
          newOwner: allowlistedUser_B_NoLINK.address,
          txOptions: { overrides: { gasLimit: 175_000 } },
        })

        const {
          balance: newBalance,
          owner: newOwner,
          consumers: newConsumers,
        } = await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(oldBalance.toString()).toBe(newBalance.toString())
        expect(oldConsumers).toEqual(newConsumers)

        expect(oldOwner.toString()).toBe(allowlistedUser_A.address)

        // Ownership change is not recorded until transferee accepts.
        expect(newOwner.toString()).toBe(allowlistedUser_A.address)
      })

      it('throws with missing subscription ID ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          await subscriptionManager.requestSubscriptionTransfer({
            // @ts-ignore
            undefined,
            newOwner: allowlistedUser_B_NoLINK.address,
          })
        }).rejects.toThrowError(/Missing Subscription Id/)
      })

      it('throws with invalid transferee address ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.requestSubscriptionTransfer({
            subscriptionId,
            newOwner: '0x',
          })
        }).rejects.toThrowError(/an invalid address/)
      })

      it('throws with invalid/nonexistent Sub Id ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const nonExistent = 1234

        await expect(async () => {
          await subscriptionManager.requestSubscriptionTransfer({
            subscriptionId: nonExistent,
            newOwner: allowlistedUser_B_NoLINK.address,
          })
        }).rejects.toThrowError(/Error fetching details for subscription ID/)
      })

      it('throws with another wallet calls transfer ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        const nonOwnerSub = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await nonOwnerSub.initialize()

        await expect(async () => {
          await nonOwnerSub.requestSubscriptionTransfer({
            subscriptionId,
            newOwner: allowlistedUser_B_NoLINK.address,
          })
        }).rejects.toThrowError(/is not the owner/)
      })
    })

    describe('Subscription Acceptance', () => {
      it('accepts transferred subscription', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const transfereeSubManager = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await transfereeSubManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await subscriptionManager.addConsumer({
          subscriptionId,
          consumerAddress,
        })

        await subscriptionManager.fundSubscription({
          subscriptionId,
          juelsAmount: ethers.parseUnits('0.1', 'ether').toString(),
          txOptions: { overrides: { gasLimit: 1500000 } },
        })

        const {
          balance: oldBalance,
          owner: oldOwner,
          consumers: oldConsumers,
        } = await subscriptionManager.getSubscriptionInfo(subscriptionId)

        await subscriptionManager.requestSubscriptionTransfer({
          subscriptionId,
          newOwner: allowlistedUser_B_NoLINK.address,
        })

        await transfereeSubManager.acceptSubTransfer({
          subscriptionId,
          txOptions: { overrides: { gasLimit: 175_000 } },
        })
        const {
          balance: newBalance,
          owner: newOwner,
          consumers: newConsumers,
        } = await subscriptionManager.getSubscriptionInfo(subscriptionId)

        expect(newOwner.toString()).toBe(allowlistedUser_B_NoLINK.address)
        expect(oldOwner.toString()).toBe(allowlistedUser_A.address)

        expect(oldBalance.toString()).toBe(newBalance.toString())
        expect(oldConsumers).toEqual(newConsumers)
      })

      it('fails on subscription that has not been transferred', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const transfereeSubManager = new SubscriptionManager({
          signer: allowlistedUser_B_NoLINK,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await transfereeSubManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await transfereeSubManager.acceptSubTransfer({ subscriptionId })
        }).rejects.toThrowError(/Ensure that a transfer has been requested/)
      })

      it('throws with invalid/nonexistent Sub Id ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const nonExistent = 1234

        await expect(async () => {
          await subscriptionManager.acceptSubTransfer({ subscriptionId: nonExistent })
        }).rejects.toThrowError(/Error fetching details for subscription ID/)
      })

      it('throws with missing Sub Id ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.acceptSubTransfer({ subscriptionId: undefined })
        }).rejects.toThrowError(/Missing Subscription Id/)
      })
    })

    describe('Expire requests', () => {
      it('successfully times out request', async () => {
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
        const reqReceipt = await reqTx.wait()

        const oracleRequestEvent = await functionsCoordinator.queryFilter(
          functionsCoordinator.filters.OracleRequest(),
          reqReceipt.blockHash,
        )

        const commitmentData = oracleRequestEvent[0].args![9]

        const commitment: RequestCommitment = {
          requestId: commitmentData[0],
          coordinator: commitmentData[1],
          estimatedTotalCostJuels: commitmentData[2],
          client: commitmentData[3],
          subscriptionId: commitmentData[4],
          callbackGasLimit: commitmentData[5],
          adminFee: commitmentData[6],
          donFee: commitmentData[7],
          gasOverheadBeforeCallback: commitmentData[8],
          gasOverheadAfterCallback: commitmentData[9],
          timeoutTimestamp: commitmentData[10],
        }

        const timeoutResult = await subscriptionManager.timeoutRequests({
          requestCommitments: [commitment],
          txOptions: {
            confirmations: 1,
          },
        })

        expect(!!timeoutResult).toBe(true)
      })

      it('throws on failed timeout transaction call', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const nonExistentReqCommitment: RequestCommitment = {
          requestId: '0x0000000000000000000000000000000000000000000000000000000000000000',
          coordinator: '0x0000000000000000000000000000000000000000',
          estimatedTotalCostJuels: BigInt(0),
          client: '0x0000000000000000000000000000000000000000',
          subscriptionId: 0,
          callbackGasLimit: BigInt(0),
          adminFee: BigInt(0),
          donFee: BigInt(0),
          gasOverheadBeforeCallback: BigInt(0),
          gasOverheadAfterCallback: BigInt(0),
          timeoutTimestamp: BigInt(0),
        }

        await expect(async () => {
          await subscriptionManager.timeoutRequests({
            // @ts-ignore
            requestCommitments: [nonExistentReqCommitment],
            txOptions: {
              overrides: { gasLimit: 10_000_000 },
              confirmations: 3,
            },
          })
        }).rejects.toThrowError(/Failed to timeout requests/)
      })

      it('throws if input not an array ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          await subscriptionManager.timeoutRequests({
            // @ts-ignore
            requestCommitments:
              '0x0000000000000000000000000000000000000000000000000000000000000123',
          })
        }).rejects.toThrowError(/requires an array/)
      })

      it('throws if input array is empty ', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          // @ts-ignore
          await subscriptionManager.timeoutRequests({ requestCommitments: [] })
        }).rejects.toThrowError(/provide at least one request/)
      })
    })

    describe('Estimate cost', () => {
      it('Successfully estimates cost', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        const estimatedCostInJuels = await subscriptionManager.estimateFunctionsRequestCost({
          subscriptionId,
          callbackGasLimit: 300_000,
          gasPriceWei: 100000000000n, // 100 gWei
          donId,
        })

        expect(estimatedCostInJuels.toString()).toBe(BigInt('6487166666666666666').toString())
      })

      it('Throws an error for missing donId', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.estimateFunctionsRequestCost({
            // @ts-ignore
            donId: undefined,
            subscriptionId,
            callbackGasLimit: 300_000,
            gasPriceWei: 100000000000n,
          })
        }).rejects.toThrowError(/donId has invalid type/)
      })

      it('Throws an error for invalid subscriptionId', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })
        await subscriptionManager.initialize()

        await expect(async () => {
          await subscriptionManager.estimateFunctionsRequestCost({
            donId,
            subscriptionId: 0,
            callbackGasLimit: 300_000,
            gasPriceWei: 100000000000n,
          })
        }).rejects.toThrowError(/Error fetching information for subscription ID/)
      })

      it('Throws an error for invalid callbackGasLimit', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })

        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.estimateFunctionsRequestCost({
            donId,
            subscriptionId,
            callbackGasLimit: -1,
            gasPriceWei: 100000000000n,
          })
        }).rejects.toThrowError(/Invalid callbackGasLimit/)
      })

      it('Throws an error for invalid gasPriceWei', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })

        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.estimateFunctionsRequestCost({
            donId,
            subscriptionId,
            callbackGasLimit: 300_000,
            gasPriceWei: -1n,
          })
        }).rejects.toThrowError(/Invalid gasPriceWei/)
      })

      it('Throws an error for incorrect donId', async () => {
        const subscriptionManager = new SubscriptionManager({
          signer: allowlistedUser_A,
          linkTokenAddress,
          functionsRouterAddress,
        })

        await subscriptionManager.initialize()

        const subscriptionId = await subscriptionManager.createSubscription()

        await expect(async () => {
          await subscriptionManager.estimateFunctionsRequestCost({
            donId: 'wrong',
            subscriptionId,
            callbackGasLimit: 300_000,
            gasPriceWei: 100000000000n,
          })
        }).rejects.toThrowError(
          /Error encountered when attempting to fetch the FunctionsCoordinator address/,
        )
      })
    })
  })

  describe('Secrets Management', () => {
    describe('Initialization', () => {
      it('throws error when provider is missing', () => {
        const signer = Wallet.createRandom()

        expect(() => {
          new SecretsManager({ signer, functionsRouterAddress, donId })
        }).toThrowError('The signer used to instantiate the Secrets Manager must have a provider')
      })

      it('throws error when not initialized', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })

        await expect(async () => {
          await sm.fetchKeys()
        }).rejects.toThrowError(
          'SecretsManager has not been initialized. Call the initialize() method first.',
        )
      })
    })

    describe('Key Manager', () => {
      it('Fetches keys', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()
        const keys = await sm.fetchKeys()

        expect(keys.donPublicKey).toBe(simulatedSecretsKeys.donKey.publicKey.slice(2))
        expect(JSON.stringify(keys.thresholdPublicKey)).toEqual(
          simulatedSecretsKeys.thresholdKeys.publicKey,
        )
      })
    })

    describe('Encrypt URLs', () => {
      it('Encrypts urls', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()
        const urls = ['http://testurl1.com', 'https://testurl2.com']
        const encryptedUrls = await sm.encryptSecretsUrls(urls)

        const encryptedUrlsObj = EthCrypto.cipher.parse(encryptedUrls.slice(2))
        const decryptedUrls = (
          await EthCrypto.decryptWithPrivateKey(
            simulatedSecretsKeys.donKey.privateKey.slice(2),
            encryptedUrlsObj,
          )
        ).split(' ')
        expect(decryptedUrls).toEqual(urls)
      })
    })

    describe('encryptSecrets', () => {
      it('Successfully builds encrypted secrets without error', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const encryptedSecrets = await sm.encryptSecrets({ testKey: 'testValue0' })

        expect(typeof encryptedSecrets.encryptedSecrets).toBe('string')
        // Expect encryptedSecrets.encryptedSecrets to be a valid hex string with 0x prefix
        expect(encryptedSecrets.encryptedSecrets).toMatch(/^0x[0-9a-fA-F]+$/)
      })

      it('Throws error for empty secrets', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(async () => await sm.encryptSecrets({})).rejects.toThrow('Secrets are empty')
      })

      it('Throws error for invalid secrets object', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.encryptSecrets({
              invalid: 100,
            } as unknown as Record<string, string>),
        ).rejects.toThrow('Secrets are not a string map')
      })
    })

    describe('buildDONHostedEncryptedSecretsReference', () => {
      it('throws error for invalid slotId', () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        expect(() =>
          sm.buildDONHostedEncryptedSecretsReference({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            slotId: 'invalid' as any,
            version: 1,
          }),
        ).toThrow('Invalid slotId')

        expect(() =>
          sm.buildDONHostedEncryptedSecretsReference({
            slotId: -1,
            version: 1,
          }),
        ).toThrow('Invalid slotId')

        expect(() =>
          sm.buildDONHostedEncryptedSecretsReference({
            slotId: 0.5,
            version: 1,
          }),
        ).toThrow('Invalid slotId')
      })

      it('throws error for invalid version', () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        expect(() =>
          sm.buildDONHostedEncryptedSecretsReference({
            slotId: 1,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            version: 'invalid' as any,
          }),
        ).toThrow('Invalid version')

        expect(() =>
          sm.buildDONHostedEncryptedSecretsReference({
            slotId: 1,
            version: -1,
          }),
        ).toThrow('Invalid version')

        expect(() =>
          sm.buildDONHostedEncryptedSecretsReference({
            slotId: 1,
            version: 0.5,
          }),
        ).toThrow('Invalid version')
      })

      it('correctly constructs a valid encrypted secrets reference', () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        const result = sm.buildDONHostedEncryptedSecretsReference({
          slotId: 1,
          version: 1,
        })

        expect(typeof result).toBe('string')
        expect(result.startsWith('0x')).toBe(true)
      })
    })

    describe('verifyOffchainSecrets', () => {
      it('Validates valid secrets', async () => {
        mockOffchainSecretsEndpoints()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const isValid = await sm.verifyOffchainSecrets([
          'https://offchain.secrets.com/valid1',
          'https://offchain.secrets.com/valid2',
          'https://offchain.secrets.com/valid3',
        ])
        expect(isValid).toBe(true)
      })

      it('Reports fetch error', async () => {
        mockOffchainSecretsEndpoints()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () => await sm.verifyOffchainSecrets(['https://offchain.secrets.com/fail']),
        ).rejects.toThrow(/Error encountered when attempting to fetch URL/)
      })

      it('Throws error for invalid JSON', async () => {
        mockOffchainSecretsEndpoints()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () => await sm.verifyOffchainSecrets(['https://offchain.secrets.com/invalidJson']),
        ).rejects.toThrow(
          'URL https://offchain.secrets.com/invalidJson did not return a JSON object with an encryptedSecrets field',
        )
      })

      it('Throws error for invalid secrets type', async () => {
        mockOffchainSecretsEndpoints()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.verifyOffchainSecrets(['https://offchain.secrets.com/invalidSecretsType']),
        ).rejects.toThrow(
          'URL https://offchain.secrets.com/invalidSecretsType did not return a JSON object with an encryptedSecrets field',
        )
      })

      it('Throws error for invalid encryptedSecrets hex string', async () => {
        mockOffchainSecretsEndpoints()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () => await sm.verifyOffchainSecrets(['https://offchain.secrets.com/invalidHex']),
        ).rejects.toThrow(
          'URL https://offchain.secrets.com/invalidHex did not return a valid hex string for the encryptedSecrets field',
        )
      })

      it('Throws error for mismatch', async () => {
        mockOffchainSecretsEndpoints()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.verifyOffchainSecrets([
              'https://offchain.secrets.com/valid1',
              'https://offchain.secrets.com/different',
            ]),
        ).rejects.toThrow(
          'URL https://offchain.secrets.com/different returned a different encryptedSecrets field than the previous URL',
        )
      })
    })

    describe('uploadEncryptedSecretsToDON', () => {
      it('Successfully uploads secrets to DON', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.uploadEncryptedSecretsToDON({
          encryptedSecretsHexstring: '0xaaaa',
          gatewayUrls: [
            'https://dongateway.com/uploadSuccess1',
            'https://dongateway.com/uploadSuccess2',
          ],
          slotId: 0,
          minutesUntilExpiration: 10,
        })

        expect(result.success).toBe(true)
        expect(typeof result.version).toBe('number')
      })

      it('Returns false if there is a success for at least 1 node, but a failure for others', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.uploadEncryptedSecretsToDON({
          encryptedSecretsHexstring: '0xaaaa',
          gatewayUrls: ['https://dongateway.com/1NodeFail'],
          slotId: 0,
          minutesUntilExpiration: 10,
        })

        expect(result.success).toBe(false)
        expect(typeof result.version).toBe('number')
      })

      it('Throws an error when failing to upload to all nodes', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: '0xaaaa',
              gatewayUrls: ['https://dongateway.com/allNodeFail'],
              slotId: 0,
              minutesUntilExpiration: 10,
            }),
        ).rejects.toThrow(/All nodes failed to store the encrypted secrets/)
      })

      it('Throws error for empty gateway URL', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: '0xaaaa',
              gatewayUrls: [],
              slotId: 0,
              minutesUntilExpiration: 10,
            }),
        ).rejects.toThrow(/gatewayUrls must be a non-empty array of strings/)
      })

      it('Throws error for invalid gateway URL', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: '0xaaaa',
              gatewayUrls: ['Invalid URL'],
              slotId: 0,
              minutesUntilExpiration: 10,
            }),
        ).rejects.toThrow(/is not a valid URL/)
      })

      it('Throws error for invalid encrypted secrets hexstring', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: 'aaaa',
              gatewayUrls: ['https://dongateway.com/uploadSuccess1'],
              slotId: 0,
              minutesUntilExpiration: 10,
            }),
        ).rejects.toThrow(/encryptedSecretsHexstring must be a valid hex string/)
      })

      it('Throws error for invalid slot ID', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: '0xaaaa',
              gatewayUrls: ['https://dongateway.com/uploadSuccess1'],
              slotId: -1,
              minutesUntilExpiration: 10,
            }),
        ).rejects.toThrow(/slotId must be a integer of at least 0/)
      })

      it('Throws error for invalid expiration', async () => {
        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: '0xaaaa',
              gatewayUrls: ['https://dongateway.com/uploadSuccess1'],
              slotId: 0,
              minutesUntilExpiration: 4,
            }),
        ).rejects.toThrow(/minutesUntilExpiration must be an integer of at least 5/)
      })

      it('Throws error for failed upload', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.uploadEncryptedSecretsToDON({
              encryptedSecretsHexstring: '0xaaaa',
              gatewayUrls: ['https://dongateway.com/fail', 'https://dongateway.com/fail'],
              slotId: 0,
              minutesUntilExpiration: 10,
            }),
        ).rejects.toThrow(/Failed to send request to any of the DON gateway URLs/)
      })
    })

    describe('listDONHostedEncryptedSecrets', () => {
      it('Successfully lists secrets hosted by DON', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.listDONHostedEncryptedSecrets([
          'https://dongateway.com/listSuccess1',
          'https://dongateway.com/listSuccess2',
        ])

        const expectedGatewayResponses = {
          gatewayUrl: 'https://dongateway.com/listSuccess1',
          nodeResponses: [
            {
              success: true,
              rows: [
                {
                  slot_id: 0,
                  version: 0,
                  expiration: 100_000,
                },
                {
                  slot_id: 1,
                  version: 1,
                  expiration: 200_000,
                },
              ],
            },
            {
              success: true,
              rows: [
                {
                  slot_id: 0,
                  version: 0,
                  expiration: 100_000,
                },
                {
                  slot_id: 1,
                  version: 1,
                  expiration: 200_000,
                },
              ],
            },
          ],
        }

        expect(result).toEqual({ result: expectedGatewayResponses })
      })

      it('Returns error message for all node failure', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.listDONHostedEncryptedSecrets([
          'https://dongateway.com/listFailAll',
        ])

        const expectedGatewayResponse = {
          gatewayUrl: 'https://dongateway.com/listFailAll',
          nodeResponses: [
            {
              success: false,
            },
          ],
        }

        expect(result).toEqual({
          result: expectedGatewayResponse,
          error: 'Error: All nodes returned a failure response',
        })
      })

      it('Returns error message for 1 node failure', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.listDONHostedEncryptedSecrets(['https://dongateway.com/listFail1'])

        const expectedGatewayResponse = {
          gatewayUrl: 'https://dongateway.com/listFail1',
          nodeResponses: [
            {
              success: true,
              rows: [
                { slot_id: 0, version: 0, expiration: 100000 },
                { slot_id: 1, version: 1, expiration: 200000 },
              ],
            },
            {
              success: false,
            },
          ],
        }

        expect(result).toEqual({
          result: expectedGatewayResponse,
          error:
            'Error: One or more nodes failed to respond to the request with a success confirmation',
        })
      })

      it('Returns error message for node response length mismatch', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.listDONHostedEncryptedSecrets([
          'https://dongateway.com/listDifferentRowCounts',
        ])

        const expectedGatewayResponse = {
          gatewayUrl: 'https://dongateway.com/listDifferentRowCounts',
          nodeResponses: [
            {
              success: true,
              rows: [
                {
                  slot_id: 0,
                  version: 0,
                  expiration: 100_000,
                },
                {
                  slot_id: 1,
                  version: 1,
                  expiration: 200_000,
                },
              ],
            },
            {
              success: true,
              rows: [
                {
                  slot_id: 0,
                  version: 0,
                  expiration: 100_000,
                },
              ],
            },
          ],
        }

        expect(result).toEqual({
          result: expectedGatewayResponse,
          error: 'Error: One or more nodes responded with a different number of secrets entries',
        })
      })

      it('Returns error message for node responses with different rows', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        const result = await sm.listDONHostedEncryptedSecrets([
          'https://dongateway.com/listDifferentRows',
        ])

        const expectedGatewayResponse = {
          gatewayUrl: 'https://dongateway.com/listDifferentRows',
          nodeResponses: [
            {
              success: true,
              rows: [
                {
                  slot_id: 1,
                  version: 1,
                  expiration: 200_000,
                },
              ],
            },
            {
              success: true,
              rows: [
                {
                  slot_id: 0,
                  version: 0,
                  expiration: 100_000,
                },
              ],
            },
          ],
        }

        expect(result).toEqual({
          result: expectedGatewayResponse,
          error: 'Error: One or more nodes responded with different secrets entries',
        })
      })

      it('Throws error for unexpected response structure', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.listDONHostedEncryptedSecrets([
              'https://dongateway.com/unexpectedGatewayResponse',
            ]),
        ).rejects.toThrow(/Failed to send request to any of the DON gateway URLs/)
      })

      it('Throws error for when 0 nodes provide a response to the gateway', async () => {
        mockGatewayUrl()

        const sm = new SecretsManager({ signer: allowlistedUser_A, functionsRouterAddress, donId })
        await sm.initialize()

        await expect(
          async () =>
            await sm.listDONHostedEncryptedSecrets(['https://dongateway.com/0NodeResponses']),
        ).rejects.toThrow(/Failed to send request to any of the DON gateway URLs/)
      })
    })
  })
})
