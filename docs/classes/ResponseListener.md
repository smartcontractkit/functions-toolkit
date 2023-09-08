[@chainlink/functions-toolkit](../README.md) / [Exports](../modules.md) / ResponseListener

# Class: ResponseListener

## Table of contents

### Constructors

- [constructor](ResponseListener.md#constructor)

### Properties

- [functionsRouter](ResponseListener.md#functionsrouter)

### Methods

- [listenForResponse](ResponseListener.md#listenforresponse)
- [listenForResponses](ResponseListener.md#listenforresponses)
- [stopListeningForResponses](ResponseListener.md#stoplisteningforresponses)

## Constructors

### constructor

• **new ResponseListener**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `functionsRouterAddress` | `string` |
| › `provider` | `Provider` |

#### Defined in

[ResponseListener.ts:12](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/ResponseListener.ts#L12)

## Properties

### functionsRouter

• `Private` **functionsRouter**: `Contract`

#### Defined in

[ResponseListener.ts:10](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/ResponseListener.ts#L10)

## Methods

### listenForResponse

▸ **listenForResponse**(`requestId`, `timeout?`): `Promise`<[`FunctionsResponse`](../modules.md#functionsresponse)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestId` | `string` | `undefined` |
| `timeout` | `number` | `300000` |

#### Returns

`Promise`<[`FunctionsResponse`](../modules.md#functionsresponse)\>

#### Defined in

[ResponseListener.ts:22](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/ResponseListener.ts#L22)

___

### listenForResponses

▸ **listenForResponses**(`subscriptionId`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `callback` | (`functionsResponse`: [`FunctionsResponse`](../modules.md#functionsresponse)) => `any` |

#### Returns

`void`

#### Defined in

[ResponseListener.ts:61](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/ResponseListener.ts#L61)

___

### stopListeningForResponses

▸ **stopListeningForResponses**(): `void`

#### Returns

`void`

#### Defined in

[ResponseListener.ts:96](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/ResponseListener.ts#L96)
