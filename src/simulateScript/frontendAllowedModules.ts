export type AllowedModules = 'buffer' | 'crypto' | 'querystring' | 'string_decoder' | 'url' | 'util'

const exhaustiveCheck = (module: never): never => {
  throw Error(`Import of module ${module} not allowed`)
}

export const safeRequire = (module: AllowedModules): void => {
  switch (module) {
    case 'buffer':
      return require('buffer')
    case 'crypto':
      return require('crypto')
    case 'querystring':
      return require('querystring')
    case 'string_decoder':
      return require('string_decoder')
    case 'url':
      return require('url')
    case 'util':
      return require('util')
    default:
      exhaustiveCheck(module)
  }
}
