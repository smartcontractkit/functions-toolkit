# functions-toolkit

An NPM package with collections of JavaScript functions that can be used for working with [Chainlink Functions](https://chain.link/functions).

Up-to-date documentation on Chainlink Functions can be found [here](https://docs.chain.link/chainlink-functions).

> :warning: Chainlink Functions requires signing a terms of service agreement before creating a billing subscription. See this [getting started](https://docs.chain.link/chainlink-functions/getting-started) section in the docs.

# How to use this package

The following classes expose functionality one would expect from their name.

- [Subscription Manager](#functions-billing-subscription-management)
- [Secrets Manager](#functions-secrets-manager)

The following utilities are exposed by this package.

- [Simulate code execution on your local machine](#local-functions-simulator) (local simulation of your custom JS source code execution)

## Functions Billing Subscription Management

The `SubscriptionManager` class is used to manage the Chainlink billing [subscription](https://docs.chain.link/chainlink-functions/resources/concepts#subscriptions) used to pay for Functions requests.

The typical subscriptions-related operations are

- [How to use this package](#how-to-use-this-package)
  - [Functions Billing Subscription Management](#functions-billing-subscription-management)
    - [Subscription Initialization](#subscription-initialization)
    - [Create Subscription](#create-subscription)
    - [Fund Subscription](#fund-subscription)
    - [Adding/Removing Authorized Consumer Contracts](#addingremoving-authorized-consumer-contracts)
    - [Cancelling Subscriptions](#cancelling-subscriptions)
    - [Transferring and Accepting Transfers of Subscriptions](#transferring-and-accepting-transfers-of-subscriptions)
    - [Get subscription details](#get-subscription-details)
    - [Timing out requests](#timing-out-requests)
    - [Estimating request costs](#estimating-request-costs)
    - [Adding transaction options](#adding-transaction-options)
  - [Functions Secrets Manager](#functions-secrets-manager)
    - [Initialize a SecretsManager instance](#initialize-a-secretsmanager-instance)
    - [Fetch public keys](#fetch-public-keys)
    - [Encrypting Secrets](#encrypting-secrets)
    - [DON Hosted Secrets](#don-hosted-secrets)
    - [Off-chain Hosted Secrets](#off-chain-hosted-secrets)
  - [Functions Response Listener](#functions-response-listener)
  - [Functions Utilities](#functions-utilities)
    - [Local Functions Simulator](#local-functions-simulator)
    - [Local Functions Testnet](#local-functions-testnet)
    - [Decoding Response Bytes](#decoding-response-bytes)
    - [Storing Encrypted Secrets in Gists](#storing-encrypted-secrets-in-gists)
    - [Building Functions Request CBOR Bytes](#building-functions-request-cbor-bytes)

### Subscription Initialization

To create a Subscription Manager you need an object with 3 inputs.

1. an instance of the [Ethers.js Signer class](https://docs.ethers.org/v5/api/signer/#Signer). Ensure you have a [Provider](https://docs.ethers.org/v5/api/providers/) connected so you can communicate with the blockchain through your endpoint provider. You can use Infura or Alchemy or any other similar provider that provides access to [blockchains that Chainlink Functions supports](<(https://docs.chain.link/chainlink-functions/supported-networks)>).
2. You need the contract address for the LINK token used to fund subscriptions. Get that for the matching blockchain network [here](https://docs.chain.link/resources/link-token-contracts).
3. The contract address for the Functions Router smart contract. Get that [here](<(https://docs.chain.link/chainlink-functions/supported-networks)>).

Then create an instance of the Subscription Manager by passing those 3 inputs in as follows:

> const subscriptionManager = new SubscriptionManager({
> signer: [Signer](https://docs.ethers.org/v5/api/signer/#Signer),
> [linkTokenAddress](https://docs.chain.link/resources/link-token-contracts): string
> [functionsRouterAddress](https://docs.chain.link/chainlink-functions/supported-networks): string
> })

After the class is instantiated, it must be initialized before it can be used. This is done by running the `initialize` async function as shown below:

```
await subscriptionManager.initialize()
```

### Create Subscription

`createSubscription()` creates a new Functions billing subscription using the Functions Router contract and returns a promise which resolves to the subscription ID of type `number`. Optionally, a consumer contract address can also be passed to create a subscription and add an authorized consumer in a single transaction.

```
const subscriptionId = await subscriptionManager.createSubscription({
  consumerAddress?: string
})
```

It is a good idea to make a note of your subscription ID as you will put funds in it. You'll also pass your subscription ID as an input for many operations when you're using Chainlink Functions.

### Fund Subscription

Adds LINK token to your subscription. You must have LINK balance sitting in your subscription in order to fund the gas used by the response transaction, and also to fund the decentralized computation/execution of your custom code that will be performed by the Chainlink Decentralized Oracle Network.

To fund the subscription with LINK, ensure the wallet that you have connected to your Provider has LINK. You can get some testnet LINK from the [faucet](https://faucets.chain.link).

Note that all values are denominated in [Juels](https://docs.chain.link/resources/link-token-contracts). 1,000,000,000,000,000,000 (1e18) Juels are equal to 1 LINK. Do not use the JavaScript `number` type for calculations with Juels as the maximum safe JavaScript integer is only `2^54 - 1`.

```
const juelsAmount:  BigInt | string = BigInt(2) * BigInt(10**18)
await subscriptionManager.fundSubscription({
  subscriptionId,
  juelsAmount,
})
```

`fundSubscription()` returns a promise which resolves to an EthersJS [TransactionReceipt](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionReceipt)

### Adding/Removing Authorized Consumer Contracts

A Functions Consumer smart contract is where you will trigger your Functions execution request to the Chainlink Oracle Network. This is also where the Oracle Network will return the results of your decentralized computation. A visualization of this request/response flow is below.

![Request/Response Flow](https://docs.chain.link/images/chainlink-functions/requestAndReceive.png)
([source](<(https://docs.chain.link/chainlink-functions/resources/architecture)>))

Each subscription can hold a limited number of authorized Functions Consumers. Refer to the [service limits](https://docs.chain.link/chainlink-functions/resources/service-limits) to view the maximum number of consumer contracts per subscription. These are the consumer contracts that are authorized to use your subscription's LINK balance to fund the Oracle Network's compute tasks on your custom code.

```
const addConsumerTxReceipt = await subscriptionManager.addConsumer({
  subscriptionId,
  consumerAddress,
})
```

Similarly you can remove an authorized consumer contract with:

```
const removeConsumerTxReceipt = await subscriptionManager.removeConsumer({
  subscriptionId,
  consumerAddress,
})
```

Both `addConsumer()` and `removeConsumer()` return a promise which resolves to an EthersJS [TransactionReceipt](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionReceipt).

### Cancelling Subscriptions

Unless there is an expired pending request, you can cancel subscriptions with:

```
const cancelSubTxReceipt = await subscriptionManager.cancelSubscription({ subscriptionId })
```

`cancelSubscription()` takes a config object that has the following type definition. You'll note that you can specify a wallet address to which the subscription's LINK balance will be refunded. If unspecified, it will default to the subscription owner's address.

```
type SubCancelConfig = {
  subscriptionId: BigInt | number | string
  refundAddress?: string
  txOptions?: TransactionOptions
}
```

If there are any pending requests, you must first "time out" that pending request using the [timeoutRequest() function](#timing-out-requests) before cancelling the subscription.

### Transferring and Accepting Transfers of Subscriptions

Transferring subscriptions is a two-stage process. The subscription owner proposes the transfer with `requestSubscriptionTransfer()` and it is recorded on chain, but the ownership does not transfer until the transferee accepts by calling `acceptTransfer()`.

```
const transferTxReceipt = await subscriptionManager.requestSubscriptionTransfer({
  subscriptionId,
  newOwner, // transferee wallet address
})
```

To accept the ownership transfer, the transferee will need to have their own `SubscriptionManager` instance which is connected to the wallet address denoted by `newOwner` in the code snippet above. Then the transferee runs:

```
const acceptTransferTxReceipt =  await transfereeSubManager.acceptSubTransfer({ subscriptionId })
```

### Get subscription details

You can request details for a given subscription (on the network on which it has been created) using

```
const subscriptionInfo = await getSubscriptionInfo(subscriptionId)
```

This is a read-only interaction with the blockchain.

The returned promise - the variable `subscriptionInfo` in this example - resolves to a value of type `SubscriptionInfo` and has the following structure:

```
type SubscriptionInfo = {
  balance: BigInt // Represented in Juels (1,000,000,000,000,000,000 (1e18) Juels are equal to 1 LINK)
  owner: string // Subscription owner's address
  blockedBalance: BigInt // Balance reserved to pay for in-flight requests represented in Juels
  proposedOwner: string // Address used for transferring subscriptions
  consumers: string[] // Addresses of consumer contracts allowed to use the subscription
  flags: string // Indicates resource limits for a given subscription (If the default limits are not enough for your use case, contact the Chainlink team by emailing support@chain.link to inquire about a potential increase.)
}
```

### Timing out requests

In certain (rare) circumstances pending requests (requests that have not been fulfilled) will be expired and you may need to manually time those requests out. This is because when a request is "in-flight", your LINK tokens that pay for that computation get locked up for the duration of the request's lifecycle. Calling `timeoutRequest()` unlocks those funds and effectively 'cancels' that pending request.

You can timeout more than one request in a single transaction.

```
const timeoutReceipt: TransactionReceipt | void =  await timeoutRequests(timeoutReqConfig)
```

The `timeoutReqConfig` referred to above has the following shape:

```
{
  requestCommitments: RequestCommitment[]
  txOptions?: TransactionOptions
}
```

The `RequestCommitment` type refers to the data for the in-flight requests. Note that when timing out a request, all this data must exactly match the request commitment that was emitted on-chain by the `OracleRequest` event when the request was initiated.

```
type RequestCommitment = {
  requestId: string
  coordinator: string
  estimatedTotalCostJuels: BigInt
  client: string
  subscriptionId: number
  callbackGasLimit: BigInt
  adminFee: BigInt
  donFee: BigInt
  gasOverheadBeforeCallback: BigInt
  gasOverheadAfterCallback: BigInt
  timeoutTimestamp: BigInt
}
```

### Estimating request costs

The SubscriptionManager class's `estimateFunctionsRequestCost` method can be used to estimate the cost of a Functions request.

```
const estimatedCostInJuels: BigInt = await subscriptionManager.estimateFunctionsRequestCost({
  donId, // ID of the DON to which the Functions request will be sent
  subscriptionId, // Subscription ID
  callbackGasLimit, // Total gas used by the consumer contract's callback
  gasPriceGwei, // Gas price in gWei
})
```

This method will return a promise which resolves to a `BigInt` with the estimated request cost in Juels (1,000,000,000,000,000,000 (1e18) Juels are equal to 1 LINK).

### Adding transaction options

The SubscriptionManager class's exposed methods can take an optional `TransactionOptions` object that has the following shape.

```
export type TransactionOptions = {
  overrides?: Overrides
  confirmations?: number
}
```

Overrides are defined by EthersJS for [read-only calls](https://docs.ethers.org/v5/api/contract/contract/#Contract-functionsCall) and for [write transactions](https://docs.ethers.org/v5/api/contract/contract/#Contract--write). `confirmations` refers to the number of block confirmations to wait before proceeding.

## Functions Secrets Manager

This class helps you encrypt and manage the secrets that your Functions source code needs. These would be data you ordinarily put in your environment variables - such as API keys and auth related passwords etc.

Functions secrets utilize threshold public key cryptography, requiring multiple nodes to participate in a decentralized decryption process such that no single node can decrypt secrets singlehandedly.

Encrypted secrets are never stored directly on the blockchain, but instead can be either hosted by the DON or stored in a JSON file located at one or more URLs. Then, they are referenced in an on-chain request where they are fetched by the DON.

### Initialize a SecretsManager instance

To create a Secrets Manager you need an object with 3 inputs.

1. An instance of the [Ethers.js Signer class](https://docs.ethers.org/v5/api/signer/#Signer). Ensure you have a [Provider](https://docs.ethers.org/v5/api/providers/) connected so you can communicate with the blockchain through your endpoint provider. You can use Infura or Alchemy or any other similar provider that provides access to [blockchains that Chainlink Functions supports](<(https://docs.chain.link/chainlink-functions/supported-networks)>).
2. The contract address for the Functions Router smart contract. Get that [here](<(https://docs.chain.link/chainlink-functions/supported-networks)>).
3. The `donId` string to reference the DON you would like to use which can also be found at the previous link.

> const secretsManager = new SecretsManager({
> signer: [Signer](https://docs.ethers.org/v5/api/signer/#Signer),
> [functionsRouterAddress](https://docs.chain.link/chainlink-functions/supported-networks): string
> [donId](https://docs.chain.link/chainlink-functions/supported-networks): string
> })

After the class is instantiated, it must be initialized before it can be used. This is done by running the `initialize()` async method.

```
await secretsManager.initialize()
```

### Fetch public keys

You can fetch the public keys by querying the [Functions Coordinator contract](https://docs.chain.link/chainlink-functions/resources/architecture).

In most cases you will not need to call this method directly. The other methods in `SecretsManager` will automatically use this method.

```
const keys = await secretsManager.fetchKeys()
```

`fetchKeys()` returns a promise that resolves to an object with the following properties:

```
{
  thresholdPublicKey: ThresholdPublicKey
  donPublicKey: string
}
```

The threshold public key is an added layer of cryptographic protection for the security of your API secrets. Your secrets get encrypted twice - first with the `donPublicKey` and then with the `thresholdPublicKey`.

Encrypting with the `thresholdPublicKey` requires nodes to collaborate in order to decrypt secrets. This is because secrets cannot be decrypted with a single key; instead, each DON node has a decryption key shard, and multiple nodes must come together in a decentralized process to decrypt the secrets. This improves security since no single DON node can decrypt secrets without collaborating with other DON nodes.

### Encrypting Secrets

Secrets are encrypted by passing them in an object to the `encryptSecrets()` method.

Here are some important conditions you must satisfy when configuring your secrets for Chainlink Functions.

1. Secrets are optional. You do not need to configure secrets if your custom Functions source code does not need to access any secrets that get passed in at runtime.
2. Your secrets must be passed in an object with string key/value pairs:

```
{
  testKey: 'testValue1',
  testKey2: 'testValue2',
  testKey3: 'testValue3',
}
```

```
const encryptedSecrets = await secretsManager.encryptSecrets({
  testKey: 'testValue0'
})
```

`encryptSecrets()` returns a promise that resolves to an object with a single property `encryptedSecrets`:

```
{
  encryptedSecrets: string
}
```

`encryptedSecrets` contains the string representation of your secrets, converted into bytes, and encrypted using the public keys.

### DON Hosted Secrets

Encrypted secrets can be uploaded directly to the DON via gateway URLs such that they can be used when making an on-chain request. This is accomplished by sending a signed POST request to gateway URLs which are connected to the DON. The DON then maintains a decentralized database with eventual consistency, such that the stored values will propagate to all DON nodes. To ensure redundancy, it is always recommended to send encrypted secrets storage requests to multiple gateway URLs.

First, encrypt the secrets with [`encryptSecrets()`](#encrypting-secrets). Then, pass the `encryptedSecrets` hex string in an object to the `uploadEncryptedSecretsToDON()` method as shown below. The `slotId` can be any integer value of zero or greater, however using a previously used slot ID will overwrite the existing data. After `minutesUntilExpiration`, the entry will be deleted from all DON nodes. Get the list of valid gateway URLs for each blockchain network from the [Chainlink Functions documentation](https://docs.chain.link/chainlink-functions/supported-networks).

```
const encryptedSecretsObj = await secretsManager.encryptSecrets({ my: 'secret' })
const mySlotIdNumber = 0
const myExpirationTimeInMinutes = 10

const {
  version, // Secrets version number (corresponds to timestamp when encrypted secrets were uploaded to DON)
  success, // Boolean value indicating if encrypted secrets were successfully uploaded to all nodes connected to the gateway
} = await secretsManager.uploadEncryptedSecretsToDON({
  encryptedSecretsHexstring: encryptedSecretsObj.encryptedSecrets,
  gatewayUrls: [ 'https://exampleGatewayUrl1.com/gateway', 'https://exampleGatewayUrl2.com/gateway', ... ],
  slotId: mySlotIdNumber,
  minutesUntilExpiration: myExpirationTimeInMinutes,
})
```

The `uploadEncryptedSecretsToDON()` method will return a promise that resolves to an object of the type shown below.

```
{
  version: number,
  success: boolean,
}
```

The `version` is a number which represents the version of the uploaded encrypted secrets; it is the POSIX time at which the `uploadEncryptedSecretsToDON()` method was initiated. This will be used when making a Functions request to ensure the latest version of the encrypted secrets are used. If the upload was unsuccessful for one or more nodes, a warning message will be printed and the `success` field will be `false`. If the upload was unsuccessful for all nodes, the method will throw an error.

```
const secretsEntriesForGateway = await secretsManager.listDONHostedEncryptedSecrets([ 'https://exampleGatewayUrl1.com/gateway', 'https://exampleGatewayUrl2.com/gateway', ... ])
```

`listDONHostedEncryptedSecrets()` will return an array with following shape or throw an error. If the method successfully returns, but the `error` field of the returned object is populated, it indicates that the request to list secrets was successful, but there is a discrepancy between the node responses.

```
{
  result: [
    {
      gatewayUrl: 'https://examplegatewayurl.com/gateway',
      nodeResponses: [
        {
          success: true,
          rows: [
            {
              slot_id: 0,
              version: 0,
              expiration: 100_000,
            },
            ...
          ],
        },
        ...
      ],
    },
    ...
  ],
  error: 'Possible error message <may be undefined>'
}
```

`buildDONHostedEncryptedSecretsReference()` can be used to construct the hex string which represents the `encryptedSecretsReference` bytes used to reference the DON hosted encrypted secrets when making an on-chain Functions request. To use DON hosted encrypted secrets in an on-chain request, also ensure that `secretsLocation` is set to `Location.DONHosted` (ie: `2`).

```
const encryptedSecretsReference: string = buildDONHostedEncryptedSecretsReference({
  slotId: number,
  version: number
})
```

### Off-chain Hosted Secrets

Encrypted secrets can also be stored off-chain in JSON file instead of being hosted on the DON, enabling more direct control over how the encrypted secrets data is stored. The DON nodes fetch this file from one or more URLs.

First encrypt the secrets with [`encryptSecrets()`](#encrypting-secrets) and then paste or upload the resulting object into a private Github Gist, cloud storage bucket or or any other location such that the encrypted secrets JSON object can be fetched by the DON via URL. These secrets are encrypted so even if they're public, your secrets are not visible.

You can also use the [gist uploader utility function](#storing-encrypted-secrets-in-gists) to upload the encrypted secrets string to a JSON file in a Github Gist.

However you'd need to pass the URLs to your Functions Consumer contract so that the DON can retrieve the secrets.

**Note:** ⚠️ As an additional layer of security, the URLs must also encrypted with the DON Public key before being included in an on-chain transaction. This is to prevent directly exposing the URL to anyone except DON members. You can build the encrypted URLs with:

> const encryptedURLs: string = await encryptSecretsUrls(secretsUrls: string[])

The argument `secretsUrls` is an array of URLs and `encryptSecretsUrls()` returns the URLs as an encrypted, space-separated string of all the URLs you supply in the array.

## Functions Response Listener

The `ResponseListener` class provides an easy way to listen for on-chain responses to Functions requests.

To create a Request Listener you need an object with 2 inputs.

1. An instance of an [Ethers.js provider](https://docs.ethers.org/v5/api/providers/). You can use Infura or Alchemy or any other similar provider that provides access to [blockchains that Chainlink Functions supports](<(https://docs.chain.link/chainlink-functions/supported-networks)>).
2. The contract address for the Functions Router smart contract. Get that [here](<(https://docs.chain.link/chainlink-functions/supported-networks)>).

> const responseListener = new ResponseListener({
> provider: [Provider](https://docs.ethers.org/v5/api/providers/),
> [functionsRouterAddress](https://docs.chain.link/chainlink-functions/supported-networks): string,
> })

To listen for the response to a single Functions request by request ID, use the the `listenForResponse()` method. Optionally, you can provide a custom timeout after which the listener will throw an error indicating that the time limit was exceeded. If no timeout is provided, the default timeout is 300 seconds.

**Note:** Listening for multiple responses simultaneously is not supported by the `listenForResponse()` method and will lead to undefined behavior.

```
const response: FunctionsResponse = await responseListener.listenForResponse(
  requestId: string,
  timeout?: number,
)
```

The `FunctionsResponse` will have the following shape.

```
{
  requestId: string // Request ID of the fulfilled request represented as a bytes32 hex string
  subscriptionId: number // Subscription ID billed for request
  totalCostInJuels: BigInt // Actual cost of request in Juels (1,000,000,000,000,000,000 (1e18) Juels are equal to 1 LINK)
  responseBytesHexstring: string // Response bytes sent to client contract represented as a hex string
  errorString: string // Error bytes sent to client contract represented as a hex string
  returnDataBytesHexstring: string // Data returned by consumer contract's handleOracleFulfillment method represented as a hex string
  fulfillmentCode: FulfillmentCode // Indicates whether the request was fulfilled successfully or not
}
```

The possible fulfillment codes are shown below.

```
{
  FULFILLED = 0, // Indicates that calling the consumer contract's handleOracleFulfill method was successful
  USER_CALLBACK_ERROR = 1, // Indicates that the consumer contract's handleOracleFulfill method reverted
  INVALID_REQUEST_ID = 2, // Internal error
  COST_EXCEEDS_COMMITMENT = 3, // Indicates that the request was not fulfilled because the cost of fulfillment is higher than the estimated cost due to an increase in gas prices
  INSUFFICIENT_GAS_PROVIDED = 4, // Internal error
  SUBSCRIPTION_BALANCE_INVARIANT_VIOLATION, // Internal error
  INVALID_COMMITMENT = 6, // Internal error
}
```

To listen for multiple Functions responses for a given subscription ID, use the `listenForResponses()` method. This method is particularly useful when Chainlink Automation is being used to trigger the sending of Functions requests. `listenForResponses()` takes the subscription ID and a callback as arguments. The callback will be given a `FunctionsResponse` as an argument.

**Note:** To avoid undefined behavior, ensure only one listener method is running at a time.

```
const callback = (response: FunctionsResponse) => { console.log(response) }
responseListener.listenForResponses(
  subscriptionId: number,
  callback,
)
```

When done listener for responses, use the `stopListeningForResponses` method to stop the listener.

```
responseListener.stopListeningForResponses()
```

## Functions Utilities

### Local Functions Simulator

> The local Functions JavaScript simulator requires Deno to be installed on your machine be and accessible via the PATH environment variable (ie: the `deno --version` command must work).
> Visit [deno.land/#installation](https://deno.land/#installation) for installation instructions.

The `simulateScript` function is used to simulate the execution of your custom Functions JavaScript source code on your development machine. This means you can use the simulator during development to test your JavaScript code, and you can also run the simulator before you execute an on on-chain transaction that triggers a Functions request on a live network to verify your returns the expected value. This is useful for debugging especially since the `simulateScript` function returns captured terminal output which contains any console log messages or errors.

`simulateScript` takes an object as an argument with the following parameters shown below. Arguments that can be accessed within the source via the global variable `args` or `bytesArgs` which is are injected into the runtime. You can also add API keys and other secrets using the `secrets` object that gets injected as a global variable in the runtime.

```
const result = await simulateScript({
  source: string // JavaScript source code
  args?: string[] // Array of string arguments accessible from the source code via the global variable `args`
  bytesArgs?: string[] // Array of bytes arguments, represented as hex strings, accessible from the source code via the global variable `bytesArgs`
  secrets?: Record<string, string> // Secret values represented as key-value pairs
  maxOnChainResponseBytes?: number // Maximum size of the returned value in bytes (defaults to 256)
  maxExecutionTimeMs?: number // Maximum execution duration (defaults to 10_000ms)
  maxMemoryUsageMb?: number // Maximum RAM usage (defaults to 128mb)
  numAllowedQueries?: number // Maximum number of HTTP requests (defaults to 5)
  maxQueryDurationMs?: number // Maximum duration of each HTTP request (defaults to 9_000ms)
  maxQueryUrlLength?: number // Maximum HTTP request URL length (defaults to 2048)
  maxQueryRequestBytes?: number // Maximum size of outgoing HTTP request payload (defaults to 2048 == 2 KB)
  maxQueryResponseBytes?: number // Maximum size of incoming HTTP response payload (defaults to 2_097_152 == 2 MB)
})
```

`simulateScript` returns a promise which resolves to an object as shown below.

```
{
  responseBytesHexstring?: string // Response bytes which would be returned on-chain, represented as a hex string
  errorString?: string // Error message that would be returned on-chain (either errorString or responseBytesHexstring will be defined)
  capturedTerminalOutput: string // stdout or stderr terminal output captured during simulated execution
}
```

**_NOTE:_** When running `simulateScript`, depending on your security settings, you may get a popup asking if you would like to accept incoming network connections. You can safely ignore this popup and it should disappear when the simulation is complete.

**_NOTE:_** The `simulateScript` function is a debugging tool and hence is not a perfect representation of the actual Chainlink oracle execution environment. Therefore, it is important to make a Functions request on a supported testnet blockchain before mainnet usage.

### Local Functions Testnet

For debugging smart contracts and the end-to-end request flow on your local machine, you can use the `localFunctionsTestnet` function. This creates a local testnet RPC node with a mock Chainlink Functions contracts. You can then deploy your own Functions consumer contract to this local network, create and manage subscriptions, and send requests. Request processing will simulate the behavior of an actual DON where the request is executed 4 times and the discrete median response is transmitted back to the consumer contract. (Note that Functions uses the following calculation to select the discrete median response: `const medianResponse = responses[responses.length - 1) / 2]`).

The `localFunctionsTestnet` function takes the following values as arguments.

```
const localFunctionsTestnet = await startLocalFunctionsTestnet(
  secrets?: Record<string, string>, // Secrets which can be accessed by the JavaScript code during request execution
  options?: ServerOptions, // Ganache server options
  port?: number, // Defaults to 8545
)
```

Observe that `localFunctionsTestnet` takes in a secrets object as an optional argument. This is because the local testnet does not have the ability to access or decrypt encrypted secrets provided within the request transaction. Instead, you can provide secrets as an argument here which can be accessed by the JavaScript code during request executions. Secrets specified as an argument to `localFunctionsTestnet` will be made accessible within the JavaScript code regardless of the `secretsLocation` or `encryptedSecretsReference` values sent in the request transaction.

`localFunctionsTestnet` returns a promise which resolves to the following type.

```
{
  server: Server // Ganache server
  adminWallet: { address: string, privateKey: string } // Funded admin wallet
  getFunds: (address: string, { weiAmount, juelsAmount }: { weiAmount?: BigInt | string; juelsAmount?: BigInt | string }) => Promise<void> // Method which can be called to send funds to any address
  close: () => Promise<void> // Method to close the server
  donId: string // DON ID for simulated DON
  // The following values are all Ethers.js contract types: https://docs.ethers.org/v5/api/contract/contract/
  linkTokenContract: Contract // Mock LINK token contract
  functionsRouterContract: Contract // Mock FunctionsRouter contract
}
```

Now you can connect to the local Functions testnet RPC node with your preferred blockchain tooling, deploy a FunctionsConsumer contract, instantiate and initialize the`SubscriptionManager`, create, add the consumer contract and fund the subscription, send requests, and use the `ResponseListener` to listen for responses all on your machine.

**_NOTE:_** When simulating request executions, depending on your security settings, you may get multiple popups asking if you would like to accept incoming network connections. You can safely ignore these popups and they should disappear when the executions are complete.

**_NOTE:_** Cost estimates and other configuration values may differ significantly from actual values on live testnet or mainnet chains.

**_NOTE:_** The `localFunctionsTestnet` function is a debugging tool and hence is not a perfect representation of the actual Chainlink oracle execution environment. Therefore, it is important to make a Functions request on a supported testnet blockchain before mainnet usage.

### Decoding Response Bytes

On-chain responses are encoded as Solidity `bytes` which are most frequently displayed as hex strings. However, these hex strings often need to be decoded into a useable type. In order to decode hex strings into human-readable values, this package provides the `decodeResult` function. Currently, the `decodeResult` function supports decoding hex strings into `uint256`, `int256` or `string` values.

```
const result: BigInt | string = decodeResult(
  resultHexString: string,
  expectedReturnType: ReturnType // 'uint256' | 'int256' | 'string'
)
```

Possible return values are also available in the `ReturnType` enum shown below.

```
export enum ReturnType {
  uint = 'uint256',
  uint256 = 'uint256',
  int = 'int256',
  int256 = 'int256',
  string = 'string',
  bytes = 'bytes',
}
```

### Storing Encrypted Secrets in Gists

When describing the use of [off-chain secrets](#off-chain-hosted-secrets), we had described the storing of encrypted secrets off-chain, on hosted sites or storage repositories. For example we can store secrets in a private gist.

Encrypted default secrets (DON-level secrets) would look something like this:

```
{
 "encryptedSecrets": '0x1234567890abcdefg', // some long hex string
}
```

This Functions Package includes utilities to upload the encrypted secrets to a private Github gist and to delete a gist as well.

To use this utility with Github gist you need to create a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

You can upload encrypted secrets to a private Github gist with

```
const encryptedSecrets = await secretsManager.encryptSecrets({
  mySecret: 'secretValue'
})

const gistURL = await createGist(githubApiToken: string, JSON.stringify(encryptedSecrets)) // encryptedSecrets must be a string, not an object.
```

The `gistURL` itself must then be encrypted by calling [encryptSecretsUrls()](#off-chain-hosted-secrets).

You can delete gists (if you need to clean them up, for example) with

```
const success: boolean = await deleteGist(githubApiToken: string, gistURL: string)
```

This function will return a promise which resolves to `true` if deletion is successful, else it will throw an error.

### Building Functions Request CBOR Bytes

Instead of performing the [CBOR encoding for a Functions request on-chain](https://docs.chain.link/chainlink-functions/api-reference/functions#encodecbor) in your Functions consumer contract, it is also possible to generate the CBOR encoding off-chain in order to save gas. Then, the resulting encoded CBOR bytes can be used when making an on-chain request. You can either store the encoded request in a `bytes` storage variable within your consumer contract, or initiate the Functions request by passing the CBOR-encoded request object `bytes` direclty into the `_sendRequest()` method which [is inherited from `FunctionsClient.sol`](https://docs.chain.link/chainlink-functions/api-reference/functions-client) .

Note that when encoding a request off-chain, `args` or `bytesArgs` cannot be added to the request on-chain. This is a limitation of CBOR encoding due to its immutable structure.

To build the CBOR encoded Functions request bytes off-chain, use the `buildRequestCBOR()` function as shown below

```
const functionsRequestBytesHexString: string = buildRequestCBOR({
  codeLocation: number  // Must be 0 for inline source code.  No other values are supported at this time.
  secretsLocation?: number // Must be 1 for Remote or 2 for DONHosted secrets.  No other values are supported at this time.
  codeLanguage: number // Must be 0 for JavaScript.  No other values are supported at this time.
  source: string // JavaScript source code
  encryptedSecretsReference?: string // Hex string representing an encrypted secrets URLs or DON hosted encrypted secrets reference
  args?: string[] // Array of string arguments
  bytesArgs?: string[] // Array of bytes arguments, represented as hex strings
})
```
