import { safePow } from '../../src/simulateScript/safePow'

describe('safePow', () => {
  it.each([
    { base: 2, exponent: 3, expected: BigInt(2) ** BigInt(3), label: 'safePow(2, 3) === 2 ** 3' },
    {
      base: BigInt(2),
      exponent: BigInt(3),
      expected: BigInt(2) ** BigInt(3),
      label: 'safePow(BigInt(2), BigInt(3)) === BigInt(2) ** BigInt(3)',
    },
    {
      base: BigInt(2),
      exponent: BigInt(256),
      expected: BigInt(2) ** BigInt(256),
      label: 'safePow(BigInt(2), BigInt(256)) === BigInt(2) ** BigInt(256)',
    },
    {
      base: BigInt(-5),
      exponent: BigInt(3),
      expected: BigInt(-5) ** BigInt(3),
      label: 'safePow(BigInt(-5), BigInt(3)) === BigInt(-5) ** BigInt(3)',
    },
  ])('$label', ({ base, exponent, expected }) => {
    expect(safePow(base, exponent)).toBe(expected)
  })

  it('should throw when unsupported values are passed', () => {
    expect(() => safePow(1.5, 2)).toThrow('safePow invalid base')
    expect(() => safePow(2, 2.2)).toThrow('safePow invalid exponent')
    expect(() => safePow(2, -5)).toThrow('safePow invalid exponent (must be positive)')
  })
})
