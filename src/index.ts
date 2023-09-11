const oldLog = console.log
// Suppress "Duplicate definition of Transfer" warning message
console.log = (...args: any[]) => {
  if (typeof args[0] === 'string') {
    const msg = args.length > 0 ? args[0] : ''
    if (
      msg.includes('Duplicate definition of Transfer') ||
      msg.includes('secp256k1 unavailable, reverting to browser version')
    ) {
      return
    }
  }
  oldLog(...args)
}
export * from './SubscriptionManager'
export * from './SecretsManager'
export * from './ResponseListener'
export * from './simulateScript'
export * from './localFunctionsTestnet'
export * from './decodeResult'
export * from './offchain_storage'
export * from './types'
export * from './buildRequestCBOR'
export * from './simulationConfig'
