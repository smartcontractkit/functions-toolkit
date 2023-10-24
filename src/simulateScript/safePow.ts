type SafePowParams = {
  base: bigint
  exponent: bigint
}

const getValidInput = (base: bigint | number, exponent: bigint | number): SafePowParams => {
  let validBase = BigInt(0)

  if (typeof base === 'number') {
    if (!Number.isInteger(base)) {
      throw Error('safePow invalid base')
    }

    validBase = BigInt(base)
  } else {
    validBase = base
  }

  let validExponent = BigInt(0)
  if (typeof exponent === 'number') {
    if (!Number.isInteger(exponent)) {
      throw Error('safePow invalid exponent')
    }

    validExponent = BigInt(exponent)
  } else {
    validExponent = exponent
  }

  if (validExponent < BigInt(0)) {
    throw Error('safePow invalid exponent (must be positive)')
  }

  return { base: validBase, exponent: validExponent }
}

const isOdd = (value: bigint): boolean => value % BigInt(2) === BigInt(1)

/**
 * safePow performs exponentiation with BigInts in browser safe mode as opposed to:
 * - `Math.pow`, which doesn't currently support BigInts.
 * - `**` operator which might get transpiled to Math.pow by browser VM or build tools like swc.
 *
 * Method supports integer numbers and bigints.
 */
export const safePow = (base: bigint | number, exponent: bigint | number): bigint => {
  let result = BigInt(1)
  let { base: currentBase, exponent: currentExponent } = getValidInput(base, exponent)

  while (currentExponent > BigInt(0)) {
    if (isOdd(currentExponent)) {
      result *= currentBase
    }

    currentBase *= currentBase
    currentExponent /= BigInt(2)
  }

  return result
}
