import type { Overrides, Contract, providers } from 'ethers'

// import type { Server } from 'ganache'

export enum Location {
  Inline = 0,
  Remote = 1,
  DONHosted = 2,
}

export enum CodeLanguage {
  JavaScript = 0,
}

export enum ReturnType {
  uint = 'uint256',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  uint256 = 'uint256',
  int = 'int256',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  int256 = 'int256',
  string = 'string',
  bytes = 'bytes',
}

export type FunctionsRequestParams = {
  codeLocation: Location
  secretsLocation?: Location
  codeLanguage: CodeLanguage
  source: string
  encryptedSecretsReference?: string
  args?: string[]
  bytesArgs?: string[]
}

export type ThresholdPublicKey = {
  Group: string
  G_bar: string
  H: string
  HArray: string[]
}

export type RequestCommitmentFetchConfig = {
  requestId: string
  provider: providers.JsonRpcProvider
  functionsRouterAddress: string
  donId: string
  toBlock?: number | 'latest' // Ending block number to search for the request commitment
  pastBlocksToSearch?: number // Number of blocks from the ending block to search for the request commitment (searches from toBlock-pastBlocksToSearch to toBlock)
}

export type TransactionOptions = {
  overrides?: Overrides
  confirmations?: number
}

export type SubCreateConfig = {
  consumerAddress?: string
  txOptions?: TransactionOptions
}

export type SubConsumerConfig = {
  subscriptionId: bigint | number | string
  consumerAddress: string
  txOptions?: TransactionOptions
}

export type SubFundConfig = {
  juelsAmount: bigint | string
  subscriptionId: bigint | number | string
  txOptions?: TransactionOptions
}

export type SubCancelConfig = {
  subscriptionId: bigint | number | string
  refundAddress?: string
  txOptions?: TransactionOptions
}
export type SubTransferConfig = {
  subscriptionId: bigint | number | string
  newOwner: string
  txOptions?: TransactionOptions
}

export type SubTransferAcceptConfig = {
  subscriptionId: bigint | number | string
  txOptions?: TransactionOptions
}

export type SubTimeoutConfig = {
  requestCommitments: RequestCommitment[]
  txOptions?: TransactionOptions
}

export type EstimateCostConfig = {
  donId: string
  subscriptionId: bigint | number | string
  callbackGasLimit: number
  gasPriceWei: bigint
}

export type SubscriptionInfo = {
  balance: bigint
  owner: string
  blockedBalance: bigint
  proposedOwner: string
  consumers: string[]
  flags: string
}

export type RequestCommitment = {
  requestId: string
  coordinator: string
  estimatedTotalCostJuels: bigint
  client: string
  subscriptionId: number
  callbackGasLimit: bigint
  adminFee: bigint
  donFee: bigint
  gasOverheadBeforeCallback: bigint
  gasOverheadAfterCallback: bigint
  timeoutTimestamp: bigint
}

export type DONStoragePayload = {
  slot_id: number
  version: number
  payload: string // base64 encrypted secrets
  expiration: number
  signature: string // base64
}

export type GatewayMessageConfig = {
  gatewayUrls: string[]
  method: string
  don_id: string
  payload?: DONStoragePayload
}

export type GatewayMessageBody = {
  message_id: string
  method: string
  don_id: string
  receiver: string
  payload?: DONStoragePayload
}

export type GatewayMessage = {
  id: string
  jsonrpc: '2.0'
  method: string
  params: {
    body: GatewayMessageBody
    signature: string
  }
}

type EncryptedSecretsEntry = {
  slot_id: number
  version: number
  expiration: number
}

export type NodeResponse = {
  success: boolean
  rows?: EncryptedSecretsEntry[]
}

export type GatewayResponse = {
  gatewayUrl: string
  nodeResponses: NodeResponse[]
}

export enum FulfillmentCode {
  FULFILLED = 0, // Indicates that calling the consumer contract's handleOracleFulfill method was successful
  USER_CALLBACK_ERROR = 1, // Indicates that the consumer contract's handleOracleFulfill method reverted
  INVALID_REQUEST_ID = 2, // Indicates a duplicate response to a request.  This is not an error, but the response is ignored
  COST_EXCEEDS_COMMITMENT = 3, // Indicates that the request was not fulfilled because the cost of fulfillment is higher than the estimated cost due to an increase in gas prices
  INSUFFICIENT_GAS_PROVIDED = 4, // Internal error
  SUBSCRIPTION_BALANCE_INVARIANT_VIOLATION = 5, // Internal error
  INVALID_COMMITMENT = 6, // Internal error
}

export type FunctionsResponse = {
  requestId: string // Request ID of the fulfilled request represented as a bytes32 hex string
  subscriptionId: number // Subscription ID billed for request
  totalCostInJuels: bigint // Actual cost of request in Juels (1,000,000,000,000,000,000 (1e18) Juels are equal to 1 LINK)
  responseBytesHexstring: string // Response bytes sent to client contract represented as a hex string ("0x" if no response)
  errorString: string // Error bytes sent to client contract interpreted as a UTF-8 string ("" if no error)
  returnDataBytesHexstring: string // Data returned by consumer contract's handleOracleFulfillment method represented as a hex string
  fulfillmentCode: FulfillmentCode // Indicates whether the request was fulfilled successfully or not
}

export interface SimulationInput {
  source: string
  args?: string[]
  bytesArgs?: string[]
  secrets?: Record<string, string>
  maxOnChainResponseBytes?: number
  maxExecutionTimeMs?: number
  maxMemoryUsageMb?: number
  numAllowedQueries?: number
  maxQueryDurationMs?: number
  maxQueryUrlLength?: number
  maxQueryRequestBytes?: number
  maxQueryResponseBytes?: number
}

export type SimulationResult = {
  responseBytesHexstring?: string
  errorString?: string
  capturedTerminalOutput: string
}

export interface RequestEventData {
  requestId: string
  requestingContract: string
  requestInitiator: string
  subscriptionId: number
  subscriptionOwner: string
  data: string
  dataVersion: number
  flags: string
  callbackGasLimit: number
  commitment: RequestCommitment
}

export interface FunctionsContracts {
  donId: string
  linkTokenContract: Contract
  functionsRouterContract: Contract
  functionsMockCoordinatorContract: Contract
}

export type GetFunds = (
  address: string,
  { weiAmount, juelsAmount }: { weiAmount?: bigint | string; juelsAmount?: bigint | string },
) => Promise<void>

export type LocalFunctionsTestnet = {
  // server: Server
  adminWallet: {
    address: string
    privateKey: string
  }
  getFunds: GetFunds
  close: () => Promise<void>
} & FunctionsContracts
