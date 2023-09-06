/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  testTimeout: 240 * 1000,

  coverageReporters: ['html'],
  collectCoverageFrom: ['src/**/*.ts', '!src/test/*.ts', '!src/simulateScript/deno-sandbox/*.ts'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
}
