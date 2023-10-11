// secrets, args & bytesArgs are made available to the user's script
// deno-lint-ignore no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [secrets, args, bytesArgs] = [
  JSON.parse(atob(Deno.args[0])),
  JSON.parse(atob(Deno.args[1])),
  JSON.parse(atob(Deno.args[2])),
]

const ___1__ = fetch

const __2___ = (() => {
  class Proxy {
    private server?: Deno.Listener
    private conns: Deno.Conn[] = []
    private httpConns: Deno.HttpConn[] = []
    private fetchControllers: AbortController[] = []
    private httpQueryCount = 0

    constructor(
      private maxHttpQueries: number,
      private maxHttpQueryDurationMs: number,
      private maxHttpQueryUrlLength: number,
      private maxHttpQueryRequestBytes: number,
      private maxHttpQueryResponseBytes: number,
      public port?: number,
    ) {
      this.server = Deno.listen({ port: port ?? 0 })
      ;(async () => {
        for await (const conn of this.server!) {
          this.conns.push(conn)
          const httpConn = Deno.serveHttp(conn)
          this.httpConns.push(httpConn)
          this.handleHttpConnection(httpConn)
        }
      })()
      this.port = (this.server.addr as Deno.NetAddr).port
    }

    private handleHttpConnection = async (httpConn: Deno.HttpConn): Promise<void> => {
      for await (const requestEvent of httpConn) {
        try {
          const response = await this.handleProxyRequest(requestEvent)
          await requestEvent.respondWith(response)
        } catch {
          // Client may have already closed connection
        }
      }
    }

    private handleProxyRequest = async (requestEvent: Deno.RequestEvent): Promise<Response> => {
      let proxyRequestTimeout: number | undefined
      try {
        this.httpQueryCount++
        if (this.httpQueryCount > this.maxHttpQueries) {
          return new Response(
            JSON.stringify({ error: `Exceeded maximum of ${this.maxHttpQueries} HTTP queries` }),
            {
              status: 429,
            },
          )
        }

        const originalUrl = new URL(requestEvent.request.url)
        const targetUrlParam = originalUrl.searchParams.get('target')
        if (!targetUrlParam) {
          return new Response(JSON.stringify({ error: 'Missing target URL parameter' }), {
            status: 400,
          })
        }

        const targetUrl = decodeURIComponent(targetUrlParam)
        if (targetUrl.toString().length > this.maxHttpQueryUrlLength) {
          return new Response(
            JSON.stringify({
              error: `Destination URL exceeds maximum length of ${this.maxHttpQueryUrlLength}`,
            }),
            { status: 414 },
          )
        }

        const { result: proxyReqBody, wasSizeExceeded: wasReqPayloadSizeExceeded } =
          await this.readStreamWithLimit(requestEvent.request.body, this.maxHttpQueryRequestBytes)
        if (wasReqPayloadSizeExceeded) {
          return new Response(
            JSON.stringify({
              error: `Request payload size exceeds ${this.maxHttpQueryRequestBytes} byte limit`,
            }),
            { status: 413 },
          )
        }

        const controller = new AbortController()
        this.fetchControllers.push(controller)
        proxyRequestTimeout = setTimeout(() => controller.abort(), this.maxHttpQueryDurationMs)

        const proxyFetch = await ___1__(targetUrl, {
          body: proxyReqBody ? proxyReqBody : undefined,
          cache: requestEvent.request.cache,
          credentials: requestEvent.request.credentials,
          headers: requestEvent.request.headers,
          integrity: requestEvent.request.integrity,
          keepalive: requestEvent.request.keepalive,
          method: requestEvent.request.method,
          mode: requestEvent.request.mode,
          redirect: requestEvent.request.redirect,
          referrer: requestEvent.request.referrer,
          referrerPolicy: requestEvent.request.referrerPolicy,
          signal: controller.signal,
        })
        clearTimeout(proxyRequestTimeout)

        const { result: proxyFetchBody, wasSizeExceeded: wasResBodySizeExceeded } =
          await this.readStreamWithLimit(proxyFetch.body, this.maxHttpQueryResponseBytes)
        if (wasResBodySizeExceeded) {
          return new Response(
            JSON.stringify({
              error: `Response payload size exceeds ${this.maxHttpQueryResponseBytes} byte limit`,
            }),
            { status: 413 },
          )
        }

        return new Response(proxyFetchBody ? proxyFetchBody : undefined, {
          headers: proxyFetch.headers,
          status: proxyFetch.status,
          statusText: proxyFetch.statusText,
        })
      } catch (e) {
        proxyRequestTimeout ? clearTimeout(proxyRequestTimeout) : null
        if (e?.name === 'AbortError') {
          return new Response(
            JSON.stringify({
              error: `HTTP query exceeded time limit of ${this.maxHttpQueryDurationMs}ms`,
            }),
            {
              status: 400,
            },
          )
        }
        return new Response(JSON.stringify({ error: 'Error during fetch request' }), {
          status: 400,
        })
      }
    }

    private readStreamWithLimit = async (
      stream: ReadableStream<Uint8Array> | null,
      maxPayloadSize: number,
    ): Promise<{ result: Uint8Array | null; wasSizeExceeded: boolean }> => {
      if (maxPayloadSize > 2 ** 32) {
        throw new Error('maxPayloadSize must be less than 2^32')
      }
      if (!stream) {
        return { result: null, wasSizeExceeded: false }
      }

      const reader = stream.getReader()
      const chunks: Uint8Array[] = []
      let totalLength = 0
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read()
        if (value) {
          if (value.length + totalLength > maxPayloadSize) {
            await this.cancelReaderAndStream(stream, reader)
            return { result: null, wasSizeExceeded: true }
          }
          chunks.push(value)
          totalLength += value.length
        }
        if (done) {
          break
        }
      }

      await this.cancelReaderAndStream(stream, reader)

      if (chunks.length === 0) {
        return { result: null, wasSizeExceeded: false }
      }

      const payload = new Uint8Array(totalLength)
      let offset = 0
      for (const chunk of chunks) {
        payload.set(chunk, offset)
        offset += chunk.length
      }
      return { result: payload, wasSizeExceeded: false }
    }

    private cancelReaderAndStream = async (
      stream: ReadableStream<Uint8Array>,
      reader: ReadableStreamDefaultReader<Uint8Array>,
    ): Promise<void> => {
      try {
        reader.releaseLock()
      } catch {
        // Reader may have already been released
      }
      try {
        await reader.cancel()
      } catch {
        // Reader may have already been canceled
      }
      try {
        await stream.cancel()
      } catch {
        // Stream may have already been canceled
      }
    }

    public close = (): void => {
      this.server?.close()
      this.conns.forEach(conn => {
        try {
          conn.close()
        } catch {
          // Client may have already closed connection
        }
      })
      this.httpConns.forEach(httpConn => {
        try {
          httpConn.close()
        } catch {
          // Client may have already closed connection
        }
      })
      // Abort any pending fetches when the server is closed
      this.fetchControllers.forEach(controller => {
        try {
          controller.abort()
        } catch {
          // Controller may have already been aborted
        }
      })
    }
  }

  return new Proxy(
    Number(Deno.args[3]), // numAllowedQueries
    Number(Deno.args[4]), // maxQueryDurationMs
    Number(Deno.args[5]), // maxQueryUrlLength
    Number(Deno.args[6]), // maxQueryRequestBytes
    Number(Deno.args[7]), // maxQueryResponseBytes
  )
})()

// Expose a modified version fetch function which routes all requests through the proxy
globalThis.fetch = (input: string | Request | URL, init?: RequestInit | undefined) => {
  const url = new URL(`http://localhost:${__2___.port}`)
  if (input instanceof Request) {
    url.searchParams.append('target', encodeURIComponent(input.url.toString()))
    input = {
      ...input,
      url: url.toString(),
    }
  } else if (typeof input === 'string' || input instanceof URL) {
    url.searchParams.append('target', encodeURIComponent(input.toString()))
    input = url.toString()
  } else {
    throw new Error('fetch only accepts string, URL or Request object')
  }
  return ___1__(input, init)
}

interface RequestOptions {
  url: string
  method?: HttpMethod
  params?: Record<string, string>
  headers?: Record<string, string>
  data?: Record<string, unknown>
  timeout?: number
  responseType?: ResponseType
}

type HttpMethod = 'get' | 'head' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace'

type ResponseType = 'json' | 'arraybuffer' | 'document' | 'text' | 'stream'

interface SuccessResponse {
  error: false
  data?: unknown
  status: number
  statusText: string
  headers?: Record<string, string>
}

interface ErrorResponse {
  error: true
  message?: string
  code?: string
  response?: Response
}

// Functions library for use by user's script
// deno-lint-ignore no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Functions = {
  makeHttpRequest: async ({
    url,
    method = 'get',
    params,
    headers,
    data,
    timeout = 3000,
    responseType = 'json',
  }: RequestOptions): Promise<SuccessResponse | ErrorResponse> => {
    try {
      if (params) {
        url += '?' + new URLSearchParams(params).toString()
      }

      // Setup controller for timeout
      const controller = new AbortController()
      const id = setTimeout(() => controller.abort(), timeout)
      const result = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
        signal: controller.signal,
      })
      clearTimeout(id)

      if (result.status >= 400) {
        const errorResponse: ErrorResponse = {
          error: true,
          message: result.statusText,
          code: result.status.toString(),
          response: result,
        }
        return errorResponse
      }

      const successResponse: SuccessResponse = {
        error: false,
        status: result.status,
        statusText: result.statusText,
        headers: result.headers ? Object.fromEntries(result.headers.entries()) : undefined,
      }

      switch (responseType) {
        case 'json':
          successResponse.data = await result.json()
          break
        case 'arraybuffer':
          successResponse.data = await result.arrayBuffer()
          break
        case 'document':
          successResponse.data = await result.text()
          break
        case 'text':
          successResponse.data = await result.text()
          break
        case 'stream':
          successResponse.data = result.body
          break
        default:
          throw new Error('invalid response type')
      }

      return successResponse
    } catch (e) {
      return {
        error: true,
        message: e?.toString?.(),
      }
    }
  },

  encodeUint256: (num: bigint | number): Uint8Array => {
    if (typeof num !== 'number' && typeof num !== 'bigint') {
      throw new Error('input into Functions.encodeUint256 is not a number or bigint')
    }
    if (typeof num === 'number') {
      if (!Number.isInteger(num)) {
        throw new Error('input into Functions.encodeUint256 is not an integer')
      }
    }
    num = BigInt(num)
    if (num < 0) {
      throw new Error('input into Functions.encodeUint256 is negative')
    }
    if (num > 2n ** 256n - 1n) {
      throw new Error('input into Functions.encodeUint256 is too large')
    }

    let hexStr = num.toString(16) // Convert to hexadecimal
    hexStr = hexStr.padStart(64, '0') // Pad with leading zeros
    if (hexStr.length > 64) {
      throw new Error('input is too large')
    }
    const arr = new Uint8Array(32)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(hexStr.slice(i * 2, i * 2 + 2), 16)
    }
    return arr
  },

  encodeInt256: (num: bigint | number): Uint8Array => {
    if (typeof num !== 'number' && typeof num !== 'bigint') {
      throw new Error('input into Functions.encodeInt256 is not a number or bigint')
    }
    if (typeof num === 'number') {
      if (!Number.isInteger(num)) {
        throw new Error('input into Functions.encodeUint256 is not an integer')
      }
    }
    num = BigInt(num)
    if (num < -(2n ** 255n)) {
      throw new Error('input into Functions.encodeInt256 is too small')
    }
    if (num > 2n ** 255n - 1n) {
      throw new Error('input into Functions.encodeInt256 is too large')
    }

    let hexStr
    if (num >= BigInt(0)) {
      hexStr = num.toString(16) // Convert to hexadecimal
    } else {
      // Calculate two's complement for negative numbers
      const absVal = -num
      let binStr = absVal.toString(2) // Convert to binary
      binStr = binStr.padStart(256, '0') // Pad to 256 bits
      // Invert bits
      let invertedBinStr = ''
      for (const bit of binStr) {
        invertedBinStr += bit === '0' ? '1' : '0'
      }
      // Add one
      let invertedBigInt = BigInt('0b' + invertedBinStr)
      invertedBigInt += 1n
      hexStr = invertedBigInt.toString(16) // Convert to hexadecimal
    }
    hexStr = hexStr.padStart(64, '0') // Pad with leading zeros
    if (hexStr.length > 64) {
      throw new Error('input is too large')
    }
    const arr = new Uint8Array(32)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(hexStr.slice(i * 2, i * 2 + 2), 16)
    }
    return arr
  },

  encodeString: (str: string): Uint8Array => {
    const encoder = new TextEncoder()
    return encoder.encode(str)
  },
}

try {
  const userScript = (async () => {
    //INJECT_USER_CODE_HERE
  }) as () => Promise<unknown>
  const result = await userScript()

  if (!(result instanceof ArrayBuffer) && !(result instanceof Uint8Array)) {
    throw Error('returned value not an ArrayBuffer or Uint8Array')
  }

  const arrayBufferToHex = (input: ArrayBuffer | Uint8Array): string => {
    let hex = ''
    const uInt8Array = new Uint8Array(input)

    uInt8Array.forEach(byte => {
      hex += byte.toString(16).padStart(2, '0')
    })

    return '0x' + hex
  }

  console.log(
    '\n' +
      JSON.stringify({
        success: arrayBufferToHex(result),
      }),
  )
} catch (e: unknown) {
  let error: Error
  if (e instanceof Error) {
    error = e
  } else if (typeof e === 'string') {
    error = new Error(e)
  } else {
    error = new Error(`invalid value thrown of type ${typeof e}`)
  }

  console.log(
    '\n' +
      JSON.stringify({
        error: {
          name: error?.name ?? 'Error',
          message: error?.message ?? 'invalid value returned',
          details: error?.stack ?? undefined,
        },
      }),
  )
} finally {
  __2___.close()
}
