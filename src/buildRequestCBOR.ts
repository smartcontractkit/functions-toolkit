import cbor from 'cbor'
import { utils } from 'ethers'

import { Location, CodeLanguage } from './types'

import type { FunctionsRequestParams } from './types'

export const buildRequestCBOR = (requestParams: FunctionsRequestParams): string => {
  if (
    typeof requestParams.codeLocation !== 'number' ||
    requestParams.codeLocation !== Location.Inline
  ) {
    throw Error('Invalid codeLocation')
  }

  if (
    typeof requestParams.codeLanguage !== 'number' ||
    requestParams.codeLanguage !== CodeLanguage.JavaScript
  ) {
    throw Error('Invalid codeLanguage')
  }

  if (typeof requestParams.source !== 'string') {
    throw Error('Invalid source')
  }

  const request: {
    codeLocation: number
    secretsLocation?: number
    codeLanguage: number
    source: string
    secrets?: Buffer
    args?: string[]
    bytesArgs?: Buffer[]
  } = {
    codeLocation: requestParams.codeLocation,
    codeLanguage: requestParams.codeLanguage,
    source: requestParams.source,
  }

  if (requestParams.encryptedSecretsReference) {
    if (!utils.isHexString(requestParams.encryptedSecretsReference)) {
      throw Error('Invalid encryptedSecretsReference')
    }
    if (
      typeof requestParams.secretsLocation !== 'number' ||
      (requestParams.secretsLocation !== Location.DONHosted &&
        requestParams.secretsLocation !== Location.Remote)
    ) {
      throw Error('Invalid secretsLocation')
    }
    request.secretsLocation = requestParams.secretsLocation
    request.secrets = Buffer.from(requestParams.encryptedSecretsReference.slice(2), 'hex')
  }

  if (requestParams.args) {
    if (
      !Array.isArray(requestParams.args) ||
      !requestParams.args.every(arg => typeof arg === 'string')
    ) {
      throw Error('Invalid args')
    }
    request.args = requestParams.args
  }

  if (requestParams.bytesArgs) {
    if (
      !Array.isArray(requestParams.bytesArgs) ||
      !requestParams.bytesArgs.every(arg => utils.isHexString(arg))
    ) {
      throw Error('Invalid bytesArgs')
    }
    request.bytesArgs = requestParams.bytesArgs.map(arg => Buffer.from(arg.slice(2), 'hex'))
  }

  return '0x' + cbor.encodeCanonical(request).toString('hex')
}
