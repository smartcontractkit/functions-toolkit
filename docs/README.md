@chainlink/functions-toolkit

# @chainlink/functions-toolkit

## Table of contents

### Enumerations

- [CodeLanguage](enums/CodeLanguage.md)
- [FulfillmentCode](enums/FulfillmentCode.md)
- [Location](enums/Location.md)
- [ReturnType](enums/ReturnType.md)

### Classes

- [ResponseListener](classes/ResponseListener.md)
- [SecretsManager](classes/SecretsManager.md)
- [SubscriptionManager](classes/SubscriptionManager.md)

### Interfaces

- [RequestEventData](interfaces/RequestEventData.md)
- [SimulationInput](interfaces/SimulationInput.md)

### Type Aliases

- [DONStoragePayload](README.md#donstoragepayload)
- [DecodedResult](README.md#decodedresult)
- [EncryptedSecretsEntry](README.md#encryptedsecretsentry)
- [EstimateCostConfig](README.md#estimatecostconfig)
- [FunctionsRequestParams](README.md#functionsrequestparams)
- [FunctionsResponse](README.md#functionsresponse)
- [GatewayMessage](README.md#gatewaymessage)
- [GatewayMessageBody](README.md#gatewaymessagebody)
- [GatewayMessageConfig](README.md#gatewaymessageconfig)
- [GatewayResponse](README.md#gatewayresponse)
- [NodeResponse](README.md#noderesponse)
- [RequestCommitment](README.md#requestcommitment)
- [SimulationResult](README.md#simulationresult)
- [SubCancelConfig](README.md#subcancelconfig)
- [SubConsumerConfig](README.md#subconsumerconfig)
- [SubCreateConfig](README.md#subcreateconfig)
- [SubFundConfig](README.md#subfundconfig)
- [SubTimeoutConfig](README.md#subtimeoutconfig)
- [SubTransferAcceptConfig](README.md#subtransferacceptconfig)
- [SubTransferConfig](README.md#subtransferconfig)
- [SubscriptionInfo](README.md#subscriptioninfo)
- [ThresholdPublicKey](README.md#thresholdpublickey)
- [TransactionOptions](README.md#transactionoptions)

### Variables

- [DEFAULT\_MAX\_EXECUTION\_DURATION\_MS](README.md#default_max_execution_duration_ms)
- [DEFAULT\_MAX\_HTTP\_REQUESTS](README.md#default_max_http_requests)
- [DEFAULT\_MAX\_HTTP\_REQUEST\_BYTES](README.md#default_max_http_request_bytes)
- [DEFAULT\_MAX\_HTTP\_REQUEST\_DURATION\_MS](README.md#default_max_http_request_duration_ms)
- [DEFAULT\_MAX\_HTTP\_REQUEST\_URL\_LENGTH](README.md#default_max_http_request_url_length)
- [DEFAULT\_MAX\_HTTP\_RESPONSE\_BYTES](README.md#default_max_http_response_bytes)
- [DEFAULT\_MAX\_MEMORY\_USAGE\_MB](README.md#default_max_memory_usage_mb)
- [DEFAULT\_MAX\_ON\_CHAIN\_RESPONSE\_BYTES](README.md#default_max_on_chain_response_bytes)
- [callReportGasLimit](README.md#callreportgaslimit)
- [simulatedAllowListConfig](README.md#simulatedallowlistconfig)
- [simulatedAllowListId](README.md#simulatedallowlistid)
- [simulatedCoordinatorConfig](README.md#simulatedcoordinatorconfig)
- [simulatedDonId](README.md#simulateddonid)
- [simulatedLinkEthPrice](README.md#simulatedlinkethprice)
- [simulatedRouterConfig](README.md#simulatedrouterconfig)
- [simulatedSecretsKeys](README.md#simulatedsecretskeys)
- [simulatedTransmitters](README.md#simulatedtransmitters)
- [simulatedWallets](README.md#simulatedwallets)

### Functions

- [buildRequestCBOR](README.md#buildrequestcbor)
- [createGist](README.md#creategist)
- [decodeResult](README.md#decoderesult)
- [deleteGist](README.md#deletegist)
- [deployFunctionsOracle](README.md#deployfunctionsoracle)
- [simulateScript](README.md#simulatescript)
- [startLocalFunctionsTestnet](README.md#startlocalfunctionstestnet)

## Type Aliases

### DONStoragePayload

Ƭ **DONStoragePayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiration` | `number` |
| `payload` | `string` |
| `signature` | `string` |
| `slot_id` | `number` |
| `version` | `number` |

#### Defined in

[types.ts:112](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L112)

___

### DecodedResult

Ƭ **DecodedResult**: `BigInt` \| `string`

#### Defined in

[decodeResult.ts:3](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/decodeResult.ts#L3)

___

### EncryptedSecretsEntry

Ƭ **EncryptedSecretsEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiration` | `number` |
| `slot_id` | `number` |
| `version` | `number` |

#### Defined in

[types.ts:145](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L145)

___

### EstimateCostConfig

Ƭ **EstimateCostConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callbackGasLimit` | `number` |
| `donId` | `string` |
| `gasPriceGwei` | `BigInt` |
| `subscriptionId` | `BigInt` \| `number` \| `string` |

#### Defined in

[types.ts:82](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L82)

___

### FunctionsRequestParams

Ƭ **FunctionsRequestParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `string`[] |
| `bytesArgs?` | `string`[] |
| `codeLanguage` | [`CodeLanguage`](enums/CodeLanguage.md) |
| `codeLocation` | [`Location`](enums/Location.md) |
| `encryptedSecretsReference?` | `string` |
| `secretsLocation?` | [`Location`](enums/Location.md) |
| `source` | `string` |

#### Defined in

[types.ts:22](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L22)

___

### FunctionsResponse

Ƭ **FunctionsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errorString` | `string` |
| `fulfillmentCode` | [`FulfillmentCode`](enums/FulfillmentCode.md) |
| `requestId` | `string` |
| `responseBytesHexstring` | `string` |
| `returnDataBytesHexstring` | `string` |
| `subscriptionId` | `number` |
| `totalCostInJuels` | `BigInt` |

#### Defined in

[types.ts:171](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L171)

___

### GatewayMessage

Ƭ **GatewayMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `jsonrpc` | ``"2.0"`` |
| `method` | `string` |
| `params` | { `body`: [`GatewayMessageBody`](README.md#gatewaymessagebody) ; `signature`: `string`  } |
| `params.body` | [`GatewayMessageBody`](README.md#gatewaymessagebody) |
| `params.signature` | `string` |

#### Defined in

[types.ts:135](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L135)

___

### GatewayMessageBody

Ƭ **GatewayMessageBody**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `don_id` | `string` |
| `message_id` | `string` |
| `method` | `string` |
| `payload?` | [`DONStoragePayload`](README.md#donstoragepayload) |
| `receiver` | `string` |

#### Defined in

[types.ts:127](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L127)

___

### GatewayMessageConfig

Ƭ **GatewayMessageConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `don_id` | `string` |
| `gatewayUrls` | `string`[] |
| `method` | `string` |
| `payload?` | [`DONStoragePayload`](README.md#donstoragepayload) |

#### Defined in

[types.ts:120](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L120)

___

### GatewayResponse

Ƭ **GatewayResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gatewayUrl` | `string` |
| `nodeResponses` | [`NodeResponse`](README.md#noderesponse)[] |

#### Defined in

[types.ts:156](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L156)

___

### NodeResponse

Ƭ **NodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rows?` | [`EncryptedSecretsEntry`](README.md#encryptedsecretsentry)[] |
| `success` | `boolean` |

#### Defined in

[types.ts:151](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L151)

___

### RequestCommitment

Ƭ **RequestCommitment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adminFee` | `BigInt` |
| `callbackGasLimit` | `BigInt` |
| `client` | `string` |
| `coordinator` | `string` |
| `donFee` | `BigInt` |
| `estimatedTotalCostJuels` | `BigInt` |
| `gasOverheadAfterCallback` | `BigInt` |
| `gasOverheadBeforeCallback` | `BigInt` |
| `requestId` | `string` |
| `subscriptionId` | `number` |
| `timeoutTimestamp` | `BigInt` |

#### Defined in

[types.ts:98](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L98)

___

### SimulationResult

Ƭ **SimulationResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `capturedTerminalOutput` | `string` |
| `errorString?` | `string` |
| `responseBytesHexstring?` | `string` |

#### Defined in

[types.ts:196](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L196)

___

### SubCancelConfig

Ƭ **SubCancelConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `refundAddress?` | `string` |
| `subscriptionId` | `BigInt` \| `number` \| `string` |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:61](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L61)

___

### SubConsumerConfig

Ƭ **SubConsumerConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `consumerAddress` | `string` |
| `subscriptionId` | `BigInt` \| `number` \| `string` |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:49](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L49)

___

### SubCreateConfig

Ƭ **SubCreateConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `consumerAddress?` | `string` |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:44](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L44)

___

### SubFundConfig

Ƭ **SubFundConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `juelsAmount` | `BigInt` \| `string` |
| `subscriptionId` | `BigInt` \| `number` \| `string` |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:55](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L55)

___

### SubTimeoutConfig

Ƭ **SubTimeoutConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `requestCommitments` | [`RequestCommitment`](README.md#requestcommitment)[] |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:77](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L77)

___

### SubTransferAcceptConfig

Ƭ **SubTransferAcceptConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `BigInt` \| `number` \| `string` |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:72](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L72)

___

### SubTransferConfig

Ƭ **SubTransferConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `subscriptionId` | `BigInt` \| `number` \| `string` |
| `txOptions?` | [`TransactionOptions`](README.md#transactionoptions) |

#### Defined in

[types.ts:66](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L66)

___

### SubscriptionInfo

Ƭ **SubscriptionInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | `BigInt` |
| `blockedBalance` | `BigInt` |
| `consumers` | `string`[] |
| `flags` | `string` |
| `owner` | `string` |
| `proposedOwner` | `string` |

#### Defined in

[types.ts:89](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L89)

___

### ThresholdPublicKey

Ƭ **ThresholdPublicKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `G_bar` | `string` |
| `Group` | `string` |
| `H` | `string` |
| `HArray` | `string`[] |

#### Defined in

[types.ts:32](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L32)

___

### TransactionOptions

Ƭ **TransactionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |
| `overrides?` | `Overrides` |

#### Defined in

[types.ts:39](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/types.ts#L39)

## Variables

### DEFAULT\_MAX\_EXECUTION\_DURATION\_MS

• `Const` **DEFAULT\_MAX\_EXECUTION\_DURATION\_MS**: ``10000``

#### Defined in

[simulationConfig.ts:84](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L84)

___

### DEFAULT\_MAX\_HTTP\_REQUESTS

• `Const` **DEFAULT\_MAX\_HTTP\_REQUESTS**: ``5``

#### Defined in

[simulationConfig.ts:86](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L86)

___

### DEFAULT\_MAX\_HTTP\_REQUEST\_BYTES

• `Const` **DEFAULT\_MAX\_HTTP\_REQUEST\_BYTES**: ``2048``

#### Defined in

[simulationConfig.ts:89](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L89)

___

### DEFAULT\_MAX\_HTTP\_REQUEST\_DURATION\_MS

• `Const` **DEFAULT\_MAX\_HTTP\_REQUEST\_DURATION\_MS**: ``9000``

#### Defined in

[simulationConfig.ts:87](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L87)

___

### DEFAULT\_MAX\_HTTP\_REQUEST\_URL\_LENGTH

• `Const` **DEFAULT\_MAX\_HTTP\_REQUEST\_URL\_LENGTH**: ``2048``

#### Defined in

[simulationConfig.ts:88](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L88)

___

### DEFAULT\_MAX\_HTTP\_RESPONSE\_BYTES

• `Const` **DEFAULT\_MAX\_HTTP\_RESPONSE\_BYTES**: ``2097152``

#### Defined in

[simulationConfig.ts:90](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L90)

___

### DEFAULT\_MAX\_MEMORY\_USAGE\_MB

• `Const` **DEFAULT\_MAX\_MEMORY\_USAGE\_MB**: ``128``

#### Defined in

[simulationConfig.ts:85](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L85)

___

### DEFAULT\_MAX\_ON\_CHAIN\_RESPONSE\_BYTES

• `Const` **DEFAULT\_MAX\_ON\_CHAIN\_RESPONSE\_BYTES**: ``256``

#### Defined in

[simulationConfig.ts:83](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L83)

___

### callReportGasLimit

• `Const` **callReportGasLimit**: ``5000000``

#### Defined in

[simulationConfig.ts:32](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L32)

___

### simulatedAllowListConfig

• `Const` **simulatedAllowListConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |
| `signerPublicKey` | `string` |

#### Defined in

[simulationConfig.ts:27](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L27)

___

### simulatedAllowListId

• `Const` **simulatedAllowListId**: ``"allowlist1"``

#### Defined in

[simulationConfig.ts:5](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L5)

___

### simulatedCoordinatorConfig

• `Const` **simulatedCoordinatorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `donFee` | `number` |
| `fallbackNativePerUnitLink` | `bigint` |
| `feedStalenessSeconds` | `number` |
| `fulfillmentGasPriceOverEstimationBP` | `number` |
| `gasOverheadAfterCallback` | `number` |
| `gasOverheadBeforeCallback` | `number` |
| `maxCallbackGasLimit` | `number` |
| `maxSupportedRequestDataVersion` | `number` |
| `requestTimeoutSeconds` | `number` |

#### Defined in

[simulationConfig.ts:15](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L15)

___

### simulatedDonId

• `Const` **simulatedDonId**: ``"coordinator1"``

#### Defined in

[simulationConfig.ts:3](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L3)

___

### simulatedLinkEthPrice

• `Const` **simulatedLinkEthPrice**: `bigint`

#### Defined in

[simulationConfig.ts:1](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L1)

___

### simulatedRouterConfig

• `Const` **simulatedRouterConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adminFee` | `number` |
| `gasForCallExactCheck` | `number` |
| `handleOracleFulfillmentSelector` | `string` |
| `maxCallbackGasLimits` | `number`[] |
| `maxConsumersPerSubscription` | `number` |

#### Defined in

[simulationConfig.ts:7](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L7)

___

### simulatedSecretsKeys

• `Const` **simulatedSecretsKeys**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `donKey` | { `privateKey`: `string` ; `publicKey`: `string`  } |
| `donKey.privateKey` | `string` |
| `donKey.publicKey` | `string` |
| `thresholdKeys` | { `privateKeyShares`: { `[address: string]`: `string`;  } ; `publicKey`: `string`  } |
| `thresholdKeys.privateKeyShares` | { `[address: string]`: `string`;  } |
| `thresholdKeys.publicKey` | `string` |

#### Defined in

[simulationConfig.ts:55](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L55)

___

### simulatedTransmitters

• `Const` **simulatedTransmitters**: `string`[]

#### Defined in

[simulationConfig.ts:53](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L53)

___

### simulatedWallets

• `Const` **simulatedWallets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node0` | { `address`: `string` = '0xAe24F6e7e046a0C764DF51F333dE5e2fE360AC72'; `privateKey`: `string` = '0x493f20c367e9c5190b14b8071a6c765da973d41428b841c25e4aaba3577f8ece' } |
| `node0.address` | `string` |
| `node0.privateKey` | `string` |
| `node1` | { `address`: `string` = '0x37d7bf16f6fd8c37b766Fa87e047c68c51dfdf4a'; `privateKey`: `string` = '0x7abd90843922984dda18358a179679e5cabda5ad8d0ebab5714ac044663a6a14' } |
| `node1.address` | `string` |
| `node1.privateKey` | `string` |
| `node2` | { `address`: `string` = '0x6e7EF53D9811B70834902D2D9137DaD2720eAC47'; `privateKey`: `string` = '0xcb8801121add786869aac78ceb4003bf3aa8a68ae8dd31f80d61f5f98eace3c5' } |
| `node2.address` | `string` |
| `node2.privateKey` | `string` |
| `node3` | { `address`: `string` = '0xBe83eA9868AE964f8C46EFa0fea798EbE16441c5'; `privateKey`: `string` = '0x06c7ca21f24edf450251e87097264b1fd184c9570084a78aa3300e937e1954b8' } |
| `node3.address` | `string` |
| `node3.privateKey` | `string` |

#### Defined in

[simulationConfig.ts:34](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulationConfig.ts#L34)

## Functions

### buildRequestCBOR

▸ **buildRequestCBOR**(`requestParams`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParams` | [`FunctionsRequestParams`](README.md#functionsrequestparams) |

#### Returns

`string`

#### Defined in

[buildRequestCBOR.ts:8](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/buildRequestCBOR.ts#L8)

___

### createGist

▸ **createGist**(`githubApiToken`, `content`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `githubApiToken` | `string` |
| `content` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[offchain_storage/github.ts:3](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/offchain_storage/github.ts#L3)

___

### decodeResult

▸ **decodeResult**(`resultHexstring`, `expectedReturnType`): [`DecodedResult`](README.md#decodedresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resultHexstring` | `string` |
| `expectedReturnType` | [`ReturnType`](enums/ReturnType.md) |

#### Returns

[`DecodedResult`](README.md#decodedresult)

#### Defined in

[decodeResult.ts:5](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/decodeResult.ts#L5)

___

### deleteGist

▸ **deleteGist**(`githubApiToken`, `gistURL`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `githubApiToken` | `string` |
| `gistURL` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[offchain_storage/github.ts:69](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/offchain_storage/github.ts#L69)

___

### deployFunctionsOracle

▸ **deployFunctionsOracle**(`deployer`): `Promise`<`FunctionsContracts`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deployer` | `Wallet` |

#### Returns

`Promise`<`FunctionsContracts`\>

#### Defined in

[localFunctionsTestnet.ts:264](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/localFunctionsTestnet.ts#L264)

___

### simulateScript

▸ **simulateScript**(`«destructured»`): `Promise`<[`SimulationResult`](README.md#simulationresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SimulationInput`](interfaces/SimulationInput.md) |

#### Returns

`Promise`<[`SimulationResult`](README.md#simulationresult)\>

#### Defined in

[simulateScript/simulateScript.ts:28](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/simulateScript/simulateScript.ts#L28)

___

### startLocalFunctionsTestnet

▸ **startLocalFunctionsTestnet**(`port?`): `Promise`<{ `adminWallet`: { `address`: `string` ; `privateKey`: `string`  } ; `close`: () => `Promise`<`void`\> ; `getFunds`: (`address`: `string`, `__namedParameters`: { `ethAmount`: `number` ; `linkAmount`: `number`  }) => `Promise`<`void`\> ; `server`: `Server`<`EthereumFlavor`\>  } & `FunctionsContracts`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `port` | `number` | `8545` |

#### Returns

`Promise`<{ `adminWallet`: { `address`: `string` ; `privateKey`: `string`  } ; `close`: () => `Promise`<`void`\> ; `getFunds`: (`address`: `string`, `__namedParameters`: { `ethAmount`: `number` ; `linkAmount`: `number`  }) => `Promise`<`void`\> ; `server`: `Server`<`EthereumFlavor`\>  } & `FunctionsContracts`\>

#### Defined in

[localFunctionsTestnet.ts:50](https://github.com/smartcontractkit/functions-toolkit/blob/1164b15/src/localFunctionsTestnet.ts#L50)
