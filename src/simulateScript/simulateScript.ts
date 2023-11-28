import { execSync, spawn } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'

import {
  DEFAULT_MAX_ON_CHAIN_RESPONSE_BYTES,
  DEFAULT_MAX_EXECUTION_DURATION_MS,
  DEFAULT_MAX_HTTP_REQUEST_BYTES,
  DEFAULT_MAX_HTTP_REQUEST_DURATION_MS,
  DEFAULT_MAX_HTTP_REQUESTS,
  DEFAULT_MAX_HTTP_REQUEST_URL_LENGTH,
  DEFAULT_MAX_MEMORY_USAGE_MB,
  DEFAULT_MAX_HTTP_RESPONSE_BYTES,
} from '../simulationConfig'

import type { SimulationInput, SimulationResult } from '../types'

type SandboxResult = {
  success?: string
  error?: {
    name: string
    message: string
    details?: string
  }
}

export const simulateScript = async ({
  source,
  secrets,
  args,
  bytesArgs,
  maxOnChainResponseBytes = DEFAULT_MAX_ON_CHAIN_RESPONSE_BYTES,
  maxExecutionTimeMs = DEFAULT_MAX_EXECUTION_DURATION_MS,
  maxMemoryUsageMb = DEFAULT_MAX_MEMORY_USAGE_MB,
  numAllowedQueries = DEFAULT_MAX_HTTP_REQUESTS,
  maxQueryDurationMs = DEFAULT_MAX_HTTP_REQUEST_DURATION_MS,
  maxQueryUrlLength = DEFAULT_MAX_HTTP_REQUEST_URL_LENGTH,
  maxQueryRequestBytes = DEFAULT_MAX_HTTP_REQUEST_BYTES,
  maxQueryResponseBytes = DEFAULT_MAX_HTTP_RESPONSE_BYTES,
}: SimulationInput): Promise<SimulationResult> => {
  if (typeof source !== 'string') {
    throw Error('source param is missing or invalid')
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
  if (args) {
    if (!Array.isArray(args)) {
      throw Error('args param not an array')
    }
    for (const arg of args as string[]) {
      if (typeof arg !== 'string') {
        throw Error('args param not a string array')
      }
    }
  }
  if (bytesArgs) {
    if (!Array.isArray(bytesArgs)) {
      throw Error('bytesArgs param not an array')
    }
    for (const arg of bytesArgs as string[]) {
      if (typeof arg !== 'string' || !/^0x[0-9A-Fa-f]+$/.test(arg)) {
        throw Error('bytesArgs param contains invalid hex string')
      }
    }
  }

  // Check if deno is installed
  try {
    execSync('deno --version', { stdio: 'pipe' })
  } catch {
    throw Error(
      'Deno must be installed and accessible via the PATH environment variable (ie: the `deno --version` command must work).\nVisit https://deno.land/#installation for installation instructions.',
    )
  }

  const scriptPath = createScriptTempFile(source)

  const simulation = spawn('deno', [
    'run',
    '--no-prompt',
    `--v8-flags=--max-old-space-size=${maxMemoryUsageMb}`,
    '--allow-net',
    scriptPath,
    Buffer.from(JSON.stringify(secrets ?? {})).toString('base64'), // Base64 encode stringified objects to avoid CLI parsing issues
    Buffer.from(JSON.stringify(args ?? {})).toString('base64'),
    Buffer.from(JSON.stringify(bytesArgs ?? {})).toString('base64'),
    numAllowedQueries.toString(),
    maxQueryDurationMs.toString(),
    maxQueryUrlLength.toString(),
    maxQueryRequestBytes.toString(),
    maxQueryResponseBytes.toString(),
  ])

  const timeout = setTimeout(() => {
    simulation.kill('SIGKILL')
  }, maxExecutionTimeMs)

  const simulationComplete = new Promise<{ code: number | null; signal: NodeJS.Signals | null }>(
    resolve => {
      simulation.on('exit', (code, signal) => {
        clearTimeout(timeout)
        resolve({ code, signal })
      })
    },
  )

  let output = ''

  simulation.stdout.on('data', (data: Buffer) => {
    output += data.toString()
  })

  simulation.stderr.on('data', (data: Buffer) => {
    output += data.toString()
  })

  const { code, signal } = await simulationComplete

  try {
    fs.rmSync(scriptPath)
  } catch {
    // The temp file may have already been deleted
  }

  let capturedTerminalOutput: string
  let parsedOutput: SandboxResult = {}

  try {
    const outputArr = output.toString().split('\n')
    const finalLine = outputArr[outputArr.length - 2]
    parsedOutput = JSON.parse(finalLine!) as SandboxResult
    capturedTerminalOutput = outputArr.slice(0, -2).join('\n')
  } catch {
    capturedTerminalOutput = output
  }

  const simulationResult: SimulationResult = {
    capturedTerminalOutput,
  }

  if (parsedOutput.success) {
    simulationResult.responseBytesHexstring = parsedOutput.success
    if ((simulationResult.responseBytesHexstring.length - 2) / 2 > maxOnChainResponseBytes) {
      simulationResult.errorString = `response >${maxOnChainResponseBytes} bytes`
      delete simulationResult.responseBytesHexstring
    }
    return simulationResult
  }

  if (parsedOutput.error) {
    simulationResult.errorString = parsedOutput.error.message
    if (parsedOutput.error?.name === 'PermissionDenied') {
      simulationResult.errorString = 'attempted access to blocked resource detected'
    }
    return simulationResult
  }

  if (signal === 'SIGKILL') {
    simulationResult.errorString = 'script runtime exceeded'
    return simulationResult
  }

  if (code !== 0) {
    simulationResult.errorString = 'syntax error, RAM exceeded, or other error'
    return simulationResult
  }

  return simulationResult
}

const createScriptTempFile = (source: string): string => {
  const tmpDir = os.tmpdir()
  const sandboxText = fs.readFileSync(path.join(__dirname, '/deno-sandbox/sandbox.ts'), 'utf8')
  const script = sandboxText.replace('//INJECT_USER_CODE_HERE', source)
  const tmpFilePath = path.join(tmpDir, `FunctionsScript-${Date.now()}.ts`)
  fs.writeFileSync(tmpFilePath, script)
  return tmpFilePath
}
