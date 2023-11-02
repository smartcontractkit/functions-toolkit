import vm from 'vm'
import { FunctionsModule } from './Functions'
import { safeRequire } from './frontendAllowedModules'

type Hexstring = `0x${string}`

interface SimulationParams {
  source: string
  secrets?: Record<string, string>
  args?: string[]
  maxHttpRequests?: number
  maxResponseBytes?: number
  maxExecutionDurationMs?: number
}

const DEFAULT_MAX_HTTP_REQUESTS = 5
const DEFAULT_MAX_RESPONSE_BYTES = 256
const DEFAULT_MAX_EXECUTION_DURATION_MS = 10_000
const allowedGlobalObjectsAndFunctions = {
  Buffer,
  URL,
  Date,
  Object,
  Array,
  Function,
  String,
  Number,
  Boolean,
  RegExp,
  Math,
  JSON,
  Promise,
  Map,
  Set,
  WeakMap,
  WeakSet,
  Proxy,
  Reflect,
  Symbol,
  BigInt,
}

// This function has been deprecated, but is currently used by the Functions Playground frontend
export const simulateScript = async ({
  source,
  secrets,
  args,
  maxHttpRequests = DEFAULT_MAX_HTTP_REQUESTS,
  maxResponseBytes = DEFAULT_MAX_RESPONSE_BYTES,
  maxExecutionDurationMs = DEFAULT_MAX_EXECUTION_DURATION_MS,
}: SimulationParams): Promise<{ result?: Hexstring; error?: Error; capturedStdout?: string }> => {
  try {
    validateInput({ source, args, secrets })
  } catch (error) {
    return {
      error: Error(`${error}`),
    }
  }

  const functionsModule = new FunctionsModule()
  const Functions = functionsModule.buildFunctionsmodule(maxHttpRequests)

  let capturedStdout = ''

  const sandbox = {
    args,
    secrets,
    Functions,
    require: safeRequire,
    eval: () => {
      throw Error('eval not allowed')
    },
    console: {
      ...console,
      log: (...args: unknown[]): void => {
        const message = args.map(arg => `${arg}`).join(' ')
        capturedStdout += message + '\n'
      },
    },
    ...allowedGlobalObjectsAndFunctions,
  }

  let result: Hexstring
  try {
    const startTime = Date.now()
    result = getValidOutput(
      await vm.runInNewContext(`(async () => {\n${source}\n})()`, sandbox),
      maxResponseBytes,
    )
    const totalTime = Date.now() - startTime
    if (totalTime > maxExecutionDurationMs) {
      throw Error(
        `Execution time exceeded\nScript took ${totalTime}ms to complete but must be completed within ${maxExecutionDurationMs}ms`,
      )
    }
  } catch (error) {
    return { error: Error(`${error}`), capturedStdout }
  }

  return {
    result: result,
    capturedStdout,
  }
}

const validateInput = ({
  secrets,
  args,
  source,
}: {
  source: string
  secrets?: Record<string, string>
  args?: string[]
}): void => {
  if (typeof source !== 'string') {
    throw Error('Invalid source code')
  }

  if (args) {
    if (!Array.isArray(args)) {
      throw Error('Invalid args')
    }

    for (const arg of args) {
      if (typeof arg !== 'string') {
        throw Error('Invalid args')
      }
    }
  }

  if (
    secrets &&
    (typeof secrets !== 'object' ||
      !Object.values(secrets).every(s => {
        return typeof s === 'string'
      }))
  ) {
    throw Error('secrets param not a string map')
  }
}

const getValidOutput = (sandboxOutput: unknown, maxResponseBytes: number): Hexstring => {
  if (Buffer.isBuffer(sandboxOutput)) {
    if (sandboxOutput.length > maxResponseBytes) {
      throw Error(`returned Buffer >${maxResponseBytes} bytes`)
    }
    if (sandboxOutput.length === 0) {
      return '0x0'
    }
    return `0x${sandboxOutput.toString('hex')}`
  }
  throw Error('returned value not a Buffer')
}
