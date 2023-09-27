import { BigNumber, Contract, utils } from 'ethers'

import {
  LinkTokenSource,
  FunctionsRouterSource,
  TermsOfServiceAllowListSource,
  FunctionsCoordinatorSource,
} from './v1_contract_sources'

import type { Signer } from 'ethers'
import type { TransactionReceipt } from '@ethersproject/abstract-provider'

import type {
  SubConsumerConfig,
  SubFundConfig,
  SubscriptionInfo,
  SubCancelConfig,
  SubTransferConfig,
  SubTransferAcceptConfig,
  SubTimeoutConfig,
  SubCreateConfig,
  EstimateCostConfig,
} from './types'

export class SubscriptionManager {
  private signer: Signer
  private linkToken: Contract
  private functionsRouter: Contract
  private functionsAllowList?: Contract
  private initialized = false

  constructor({
    signer,
    linkTokenAddress,
    functionsRouterAddress,
  }: {
    signer: Signer
    linkTokenAddress: string
    functionsRouterAddress: string
  }) {
    this.signer = signer
    if (!signer.provider) {
      throw Error('The signer used to instantiate the SubscriptionManager must have a provider')
    }

    this.linkToken = new Contract(linkTokenAddress, LinkTokenSource.abi, signer)

    this.functionsRouter = new Contract(functionsRouterAddress, FunctionsRouterSource.abi, signer)
  }

  public async initialize(): Promise<void> {
    let allowListId: string
    try {
      allowListId = await this.functionsRouter.getAllowListId()
    } catch (error) {
      throw Error(
        `${error}\n\nError encountered when attempting to fetch the TermsOfServiceAllowList ID.\nEnsure the FunctionsRouter address is correct and that that the provider is able to connect to the blockchain.`,
      )
    }

    try {
      const functionsAllowListAddress = await this.functionsRouter.getContractById(allowListId)
      this.functionsAllowList = new Contract(
        functionsAllowListAddress,
        TermsOfServiceAllowListSource.abi,
        this.signer,
      )
    } catch {
      // If the allow list is not set up, then the allow list is disabled.
    }

    this.initialized = true
  }

  private isInitialized = (): void => {
    if (!this.initialized) {
      throw Error(
        'SubscriptionManager has not been initialized. Call the initialize() method first.',
      )
    }
  }

  public async isAllowlisted(addr: string): Promise<void> {
    this.isInitialized()

    if (this.functionsAllowList && !(await this.functionsAllowList.hasAccess(addr, []))) {
      throw Error(
        'This wallet has not been added to the allow list. For access, sign up here:\nhttps://functions.chain.link\n',
      )
    }
  }

  public async createSubscription(subCreateConfig?: SubCreateConfig): Promise<number> {
    await this.isAllowlisted(await this.signer.getAddress())

    if (subCreateConfig?.consumerAddress) {
      if (!utils.isAddress(subCreateConfig.consumerAddress)) {
        throw Error(
          `Adding consumer contract failed - invalid address ${subCreateConfig.consumerAddress}`,
        )
      }

      try {
        const createSubWithConsumerTx = subCreateConfig.txOptions?.overrides
          ? await this.functionsRouter.createSubscriptionWithConsumer(
              subCreateConfig.consumerAddress,
              subCreateConfig.txOptions.overrides,
            )
          : await this.functionsRouter.createSubscriptionWithConsumer(
              subCreateConfig.consumerAddress,
            )
        const createSubWithConsumerTxReceipt = await createSubWithConsumerTx.wait(
          subCreateConfig.txOptions?.confirmations,
        )

        const subscriptionId = createSubWithConsumerTxReceipt.events[0].args['subscriptionId']

        return Number(subscriptionId.toString())
      } catch (error) {
        throw Error(`createSubscriptionWithConsumer failed\n${error}`)
      }
    }

    try {
      const createSubTx = subCreateConfig?.txOptions?.overrides
        ? await this.functionsRouter.createSubscription(subCreateConfig?.txOptions.overrides)
        : await this.functionsRouter.createSubscription()
      const createSubTxReceipt = await createSubTx.wait(subCreateConfig?.txOptions?.confirmations)
      const subscriptionId = createSubTxReceipt.events[0].args['subscriptionId']
      return Number(subscriptionId.toString())
    } catch (error) {
      throw Error(`createSubscription failed\n${error}`)
    }
  }

  public async addConsumer({
    subscriptionId,
    consumerAddress,
    txOptions,
  }: SubConsumerConfig): Promise<TransactionReceipt> {
    await this.isAllowlisted(await this.signer.getAddress())

    if (!consumerAddress) {
      throw Error('Missing consumer contract address')
    }

    if (!utils.isAddress(consumerAddress)) {
      throw Error(`Adding consumer contract failed - invalid address ${consumerAddress}`)
    }

    let preSubInfo
    try {
      preSubInfo = await this.functionsRouter.getSubscription(subscriptionId)
    } catch (error) {
      throw Error(`Error fetching details for subscription ID '${subscriptionId}': \n${error}`)
    }

    const subOwner = preSubInfo[1]
    const subManagerOwner = await this.signer.getAddress()
    if (subOwner !== subManagerOwner) {
      throw Error(
        `The current wallet: ${subManagerOwner} is not the owner ('${subOwner}') of the subscription '${subscriptionId}'`,
      )
    }

    // Check that the consumer is not already authorized (for convenience and gas saving)
    const existingConsumers = preSubInfo.consumers.map((addr: string) => addr.toLowerCase())
    if (existingConsumers.includes(consumerAddress.toLowerCase())) {
      throw Error(
        `Consumer ${consumerAddress} is already authorized to use subscription ${subscriptionId}`,
      )
    }

    try {
      const addConsumerTx = txOptions?.overrides
        ? await this.functionsRouter.addConsumer(
            subscriptionId,
            consumerAddress,
            txOptions.overrides,
          )
        : await this.functionsRouter.addConsumer(subscriptionId, consumerAddress)
      return await addConsumerTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(`adding consumer contract ${consumerAddress} failed\n${error}`)
    }
  }

  public async fundSubscription(config: SubFundConfig): Promise<TransactionReceipt> {
    this.isInitialized()

    const { juelsAmount, subscriptionId, txOptions } = config

    if (typeof juelsAmount === 'number') {
      throw Error('Juels funding amount must be a string or BigInt')
    }

    let juelsAmountBN: BigNumber
    try {
      juelsAmountBN = BigNumber.from(juelsAmount.toString())
    } catch (error) {
      throw Error(`Juels funding amount invalid:\n${error}`)
    }

    if (juelsAmountBN.lte(0)) {
      throw Error(`Juels funding amount must be greater than 0`)
    }

    try {
      await this.functionsRouter.getSubscription(subscriptionId)
    } catch (error) {
      throw Error(`Error fetching details for subscription ID '${subscriptionId}':\n${error}`)
    }

    // Ensure sufficient balance
    const balance = await this.linkToken.balanceOf(this.signer.getAddress())

    if (juelsAmountBN.gt(balance)) {
      throw Error(
        `Insufficient LINK balance. Trying to fund subscription with ${utils.formatEther(
          juelsAmountBN,
        )} LINK, but wallet '${await this.signer.getAddress()}' only has ${utils.formatEther(
          balance,
        )} LINK.`,
      )
    }

    const linkContractWithSigner = this.linkToken.connect(this.signer)

    try {
      const fundSubTx = txOptions?.overrides
        ? await linkContractWithSigner.transferAndCall(
            this.functionsRouter.address,
            juelsAmountBN,
            utils.defaultAbiCoder.encode(['uint64'], [subscriptionId]),
            txOptions.overrides,
          )
        : await linkContractWithSigner.transferAndCall(
            this.functionsRouter.address,
            juelsAmountBN,
            utils.defaultAbiCoder.encode(['uint64'], [subscriptionId]),
          )
      return await fundSubTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(`Adding funds failed for subscription '${subscriptionId}': \n${error}`)
    }
  }

  public async getSubscriptionInfo(
    subscriptionId: BigInt | number | string,
  ): Promise<SubscriptionInfo> {
    this.isInitialized()

    subscriptionId = BigInt(subscriptionId.toString())

    try {
      const subData = await this.functionsRouter.getSubscription(subscriptionId)
      return {
        balance: BigInt(subData.balance.toString()),
        owner: subData.owner,
        blockedBalance: BigInt(subData.blockedBalance.toString()),
        proposedOwner: subData.proposedOwner,
        consumers: subData.consumers,
        flags: subData.flags,
      }
    } catch (error) {
      throw Error(`Error fetching information for subscription ID '${subscriptionId}':\n${error}`)
    }
  }

  public async cancelSubscription({
    subscriptionId,
    refundAddress,
    txOptions,
  }: SubCancelConfig): Promise<TransactionReceipt> {
    await this.isAllowlisted(await this.signer.getAddress())

    if (!subscriptionId) {
      throw Error('Missing Subscription ID')
    }

    if (refundAddress && !utils.isAddress(refundAddress)) {
      throw Error(`'${refundAddress}' is an invalid address`)
    }

    const subManagerOwner = await this.signer.getAddress()
    refundAddress = refundAddress || subManagerOwner

    let subInfo
    try {
      subInfo = await this.functionsRouter.getSubscription(subscriptionId)
    } catch (error) {
      throw Error(`Error fetching details for subscription ID '${subscriptionId}':\n${error}`)
    }

    const subOwner = subInfo[1]
    if (subOwner !== subManagerOwner) {
      throw Error(
        `The current wallet: ${subManagerOwner} is not the owner ('${subOwner}') of the subscription '${subscriptionId}'`,
      )
    }

    try {
      const cancelSubTx = txOptions?.overrides
        ? await this.functionsRouter.cancelSubscription(
            subscriptionId,
            refundAddress,
            txOptions.overrides,
          )
        : await this.functionsRouter.cancelSubscription(subscriptionId, refundAddress)
      return await cancelSubTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(
        `cancelSubscription failed. Ensure there are no requests in flight and that all stale requests have been timed out.\n${error}`,
      )
    }
  }

  public async removeConsumer({
    subscriptionId,
    consumerAddress,
    txOptions,
  }: SubConsumerConfig): Promise<TransactionReceipt> {
    this.isInitialized()

    // Input validations.
    if (!consumerAddress) {
      throw Error('Missing consumer contract address')
    }

    if (!utils.isAddress(consumerAddress)) {
      throw Error(`Adding consumer contract failed - invalid address ${consumerAddress}`)
    }

    let subInfo
    try {
      subInfo = await this.functionsRouter.getSubscription(subscriptionId)
    } catch (error) {
      throw Error(`Error fetching details for subscription ID '${subscriptionId}':\n${error}`)
    }

    const subManagerOwner = await this.signer.getAddress()
    if (subInfo.owner !== subManagerOwner) {
      throw Error(
        `The current wallet: ${subManagerOwner} is not the owner ('${subInfo.owner}') of the subscription '${subscriptionId}'`,
      )
    }

    // Check that the consumer is not already removed (for convenience and gas saving).
    const existingConsumers = subInfo.consumers.map((addr: string) => addr.toLowerCase())
    if (!existingConsumers.includes(consumerAddress.toLowerCase())) {
      throw Error(
        `Consumer ${consumerAddress} is not authorized on Subscription ID ${subscriptionId} - no need to remove consumer.`,
      )
    }

    try {
      const removeConsumerTx = txOptions?.overrides
        ? await this.functionsRouter.removeConsumer(
            subscriptionId,
            consumerAddress,
            txOptions.overrides,
          )
        : await this.functionsRouter.removeConsumer(subscriptionId, consumerAddress)
      return await removeConsumerTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(`removing consumer contract ${consumerAddress} failed\n${error}`)
    }
  }

  public async requestSubscriptionTransfer({
    subscriptionId,
    newOwner,
    txOptions,
  }: SubTransferConfig): Promise<TransactionReceipt> {
    this.isInitialized()

    if (!subscriptionId) {
      throw Error('Missing Subscription Id')
    }

    if (newOwner && !utils.isAddress(newOwner)) {
      throw Error(`'${newOwner}' is an invalid address`)
    }

    let preSubInfo
    try {
      preSubInfo = await this.functionsRouter.getSubscription(subscriptionId)
    } catch (error) {
      throw Error(`Error fetching details for subscription ID '${subscriptionId}':\n${error}`)
    }

    const subManagerOwner = await this.signer.getAddress()
    const subOwner = preSubInfo[1]
    if (subOwner !== subManagerOwner) {
      throw Error(
        `The current wallet: ${subManagerOwner} is not the owner ('${subOwner}') of the subscription '${subscriptionId}'`,
      )
    }

    try {
      const transferSubTx = txOptions?.overrides
        ? await this.functionsRouter.proposeSubscriptionOwnerTransfer(
            subscriptionId,
            newOwner,
            txOptions.overrides,
          )
        : await this.functionsRouter.proposeSubscriptionOwnerTransfer(subscriptionId, newOwner)
      return await transferSubTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(`failed to transfer subscription '${subscriptionId}' to '${newOwner}':\n${error}`)
    }
  }

  public async acceptSubTransfer({
    subscriptionId,
    txOptions,
  }: SubTransferAcceptConfig): Promise<TransactionReceipt> {
    this.isInitialized()

    if (!subscriptionId) {
      throw Error('Missing Subscription Id')
    }

    let preTransferSubInfo
    try {
      preTransferSubInfo = await this.functionsRouter.getSubscription(subscriptionId)
    } catch (error) {
      throw Error(`Error fetching details for subscription ID '${subscriptionId}'`)
    }

    const previousOwner = preTransferSubInfo[1]
    try {
      const acceptTransferTx = txOptions?.overrides
        ? await this.functionsRouter.acceptSubscriptionOwnerTransfer(
            subscriptionId,
            txOptions.overrides,
          )
        : await this.functionsRouter.acceptSubscriptionOwnerTransfer(subscriptionId)
      return await acceptTransferTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(
        `Failed to accept ownership. Ensure that a transfer has been requested by the previous owner ${previousOwner}:\n${error}`,
      )
    }
  }

  public async timeoutRequests({
    requestCommitments,
    txOptions,
  }: SubTimeoutConfig): Promise<TransactionReceipt> {
    this.isInitialized()

    if (Array.isArray(requestCommitments) === false) {
      throw Error('timeoutRequests requires an array of request commitments')
    }

    if (requestCommitments.length === 0) {
      throw Error('Must provide at least one request commitment')
    }

    try {
      const timeoutTx = txOptions?.overrides
        ? await this.functionsRouter.timeoutRequests(requestCommitments, txOptions)
        : await this.functionsRouter.timeoutRequests(requestCommitments)
      return timeoutTx.wait(txOptions?.confirmations)
    } catch (error) {
      throw Error(
        `Failed to timeout requests. Ensure commitments are correct, requests have not been fulfilled and were sent more than 5 minutes ago:\n${error}`,
      )
    }
  }

  public async estimateFunctionsRequestCost({
    donId,
    subscriptionId,
    callbackGasLimit,
    gasPriceWei,
  }: EstimateCostConfig): Promise<BigInt> {
    if (typeof donId !== 'string') {
      throw Error('donId has invalid type')
    }

    const donIdBytes32 = utils.formatBytes32String(donId)

    await this.getSubscriptionInfo(subscriptionId)

    subscriptionId = BigInt(subscriptionId.toString())

    if (typeof callbackGasLimit !== 'number' || callbackGasLimit <= 0) {
      throw Error('Invalid callbackGasLimit')
    }

    if (typeof gasPriceWei !== 'bigint' || gasPriceWei <= 0) {
      throw Error('Invalid gasPriceWei')
    }

    let functionsCoordinatorAddress: string
    try {
      functionsCoordinatorAddress = await this.functionsRouter.getContractById(donIdBytes32)
    } catch (error) {
      throw Error(
        `${error}\n\nError encountered when attempting to fetch the FunctionsCoordinator address.\nEnsure the FunctionsRouter address and donId are correct and that that the provider is able to connect to the blockchain.`,
      )
    }

    try {
      await this.functionsRouter.isValidCallbackGasLimit(subscriptionId, callbackGasLimit)
    } catch (error) {
      throw Error(
        `Invalid callbackGasLimit. Ensure the callbackGasLimit is less than the max limit for your subscription tier.\n`,
      )
    }

    const functionsCoordinator = new Contract(
      functionsCoordinatorAddress,
      FunctionsCoordinatorSource.abi,
      this.signer,
    )

    try {
      const estimatedCostInJuels = await functionsCoordinator.estimateCost(
        subscriptionId,
        [],
        callbackGasLimit,
        gasPriceWei,
      )
      return BigInt(estimatedCostInJuels.toString())
    } catch (error) {
      throw Error(`Unable to estimate cost':\n${error}`)
    }
  }
}
