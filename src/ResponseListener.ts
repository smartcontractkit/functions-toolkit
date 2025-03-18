import { Contract } from 'ethers'

import { FunctionsRouterSource } from './v1_contract_sources'

import type { BigNumber, providers } from 'ethers'

import { FunctionsTopics } from './events'
import { FulfillmentCode, type FunctionsResponse } from './types'

export class ResponseListener {
  private functionsRouter: Contract
  private provider: providers.Provider

  constructor({
    provider,
    functionsRouterAddress,
  }: {
    provider: providers.Provider
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

          // There must be logs in the receipt otherwise it's a chain that doesn't support logs or the tx was reverted
          if (!receipt.logs) {
            throw new Error('No logs found in the transaction receipt')
          }

          // Find the RequestStart event in the logs
          const requestStartLog = receipt.logs.find(
            log => log.topics[0] === FunctionsTopics.RequestStart,
          )

          // Ensure the requestID exists in the logs
          if (!requestStartLog) {
            throw new Error('RequestStart event not found in the logs')
          }

          if (!requestStartLog.topics[1]) {
            throw new Error('Request ID not found in the logs')
          }

          const updatedId = requestStartLog.topics[1]
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
      { topics: [FunctionsTopics.RequestProcessed] },
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
