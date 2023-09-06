import { buildRequestCBOR } from '../../src'

describe('buildRequestCBOR', () => {
  it('correctly encodes a valid request', () => {
    const result = buildRequestCBOR({
      codeLocation: 0,
      codeLanguage: 0,
      source: 'test',
      encryptedSecretsReference: '0xabcdef',
      secretsLocation: 1,
      args: ['arg1', 'arg2'],
      bytesArgs: ['0x123456', '0xabcdef'],
    })

    expect(typeof result).toBe('string')
    expect(result.startsWith('0x')).toBe(true)
  })

  it('throws error for invalid codeLocation', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 'invalid',
        codeLanguage: 0,
        source: 'test',
      } as any),
    ).toThrow('Invalid codeLocation')

    expect(() =>
      buildRequestCBOR({
        codeLocation: 1,
        codeLanguage: 0,
        source: 'test',
      }),
    ).toThrow('Invalid codeLocation')
  })

  it('throws error for invalid codeLanguage', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 'invalid',
        source: 'test',
      } as any),
    ).toThrow('Invalid codeLanguage')

    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 1,
        source: 'test',
      } as any),
    ).toThrow('Invalid codeLanguage')
  })

  it('throws error for invalid source', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 123 as any,
      }),
    ).toThrow('Invalid source')
  })

  it('throws error for invalid encryptedSecretsReference', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 'test',
        encryptedSecretsReference: 'invalid',
        secretsLocation: 1,
      }),
    ).toThrow('Invalid encryptedSecretsReference')
  })

  it('throws error for invalid secretsLocation', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 'test',
        encryptedSecretsReference: '0xabcdef',
        secretsLocation: 3,
      } as any),
    ).toThrow('Invalid secretsLocation')
  })

  it('throws error for invalid args', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 'test',
        args: [123 as any],
      }),
    ).toThrow('Invalid args')

    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 'test',
        args: ['valid', 123 as any],
      }),
    ).toThrow('Invalid args')
  })

  it('throws error for invalid bytesArgs', () => {
    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 'test',
        bytesArgs: ['invalid'],
      }),
    ).toThrow('Invalid bytesArgs')

    expect(() =>
      buildRequestCBOR({
        codeLocation: 0,
        codeLanguage: 0,
        source: 'test',
        bytesArgs: ['0xabcdef', 'invalid'],
      }),
    ).toThrow('Invalid bytesArgs')
  })
})
