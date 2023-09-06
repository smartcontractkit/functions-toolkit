import { simulateScript } from '../../src/simulateScript/frontendSimulateScript'
import { mockApi } from './apiFixture'
import crypto from 'crypto'

describe('frontendSimulateScript', () => {
  it('simulates script', async () => {
    mockApi()
    // This example gets a response from an API, generates a hash of the response and then encodes that hash as a string.
    // It is a contrived example in order to utilize a built-in Node.js module.
    const result = await simulateScript({
      source:
        'const crypto = require("crypto");\
        console.log(args[0] + secrets.key);\
        const result = await Functions.makeHttpRequest({ url: "http://mockurl.com/" });\
        const hash = crypto.createHash("sha256");\
        hash.update(result.data.response);\
        const digest = hash.digest("hex");\
        return Functions.encodeString(digest);',
      args: ['MockArg'],
      secrets: {
        key: 'MockSecret',
      },
    })

    const hash = crypto.createHash('sha256')
    hash.update('test response')
    const expectedDigest = hash.digest('hex')
    const expectedResponseString = Buffer.from(expectedDigest, 'utf8')
    const expectedResponseStringInHexFormat = `0x${expectedResponseString.toString('hex')}`

    expect(result.result).toBe(expectedResponseStringInHexFormat)
    expect(result.capturedStdout).toBe('MockArgMockSecret\n')
  })

  it('returns correct response for empty buffer', async () => {
    const result = await simulateScript({
      source: 'return Buffer.from("")',
    })

    expect(result.result).toBe('0x0')
  })

  it('returns error when attempting to return non-buffer value', async () => {
    const result = await simulateScript({
      source: 'return 1',
    })

    expect(result.error).toEqual(Error('Error: returned value not a Buffer'))
  })

  it('returns error when attempting to return too large of a response', async () => {
    const result = await simulateScript({
      source: 'return Buffer.from("a".repeat(257))',
    })

    expect(result.error).toEqual(Error('Error: returned Buffer >256 bytes'))
  })

  it('returns error when attempting to use eval', async () => {
    const result = await simulateScript({
      source: 'let a = 0;eval(a = 1);return Functions.encodeUint256(a)',
    })

    expect(result.error).toEqual(Error('Error: eval not allowed'))
  })

  it('returns error when attempting to import disallowed module', async () => {
    const result = await simulateScript({
      source: 'const fs = require("fs");return Functions.encodeUint256(1)',
    })

    expect(result.error).toEqual(Error('Error: Import of module fs not allowed'))
  })

  it('returns error for invalid source', async () => {
    const result = await simulateScript({
      source: 5 as unknown as string,
    })

    expect(result.error).toEqual(Error('Error: Invalid source code'))
  })

  it('returns error when args type is incorrect', async () => {
    const result = await simulateScript({
      source: 'return Buffer.from("")',
      args: 'incorrect' as unknown as string[],
    })

    expect(result.error).toEqual(Error('Error: Invalid args'))
  })

  it('returns error when args does not contain all strings', async () => {
    const result = await simulateScript({
      source: 'return Buffer.from("")',
      args: ['string', 5] as unknown as string[],
    })

    expect(result.error).toEqual(Error('Error: Invalid args'))
  })

  it('returns error when secrets type is not correct', async () => {
    const result = await simulateScript({
      source: 'return Buffer.from("")',
      secrets: 5 as unknown as Record<string, string>,
    })

    expect(result.error).toEqual(Error('Error: secrets param not a string map'))
  })

  it('returns error when secrets contains incorrect type', async () => {
    const result = await simulateScript({
      source: 'return Buffer.from("")',
      secrets: { key: 5 } as unknown as Record<string, string>,
    })

    expect(result.error).toEqual(Error('Error: secrets param not a string map'))
  })

  it('throws error when execution time is exceeded', async () => {
    const result = await simulateScript({
      source: 'for (let i =0; i < 100_000_000; i++){}; return Buffer.from("")',
      maxExecutionDurationMs: 0,
    })

    expect(result.error?.message).toContain('Execution time exceeded')
  })
})
