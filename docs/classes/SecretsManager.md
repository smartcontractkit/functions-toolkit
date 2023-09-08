[@chainlink/functions-toolkit](../README.md) / [Exports](../modules.md) / SecretsManager

# Class: SecretsManager

## Table of contents

### Constructors

- [constructor](SecretsManager.md#constructor)

### Properties

- [donId](SecretsManager.md#donid)
- [functionsCoordinator](SecretsManager.md#functionscoordinator)
- [functionsRouter](SecretsManager.md#functionsrouter)
- [initialized](SecretsManager.md#initialized)
- [signer](SecretsManager.md#signer)

### Methods

- [buildDONHostedEncryptedSecretsReference](SecretsManager.md#builddonhostedencryptedsecretsreference)
- [createGatewayMessage](SecretsManager.md#creategatewaymessage)
- [createGatewayMessageBody](SecretsManager.md#creategatewaymessagebody)
- [encryptSecrets](SecretsManager.md#encryptsecrets)
- [encryptSecretsUrls](SecretsManager.md#encryptsecretsurls)
- [extractNodeResponses](SecretsManager.md#extractnoderesponses)
- [fetchKeys](SecretsManager.md#fetchkeys)
- [initialize](SecretsManager.md#initialize)
- [isInitialized](SecretsManager.md#isinitialized)
- [listDONHostedEncryptedSecrets](SecretsManager.md#listdonhostedencryptedsecrets)
- [sendMessageToGateways](SecretsManager.md#sendmessagetogateways)
- [uploadEncryptedSecretsToDON](SecretsManager.md#uploadencryptedsecretstodon)
- [validateGatewayUrls](SecretsManager.md#validategatewayurls)
- [verifyDONHostedSecrets](SecretsManager.md#verifydonhostedsecrets)
- [verifyOffchainSecrets](SecretsManager.md#verifyoffchainsecrets)

## Constructors

### constructor

• **new SecretsManager**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `donId` | `string` |
| › `functionsRouterAddress` | `string` |
| › `signer` | `Signer` |

#### Defined in

[SecretsManager.ts:27](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L27)

## Properties

### donId

• `Private` `Optional` **donId**: `string`

#### Defined in

[SecretsManager.ts:24](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L24)

___

### functionsCoordinator

• `Private` **functionsCoordinator**: `Contract`

#### Defined in

[SecretsManager.ts:23](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L23)

___

### functionsRouter

• `Private` **functionsRouter**: `Contract`

#### Defined in

[SecretsManager.ts:22](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L22)

___

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[SecretsManager.ts:25](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L25)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[SecretsManager.ts:21](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L21)

## Methods

### buildDONHostedEncryptedSecretsReference

▸ **buildDONHostedEncryptedSecretsReference**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `slotId` | `number` |
| › `version` | `number` |

#### Returns

`string`

#### Defined in

[SecretsManager.ts:464](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L464)

___

### createGatewayMessage

▸ `Private` **createGatewayMessage**(`«destructured»`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GatewayMessageConfig`](../modules.md#gatewaymessageconfig) |

#### Returns

`Promise`<`string`\>

#### Defined in

[SecretsManager.ts:317](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L317)

___

### createGatewayMessageBody

▸ `Private` **createGatewayMessageBody**(`«destructured»`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GatewayMessageBody`](../modules.md#gatewaymessagebody) |

#### Returns

`Buffer`

#### Defined in

[SecretsManager.ts:343](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L343)

___

### encryptSecrets

▸ **encryptSecrets**(`secrets?`): `Promise`<{ `encryptedSecrets`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secrets?` | `Record`<`string`, `string`\> |

#### Returns

`Promise`<{ `encryptedSecrets`: `string`  }\>

#### Defined in

[SecretsManager.ts:141](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L141)

___

### encryptSecretsUrls

▸ **encryptSecretsUrls**(`secretsUrls`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretsUrls` | `string`[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[SecretsManager.ts:92](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L92)

___

### extractNodeResponses

▸ `Private` **extractNodeResponses**(`gatewayResponse`): [`NodeResponse`](../modules.md#noderesponse)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayResponse` | `AxiosResponse`<`any`, `any`\> |

#### Returns

[`NodeResponse`](../modules.md#noderesponse)[]

#### Defined in

[SecretsManager.ts:381](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L381)

___

### fetchKeys

▸ **fetchKeys**(): `Promise`<{ `donPublicKey`: `string` ; `thresholdPublicKey`: [`ThresholdPublicKey`](../modules.md#thresholdpublickey)  }\>

#### Returns

`Promise`<{ `donPublicKey`: `string` ; `thresholdPublicKey`: [`ThresholdPublicKey`](../modules.md#thresholdpublickey)  }\>

a Promise that resolves to an object that contains the DONpublicKey and an object that maps node addresses to their public keys

#### Defined in

[SecretsManager.ts:76](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L76)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[SecretsManager.ts:46](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L46)

___

### isInitialized

▸ `Private` **isInitialized**(): `void`

#### Returns

`void`

#### Defined in

[SecretsManager.ts:67](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L67)

___

### listDONHostedEncryptedSecrets

▸ **listDONHostedEncryptedSecrets**(`gatewayUrls`): `Promise`<{ `error?`: `string` ; `result`: [`GatewayResponse`](../modules.md#gatewayresponse)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayUrls` | `string`[] |

#### Returns

`Promise`<{ `error?`: `string` ; `result`: [`GatewayResponse`](../modules.md#gatewayresponse)[]  }\>

#### Defined in

[SecretsManager.ts:403](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L403)

___

### sendMessageToGateways

▸ `Private` **sendMessageToGateways**(`gatewayRpcMessageConfig`): `Promise`<[`GatewayResponse`](../modules.md#gatewayresponse)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayRpcMessageConfig` | [`GatewayMessageConfig`](../modules.md#gatewaymessageconfig) |

#### Returns

`Promise`<[`GatewayResponse`](../modules.md#gatewayresponse)[]\>

#### Defined in

[SecretsManager.ts:284](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L284)

___

### uploadEncryptedSecretsToDON

▸ **uploadEncryptedSecretsToDON**(`«destructured»`): `Promise`<{ `success`: `boolean` ; `version`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `encryptedSecretsHexstring` | `string` |
| › `gatewayUrls` | `string`[] |
| › `minutesUntilExpiration` | `number` |
| › `storageSlotId` | `number` |

#### Returns

`Promise`<{ `success`: `boolean` ; `version`: `number`  }\>

#### Defined in

[SecretsManager.ts:186](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L186)

___

### validateGatewayUrls

▸ `Private` **validateGatewayUrls**(`gatewayUrls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayUrls` | `string`[] |

#### Returns

`void`

#### Defined in

[SecretsManager.ts:270](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L270)

___

### verifyDONHostedSecrets

▸ `Private` **verifyDONHostedSecrets**(`gatewayResponses`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayResponses` | [`GatewayResponse`](../modules.md#gatewayresponse)[] |

#### Returns

`void`

#### Defined in

[SecretsManager.ts:423](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L423)

___

### verifyOffchainSecrets

▸ **verifyOffchainSecrets**(`secretsUrls`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretsUrls` | `string`[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[SecretsManager.ts:109](https://github.com/smartcontractkit/functions-toolkit/blob/bbc061a/src/SecretsManager.ts#L109)
