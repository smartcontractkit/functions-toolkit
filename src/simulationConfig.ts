export const simulatedLinkEthPrice = BigInt('6000000000000000')
export const simulatedLinkUsdPrice = BigInt('1500000000')

export const simulatedDonId = 'local-functions-testnet'

export const simulatedAllowListId = 'allowlist'

export const simulatedRouterConfig = {
  maxConsumersPerSubscription: 100,
  adminFee: 0,
  handleOracleFulfillmentSelector: '0x0ca76175', // handleOracleFulfillment(bytes32 requestId, bytes memory response, bytes memory err)
  gasForCallExactCheck: 5000,
  maxCallbackGasLimits: [300_000, 500_000, 1_000_000],
  subscriptionDepositMinimumRequests: 0,
  subscriptionDepositJuels: 0,
}

export const simulatedCoordinatorConfig = {
  maxCallbackGasLimit: 1_000_000,
  feedStalenessSeconds: 86_400,
  gasOverheadBeforeCallback: 44_615,
  gasOverheadAfterCallback: 44_615,
  requestTimeoutSeconds: 0, // 300 is used on actual mainnet & testnet blockchains
  donFeeCentsUsd: 0,
  maxSupportedRequestDataVersion: 1,
  fulfillmentGasPriceOverEstimationBP: 0,
  fallbackNativePerUnitLink: BigInt('5000000000000000'),
  minimumEstimateGasPriceWei: 1000000000, // 1 gwei
  fallbackUsdPerUnitLink: 1400000000,
  fallbackUsdPerUnitLinkDecimals: 8,
  operationFeeCentsUsd: 0,
}

export const simulatedAllowListConfig = {
  enabled: false,
  signerPublicKey: '0x0000000000000000000000000000000000000000',
}

export const callReportGasLimit = 5_000_000

export const numberOfSimulatedNodeExecutions = 4

export const simulatedWallets = {
  node0: {
    address: '0xAe24F6e7e046a0C764DF51F333dE5e2fE360AC72',
    privateKey: '0x493f20c367e9c5190b14b8071a6c765da973d41428b841c25e4aaba3577f8ece',
  },
  node1: {
    address: '0x37d7bf16f6fd8c37b766Fa87e047c68c51dfdf4a',
    privateKey: '0x7abd90843922984dda18358a179679e5cabda5ad8d0ebab5714ac044663a6a14',
  },
  node2: {
    address: '0x6e7EF53D9811B70834902D2D9137DaD2720eAC47',
    privateKey: '0xcb8801121add786869aac78ceb4003bf3aa8a68ae8dd31f80d61f5f98eace3c5',
  },
  node3: {
    address: '0xBe83eA9868AE964f8C46EFa0fea798EbE16441c5',
    privateKey: '0x06c7ca21f24edf450251e87097264b1fd184c9570084a78aa3300e937e1954b8',
  },
}

export const simulatedTransmitters = Object.values(simulatedWallets).map(wallet => wallet.address)

export const simulatedSecretsKeys: {
  thresholdKeys: {
    publicKey: string
    privateKeyShares: {
      [address: string]: string
    }
  }
  donKey: {
    publicKey: string
    privateKey: string
  }
} = {
  thresholdKeys: {
    publicKey:
      '{"Group":"P256","G_bar":"BLCl28PjjGt8JyL/p6AHToD6265gEBfl12mBiCVZShSPHVwvx5GwJ0QMqpQ7yPZEM8E6U015XFHvsDuq8X/S/c8=","H":"BEDshIeMEgr2kjNdjkG12M0A9P0uwg5Hl7jbKjbIcweHi07tu8rITgMZ9dTfqLhtFu+cRwwZaLLZdhqdg1JyLYY=","HArray":["BCj9afGghnfy3Nubj7onMPkApbF9r4GbLvSSi1wrQ1uMwRYMr6DCt5RCm95vKx75JPuOFdKBkBTOpX4p5Dtt0l0=","BJCmC0+jkl/WTK8sfb6ulQjBWTZnQEasPRVdCIYv94RkZWfVk6CbFS2Dv9C090He4UaYBaOGGyw7HGAtqKUqX1Y=","BPPnFxrq+9VI8Bb6KUBJalt/EZdU+G/l4iyosvB5bulwWDxJ26mw3hJZtZfjUcJPGIajabNFOa+5pVBd6Y3oGB8=","BJ1tWD2RhKB/uQEJ1x54mBddAW0KoFghplSswp/F3BYksyZIRIhEiLDsNgw3NfhmQh2OR6Vgv4APqAt9+RKxzzk="]}',
    privateKeyShares: {
      '0xAe24F6e7e046a0C764DF51F333dE5e2fE360AC72':
        '{"Group":"P256","Index":0,"V":"XuDZcsMc5ebjgbHx+zQ/Hhbwn24MgJ5oBL+ORQGqM8c="}',
      '0x37d7bf16f6fd8c37b766Fa87e047c68c51dfdf4a':
        '{"Group":"P256","Index":1,"V":"x3UbVxPoPQvRTL6ILjuBSGep3UUPY2q7j6LjHR2tU2A="}',
      '0x6e7EF53D9811B70834902D2D9137DaD2720eAC47':
        '{"Group":"P256","Index":2,"V":"MAldPGSzlC+/F8seYULDcvt8IG5rLpiKJsxtMj1NTag="}',
      '0xBe83eA9868AE964f8C46EFa0fea798EbE16441c5':
        '{"Group":"P256","Index":3,"V":"mJ2fILV+61Ss4te0lEoFnUw1XkVuEWTdsa/CCllQbUE="}',
    },
  },
  donKey: {
    publicKey:
      '0x46e62235e8ac8a4f84aa62baf7c67d73a23c5641821bab8d24a161071b90ed8295195d81ba34e4492f773c84e63617879c99480a7d9545385b56b5fdfd88d0da',
    privateKey: '0x32d6fac6ddc22adc2144aa75de175556c0095b795cb1bc7b2a53c8a07462e8e3',
  },
}

export const DEFAULT_MAX_ON_CHAIN_RESPONSE_BYTES = 256
export const DEFAULT_MAX_EXECUTION_DURATION_MS = 10_000 // 10 seconds
export const DEFAULT_MAX_MEMORY_USAGE_MB = 128
export const DEFAULT_MAX_HTTP_REQUESTS = 5
export const DEFAULT_MAX_HTTP_REQUEST_DURATION_MS = 9_000 // 9 seconds
export const DEFAULT_MAX_HTTP_REQUEST_URL_LENGTH = 2048 // 2 KB
export const DEFAULT_MAX_HTTP_REQUEST_BYTES = 1024 * 30 // 30 KB
export const DEFAULT_MAX_HTTP_RESPONSE_BYTES = 2_097_152 // 2 MB
