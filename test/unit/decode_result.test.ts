import { decodeResult, ReturnType } from '../../src/index'

describe('decodeResult', () => {
  it.each([
    {
      result: '0x',
      expectedDataType: ReturnType.string,
      decodedResult: '',
      label: 'decodes empty string',
    },
    {
      result: '0x',
      expectedDataType: ReturnType.uint256,
      decodedResult: BigInt(0),
      label: 'decodes empty uint256',
    },
    {
      result: '0x',
      expectedDataType: ReturnType.int256,
      decodedResult: BigInt(0),
      label: 'decodes empty int256',
    },
    {
      result: '0x48656c6c6f2c20576f726c6421',
      expectedDataType: ReturnType.string,
      decodedResult: 'Hello, World!',
      label: 'decodes string',
    },
    {
      result: '0x123ABC',
      expectedDataType: ReturnType.uint256,
      decodedResult: BigInt(1194684),
      label: 'decodes uint256',
    },
    {
      result: '0x0000000000000000000000000000000000000000000000000000000000000064',
      expectedDataType: ReturnType.int256,
      decodedResult: BigInt(100),
      label: 'decodes signed (positive) integer',
    },
    {
      result: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0b5f13',
      expectedDataType: ReturnType.int256,
      decodedResult: BigInt(-16031981),
      label: 'decodes signed (negative) integer',
    },
    {
      result: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0b5f13',
      expectedDataType: ReturnType.bytes,
      decodedResult: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0b5f13',
      label: 'decodes bytes',
    },
  ])('$label', ({ result, expectedDataType, decodedResult }) => {
    expect(decodeResult(result, expectedDataType).toString()).toBe(decodedResult.toString())
  })

  it('throws error if expectedDataType is invalid', () => {
    // @ts-ignore
    expect(() => decodeResult('0x123ABC', 'invalid')).toThrow(
      // eslint-disable-next-line no-regex-spaces
      /not valid.  Must be one of the following/,
    )
  })
  it('throws  with invalid hex', () => {
    expect(() =>
      // @ts-ignore
      decodeResult('ABffffffffffffffffffffffffffffffffffffffffffffffff0b5f13', ReturnType.int256),
    ).toThrow(/ not a valid hexadecimal string/)
  })

  it('throws if hex result exceeds size for signed int 256', () => {
    const oversizedInt = '0x0000000000000000000000000000000000000000000000000000000000000f50ed'
    expect(() =>
      // @ts-ignore
      decodeResult(oversizedInt, 'int256'),
    ).toThrow(/too large for int256/)
  })

  it('throws if hex result exceeds size for unsigned int 256', () => {
    const oversizedInt = '0x0000000000000000000000000000000000000000000000000000000000000f50ed'
    expect(() =>
      // @ts-ignore
      decodeResult(oversizedInt, 'uint256'),
    ).toThrow(/too large for uint256/)
  })
})
