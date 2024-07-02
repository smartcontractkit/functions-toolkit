/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  testTimeout: 5 * 60 * 1000,

  coverageReporters: ['html', 'lcov'],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "coverage/junit",
        outputName: "junit.xml",
      },
    ],
  ],
  collectCoverageFrom: ['src/**/*.ts', '!src/simulateScript/deno-sandbox/*.ts'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
}
