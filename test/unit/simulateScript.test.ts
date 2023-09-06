import http from 'http'

import { simulateScript } from '../../src'

import type { AddressInfo } from 'net'

describe('simulateScript', () => {
  describe('successful simulation', () => {
    it('simulates script', async () => {
      const result = await simulateScript({
        source: `console.log('start'); return Functions.encodeString(args[0] + bytesArgs[0] + secrets.key);`,
        args: ['MockArg'],
        bytesArgs: ['0x1234'],
        secrets: {
          key: 'MockSecret',
        },
      })

      const expected = {
        capturedTerminalOutput: `start\n`,
        responseBytesHexstring: '0x4d6f636b4172673078313233344d6f636b536563726574',
      }

      expect(result).toEqual(expected)
    })

    it('simulates script with HTTP request', async () => {
      const server = createTestServer()
      const port = (server.address() as AddressInfo).port

      console.log(port)

      const result = await simulateScript({
        source: `const response = await fetch('http://localhost:${port}'); const jsonResponse = await response.json(); console.log(jsonResponse); return Functions.encodeString(jsonResponse.message);`,
      })

      console.log(result)

      const expected = {
        capturedTerminalOutput: '{ message: "Hello, world!" }\n',
        responseBytesHexstring: '0x48656c6c6f2c20776f726c6421',
      }

      expect(result).toEqual(expected)

      server.close()
    })

    it('should handle multiple simultaneous HTTP requests', async () => {
      const server = createTestServer()
      const port = (server.address() as AddressInfo).port
      const url = `http://localhost:${port}`

      const result = await simulateScript({
        source: `const req1 = fetch('${url}'); const req2 = fetch('${url}'); const req3 = fetch('${url}');\
        const [ res1, res2, res3 ] = await Promise.all([req1, req2, req3]);\
        const [ json1, json2, json3 ] = await Promise.all([res1.json(), res2.json(), res3.json()]);\
        console.log(json1); console.log(json2); console.log(json3);\
        return Functions.encodeString(json1.message + json2.message + json3.message);`,
      })

      const expected = {
        capturedTerminalOutput:
          '{ message: "Hello, world!" }\n{ message: "Hello, world!" }\n{ message: "Hello, world!" }\n',
        responseBytesHexstring:
          '0x48656c6c6f2c20776f726c642148656c6c6f2c20776f726c642148656c6c6f2c20776f726c6421',
      }

      expect(result).toEqual(expected)

      server.close()
    })

    it('should handle script with type error', async () => {
      const result = await simulateScript({
        source: `const myString: string = 123; return Functions.encodeUint256(myString);`,
      })

      const expected = {
        capturedTerminalOutput: '',
        responseBytesHexstring:
          '0x000000000000000000000000000000000000000000000000000000000000007b',
      }

      expect(result).toEqual(expected)
    })
  })

  describe('handle errors during simulation', () => {
    it('should handle when HTTP request takes longer than max time', async () => {
      const server = createTestServerWithResponseDelay()
      const port = (server.address() as AddressInfo).port

      const result = await simulateScript({
        source: `const response = await fetch('http://localhost:${port}'); const jsonResponse = await response.json(); console.log(jsonResponse); return Functions.encodeUint256(1);`,
        maxQueryDurationMs: 50,
      })

      const expected = {
        capturedTerminalOutput: '{ error: "HTTP query exceeded time limit of 50ms" }\n',
        responseBytesHexstring:
          '0x0000000000000000000000000000000000000000000000000000000000000001',
      }

      expect(result).toEqual(expected)

      server.close()
    })
    it('should handle when response size is exceeded', async () => {
      const result = await simulateScript({
        source: `console.log('start'); return Functions.encodeString('0123456789012');`,
        maxOnChainResponseBytes: 10,
      })

      const expected = {
        capturedTerminalOutput: 'start\n',
        errorString: 'response >10 bytes',
      }

      expect(result).toEqual(expected)
    })

    it('should handle when script throws error', async () => {
      const result = await simulateScript({
        source: `throw new Error('test');`,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'test',
      }

      expect(result).toEqual(expected)
    })

    it('should handle when script throws string', async () => {
      const result = await simulateScript({
        source: `throw 'test';`,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'test',
      }

      expect(result).toEqual(expected)
    })

    it('should handle when script throws unsupported value', async () => {
      const result = await simulateScript({
        source: `throw 123;`,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'invalid value thrown of type number',
      }

      expect(result).toEqual(expected)
    })

    it('should capture syntax error', async () => {
      const result = await simulateScript({
        source: `console.log('start'); return Functions.encodeString(`,
      })

      expect(result.capturedTerminalOutput).toContain(
        "The module's source code could not be parsed",
      )
      expect(result.errorString).toBe('syntax error, RAM exceeded, or other error')
    })

    it('should capture incorrect return value', async () => {
      const result = await simulateScript({
        source: `return 'invalid'`,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'returned value not an ArrayBuffer or Uint8Array',
      }

      expect(result).toEqual(expected)
    })

    it('should handle when no value is returned', async () => {
      const result = await simulateScript({
        source: `return`,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'returned value not an ArrayBuffer or Uint8Array',
      }

      expect(result).toEqual(expected)
    })

    it('should capture timeout error', async () => {
      const result = await simulateScript({
        source: `while (true) {}`,
        maxExecutionTimeMs: 100,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'script runtime exceeded',
      }

      expect(result).toEqual(expected)
    })

    it('should capture import error', async () => {
      const result = await simulateScript({
        source: `const http = await import("https://deno.land/std/http/mod.ts");`,
        maxExecutionTimeMs: 100,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString:
          'A remote specifier was requested: "https://deno.land/std/http/mod.ts", but --no-remote is specified.',
      }

      expect(result).toEqual(expected)
    })

    it('should capture permissions error', async () => {
      const result = await simulateScript({
        source: `Deno.openSync('test.txt')`,
        maxExecutionTimeMs: 100,
      })

      const expected = {
        capturedTerminalOutput: '',
        errorString: 'attempted access to blocked resource detected',
      }

      expect(result).toEqual(expected)
    })
  })

  describe('validation errors', () => {
    it('should throw error for invalid source', async () => {
      const result = simulateScript({
        source: 123 as any,
      })

      await expect(result).rejects.toThrow('source param is missing or invalid')
    })

    it('should throw error for invalid secrets', async () => {
      const result = simulateScript({
        source: `return`,
        secrets: { bad: 1 } as any,
      })

      await expect(result).rejects.toThrow('secrets param not a string map')
    })

    it('should throw error for invalid args', async () => {
      const result = simulateScript({
        source: `return`,
        args: 123 as any,
      })

      await expect(result).rejects.toThrow('args param not an array')
    })

    it('should throw error when an element of args is not a string', async () => {
      const result = simulateScript({
        source: `return`,
        args: [123] as any,
      })

      await expect(result).rejects.toThrow('args param not a string array')
    })

    it('should throw error for invalid bytesArgs', async () => {
      const result = simulateScript({
        source: `return`,
        bytesArgs: 123 as any,
      })

      await expect(result).rejects.toThrow('bytesArgs param not an array')
    })

    it('should throw error when an element of bytesArgs is not a hex string', async () => {
      const result = simulateScript({
        source: `return`,
        bytesArgs: ['invalid'] as any,
      })

      await expect(result).rejects.toThrow('bytesArgs param contains invalid hex string')
    })
  })
})

const createTestServer = (): http.Server => {
  const server = http.createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello, world!' }))
  })

  server.listen()

  return server
}

const createTestServerWithResponseDelay = (): http.Server => {
  const server = http.createServer((_, res) => {
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Hello, world!' }))
    }, 100)
  })

  server.listen()

  return server
}
