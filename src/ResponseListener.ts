import { Contract } from 'ethers'

import { FunctionsRouterSource } from './v1_contract_sources'

import type { BigNumberish, Provider } from 'ethers'

import { FulfillmentCode, type FunctionsResponse } from './types'

export class ResponseListener {
  private functionsRouter: Contract
  private provider: Provider

  constructor({
    provider,
    functionsRouterAddress,
  }: {
    provider: Provider
    functionsRouterAddress: string
  }) {
    this.provider = provider
    this.functionsRouter = new Contract(functionsRouterAddress, FunctionsRouterSource.abi, provider)
  }

  public async listenForResponse(
    requestId: string,
    timeoutMs = 300000,
  ): Promise<FunctionsResponse> {
    let expirationTimeout: NodeJS.Timeout
    const responsePromise = new Promise<FunctionsResponse>((resolve, reject) => {
      expirationTimeout = setTimeout(() => {
        reject('Response not received within timeout period')
      }, timeoutMs)

      this.functionsRouter.on(
        'RequestProcessed',
        (
          _requestId: string,
          subscriptionId: BigNumberish,
          totalCostJuels: BigNumberish,
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

    return responsePromise
  }

  /**
   *
   * @param txHash Tx hash for the Functions Request
   * @param timeoutMs after which the listener throws, indicating  the time limit was exceeded (default 5 minutes)
   * @param confirmations  number of confirmations to wait for before considering the transaction successful (default 1, but recommend 2 or more)
   * @param checkIntervalMs frequency of checking if the Tx is  included on-chain (or if it got moved after a chain re-org) (default 2 seconds. Intervals longer than block time may cause the listener to wait indefinitely.)
   * @returns
   */
  public async listenForResponseFromTransaction(
    txHash: string,
    timeoutMs = 3000000,
    confirmations = 1,
    checkIntervalMs = 2000,
  ): Promise<FunctionsResponse> {
    return new Promise<FunctionsResponse>((resolve, reject) => {
      ;(async () => {
        let requestId: string
        // eslint-disable-next-line prefer-const
        let checkTimeout: NodeJS.Timeout
        const expirationTimeout = setTimeout(() => {
          reject('Response not received within timeout period')
        }, timeoutMs)

        const check = async () => {
          const receipt = await this.provider.waitForTransaction(txHash, confirmations, timeoutMs)
          const updatedId = receipt!.logs[0].topics[1]
          if (updatedId !== requestId) {
            requestId = updatedId
            const response = await this.listenForResponse(requestId, timeoutMs)
            if (updatedId === requestId) {
              // Resolve only if the ID hasn't changed in the meantime
              clearTimeout(expirationTimeout)
              clearInterval(checkTimeout)
              resolve(response)
            }
          }
        }

        // Check periodically if the transaction has been re-orged and requestID changed
        checkTimeout = setInterval(check, checkIntervalMs)

        check()
      })()
    })
  }

  public listenForResponses(
    subscriptionId: number | string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (functionsResponse: FunctionsResponse) => any,
  ) {
    if (typeof subscriptionId === 'string') {
      subscriptionId = Number(subscriptionId)
    }

    this.functionsRouter.on(
      'RequestProcessed',
      (
        requestId: string,
        _subscriptionId: BigNumberish,
        totalCostJuels: BigNumberish,
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
