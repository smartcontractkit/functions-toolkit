import { Contract } from 'ethers'

import { FunctionsRouterSource } from './v1_contract_sources'

import type { BigNumber, providers } from 'ethers'

import { FulfillmentCode, type FunctionsResponse } from './types'

export class ResponseListener {
  private functionsRouter: Contract

  constructor({
    provider,
    functionsRouterAddress,
  }: {
    provider: providers.Provider
    functionsRouterAddress: string
  }) {
    this.functionsRouter = new Contract(functionsRouterAddress, FunctionsRouterSource.abi, provider)
  }

  public async listenForResponse(requestId: string, timeout = 300000): Promise<FunctionsResponse> {
    let expirationTimeout: NodeJS.Timeout
    const responsePromise = new Promise<FunctionsResponse>((resolve, reject) => {
      expirationTimeout = setTimeout(() => {
        reject('Response not received within timeout period')
      }, timeout)

      this.functionsRouter.on(
        'RequestProcessed',
        (
          _requestId: string,
          subscriptionId: BigNumber,
          totalCostJuels: BigNumber,
          _,
          resultCode: number,
          response: string,
          err: string,
          returnData: string,
        ) => {
          if (requestId === _requestId && resultCode !== FulfillmentCode.INVALID_REQUEST_ID) {
            clearTimeout(expirationTimeout)
            this.functionsRouter.removeAllListeners('RequestProcessed')
            resolve({
              requestId,
              subscriptionId: Number(subscriptionId.toString()),
              totalCostInJuels: BigInt(totalCostJuels.toString()),
              responseBytesHexstring: response,
              errorString: Buffer.from(err.slice(2), 'hex').toString(),
              returnDataBytesHexstring: returnData,
              fulfillmentCode: resultCode,
            })
          }
        },
      )
    })

    return await responsePromise
  }

  public listenForResponses(
    subscriptionId: number,
    callback: (functionsResponse: FunctionsResponse) => any,
  ) {
    this.functionsRouter.on(
      'RequestProcessed',
      (
        requestId: string,
        _subscriptionId: BigNumber,
        totalCostJuels: BigNumber,
        _,
        resultCode: number,
        response: string,
        err: string,
        returnData: string,
      ) => {
        if (
          subscriptionId === Number(_subscriptionId.toString()) &&
          resultCode !== FulfillmentCode.INVALID_REQUEST_ID
        ) {
          this.functionsRouter.removeAllListeners('RequestProcessed')
          callback({
            requestId,
            subscriptionId: Number(subscriptionId.toString()),
            totalCostInJuels: BigInt(totalCostJuels.toString()),
            responseBytesHexstring: response,
            errorString: Buffer.from(err.slice(2), 'hex').toString(),
            returnDataBytesHexstring: returnData,
            fulfillmentCode: resultCode,
          })
        }
      },
    )
  }

  public stopListeningForResponses() {
    this.functionsRouter.removeAllListeners('RequestProcessed')
  }
}
