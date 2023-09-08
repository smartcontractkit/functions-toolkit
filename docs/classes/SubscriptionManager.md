[@chainlink/functions-toolkit](../README.md) / [Exports](../modules.md) / SubscriptionManager

# Class: SubscriptionManager

## Table of contents

### Constructors

- [constructor](SubscriptionManager.md#constructor)

### Properties

- [functionsAllowList](SubscriptionManager.md#functionsallowlist)
- [functionsRouter](SubscriptionManager.md#functionsrouter)
- [initialized](SubscriptionManager.md#initialized)
- [linkToken](SubscriptionManager.md#linktoken)
- [signer](SubscriptionManager.md#signer)

### Methods

- [acceptSubTransfer](SubscriptionManager.md#acceptsubtransfer)
- [addConsumer](SubscriptionManager.md#addconsumer)
- [cancelSubscription](SubscriptionManager.md#cancelsubscription)
- [createSubscription](SubscriptionManager.md#createsubscription)
- [estimateFunctionsRequestCost](SubscriptionManager.md#estimatefunctionsrequestcost)
- [fundSubscription](SubscriptionManager.md#fundsubscription)
- [getSubscriptionInfo](SubscriptionManager.md#getsubscriptioninfo)
- [initialize](SubscriptionManager.md#initialize)
- [isAllowlisted](SubscriptionManager.md#isallowlisted)
- [isInitialized](SubscriptionManager.md#isinitialized)
- [removeConsumer](SubscriptionManager.md#removeconsumer)
- [requestSubscriptionTransfer](SubscriptionManager.md#requestsubscriptiontransfer)
- [timeoutRequests](SubscriptionManager.md#timeoutrequests)

## Constructors

### constructor

• **new SubscriptionManager**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `functionsRouterAddress` | `string` |
| › `linkTokenAddress` | `string` |
| › `signer` | `Signer` |

#### Defined in

[SubscriptionManager.ts:32](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L32)

## Properties

### functionsAllowList

• `Private` `Optional` **functionsAllowList**: `Contract`

#### Defined in

[SubscriptionManager.ts:29](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L29)

___

### functionsRouter

• `Private` **functionsRouter**: `Contract`

#### Defined in

[SubscriptionManager.ts:28](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L28)

___

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[SubscriptionManager.ts:30](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L30)

___

### linkToken

• `Private` **linkToken**: `Contract`

#### Defined in

[SubscriptionManager.ts:27](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L27)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[SubscriptionManager.ts:26](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L26)

## Methods

### acceptSubTransfer

▸ **acceptSubTransfer**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SubTransferAcceptConfig`](../modules.md#subtransferacceptconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:414](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L414)

___

### addConsumer

▸ **addConsumer**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SubConsumerConfig`](../modules.md#subconsumerconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:136](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L136)

___

### cancelSubscription

▸ **cancelSubscription**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SubCancelConfig`](../modules.md#subcancelconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:270](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L270)

___

### createSubscription

▸ **createSubscription**(`subCreateConfig?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subCreateConfig?` | [`SubCreateConfig`](../modules.md#subcreateconfig) |

#### Returns

`Promise`<`number`\>

#### Defined in

[SubscriptionManager.ts:93](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L93)

___

### estimateFunctionsRequestCost

▸ **estimateFunctionsRequestCost**(`«destructured»`): `Promise`<`BigInt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`EstimateCostConfig`](../modules.md#estimatecostconfig) |

#### Returns

`Promise`<`BigInt`\>

#### Defined in

[SubscriptionManager.ts:471](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L471)

___

### fundSubscription

▸ **fundSubscription**(`config`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SubFundConfig`](../modules.md#subfundconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:188](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L188)

___

### getSubscriptionInfo

▸ **getSubscriptionInfo**(`subscriptionId`): `Promise`<[`SubscriptionInfo`](../modules.md#subscriptioninfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `string` \| `number` \| `BigInt` |

#### Returns

`Promise`<[`SubscriptionInfo`](../modules.md#subscriptioninfo)\>

#### Defined in

[SubscriptionManager.ts:248](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L248)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[SubscriptionManager.ts:51](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L51)

___

### isAllowlisted

▸ **isAllowlisted**(`addr`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[SubscriptionManager.ts:83](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L83)

___

### isInitialized

▸ `Private` **isInitialized**(): `void`

#### Returns

`void`

#### Defined in

[SubscriptionManager.ts:75](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L75)

___

### removeConsumer

▸ **removeConsumer**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SubConsumerConfig`](../modules.md#subconsumerconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:318](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L318)

___

### requestSubscriptionTransfer

▸ **requestSubscriptionTransfer**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SubTransferConfig`](../modules.md#subtransferconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:370](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L370)

___

### timeoutRequests

▸ **timeoutRequests**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SubTimeoutConfig`](../modules.md#subtimeoutconfig) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

[SubscriptionManager.ts:447](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SubscriptionManager.ts#L447)
