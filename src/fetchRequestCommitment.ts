import { Contract, utils } from 'ethers'

import { FunctionsRouterSource, FunctionsCoordinatorSource } from './v1_contract_sources'

import type { FetchRequestCommitmentConfig, RequestCommitment } from './types'

export const fetchRequestCommitment = async ({
  requestId,
  provider,
  functionsRouterAddress,
  donId,
  toBlock = 'latest',
  pastBlocksToSearch = 1000,
}: FetchRequestCommitmentConfig): Promise<RequestCommitment> => {
  let fromBlock: number
  const latestBlock = await provider.getBlockNumber()
  if (toBlock === 'latest') {
    fromBlock = latestBlock - pastBlocksToSearch
  } else {
    if (toBlock > latestBlock) {
      toBlock = latestBlock
    }
    fromBlock = toBlock - pastBlocksToSearch
    if (fromBlock < 0) {
      fromBlock = 0
    }
  }

  const functionsRouter = new Contract(functionsRouterAddress, FunctionsRouterSource.abi, provider)
  const donIdBytes32 = utils.formatBytes32String(donId)
  let functionsCoordinatorAddress: string
  try {
    functionsCoordinatorAddress = await functionsRouter.getContractById(donIdBytes32)
  } catch (error) {
    throw Error(
      `${error}\n\nError encountered when attempting to fetch the FunctionsCoordinator address.\nEnsure the FunctionsRouter address and donId are correct and that that the provider is able to connect to the blockchain.`,
    )
  }

  const functionsCoordinator = new Contract(
    functionsCoordinatorAddress,
    FunctionsCoordinatorSource.abi,
    provider,
  )
  const eventFilter = functionsCoordinator.filters.OracleRequest(requestId)
  const logs = await provider.getLogs({
    ...eventFilter,
    fromBlock,
    toBlock,
  })
  if (logs.length === 0) {
    throw Error(
      `No request commitment event found for the provided requestId in block range ${fromBlock} to ${toBlock}`,
    )
  }

  const event = functionsCoordinator.interface.parseLog(logs[0])
  const commitmentData = event.args.commitment
  const requestCommitment: RequestCommitment = {
    requestId: commitmentData.requestId,
    coordinator: commitmentData.coordinator,
    estimatedTotalCostJuels: BigInt(commitmentData.estimatedTotalCostJuels.toString()),
    client: commitmentData.client,
    subscriptionId: Number(commitmentData.subscriptionId.toString()),
    callbackGasLimit: BigInt(commitmentData.callbackGasLimit.toString()),
    adminFee: BigInt(commitmentData.adminFee.toString()),
    donFee: BigInt(commitmentData.donFee.toString()),
    gasOverheadBeforeCallback: BigInt(commitmentData.gasOverheadBeforeCallback.toString()),
    gasOverheadAfterCallback: BigInt(commitmentData.gasOverheadAfterCallback.toString()),
    timeoutTimestamp: BigInt(commitmentData.timeoutTimestamp.toString()),
  }
  return requestCommitment
}
