import { AxiosError, AxiosResponse } from 'axios'
import { FunctionsModule } from '../../src/simulateScript/Functions'
import { mockApi } from './apiFixture'

describe('Encoding functions', () => {
  const functionsModule = new FunctionsModule().buildFunctionsmodule(0)

  describe('success cases', () => {
    it('encodes uint256', () => {
      expect(functionsModule.encodeUint256(64)).toEqual(
        Buffer.from('0000000000000000000000000000000000000000000000000000000000000040', 'hex'),
      )
    })

    it('encodes 0 as uint256', () => {
      expect(functionsModule.encodeUint256(0)).toEqual(
        Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex'),
      )
    })

    it('encodes positive int256', () => {
      expect(functionsModule.encodeInt256(64)).toEqual(
        Buffer.from('0000000000000000000000000000000000000000000000000000000000000040', 'hex'),
      )
    })

    it('encodes negative int256', () => {
      expect(functionsModule.encodeInt256(-64)).toEqual(
        Buffer.from('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0', 'hex'),
      )
    })

    it('encodes string', () => {
      expect(functionsModule.encodeString('hello world')).toEqual(Buffer.from('hello world'))
    })
  })

  describe('failure cases', () => {
    it('errors when encoding non-number value as uint256', () => {
      expect(() => functionsModule.encodeUint256('64' as unknown as number)).toThrowError(
        'encodeUint256 invalid input',
      )
    })

    it('errors when encoding non-integer value as uint256', () => {
      expect(() => functionsModule.encodeUint256(64.4)).toThrowError('encodeUint256 invalid input')
    })

    it('errors when encoding negative value as uint256', () => {
      expect(() => functionsModule.encodeUint256(-64)).toThrowError('encodeUint256 invalid input')
      expect(() => functionsModule.encodeUint256(BigInt(-64))).toThrowError(
        'encodeUint256 invalid input',
      )
    })

    it('errors when encoding a value that is too large for uint256', () => {
      expect(() =>
        functionsModule.encodeUint256(
          BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639936'),
        ),
      ).toThrowError('encodeUint256 invalid input')
    })

    it('errors when encoding non-number value as int256', () => {
      expect(() => functionsModule.encodeInt256('64' as unknown as number)).toThrowError(
        'encodeInt256 invalid input',
      )
    })

    it('errors when encoding non-integer value as int256', () => {
      expect(() => functionsModule.encodeInt256(64.4)).toThrowError('encodeInt256 invalid input')
    })

    it('errors when encoding a value that is too large for int256', () => {
      expect(() =>
        functionsModule.encodeInt256(
          BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819968'),
        ),
      ).toThrowError('encodeInt256 invalid input')
    })

    it('errors when encoding a value that is too small for int256', () => {
      expect(() =>
        functionsModule.encodeInt256(
          BigInt('-57896044618658097711785492504343953926634992332820282019728792003956564819969'),
        ),
      ).toThrowError('encodeInt256 invalid input')
    })

    it('errors when encoding non-string value as string', () => {
      expect(() => functionsModule.encodeString(0 as unknown as string)).toThrowError(
        'encodeString invalid input',
      )
    })
  })
})

describe('makeHttpRequest', () => {
  it('successfully performs HTTP query', async () => {
    mockApi()
    const functionsModule = new FunctionsModule().buildFunctionsmodule(1)
    const response = (await functionsModule.makeHttpRequest({
      url: 'http://mockurl.com/',
    })) as AxiosResponse
    expect(response.data).toEqual({ response: 'test response' })
  })

  it('successfully handles error', async () => {
    mockApi()
    const functionsModule = new FunctionsModule().buildFunctionsmodule(1)
    const response = (await functionsModule.makeHttpRequest({
      url: 'http://mockurl.com/error',
    })) as AxiosError
    expect(response.message).toBe('Request failed with status code 400')
  })

  it('errors when maximum allowed HTTP query count is exceeded', async () => {
    const functionsModule = new FunctionsModule().buildFunctionsmodule(0)
    await expect(async () =>
      functionsModule.makeHttpRequest({ url: 'http://mockurl.com/' }),
    ).rejects.toThrowError('exceeded numAllowedQueries')
  })

  it('errors when maximum timeout is exceeded', async () => {
    const functionsModule = new FunctionsModule().buildFunctionsmodule(1)
    await expect(async () =>
      functionsModule.makeHttpRequest({ url: 'http://mockurl.com/', timeout: 9001 }),
    ).rejects.toThrowError('HTTP request timeout >9000')
  })

  it('errors when maximum allowed HTTP query count is exceeded', async () => {
    const functionsModule = new FunctionsModule().buildFunctionsmodule(1)
    await expect(async () =>
      functionsModule.makeHttpRequest({
        url: 'https://thisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolongthisurlistoolong.com',
      }),
    ).rejects.toThrowError('HTTP request URL length >2048')
  })
})
