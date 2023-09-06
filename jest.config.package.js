// Jest configuration for package tests
// We map ../../src to ../../dist so that we can test the transpiled code
// to ensure that consumers of this package will be able to use it as we expect
/** @type {import('jest').Config} */
module.exports = {
  ...require('./jest.config.js'),
  moduleNameMapper: {
    // remap ../../src/xxx to ../../dist/xxx
    '^../../src$': '<rootDir>',
    '^../../src/(.*)$': '<rootDir>/dist/$1',
  },

  // See https://github.com/kulshekhar/ts-jest/issues/822#issuecomment-1465241173
  // We disable type checking for package tests otherwise ts-jest will error out when checking
  // ../../src
  // This is fine because we have type checking in the main jest.config.js
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
  },

  // turn off coverage for package tests
  collectCoverageFrom: undefined,
  coverageThreshold: undefined,
}
