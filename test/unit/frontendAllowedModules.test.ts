import { safeRequire, AllowedModules } from '../../src/simulateScript/frontendAllowedModules'

describe('safeRequire', () => {
  it('allows importing buffer', () => {
    expect(() => safeRequire('buffer')).not.toThrow()
    expect(() => safeRequire('crypto')).not.toThrow()
    expect(() => safeRequire('querystring')).not.toThrow()
    expect(() => safeRequire('string_decoder')).not.toThrow()
    expect(() => safeRequire('url')).not.toThrow()
    expect(() => safeRequire('util')).not.toThrow()
  })

  it('prevents importing non-allowed built-in modules', () => {
    expect(() => safeRequire('child_process' as AllowedModules)).toThrow()
    expect(() => safeRequire('dns' as AllowedModules)).toThrow()
  })
})
