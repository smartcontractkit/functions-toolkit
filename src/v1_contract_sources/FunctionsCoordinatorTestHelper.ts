export const FunctionsCoordinatorTestHelperSource = {
  _format: 'hh-sol-artifact-1',
  contractName: 'FunctionsCoordinatorTestHelper',
  sourceName: 'FunctionsCoordinatorTestHelper.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'router',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'feedStalenessSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadBeforeCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadAfterCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint40',
              name: 'minimumEstimateGasPriceWei',
              type: 'uint40',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint64',
              name: 'fallbackUsdPerUnitLink',
              type: 'uint64',
            },
            {
              internalType: 'uint8',
              name: 'fallbackUsdPerUnitLinkDecimals',
              type: 'uint8',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
            {
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'donFeeCentsUsd',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'operationFeeCentsUsd',
              type: 'uint16',
            },
          ],
          internalType: 'struct FunctionsBillingConfig',
          name: 'config',
          type: 'tuple',
        },
        {
          internalType: 'address',
          name: 'linkToNativeFeed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'linkToUsdFeed',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'EmptyPublicKey',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InconsistentReportData',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientBalance',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidCalldata',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
      ],
      name: 'InvalidConfig',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'int256',
          name: 'linkWei',
          type: 'int256',
        },
      ],
      name: 'InvalidLinkWeiPrice',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidSubscription',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'int256',
          name: 'usdLink',
          type: 'int256',
        },
      ],
      name: 'InvalidUsdLinkPrice',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'MustBeSubOwner',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NoTransmittersSet',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyCallableByRouter',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyCallableByRouterOwner',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PaymentTooLarge',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'message',
          type: 'string',
        },
      ],
      name: 'ReportInvalid',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RouterMustBeSet',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UnauthorizedPublicKeyChange',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UnauthorizedSender',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UnsupportedRequestDataVersion',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'requestId',
          type: 'bytes32',
        },
      ],
      name: 'CommitmentDeleted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint32',
          name: 'previousConfigBlockNumber',
          type: 'uint32',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'configDigest',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'configCount',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'signers',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'transmitters',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'f',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'onchainConfig',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'offchainConfigVersion',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'offchainConfig',
          type: 'bytes',
        },
      ],
      name: 'ConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'feedStalenessSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadBeforeCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadAfterCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint40',
              name: 'minimumEstimateGasPriceWei',
              type: 'uint40',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint64',
              name: 'fallbackUsdPerUnitLink',
              type: 'uint64',
            },
            {
              internalType: 'uint8',
              name: 'fallbackUsdPerUnitLinkDecimals',
              type: 'uint8',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
            {
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'donFeeCentsUsd',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'operationFeeCentsUsd',
              type: 'uint16',
            },
          ],
          indexed: false,
          internalType: 'struct FunctionsBillingConfig',
          name: 'config',
          type: 'tuple',
        },
      ],
      name: 'ConfigUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'requestId',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'requestingContract',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'requestInitiator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'subscriptionOwner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint16',
          name: 'dataVersion',
          type: 'uint16',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'flags',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'callbackGasLimit',
          type: 'uint64',
        },
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'requestId',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'coordinator',
              type: 'address',
            },
            {
              internalType: 'uint96',
              name: 'estimatedTotalCostJuels',
              type: 'uint96',
            },
            {
              internalType: 'address',
              name: 'client',
              type: 'address',
            },
            {
              internalType: 'uint64',
              name: 'subscriptionId',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'callbackGasLimit',
              type: 'uint32',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'uint72',
              name: 'donFee',
              type: 'uint72',
            },
            {
              internalType: 'uint40',
              name: 'gasOverheadBeforeCallback',
              type: 'uint40',
            },
            {
              internalType: 'uint40',
              name: 'gasOverheadAfterCallback',
              type: 'uint40',
            },
            {
              internalType: 'uint32',
              name: 'timeoutTimestamp',
              type: 'uint32',
            },
          ],
          indexed: false,
          internalType: 'struct FunctionsResponse.Commitment',
          name: 'commitment',
          type: 'tuple',
        },
      ],
      name: 'OracleRequest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'requestId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
        },
      ],
      name: 'OracleResponse',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'requestId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'juelsPerGas',
          type: 'uint96',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'l1FeeShareWei',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'callbackCostJuels',
          type: 'uint96',
        },
        {
          indexed: false,
          internalType: 'uint72',
          name: 'donFeeJuels',
          type: 'uint72',
        },
        {
          indexed: false,
          internalType: 'uint72',
          name: 'adminFeeJuels',
          type: 'uint72',
        },
        {
          indexed: false,
          internalType: 'uint72',
          name: 'operationFeeJuels',
          type: 'uint72',
        },
      ],
      name: 'RequestBilled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'configDigest',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'epoch',
          type: 'uint32',
        },
      ],
      name: 'Transmitted',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'report',
          type: 'bytes',
        },
      ],
      name: 'callReport',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'report',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: 'secondSigner',
          type: 'address',
        },
      ],
      name: 'callReportMultipleSigners',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'requestId',
          type: 'bytes32',
        },
      ],
      name: 'deleteCommitment',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'uint32',
          name: 'callbackGasLimit',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'gasPriceWei',
          type: 'uint256',
        },
      ],
      name: 'estimateCost',
      outputs: [
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAdminFeeJuels',
      outputs: [
        {
          internalType: 'uint72',
          name: '',
          type: 'uint72',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getConfig',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'feedStalenessSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadBeforeCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadAfterCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint40',
              name: 'minimumEstimateGasPriceWei',
              type: 'uint40',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint64',
              name: 'fallbackUsdPerUnitLink',
              type: 'uint64',
            },
            {
              internalType: 'uint8',
              name: 'fallbackUsdPerUnitLinkDecimals',
              type: 'uint8',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
            {
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'donFeeCentsUsd',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'operationFeeCentsUsd',
              type: 'uint16',
            },
          ],
          internalType: 'struct FunctionsBillingConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'getDONFeeJuels',
      outputs: [
        {
          internalType: 'uint72',
          name: '',
          type: 'uint72',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getDONPublicKey',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getOperationFeeJuels',
      outputs: [
        {
          internalType: 'uint72',
          name: '',
          type: 'uint72',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getThresholdPublicKey',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getUsdPerUnitLink',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getWeiPerUnitLink',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestConfigDetails',
      outputs: [
        {
          internalType: 'uint32',
          name: 'configCount',
          type: 'uint32',
        },
        {
          internalType: 'uint32',
          name: 'blockNumber',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: 'configDigest',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestConfigDigestAndEpoch',
      outputs: [
        {
          internalType: 'bool',
          name: 'scanLogs',
          type: 'bool',
        },
        {
          internalType: 'bytes32',
          name: 'configDigest',
          type: 'bytes32',
        },
        {
          internalType: 'uint32',
          name: 'epoch',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint96',
          name: 'amount',
          type: 'uint96',
        },
      ],
      name: 'oracleWithdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oracleWithdrawAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: '_signers',
          type: 'address[]',
        },
        {
          internalType: 'address[]',
          name: '_transmitters',
          type: 'address[]',
        },
        {
          internalType: 'uint8',
          name: '_f',
          type: 'uint8',
        },
        {
          internalType: 'bytes',
          name: '_onchainConfig',
          type: 'bytes',
        },
        {
          internalType: 'uint64',
          name: '_offchainConfigVersion',
          type: 'uint64',
        },
        {
          internalType: 'bytes',
          name: '_offchainConfig',
          type: 'bytes',
        },
      ],
      name: 'setConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'donPublicKey',
          type: 'bytes',
        },
      ],
      name: 'setDONPublicKey',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'thresholdPublicKey',
          type: 'bytes',
        },
      ],
      name: 'setThresholdPublicKey',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes',
            },
            {
              internalType: 'bytes32',
              name: 'flags',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'requestingContract',
              type: 'address',
            },
            {
              internalType: 'uint96',
              name: 'availableBalance',
              type: 'uint96',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'uint64',
              name: 'subscriptionId',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'initiatedRequests',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'callbackGasLimit',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'dataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint64',
              name: 'completedRequests',
              type: 'uint64',
            },
            {
              internalType: 'address',
              name: 'subscriptionOwner',
              type: 'address',
            },
          ],
          internalType: 'struct FunctionsResponse.RequestMeta',
          name: 'request',
          type: 'tuple',
        },
      ],
      name: 'startRequest',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'requestId',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'coordinator',
              type: 'address',
            },
            {
              internalType: 'uint96',
              name: 'estimatedTotalCostJuels',
              type: 'uint96',
            },
            {
              internalType: 'address',
              name: 'client',
              type: 'address',
            },
            {
              internalType: 'uint64',
              name: 'subscriptionId',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'callbackGasLimit',
              type: 'uint32',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'uint72',
              name: 'donFee',
              type: 'uint72',
            },
            {
              internalType: 'uint40',
              name: 'gasOverheadBeforeCallback',
              type: 'uint40',
            },
            {
              internalType: 'uint40',
              name: 'gasOverheadAfterCallback',
              type: 'uint40',
            },
            {
              internalType: 'uint32',
              name: 'timeoutTimestamp',
              type: 'uint32',
            },
          ],
          internalType: 'struct FunctionsResponse.Commitment',
          name: 'commitment',
          type: 'tuple',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32[3]',
          name: 'reportContext',
          type: 'bytes32[3]',
        },
        {
          internalType: 'bytes',
          name: 'report',
          type: 'bytes',
        },
        {
          internalType: 'bytes32[]',
          name: 'rs',
          type: 'bytes32[]',
        },
        {
          internalType: 'bytes32[]',
          name: 'ss',
          type: 'bytes32[]',
        },
        {
          internalType: 'bytes32',
          name: 'rawVs',
          type: 'bytes32',
        },
      ],
      name: 'transmit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'transmitters',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'typeAndVersion',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'feedStalenessSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadBeforeCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'gasOverheadAfterCallback',
              type: 'uint32',
            },
            {
              internalType: 'uint40',
              name: 'minimumEstimateGasPriceWei',
              type: 'uint40',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint64',
              name: 'fallbackUsdPerUnitLink',
              type: 'uint64',
            },
            {
              internalType: 'uint8',
              name: 'fallbackUsdPerUnitLinkDecimals',
              type: 'uint8',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
            {
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'donFeeCentsUsd',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'operationFeeCentsUsd',
              type: 'uint16',
            },
          ],
          internalType: 'struct FunctionsBillingConfig',
          name: 'config',
          type: 'tuple',
        },
      ],
      name: 'updateConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode:
    '0x60a06040523480156200001157600080fd5b5060405162006196380380620061968339810160408190526200003491620004e3565b8383838383838383833380600081620000945760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000c757620000c78162000156565b5050506001600160a01b038116620000f257604051632530e88560e11b815260040160405180910390fd5b6001600160a01b03908116608052600c80546001600160601b03166c0100000000000000000000000085841602179055600d80546001600160a01b031916918316919091179055620001448362000201565b5050505050505050505050506200074a565b336001600160a01b03821603620001b05760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200008b565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6200020b620003a6565b80516008805460208401516040808601516060870151608088015160a089015160c08a015160e08b015160ff16600160f81b026001600160f81b036001600160401b03909216600160b81b02919091166001600160b81b0361ffff938416600160a81b0261ffff60a81b1964ffffffffff909616600160801b029590951666ffffffffffffff60801b1963ffffffff9788166c010000000000000000000000000263ffffffff60601b19998916680100000000000000000299909916600160401b600160801b03199b8916640100000000026001600160401b0319909d169e89169e909e179b909b17999099169b909b1795909517979097169590951717969096161792909217909255610100840151610120850151909316600160e01b026001600160e01b0390931692909217600955610140830151600a80546101608601518416620100000263ffffffff19919091169290931691909117919091179055517f2e2c8535dcc25459d519f2300c114d2d2128bf6399722d04eca078461a3bf33a906200039b90839062000641565b60405180910390a150565b620003b0620003b2565b565b6000546001600160a01b03163314620003b05760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016200008b565b80516001600160a01b03811681146200042657600080fd5b919050565b60405161018081016001600160401b03811182821017156200045d57634e487b7160e01b600052604160045260246000fd5b60405290565b805163ffffffff811681146200042657600080fd5b805164ffffffffff811681146200042657600080fd5b805161ffff811681146200042657600080fd5b80516001600160401b03811681146200042657600080fd5b805160ff811681146200042657600080fd5b80516001600160e01b03811681146200042657600080fd5b6000806000808486036101e0811215620004fc57600080fd5b62000507866200040e565b945061018080601f19830112156200051e57600080fd5b620005286200042b565b9150620005386020880162000463565b8252620005486040880162000463565b60208301526200055b6060880162000463565b60408301526200056e6080880162000463565b60608301526200058160a0880162000478565b60808301526200059460c088016200048e565b60a0830152620005a760e08801620004a1565b60c0830152610100620005bc818901620004b9565b60e0840152610120620005d1818a01620004cb565b828501526101409150620005e7828a0162000463565b90840152610160620005fb8982016200048e565b828501526200060c838a016200048e565b90840152509093506200062590506101a086016200040e565b9150620006366101c086016200040e565b905092959194509250565b815163ffffffff1681526101808101602083015162000668602084018263ffffffff169052565b50604083015162000681604084018263ffffffff169052565b5060608301516200069a606084018263ffffffff169052565b506080830151620006b4608084018264ffffffffff169052565b5060a0830151620006cb60a084018261ffff169052565b5060c0830151620006e760c08401826001600160401b03169052565b5060e0830151620006fd60e084018260ff169052565b50610100838101516001600160e01b0316908301526101208084015163ffffffff16908301526101408084015161ffff908116918401919091526101609384015116929091019190915290565b608051615a06620007906000396000818161085501528181610d960152818161102a0152818161114001528181611c4501528181612b0301526139e30152615a066000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806385b214cf116100f9578063d227d24511610097578063e4ddcea611610071578063e4ddcea614610611578063f2f22ef114610627578063f2fde38b1461062f578063f6ea41f61461064257600080fd5b8063d227d245146105c6578063d328a91e146105f6578063e3d0e712146105fe57600080fd5b8063afcb95d7116100d3578063afcb95d7146103b2578063b1dc65a4146103d2578063ba9c924d146103e5578063c3f909d4146103f857600080fd5b806385b214cf146103575780638da5cb5b1461036a578063a631571e1461039257600080fd5b8063736d7e0f116101665780637f15e166116101405780637f15e166146102ba57806381411834146102cd57806381f1b938146102e257806381ff7048146102ea57600080fd5b8063736d7e0f1461029757806379ba5097146102aa5780637d480787146102b257600080fd5b8063626f458c11610197578063626f458c1461023857806366316d8d146102655780637212762f1461027857600080fd5b8063083a5466146101be578063181f5a77146101d35780633901c40e14610225575b600080fd5b6101d16101cc366004614128565b61064a565b005b61020f6040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e332e300000000081525081565b60405161021c91906141d8565b60405180910390f35b6101d1610233366004614218565b61069f565b61024b6102463660046143c9565b61071c565b60405168ffffffffffffffffff909116815260200161021c565b6101d1610273366004614423565b610759565b610280610912565b6040805192835260ff90911660208301520161021c565b6101d16102a5366004614128565b610b25565b6101d1610b85565b6101d1610c82565b6101d16102c8366004614128565b610e82565b6102d5610ed2565b60405161021c91906144ad565b61020f610f41565b61033460015460025463ffffffff74010000000000000000000000000000000000000000830481169378010000000000000000000000000000000000000000000000009093041691565b6040805163ffffffff94851681529390921660208401529082015260600161021c565b6101d16103653660046144c0565b611012565b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021c565b6103a56103a03660046144d9565b6110cf565b60405161021c919061462e565b60408051600181526000602082018190529181019190915260600161021c565b6101d16103e0366004614682565b611360565b6101d16103f33660046147ed565b611976565b6105b96040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915250604080516101808101825260085463ffffffff80821683526401000000008204811660208401526801000000000000000082048116938301939093526c01000000000000000000000000810483166060830152700100000000000000000000000000000000810464ffffffffff1660808301527501000000000000000000000000000000000000000000810461ffff90811660a084015277010000000000000000000000000000000000000000000000820467ffffffffffffffff1660c08401527f010000000000000000000000000000000000000000000000000000000000000090910460ff1660e08301526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81166101008401527c01000000000000000000000000000000000000000000000000000000009004909216610120820152600a5480831661014083015262010000900490911661016082015290565b60405161021c91906148d9565b6105d96105d43660046149f6565b611c41565b6040516bffffffffffffffffffffffff909116815260200161021c565b61020f611daf565b6101d161060c366004614afe565b611e06565b610619612982565b60405190815260200161021c565b61024b612ac6565b6101d161063d366004614bcb565b612aeb565b61024b612aff565b610652612b90565b600081900361068d576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f61069a828483614c7b565b505050565b6106a76140c7565b33815273ffffffffffffffffffffffffffffffffffffffff821660208201526000808080806106d88989018a614ea0565b945094509450945094506107116040518060a0016040528087815260200186815260200185815260200184815260200183815250612c13565b505050505050505050565b600a54600090610753906064906107369061ffff16612d62565b6107409190614fd0565b6bffffffffffffffffffffffff16612daf565b92915050565b610761612e4e565b806bffffffffffffffffffffffff1660000361079b5750336000908152600b60205260409020546bffffffffffffffffffffffff166107f5565b336000908152600b60205260409020546bffffffffffffffffffffffff808316911610156107f5576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000908152600b6020526040812080548392906108229084906bffffffffffffffffffffffff16614ffb565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506108777f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301526bffffffffffffffffffffffff8416602483015291909116906366316d8d90604401600060405180830381600087803b1580156108f657600080fd5b505af115801561090a573d6000803e3d6000fd5b505050505050565b600080600080600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a99190615041565b5093505092505080426109bc9190615091565b600854640100000000900463ffffffff161080156109e95750600854640100000000900463ffffffff1615155b15610a4657505060085477010000000000000000000000000000000000000000000000810467ffffffffffffffff16937f010000000000000000000000000000000000000000000000000000000000000090910460ff1692509050565b60008213610a88576040517f56b22ab8000000000000000000000000000000000000000000000000000000008152600481018390526024015b60405180910390fd5b600d54604080517f313ce5670000000000000000000000000000000000000000000000000000000081529051849273ffffffffffffffffffffffffffffffffffffffff169163313ce5679160048083019260209291908290030181865afa158015610af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1b91906150a4565b9350935050509091565b610b2d6140c7565b338152600080808080610b4288880189614ea0565b94509450945094509450610b7b6040518060a0016040528087815260200186815260200185815260200184815260200183815250612c13565b5050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610c06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e6572000000000000000000006044820152606401610a7f565b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610c8a612ffa565b610c92612e4e565b6000610c9c610ed2565b905060005b8151811015610e7e576000600b6000848481518110610cc257610cc2614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252810191909152604001600020546bffffffffffffffffffffffff1690508015610e6d576000600b6000858581518110610d2157610d21614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550610db87f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff166366316d8d848481518110610de557610de5614d96565b6020026020010151836040518363ffffffff1660e01b8152600401610e3a92919073ffffffffffffffffffffffffffffffffffffffff9290921682526bffffffffffffffffffffffff16602082015260400190565b600060405180830381600087803b158015610e5457600080fd5b505af1158015610e68573d6000803e3d6000fd5b505050505b50610e77816150c1565b9050610ca1565b5050565b610e8a612b90565b6000819003610ec5576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600e61069a828483614c7b565b60606006805480602002602001604051908101604052809291908181526020018280548015610f3757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610f0c575b5050505050905090565b6060600f8054610f5090614be8565b9050600003610f8b576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f8054610f9890614be8565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc490614be8565b8015610f375780601f10610fe657610100808354040283529160200191610f37565b820191906000526020600020905b815481529060010190602001808311610ff457509395945050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611081576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f416906110c49083815260200190565b60405180910390a150565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091523373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611197576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111aa6111a58461511b565b613002565b90925090506111bf6060840160408501614bcb565b825173ffffffffffffffffffffffffffffffffffffffff91909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff3261120d60c0880160a08901615208565b61121f61016089016101408a01614bcb565b6112298980615225565b61123b6101208c016101008d0161528a565b60208c01356112516101008e0160e08f016152a5565b6040518061016001604052808e6000015181526020018e6020015173ffffffffffffffffffffffffffffffffffffffff1681526020018e604001516bffffffffffffffffffffffff1681526020018e6060015173ffffffffffffffffffffffffffffffffffffffff1681526020018e6080015167ffffffffffffffff1681526020018e60a0015163ffffffff1681526020018d68ffffffffffffffffff1681526020018e60e0015168ffffffffffffffffff1681526020018e610100015164ffffffffff1681526020018e610120015164ffffffffff1681526020018e610140015163ffffffff16815250604051611351999897969594939291906152c2565b60405180910390a3505b919050565b60008061136d89896133b4565b91509150811561137e575050610b7b565b604080518b3580825262ffffff6020808f0135600881901c9290921690840152909290917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16113db8b8b8b8b8b8b61353d565b6003546000906002906113f99060ff80821691610100900416615378565b6114039190615391565b61140e906001615378565b60ff16905088811461147c576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610a7f565b88871461150b576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f7265706f727420727320616e64207373206d757374206265206f66206571756160448201527f6c206c656e6774680000000000000000000000000000000000000000000000006064820152608401610a7f565b3360009081526004602090815260408083208151808301909252805460ff8082168452929391929184019161010090910416600281111561154e5761154e6153b3565b600281111561155f5761155f6153b3565b905250905060028160200151600281111561157c5761157c6153b3565b141580156115c557506006816000015160ff168154811061159f5761159f614d96565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff163314155b1561162c576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610a7f565b505050506116386140c7565b60008a8a60405161164a9291906153e2565b604051908190038120611661918e906020016153f2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120838301909252600080845290830152915060005b8981101561195d5760006001848984602081106116ca576116ca614d96565b6116d791901a601b615378565b8e8e868181106116e9576116e9614d96565b905060200201358d8d8781811061170257611702614d96565b905060200201356040516000815260200160405260405161173f949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611761573d6000803e3d6000fd5b5050604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081015173ffffffffffffffffffffffffffffffffffffffff811660009081526004602090815290849020838501909452835460ff808216855292965092945084019161010090041660028111156117e1576117e16153b3565b60028111156117f2576117f26153b3565b905250925060018360200151600281111561180f5761180f6153b3565b14611876576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610a7f565b8251600090869060ff16601f811061189057611890614d96565b602002015173ffffffffffffffffffffffffffffffffffffffff1614611912576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610a7f565b8085846000015160ff16601f811061192c5761192c614d96565b73ffffffffffffffffffffffffffffffffffffffff909216602092909202015250611956816150c1565b90506116ab565b50505061196982612c13565b5050505050505050505050565b61197e612ffa565b80516008805460208401516040808601516060870151608088015160a089015160c08a015160e08b015160ff167f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff67ffffffffffffffff90921677010000000000000000000000000000000000000000000000029190911676ffffffffffffffffffffffffffffffffffffffffffffff61ffff9384167501000000000000000000000000000000000000000000027fffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffffff64ffffffffff90961670010000000000000000000000000000000002959095167fffffffffffffffffff00000000000000ffffffffffffffffffffffffffffffff63ffffffff9788166c01000000000000000000000000027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff9989166801000000000000000002999099167fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff9b8916640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909d169e89169e909e179b909b17999099169b909b17959095179790971695909517179690961617929092179092556101008401516101208501519093167c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90931692909217600955610140830151600a8054610160860151841662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000919091169290931691909117919091179055517f2e2c8535dcc25459d519f2300c114d2d2128bf6399722d04eca078461a3bf33a906110c49083906148d9565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff8516602482015273ffffffffffffffffffffffffffffffffffffffff91909116906310fc49c19060440160006040518083038186803b158015611ce157600080fd5b505afa158015611cf5573d6000803e3d6000fd5b5050505066038d7ea4c68000821115611d3a576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611d44612aff565b90506000611d8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061071c92505050565b90506000611d93612ac6565b9050611da286868486856135f4565b9998505050505050505050565b6060600e8054611dbe90614be8565b9050600003611df9576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600e8054610f9890614be8565b855185518560ff16601f831115611e79576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610a7f565b80600003611ee3576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610a7f565b818314611f71576040517f89a61989000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610a7f565b611f7c816003615406565b8311611fe4576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610a7f565b611fec612b90565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a08101869052906120339088613770565b600554156121e85760055460009061204d90600190615091565b905060006005828154811061206457612064614d96565b60009182526020822001546006805473ffffffffffffffffffffffffffffffffffffffff9092169350908490811061209e5761209e614d96565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff85811684526004909252604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00009081169091559290911680845292208054909116905560058054919250908061211e5761211e61541d565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905560068054806121875761218761541d565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905550612033915050565b60005b81515181101561279f5781518051600091908390811061220d5761220d614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603612292576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f7369676e6572206d757374206e6f7420626520656d70747900000000000000006044820152606401610a7f565b600073ffffffffffffffffffffffffffffffffffffffff16826020015182815181106122c0576122c0614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603612345576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f7472616e736d6974746572206d757374206e6f7420626520656d7074790000006044820152606401610a7f565b6000600460008460000151848151811061236157612361614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff1660028111156123ab576123ab6153b3565b14612412576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610a7f565b6040805180820190915260ff8216815260016020820152825180516004916000918590811061244357612443614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000016176101008360028111156124e4576124e46153b3565b0217905550600091506124f49050565b600460008460200151848151811061250e5761250e614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff166002811115612558576125586153b3565b146125bf576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610a7f565b6040805180820190915260ff8216815260208101600281525060046000846020015184815181106125f2576125f2614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001617610100836002811115612693576126936153b3565b0217905550508251805160059250839081106126b1576126b1614d96565b602090810291909101810151825460018101845560009384529282902090920180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909316929092179091558201518051600691908390811061272d5761272d614d96565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117905580612797816150c1565b9150506121eb565b506040810151600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116780100000000000000000000000000000000000000000000000063ffffffff43811682029290921780855592048116929182916014916128579184917401000000000000000000000000000000000000000090041661544c565b92506101000a81548163ffffffff021916908363ffffffff1602179055506128b64630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a00151613789565b600281905582518051600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e059861296d988b9891977401000000000000000000000000000000000000000090920463ffffffff16969095919491939192615469565b60405180910390a15050505050505050505050565b6000806000600c8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156129f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a169190615041565b509350509250508042612a299190615091565b600854640100000000900463ffffffff16108015612a565750600854640100000000900463ffffffff1615155b15612a835750506009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16919050565b60008213612ac0576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610a7f565b50919050565b600a54600090612ae6906064906107369062010000900461ffff16612d62565b905090565b612af3612b90565b612afc81613834565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae6919061550a565b60005473ffffffffffffffffffffffffffffffffffffffff163314612c11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610a7f565b565b80515160ff1660005b8181101561069a576000612cc584600001518381518110612c3f57612c3f614d96565b602002602001015185602001518481518110612c5d57612c5d614d96565b602002602001015186604001518581518110612c7b57612c7b614d96565b602002602001015187606001518681518110612c9957612c99614d96565b602002602001015188608001518781518110612cb757612cb7614d96565b602002602001015188613929565b90506000816006811115612cdb57612cdb6153b3565b1480612cf857506001816006811115612cf657612cf66153b3565b145b15612d51578351805183908110612d1157612d11614d96565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b50612d5b816150c1565b9050612c1c565b6000806000612d6f610912565b9092509050612da782612d83836012615378565b612d8e90600a615647565b612d989087615406565b612da29190615656565b613ded565b949350505050565b600068ffffffffffffffffff821115612e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203760448201527f32206269747300000000000000000000000000000000000000000000000000006064820152608401610a7f565b5090565b600c546bffffffffffffffffffffffff16600003612e6857565b6000612e72610ed2565b80519091506000819003612eb2576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c54600090612ed19083906bffffffffffffffffffffffff16614fd0565b905060005b82811015612f9c5781600b6000868481518110612ef557612ef5614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282829054906101000a90046bffffffffffffffffffffffff16612f5d919061566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555080612f95906150c1565b9050612ed6565b50612fa7828261568f565b600c8054600090612fc79084906bffffffffffffffffffffffff16614ffb565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505050565b612c11612b90565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915260085461010083015160009161ffff75010000000000000000000000000000000000000000009091048116911611156130c0576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006130cf846000015161071c565b90506130d9612ac6565b915060006130f28560e001513a848860800151876135f4565b9050806bffffffffffffffffffffffff1685606001516bffffffffffffffffffffffff16101561314e576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600954600090613184907c0100000000000000000000000000000000000000000000000000000000900463ffffffff16426156b7565b905060003087604001518860a001518960c0015160016131a491906156ca565b8a5180516020918201206101008d015160e08e015160405161325898979695948c918c9132910173ffffffffffffffffffffffffffffffffffffffff9a8b168152988a1660208a015267ffffffffffffffff97881660408a0152959096166060880152608087019390935261ffff9190911660a086015263ffffffff90811660c08601526bffffffffffffffffffffffff9190911660e0850152919091166101008301529091166101208201526101400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206101608401835280845230848301526bffffffffffffffffffffffff8716848401528a83015173ffffffffffffffffffffffffffffffffffffffff16606085015260a0808c015167ffffffffffffffff1660808087019190915260e0808e015163ffffffff90811693880193909352908d015168ffffffffffffffffff90811660c08801528a169086015260085468010000000000000000810482166101008701526c0100000000000000000000000090048116610120860152861661014085015291519298509092506133649188910161462e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600093845260079092529091205550929491935090915050565b60006133e86040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b6000808080806133fa888a018a614ea0565b84519499509297509095509350915060ff1680158061341a575084518114155b80613426575083518114155b80613432575082518114155b8061343e575081518114155b156134a5576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4669656c6473206d75737420626520657175616c206c656e67746800000000006044820152606401610a7f565b60005b8181101561350b576134e18782815181106134c5576134c5614d96565b6020026020010151600090815260076020526040902054151590565b61350b576134f0600183615091565b81036134fb57600198505b613504816150c1565b90506134a8565b50506040805160a0810182529586526020860194909452928401919091526060830152608082015290505b9250929050565b600061354a826020615406565b613555856020615406565b613561886101446156b7565b61356b91906156b7565b61357591906156b7565b6135809060006156b7565b90503681146135eb576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610a7f565b50505050505050565b600854600090700100000000000000000000000000000000900464ffffffffff1685101561363d57600854700100000000000000000000000000000000900464ffffffffff1694505b600854600090612710906136579063ffffffff1688615406565b6136619190615656565b61366b90876156b7565b60085490915060009088906136a49063ffffffff6c0100000000000000000000000082048116916801000000000000000090041661544c565b6136ae919061544c565b63ffffffff16905060006136f86000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250613e8b92505050565b905060006137198261370a8587615406565b61371491906156b7565b613fcd565b905060008668ffffffffffffffffff168868ffffffffffffffffff168a68ffffffffffffffffff1661374b919061566a565b613755919061566a565b9050613761818361566a565b9b9a5050505050505050505050565b600061377a610ed2565b511115610e7e57610e7e612e4e565b6000808a8a8a8a8a8a8a8a8a6040516020016137ad999897969594939291906156eb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff8216036138b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610a7f565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000808480602001905181019061394091906157b7565b905060003a82610120015183610100015161395b919061587f565b64ffffffffff1661396c9190615406565b905060008460ff166139b46000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250613e8b92505050565b6139be9190615656565b905060006139cf61371483856156b7565b905060006139dc3a613fcd565b90506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663330605298e8e868b60c0015168ffffffffffffffffff168c60e0015168ffffffffffffffffff168a613a4b919061566a565b613a55919061566a565b336040518061016001604052808f6000015181526020018f6020015173ffffffffffffffffffffffffffffffffffffffff1681526020018f604001516bffffffffffffffffffffffff1681526020018f6060015173ffffffffffffffffffffffffffffffffffffffff1681526020018f6080015167ffffffffffffffff1681526020018f60a0015163ffffffff168152602001600068ffffffffffffffffff1681526020018f60e0015168ffffffffffffffffff1681526020018f610100015164ffffffffff1681526020018f610120015164ffffffffff1681526020018f610140015163ffffffff168152506040518763ffffffff1660e01b8152600401613b639695949392919061589d565b60408051808303816000875af1158015613b81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ba59190615919565b90925090506000826006811115613bbe57613bbe6153b3565b1480613bdb57506001826006811115613bd957613bd96153b3565b145b15613ddc5760008e815260076020526040812055613bf9818561566a565b336000908152600b602052604081208054909190613c269084906bffffffffffffffffffffffff1661566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508660e0015168ffffffffffffffffff16600c60008282829054906101000a90046bffffffffffffffffffffffff16613c8c919061566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508660c0015168ffffffffffffffffff16600b6000613cd6613fec565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160009081208054909190613d1c9084906bffffffffffffffffffffffff1661566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508d7f08a4a0761e3c98d288cb4af9342660f49550d83139fb3b762b70d34bed6273688487848b60e0015160008d60c00151604051613dd3969594939291906bffffffffffffffffffffffff9687168152602081019590955292909416604084015268ffffffffffffffffff9081166060840152928316608083015290911660a082015260c00190565b60405180910390a25b509c9b505050505050505050505050565b60006bffffffffffffffffffffffff821115612e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610a7f565b600046613e978161405d565b15613f1357606c73ffffffffffffffffffffffffffffffffffffffff1663c6f7de0e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f0c919061594c565b9392505050565b613f1c81614080565b15613fc45773420000000000000000000000000000000000000f73ffffffffffffffffffffffffffffffffffffffff166349948e0e846040518060800160405280604881526020016159b260489139604051602001613f7c929190615965565b6040516020818303038152906040526040518263ffffffff1660e01b8152600401613fa791906141d8565b602060405180830381865afa158015613ee8573d6000803e3d6000fd5b50600092915050565b6000610753613fda612982565b612d9884670de0b6b3a7640000615406565b60003073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015614039573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae69190615994565b600061a4b1821480614071575062066eed82145b8061075357505062066eee1490565b6000600a82148061409257506101a482145b8061409f575062aa37dc82145b806140ab575061210582145b806140b8575062014a3382145b8061075357505062014a341490565b604051806103e00160405280601f906020820280368337509192915050565b60008083601f8401126140f857600080fd5b50813567ffffffffffffffff81111561411057600080fd5b60208301915083602082850101111561353657600080fd5b6000806020838503121561413b57600080fd5b823567ffffffffffffffff81111561415257600080fd5b61415e858286016140e6565b90969095509350505050565b60005b8381101561418557818101518382015260200161416d565b50506000910152565b600081518084526141a681602086016020860161416a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000613f0c602083018461418e565b73ffffffffffffffffffffffffffffffffffffffff81168114612afc57600080fd5b803561135b816141eb565b60008060006040848603121561422d57600080fd5b833567ffffffffffffffff81111561424457600080fd5b614250868287016140e6565b9094509250506020840135614264816141eb565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156142c2576142c261426f565b60405290565b604051610160810167ffffffffffffffff811182821017156142c2576142c261426f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156143335761433361426f565b604052919050565b600082601f83011261434c57600080fd5b813567ffffffffffffffff8111156143665761436661426f565b61439760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016142ec565b8181528460208386010111156143ac57600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156143db57600080fd5b813567ffffffffffffffff8111156143f257600080fd5b612da78482850161433b565b6bffffffffffffffffffffffff81168114612afc57600080fd5b803561135b816143fe565b6000806040838503121561443657600080fd5b8235614441816141eb565b91506020830135614451816143fe565b809150509250929050565b600081518084526020808501945080840160005b838110156144a257815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101614470565b509495945050505050565b602081526000613f0c602083018461445c565b6000602082840312156144d257600080fd5b5035919050565b6000602082840312156144eb57600080fd5b813567ffffffffffffffff81111561450257600080fd5b82016101608185031215613f0c57600080fd5b805182526020810151614540602084018273ffffffffffffffffffffffffffffffffffffffff169052565b50604081015161456060408401826bffffffffffffffffffffffff169052565b506060810151614588606084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808101516145a4608084018267ffffffffffffffff169052565b5060a08101516145bc60a084018263ffffffff169052565b5060c08101516145d960c084018268ffffffffffffffffff169052565b5060e08101516145f660e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff9081169184019190915261012080830151909116908301526101409081015163ffffffff16910152565b61016081016107538284614515565b60008083601f84011261464f57600080fd5b50813567ffffffffffffffff81111561466757600080fd5b6020830191508360208260051b850101111561353657600080fd5b60008060008060008060008060e0898b03121561469e57600080fd5b606089018a8111156146af57600080fd5b8998503567ffffffffffffffff808211156146c957600080fd5b6146d58c838d016140e6565b909950975060808b01359150808211156146ee57600080fd5b6146fa8c838d0161463d565b909750955060a08b013591508082111561471357600080fd5b506147208b828c0161463d565b999c989b50969995989497949560c00135949350505050565b63ffffffff81168114612afc57600080fd5b803561135b81614739565b64ffffffffff81168114612afc57600080fd5b803561135b81614756565b803561ffff8116811461135b57600080fd5b67ffffffffffffffff81168114612afc57600080fd5b803561135b81614786565b60ff81168114612afc57600080fd5b803561135b816147a7565b80357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8116811461135b57600080fd5b6000610180828403121561480057600080fd5b61480861429e565b6148118361474b565b815261481f6020840161474b565b60208201526148306040840161474b565b60408201526148416060840161474b565b606082015261485260808401614769565b608082015261486360a08401614774565b60a082015261487460c0840161479c565b60c082015261488560e084016147b6565b60e08201526101006148988185016147c1565b908201526101206148aa84820161474b565b908201526101406148bc848201614774565b908201526101606148ce848201614774565b908201529392505050565b815163ffffffff168152610180810160208301516148ff602084018263ffffffff169052565b506040830151614917604084018263ffffffff169052565b50606083015161492f606084018263ffffffff169052565b506080830151614948608084018264ffffffffff169052565b5060a083015161495e60a084018261ffff169052565b5060c083015161497a60c084018267ffffffffffffffff169052565b5060e083015161498f60e084018260ff169052565b50610100838101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16908301526101208084015163ffffffff16908301526101408084015161ffff908116918401919091526101608085015191821681850152905b505092915050565b600080600080600060808688031215614a0e57600080fd5b8535614a1981614786565b9450602086013567ffffffffffffffff811115614a3557600080fd5b614a41888289016140e6565b9095509350506040860135614a5581614739565b949793965091946060013592915050565b600067ffffffffffffffff821115614a8057614a8061426f565b5060051b60200190565b600082601f830112614a9b57600080fd5b81356020614ab0614aab83614a66565b6142ec565b82815260059290921b84018101918181019086841115614acf57600080fd5b8286015b84811015614af3578035614ae6816141eb565b8352918301918301614ad3565b509695505050505050565b60008060008060008060c08789031215614b1757600080fd5b863567ffffffffffffffff80821115614b2f57600080fd5b614b3b8a838b01614a8a565b97506020890135915080821115614b5157600080fd5b614b5d8a838b01614a8a565b9650614b6b60408a016147b6565b95506060890135915080821115614b8157600080fd5b614b8d8a838b0161433b565b9450614b9b60808a0161479c565b935060a0890135915080821115614bb157600080fd5b50614bbe89828a0161433b565b9150509295509295509295565b600060208284031215614bdd57600080fd5b8135613f0c816141eb565b600181811c90821680614bfc57607f821691505b602082108103612ac0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b601f82111561069a57600081815260208120601f850160051c81016020861015614c5c5750805b601f850160051c820191505b8181101561090a57828155600101614c68565b67ffffffffffffffff831115614c9357614c9361426f565b614ca783614ca18354614be8565b83614c35565b6000601f841160018114614cf95760008515614cc35750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355614d8f565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b82811015614d485786850135825560209485019460019092019101614d28565b5086821015614d83577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082601f830112614dd657600080fd5b81356020614de6614aab83614a66565b82815260059290921b84018101918181019086841115614e0557600080fd5b8286015b84811015614af35780358352918301918301614e09565b600082601f830112614e3157600080fd5b81356020614e41614aab83614a66565b82815260059290921b84018101918181019086841115614e6057600080fd5b8286015b84811015614af357803567ffffffffffffffff811115614e845760008081fd5b614e928986838b010161433b565b845250918301918301614e64565b600080600080600060a08688031215614eb857600080fd5b853567ffffffffffffffff80821115614ed057600080fd5b614edc89838a01614dc5565b96506020880135915080821115614ef257600080fd5b614efe89838a01614e20565b95506040880135915080821115614f1457600080fd5b614f2089838a01614e20565b94506060880135915080821115614f3657600080fd5b614f4289838a01614e20565b93506080880135915080821115614f5857600080fd5b50614f6588828901614e20565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006bffffffffffffffffffffffff80841680614fef57614fef614f72565b92169190910492915050565b6bffffffffffffffffffffffff82811682821603908082111561502057615020614fa1565b5092915050565b805169ffffffffffffffffffff8116811461135b57600080fd5b600080600080600060a0868803121561505957600080fd5b61506286615027565b945060208601519350604086015192506060860151915061508560808701615027565b90509295509295909350565b8181038181111561075357610753614fa1565b6000602082840312156150b657600080fd5b8151613f0c816147a7565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036150f2576150f2614fa1565b5060010190565b68ffffffffffffffffff81168114612afc57600080fd5b803561135b816150f9565b6000610160823603121561512e57600080fd5b6151366142c8565b823567ffffffffffffffff81111561514d57600080fd5b6151593682860161433b565b825250602083013560208201526151726040840161420d565b604082015261518360608401614418565b606082015261519460808401615110565b60808201526151a560a0840161479c565b60a08201526151b660c0840161479c565b60c08201526151c760e0840161474b565b60e08201526101006151da818501614774565b908201526101206151ec84820161479c565b908201526101406151fe84820161420d565b9082015292915050565b60006020828403121561521a57600080fd5b8135613f0c81614786565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261525a57600080fd5b83018035915067ffffffffffffffff82111561527557600080fd5b60200191503681900382131561353657600080fd5b60006020828403121561529c57600080fd5b613f0c82614774565b6000602082840312156152b757600080fd5b8135613f0c81614739565b73ffffffffffffffffffffffffffffffffffffffff8a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f88017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016830101905061536a60e0830184614515565b9a9950505050505050505050565b60ff818116838216019081111561075357610753614fa1565b600060ff8316806153a4576153a4614f72565b8060ff84160491505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b808202811582820484141761075357610753614fa1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b63ffffffff81811683821601908082111561502057615020614fa1565b600061012063ffffffff808d1684528b6020850152808b166040850152508060608401526154998184018a61445c565b905082810360808401526154ad818961445c565b905060ff871660a084015282810360c08401526154ca818761418e565b905067ffffffffffffffff851660e08401528281036101008401526154ef818561418e565b9c9b505050505050505050505050565b805161135b816150f9565b60006020828403121561551c57600080fd5b8151613f0c816150f9565b600181815b8085111561558057817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561556657615566614fa1565b8085161561557357918102915b93841c939080029061552c565b509250929050565b60008261559757506001610753565b816155a457506000610753565b81600181146155ba57600281146155c4576155e0565b6001915050610753565b60ff8411156155d5576155d5614fa1565b50506001821b610753565b5060208310610133831016604e8410600b8410161715615603575081810a610753565b61560d8383615527565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561563f5761563f614fa1565b029392505050565b6000613f0c60ff841683615588565b60008261566557615665614f72565b500490565b6bffffffffffffffffffffffff81811683821601908082111561502057615020614fa1565b6bffffffffffffffffffffffff8181168382160280821691908281146149ee576149ee614fa1565b8082018082111561075357610753614fa1565b67ffffffffffffffff81811683821601908082111561502057615020614fa1565b60006101208b835273ffffffffffffffffffffffffffffffffffffffff8b16602084015267ffffffffffffffff808b1660408501528160608501526157328285018b61445c565b91508382036080850152615746828a61445c565b915060ff881660a085015283820360c0850152615763828861418e565b90861660e085015283810361010085015290506154ef818561418e565b805161135b816141eb565b805161135b816143fe565b805161135b81614786565b805161135b81614739565b805161135b81614756565b600061016082840312156157ca57600080fd5b6157d26142c8565b825181526157e260208401615780565b60208201526157f36040840161578b565b604082015261580460608401615780565b606082015261581560808401615796565b608082015261582660a084016157a1565b60a082015261583760c084016154ff565b60c082015261584860e084016154ff565b60e082015261010061585b8185016157ac565b9082015261012061586d8482016157ac565b908201526101406148ce8482016157a1565b64ffffffffff81811683821601908082111561502057615020614fa1565b60006102008083526158b18184018a61418e565b905082810360208401526158c5818961418e565b6bffffffffffffffffffffffff88811660408601528716606085015273ffffffffffffffffffffffffffffffffffffffff86166080850152915061590e905060a0830184614515565b979650505050505050565b6000806040838503121561592c57600080fd5b82516007811061593b57600080fd5b6020840151909250614451816143fe565b60006020828403121561595e57600080fd5b5051919050565b6000835161597781846020880161416a565b83519083019061598b81836020880161416a565b01949350505050565b6000602082840312156159a657600080fd5b8151613f0c816141eb56fe307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666a164736f6c6343000813000a',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106101b95760003560e01c806385b214cf116100f9578063d227d24511610097578063e4ddcea611610071578063e4ddcea614610611578063f2f22ef114610627578063f2fde38b1461062f578063f6ea41f61461064257600080fd5b8063d227d245146105c6578063d328a91e146105f6578063e3d0e712146105fe57600080fd5b8063afcb95d7116100d3578063afcb95d7146103b2578063b1dc65a4146103d2578063ba9c924d146103e5578063c3f909d4146103f857600080fd5b806385b214cf146103575780638da5cb5b1461036a578063a631571e1461039257600080fd5b8063736d7e0f116101665780637f15e166116101405780637f15e166146102ba57806381411834146102cd57806381f1b938146102e257806381ff7048146102ea57600080fd5b8063736d7e0f1461029757806379ba5097146102aa5780637d480787146102b257600080fd5b8063626f458c11610197578063626f458c1461023857806366316d8d146102655780637212762f1461027857600080fd5b8063083a5466146101be578063181f5a77146101d35780633901c40e14610225575b600080fd5b6101d16101cc366004614128565b61064a565b005b61020f6040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e332e300000000081525081565b60405161021c91906141d8565b60405180910390f35b6101d1610233366004614218565b61069f565b61024b6102463660046143c9565b61071c565b60405168ffffffffffffffffff909116815260200161021c565b6101d1610273366004614423565b610759565b610280610912565b6040805192835260ff90911660208301520161021c565b6101d16102a5366004614128565b610b25565b6101d1610b85565b6101d1610c82565b6101d16102c8366004614128565b610e82565b6102d5610ed2565b60405161021c91906144ad565b61020f610f41565b61033460015460025463ffffffff74010000000000000000000000000000000000000000830481169378010000000000000000000000000000000000000000000000009093041691565b6040805163ffffffff94851681529390921660208401529082015260600161021c565b6101d16103653660046144c0565b611012565b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021c565b6103a56103a03660046144d9565b6110cf565b60405161021c919061462e565b60408051600181526000602082018190529181019190915260600161021c565b6101d16103e0366004614682565b611360565b6101d16103f33660046147ed565b611976565b6105b96040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915250604080516101808101825260085463ffffffff80821683526401000000008204811660208401526801000000000000000082048116938301939093526c01000000000000000000000000810483166060830152700100000000000000000000000000000000810464ffffffffff1660808301527501000000000000000000000000000000000000000000810461ffff90811660a084015277010000000000000000000000000000000000000000000000820467ffffffffffffffff1660c08401527f010000000000000000000000000000000000000000000000000000000000000090910460ff1660e08301526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81166101008401527c01000000000000000000000000000000000000000000000000000000009004909216610120820152600a5480831661014083015262010000900490911661016082015290565b60405161021c91906148d9565b6105d96105d43660046149f6565b611c41565b6040516bffffffffffffffffffffffff909116815260200161021c565b61020f611daf565b6101d161060c366004614afe565b611e06565b610619612982565b60405190815260200161021c565b61024b612ac6565b6101d161063d366004614bcb565b612aeb565b61024b612aff565b610652612b90565b600081900361068d576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f61069a828483614c7b565b505050565b6106a76140c7565b33815273ffffffffffffffffffffffffffffffffffffffff821660208201526000808080806106d88989018a614ea0565b945094509450945094506107116040518060a0016040528087815260200186815260200185815260200184815260200183815250612c13565b505050505050505050565b600a54600090610753906064906107369061ffff16612d62565b6107409190614fd0565b6bffffffffffffffffffffffff16612daf565b92915050565b610761612e4e565b806bffffffffffffffffffffffff1660000361079b5750336000908152600b60205260409020546bffffffffffffffffffffffff166107f5565b336000908152600b60205260409020546bffffffffffffffffffffffff808316911610156107f5576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000908152600b6020526040812080548392906108229084906bffffffffffffffffffffffff16614ffb565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506108777f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301526bffffffffffffffffffffffff8416602483015291909116906366316d8d90604401600060405180830381600087803b1580156108f657600080fd5b505af115801561090a573d6000803e3d6000fd5b505050505050565b600080600080600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a99190615041565b5093505092505080426109bc9190615091565b600854640100000000900463ffffffff161080156109e95750600854640100000000900463ffffffff1615155b15610a4657505060085477010000000000000000000000000000000000000000000000810467ffffffffffffffff16937f010000000000000000000000000000000000000000000000000000000000000090910460ff1692509050565b60008213610a88576040517f56b22ab8000000000000000000000000000000000000000000000000000000008152600481018390526024015b60405180910390fd5b600d54604080517f313ce5670000000000000000000000000000000000000000000000000000000081529051849273ffffffffffffffffffffffffffffffffffffffff169163313ce5679160048083019260209291908290030181865afa158015610af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1b91906150a4565b9350935050509091565b610b2d6140c7565b338152600080808080610b4288880189614ea0565b94509450945094509450610b7b6040518060a0016040528087815260200186815260200185815260200184815260200183815250612c13565b5050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610c06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e6572000000000000000000006044820152606401610a7f565b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610c8a612ffa565b610c92612e4e565b6000610c9c610ed2565b905060005b8151811015610e7e576000600b6000848481518110610cc257610cc2614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252810191909152604001600020546bffffffffffffffffffffffff1690508015610e6d576000600b6000858581518110610d2157610d21614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550610db87f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff166366316d8d848481518110610de557610de5614d96565b6020026020010151836040518363ffffffff1660e01b8152600401610e3a92919073ffffffffffffffffffffffffffffffffffffffff9290921682526bffffffffffffffffffffffff16602082015260400190565b600060405180830381600087803b158015610e5457600080fd5b505af1158015610e68573d6000803e3d6000fd5b505050505b50610e77816150c1565b9050610ca1565b5050565b610e8a612b90565b6000819003610ec5576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600e61069a828483614c7b565b60606006805480602002602001604051908101604052809291908181526020018280548015610f3757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610f0c575b5050505050905090565b6060600f8054610f5090614be8565b9050600003610f8b576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f8054610f9890614be8565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc490614be8565b8015610f375780601f10610fe657610100808354040283529160200191610f37565b820191906000526020600020905b815481529060010190602001808311610ff457509395945050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611081576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f416906110c49083815260200190565b60405180910390a150565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091523373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611197576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111aa6111a58461511b565b613002565b90925090506111bf6060840160408501614bcb565b825173ffffffffffffffffffffffffffffffffffffffff91909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff3261120d60c0880160a08901615208565b61121f61016089016101408a01614bcb565b6112298980615225565b61123b6101208c016101008d0161528a565b60208c01356112516101008e0160e08f016152a5565b6040518061016001604052808e6000015181526020018e6020015173ffffffffffffffffffffffffffffffffffffffff1681526020018e604001516bffffffffffffffffffffffff1681526020018e6060015173ffffffffffffffffffffffffffffffffffffffff1681526020018e6080015167ffffffffffffffff1681526020018e60a0015163ffffffff1681526020018d68ffffffffffffffffff1681526020018e60e0015168ffffffffffffffffff1681526020018e610100015164ffffffffff1681526020018e610120015164ffffffffff1681526020018e610140015163ffffffff16815250604051611351999897969594939291906152c2565b60405180910390a3505b919050565b60008061136d89896133b4565b91509150811561137e575050610b7b565b604080518b3580825262ffffff6020808f0135600881901c9290921690840152909290917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16113db8b8b8b8b8b8b61353d565b6003546000906002906113f99060ff80821691610100900416615378565b6114039190615391565b61140e906001615378565b60ff16905088811461147c576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610a7f565b88871461150b576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f7265706f727420727320616e64207373206d757374206265206f66206571756160448201527f6c206c656e6774680000000000000000000000000000000000000000000000006064820152608401610a7f565b3360009081526004602090815260408083208151808301909252805460ff8082168452929391929184019161010090910416600281111561154e5761154e6153b3565b600281111561155f5761155f6153b3565b905250905060028160200151600281111561157c5761157c6153b3565b141580156115c557506006816000015160ff168154811061159f5761159f614d96565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff163314155b1561162c576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610a7f565b505050506116386140c7565b60008a8a60405161164a9291906153e2565b604051908190038120611661918e906020016153f2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120838301909252600080845290830152915060005b8981101561195d5760006001848984602081106116ca576116ca614d96565b6116d791901a601b615378565b8e8e868181106116e9576116e9614d96565b905060200201358d8d8781811061170257611702614d96565b905060200201356040516000815260200160405260405161173f949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611761573d6000803e3d6000fd5b5050604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081015173ffffffffffffffffffffffffffffffffffffffff811660009081526004602090815290849020838501909452835460ff808216855292965092945084019161010090041660028111156117e1576117e16153b3565b60028111156117f2576117f26153b3565b905250925060018360200151600281111561180f5761180f6153b3565b14611876576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610a7f565b8251600090869060ff16601f811061189057611890614d96565b602002015173ffffffffffffffffffffffffffffffffffffffff1614611912576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610a7f565b8085846000015160ff16601f811061192c5761192c614d96565b73ffffffffffffffffffffffffffffffffffffffff909216602092909202015250611956816150c1565b90506116ab565b50505061196982612c13565b5050505050505050505050565b61197e612ffa565b80516008805460208401516040808601516060870151608088015160a089015160c08a015160e08b015160ff167f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff67ffffffffffffffff90921677010000000000000000000000000000000000000000000000029190911676ffffffffffffffffffffffffffffffffffffffffffffff61ffff9384167501000000000000000000000000000000000000000000027fffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffffff64ffffffffff90961670010000000000000000000000000000000002959095167fffffffffffffffffff00000000000000ffffffffffffffffffffffffffffffff63ffffffff9788166c01000000000000000000000000027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff9989166801000000000000000002999099167fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff9b8916640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909d169e89169e909e179b909b17999099169b909b17959095179790971695909517179690961617929092179092556101008401516101208501519093167c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90931692909217600955610140830151600a8054610160860151841662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000919091169290931691909117919091179055517f2e2c8535dcc25459d519f2300c114d2d2128bf6399722d04eca078461a3bf33a906110c49083906148d9565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff8516602482015273ffffffffffffffffffffffffffffffffffffffff91909116906310fc49c19060440160006040518083038186803b158015611ce157600080fd5b505afa158015611cf5573d6000803e3d6000fd5b5050505066038d7ea4c68000821115611d3a576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611d44612aff565b90506000611d8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061071c92505050565b90506000611d93612ac6565b9050611da286868486856135f4565b9998505050505050505050565b6060600e8054611dbe90614be8565b9050600003611df9576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600e8054610f9890614be8565b855185518560ff16601f831115611e79576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610a7f565b80600003611ee3576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610a7f565b818314611f71576040517f89a61989000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610a7f565b611f7c816003615406565b8311611fe4576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610a7f565b611fec612b90565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a08101869052906120339088613770565b600554156121e85760055460009061204d90600190615091565b905060006005828154811061206457612064614d96565b60009182526020822001546006805473ffffffffffffffffffffffffffffffffffffffff9092169350908490811061209e5761209e614d96565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff85811684526004909252604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00009081169091559290911680845292208054909116905560058054919250908061211e5761211e61541d565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905560068054806121875761218761541d565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905550612033915050565b60005b81515181101561279f5781518051600091908390811061220d5761220d614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603612292576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f7369676e6572206d757374206e6f7420626520656d70747900000000000000006044820152606401610a7f565b600073ffffffffffffffffffffffffffffffffffffffff16826020015182815181106122c0576122c0614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603612345576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f7472616e736d6974746572206d757374206e6f7420626520656d7074790000006044820152606401610a7f565b6000600460008460000151848151811061236157612361614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff1660028111156123ab576123ab6153b3565b14612412576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610a7f565b6040805180820190915260ff8216815260016020820152825180516004916000918590811061244357612443614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000016176101008360028111156124e4576124e46153b3565b0217905550600091506124f49050565b600460008460200151848151811061250e5761250e614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff166002811115612558576125586153b3565b146125bf576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610a7f565b6040805180820190915260ff8216815260208101600281525060046000846020015184815181106125f2576125f2614d96565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001617610100836002811115612693576126936153b3565b0217905550508251805160059250839081106126b1576126b1614d96565b602090810291909101810151825460018101845560009384529282902090920180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909316929092179091558201518051600691908390811061272d5761272d614d96565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117905580612797816150c1565b9150506121eb565b506040810151600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116780100000000000000000000000000000000000000000000000063ffffffff43811682029290921780855592048116929182916014916128579184917401000000000000000000000000000000000000000090041661544c565b92506101000a81548163ffffffff021916908363ffffffff1602179055506128b64630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a00151613789565b600281905582518051600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e059861296d988b9891977401000000000000000000000000000000000000000090920463ffffffff16969095919491939192615469565b60405180910390a15050505050505050505050565b6000806000600c8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156129f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a169190615041565b509350509250508042612a299190615091565b600854640100000000900463ffffffff16108015612a565750600854640100000000900463ffffffff1615155b15612a835750506009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16919050565b60008213612ac0576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610a7f565b50919050565b600a54600090612ae6906064906107369062010000900461ffff16612d62565b905090565b612af3612b90565b612afc81613834565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae6919061550a565b60005473ffffffffffffffffffffffffffffffffffffffff163314612c11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610a7f565b565b80515160ff1660005b8181101561069a576000612cc584600001518381518110612c3f57612c3f614d96565b602002602001015185602001518481518110612c5d57612c5d614d96565b602002602001015186604001518581518110612c7b57612c7b614d96565b602002602001015187606001518681518110612c9957612c99614d96565b602002602001015188608001518781518110612cb757612cb7614d96565b602002602001015188613929565b90506000816006811115612cdb57612cdb6153b3565b1480612cf857506001816006811115612cf657612cf66153b3565b145b15612d51578351805183908110612d1157612d11614d96565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b50612d5b816150c1565b9050612c1c565b6000806000612d6f610912565b9092509050612da782612d83836012615378565b612d8e90600a615647565b612d989087615406565b612da29190615656565b613ded565b949350505050565b600068ffffffffffffffffff821115612e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203760448201527f32206269747300000000000000000000000000000000000000000000000000006064820152608401610a7f565b5090565b600c546bffffffffffffffffffffffff16600003612e6857565b6000612e72610ed2565b80519091506000819003612eb2576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c54600090612ed19083906bffffffffffffffffffffffff16614fd0565b905060005b82811015612f9c5781600b6000868481518110612ef557612ef5614d96565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282829054906101000a90046bffffffffffffffffffffffff16612f5d919061566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555080612f95906150c1565b9050612ed6565b50612fa7828261568f565b600c8054600090612fc79084906bffffffffffffffffffffffff16614ffb565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505050565b612c11612b90565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915260085461010083015160009161ffff75010000000000000000000000000000000000000000009091048116911611156130c0576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006130cf846000015161071c565b90506130d9612ac6565b915060006130f28560e001513a848860800151876135f4565b9050806bffffffffffffffffffffffff1685606001516bffffffffffffffffffffffff16101561314e576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600954600090613184907c0100000000000000000000000000000000000000000000000000000000900463ffffffff16426156b7565b905060003087604001518860a001518960c0015160016131a491906156ca565b8a5180516020918201206101008d015160e08e015160405161325898979695948c918c9132910173ffffffffffffffffffffffffffffffffffffffff9a8b168152988a1660208a015267ffffffffffffffff97881660408a0152959096166060880152608087019390935261ffff9190911660a086015263ffffffff90811660c08601526bffffffffffffffffffffffff9190911660e0850152919091166101008301529091166101208201526101400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206101608401835280845230848301526bffffffffffffffffffffffff8716848401528a83015173ffffffffffffffffffffffffffffffffffffffff16606085015260a0808c015167ffffffffffffffff1660808087019190915260e0808e015163ffffffff90811693880193909352908d015168ffffffffffffffffff90811660c08801528a169086015260085468010000000000000000810482166101008701526c0100000000000000000000000090048116610120860152861661014085015291519298509092506133649188910161462e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600093845260079092529091205550929491935090915050565b60006133e86040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b6000808080806133fa888a018a614ea0565b84519499509297509095509350915060ff1680158061341a575084518114155b80613426575083518114155b80613432575082518114155b8061343e575081518114155b156134a5576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4669656c6473206d75737420626520657175616c206c656e67746800000000006044820152606401610a7f565b60005b8181101561350b576134e18782815181106134c5576134c5614d96565b6020026020010151600090815260076020526040902054151590565b61350b576134f0600183615091565b81036134fb57600198505b613504816150c1565b90506134a8565b50506040805160a0810182529586526020860194909452928401919091526060830152608082015290505b9250929050565b600061354a826020615406565b613555856020615406565b613561886101446156b7565b61356b91906156b7565b61357591906156b7565b6135809060006156b7565b90503681146135eb576040517f660bd4ba00000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610a7f565b50505050505050565b600854600090700100000000000000000000000000000000900464ffffffffff1685101561363d57600854700100000000000000000000000000000000900464ffffffffff1694505b600854600090612710906136579063ffffffff1688615406565b6136619190615656565b61366b90876156b7565b60085490915060009088906136a49063ffffffff6c0100000000000000000000000082048116916801000000000000000090041661544c565b6136ae919061544c565b63ffffffff16905060006136f86000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250613e8b92505050565b905060006137198261370a8587615406565b61371491906156b7565b613fcd565b905060008668ffffffffffffffffff168868ffffffffffffffffff168a68ffffffffffffffffff1661374b919061566a565b613755919061566a565b9050613761818361566a565b9b9a5050505050505050505050565b600061377a610ed2565b511115610e7e57610e7e612e4e565b6000808a8a8a8a8a8a8a8a8a6040516020016137ad999897969594939291906156eb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff8216036138b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610a7f565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000808480602001905181019061394091906157b7565b905060003a82610120015183610100015161395b919061587f565b64ffffffffff1661396c9190615406565b905060008460ff166139b46000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250613e8b92505050565b6139be9190615656565b905060006139cf61371483856156b7565b905060006139dc3a613fcd565b90506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663330605298e8e868b60c0015168ffffffffffffffffff168c60e0015168ffffffffffffffffff168a613a4b919061566a565b613a55919061566a565b336040518061016001604052808f6000015181526020018f6020015173ffffffffffffffffffffffffffffffffffffffff1681526020018f604001516bffffffffffffffffffffffff1681526020018f6060015173ffffffffffffffffffffffffffffffffffffffff1681526020018f6080015167ffffffffffffffff1681526020018f60a0015163ffffffff168152602001600068ffffffffffffffffff1681526020018f60e0015168ffffffffffffffffff1681526020018f610100015164ffffffffff1681526020018f610120015164ffffffffff1681526020018f610140015163ffffffff168152506040518763ffffffff1660e01b8152600401613b639695949392919061589d565b60408051808303816000875af1158015613b81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ba59190615919565b90925090506000826006811115613bbe57613bbe6153b3565b1480613bdb57506001826006811115613bd957613bd96153b3565b145b15613ddc5760008e815260076020526040812055613bf9818561566a565b336000908152600b602052604081208054909190613c269084906bffffffffffffffffffffffff1661566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508660e0015168ffffffffffffffffff16600c60008282829054906101000a90046bffffffffffffffffffffffff16613c8c919061566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508660c0015168ffffffffffffffffff16600b6000613cd6613fec565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160009081208054909190613d1c9084906bffffffffffffffffffffffff1661566a565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508d7f08a4a0761e3c98d288cb4af9342660f49550d83139fb3b762b70d34bed6273688487848b60e0015160008d60c00151604051613dd3969594939291906bffffffffffffffffffffffff9687168152602081019590955292909416604084015268ffffffffffffffffff9081166060840152928316608083015290911660a082015260c00190565b60405180910390a25b509c9b505050505050505050505050565b60006bffffffffffffffffffffffff821115612e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610a7f565b600046613e978161405d565b15613f1357606c73ffffffffffffffffffffffffffffffffffffffff1663c6f7de0e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f0c919061594c565b9392505050565b613f1c81614080565b15613fc45773420000000000000000000000000000000000000f73ffffffffffffffffffffffffffffffffffffffff166349948e0e846040518060800160405280604881526020016159b260489139604051602001613f7c929190615965565b6040516020818303038152906040526040518263ffffffff1660e01b8152600401613fa791906141d8565b602060405180830381865afa158015613ee8573d6000803e3d6000fd5b50600092915050565b6000610753613fda612982565b612d9884670de0b6b3a7640000615406565b60003073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015614039573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae69190615994565b600061a4b1821480614071575062066eed82145b8061075357505062066eee1490565b6000600a82148061409257506101a482145b8061409f575062aa37dc82145b806140ab575061210582145b806140b8575062014a3382145b8061075357505062014a341490565b604051806103e00160405280601f906020820280368337509192915050565b60008083601f8401126140f857600080fd5b50813567ffffffffffffffff81111561411057600080fd5b60208301915083602082850101111561353657600080fd5b6000806020838503121561413b57600080fd5b823567ffffffffffffffff81111561415257600080fd5b61415e858286016140e6565b90969095509350505050565b60005b8381101561418557818101518382015260200161416d565b50506000910152565b600081518084526141a681602086016020860161416a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000613f0c602083018461418e565b73ffffffffffffffffffffffffffffffffffffffff81168114612afc57600080fd5b803561135b816141eb565b60008060006040848603121561422d57600080fd5b833567ffffffffffffffff81111561424457600080fd5b614250868287016140e6565b9094509250506020840135614264816141eb565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156142c2576142c261426f565b60405290565b604051610160810167ffffffffffffffff811182821017156142c2576142c261426f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156143335761433361426f565b604052919050565b600082601f83011261434c57600080fd5b813567ffffffffffffffff8111156143665761436661426f565b61439760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016142ec565b8181528460208386010111156143ac57600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156143db57600080fd5b813567ffffffffffffffff8111156143f257600080fd5b612da78482850161433b565b6bffffffffffffffffffffffff81168114612afc57600080fd5b803561135b816143fe565b6000806040838503121561443657600080fd5b8235614441816141eb565b91506020830135614451816143fe565b809150509250929050565b600081518084526020808501945080840160005b838110156144a257815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101614470565b509495945050505050565b602081526000613f0c602083018461445c565b6000602082840312156144d257600080fd5b5035919050565b6000602082840312156144eb57600080fd5b813567ffffffffffffffff81111561450257600080fd5b82016101608185031215613f0c57600080fd5b805182526020810151614540602084018273ffffffffffffffffffffffffffffffffffffffff169052565b50604081015161456060408401826bffffffffffffffffffffffff169052565b506060810151614588606084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808101516145a4608084018267ffffffffffffffff169052565b5060a08101516145bc60a084018263ffffffff169052565b5060c08101516145d960c084018268ffffffffffffffffff169052565b5060e08101516145f660e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff9081169184019190915261012080830151909116908301526101409081015163ffffffff16910152565b61016081016107538284614515565b60008083601f84011261464f57600080fd5b50813567ffffffffffffffff81111561466757600080fd5b6020830191508360208260051b850101111561353657600080fd5b60008060008060008060008060e0898b03121561469e57600080fd5b606089018a8111156146af57600080fd5b8998503567ffffffffffffffff808211156146c957600080fd5b6146d58c838d016140e6565b909950975060808b01359150808211156146ee57600080fd5b6146fa8c838d0161463d565b909750955060a08b013591508082111561471357600080fd5b506147208b828c0161463d565b999c989b50969995989497949560c00135949350505050565b63ffffffff81168114612afc57600080fd5b803561135b81614739565b64ffffffffff81168114612afc57600080fd5b803561135b81614756565b803561ffff8116811461135b57600080fd5b67ffffffffffffffff81168114612afc57600080fd5b803561135b81614786565b60ff81168114612afc57600080fd5b803561135b816147a7565b80357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8116811461135b57600080fd5b6000610180828403121561480057600080fd5b61480861429e565b6148118361474b565b815261481f6020840161474b565b60208201526148306040840161474b565b60408201526148416060840161474b565b606082015261485260808401614769565b608082015261486360a08401614774565b60a082015261487460c0840161479c565b60c082015261488560e084016147b6565b60e08201526101006148988185016147c1565b908201526101206148aa84820161474b565b908201526101406148bc848201614774565b908201526101606148ce848201614774565b908201529392505050565b815163ffffffff168152610180810160208301516148ff602084018263ffffffff169052565b506040830151614917604084018263ffffffff169052565b50606083015161492f606084018263ffffffff169052565b506080830151614948608084018264ffffffffff169052565b5060a083015161495e60a084018261ffff169052565b5060c083015161497a60c084018267ffffffffffffffff169052565b5060e083015161498f60e084018260ff169052565b50610100838101517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16908301526101208084015163ffffffff16908301526101408084015161ffff908116918401919091526101608085015191821681850152905b505092915050565b600080600080600060808688031215614a0e57600080fd5b8535614a1981614786565b9450602086013567ffffffffffffffff811115614a3557600080fd5b614a41888289016140e6565b9095509350506040860135614a5581614739565b949793965091946060013592915050565b600067ffffffffffffffff821115614a8057614a8061426f565b5060051b60200190565b600082601f830112614a9b57600080fd5b81356020614ab0614aab83614a66565b6142ec565b82815260059290921b84018101918181019086841115614acf57600080fd5b8286015b84811015614af3578035614ae6816141eb565b8352918301918301614ad3565b509695505050505050565b60008060008060008060c08789031215614b1757600080fd5b863567ffffffffffffffff80821115614b2f57600080fd5b614b3b8a838b01614a8a565b97506020890135915080821115614b5157600080fd5b614b5d8a838b01614a8a565b9650614b6b60408a016147b6565b95506060890135915080821115614b8157600080fd5b614b8d8a838b0161433b565b9450614b9b60808a0161479c565b935060a0890135915080821115614bb157600080fd5b50614bbe89828a0161433b565b9150509295509295509295565b600060208284031215614bdd57600080fd5b8135613f0c816141eb565b600181811c90821680614bfc57607f821691505b602082108103612ac0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b601f82111561069a57600081815260208120601f850160051c81016020861015614c5c5750805b601f850160051c820191505b8181101561090a57828155600101614c68565b67ffffffffffffffff831115614c9357614c9361426f565b614ca783614ca18354614be8565b83614c35565b6000601f841160018114614cf95760008515614cc35750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355614d8f565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b82811015614d485786850135825560209485019460019092019101614d28565b5086821015614d83577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082601f830112614dd657600080fd5b81356020614de6614aab83614a66565b82815260059290921b84018101918181019086841115614e0557600080fd5b8286015b84811015614af35780358352918301918301614e09565b600082601f830112614e3157600080fd5b81356020614e41614aab83614a66565b82815260059290921b84018101918181019086841115614e6057600080fd5b8286015b84811015614af357803567ffffffffffffffff811115614e845760008081fd5b614e928986838b010161433b565b845250918301918301614e64565b600080600080600060a08688031215614eb857600080fd5b853567ffffffffffffffff80821115614ed057600080fd5b614edc89838a01614dc5565b96506020880135915080821115614ef257600080fd5b614efe89838a01614e20565b95506040880135915080821115614f1457600080fd5b614f2089838a01614e20565b94506060880135915080821115614f3657600080fd5b614f4289838a01614e20565b93506080880135915080821115614f5857600080fd5b50614f6588828901614e20565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006bffffffffffffffffffffffff80841680614fef57614fef614f72565b92169190910492915050565b6bffffffffffffffffffffffff82811682821603908082111561502057615020614fa1565b5092915050565b805169ffffffffffffffffffff8116811461135b57600080fd5b600080600080600060a0868803121561505957600080fd5b61506286615027565b945060208601519350604086015192506060860151915061508560808701615027565b90509295509295909350565b8181038181111561075357610753614fa1565b6000602082840312156150b657600080fd5b8151613f0c816147a7565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036150f2576150f2614fa1565b5060010190565b68ffffffffffffffffff81168114612afc57600080fd5b803561135b816150f9565b6000610160823603121561512e57600080fd5b6151366142c8565b823567ffffffffffffffff81111561514d57600080fd5b6151593682860161433b565b825250602083013560208201526151726040840161420d565b604082015261518360608401614418565b606082015261519460808401615110565b60808201526151a560a0840161479c565b60a08201526151b660c0840161479c565b60c08201526151c760e0840161474b565b60e08201526101006151da818501614774565b908201526101206151ec84820161479c565b908201526101406151fe84820161420d565b9082015292915050565b60006020828403121561521a57600080fd5b8135613f0c81614786565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261525a57600080fd5b83018035915067ffffffffffffffff82111561527557600080fd5b60200191503681900382131561353657600080fd5b60006020828403121561529c57600080fd5b613f0c82614774565b6000602082840312156152b757600080fd5b8135613f0c81614739565b73ffffffffffffffffffffffffffffffffffffffff8a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f88017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016830101905061536a60e0830184614515565b9a9950505050505050505050565b60ff818116838216019081111561075357610753614fa1565b600060ff8316806153a4576153a4614f72565b8060ff84160491505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b808202811582820484141761075357610753614fa1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b63ffffffff81811683821601908082111561502057615020614fa1565b600061012063ffffffff808d1684528b6020850152808b166040850152508060608401526154998184018a61445c565b905082810360808401526154ad818961445c565b905060ff871660a084015282810360c08401526154ca818761418e565b905067ffffffffffffffff851660e08401528281036101008401526154ef818561418e565b9c9b505050505050505050505050565b805161135b816150f9565b60006020828403121561551c57600080fd5b8151613f0c816150f9565b600181815b8085111561558057817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561556657615566614fa1565b8085161561557357918102915b93841c939080029061552c565b509250929050565b60008261559757506001610753565b816155a457506000610753565b81600181146155ba57600281146155c4576155e0565b6001915050610753565b60ff8411156155d5576155d5614fa1565b50506001821b610753565b5060208310610133831016604e8410600b8410161715615603575081810a610753565b61560d8383615527565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561563f5761563f614fa1565b029392505050565b6000613f0c60ff841683615588565b60008261566557615665614f72565b500490565b6bffffffffffffffffffffffff81811683821601908082111561502057615020614fa1565b6bffffffffffffffffffffffff8181168382160280821691908281146149ee576149ee614fa1565b8082018082111561075357610753614fa1565b67ffffffffffffffff81811683821601908082111561502057615020614fa1565b60006101208b835273ffffffffffffffffffffffffffffffffffffffff8b16602084015267ffffffffffffffff808b1660408501528160608501526157328285018b61445c565b91508382036080850152615746828a61445c565b915060ff881660a085015283820360c0850152615763828861418e565b90861660e085015283810361010085015290506154ef818561418e565b805161135b816141eb565b805161135b816143fe565b805161135b81614786565b805161135b81614739565b805161135b81614756565b600061016082840312156157ca57600080fd5b6157d26142c8565b825181526157e260208401615780565b60208201526157f36040840161578b565b604082015261580460608401615780565b606082015261581560808401615796565b608082015261582660a084016157a1565b60a082015261583760c084016154ff565b60c082015261584860e084016154ff565b60e082015261010061585b8185016157ac565b9082015261012061586d8482016157ac565b908201526101406148ce8482016157a1565b64ffffffffff81811683821601908082111561502057615020614fa1565b60006102008083526158b18184018a61418e565b905082810360208401526158c5818961418e565b6bffffffffffffffffffffffff88811660408601528716606085015273ffffffffffffffffffffffffffffffffffffffff86166080850152915061590e905060a0830184614515565b979650505050505050565b6000806040838503121561592c57600080fd5b82516007811061593b57600080fd5b6020840151909250614451816143fe565b60006020828403121561595e57600080fd5b5051919050565b6000835161597781846020880161416a565b83519083019061598b81836020880161416a565b01949350505050565b6000602082840312156159a657600080fd5b8151613f0c816141eb56fe307866666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666a164736f6c6343000813000a',
  linkReferences: {},
  deployedLinkReferences: {},
}
