export const MockFunctionsCoordinatorSource = {
  _format: 'hh-sol-artifact-1',
  contractName: 'MockFunctionsCoordinator',
  sourceName: 'MockFunctionsCoordinator.sol',
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
              name: 'maxCallbackGasLimit',
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
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint72',
              name: 'donFee',
              type: 'uint72',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
          ],
          internalType: 'struct FunctionsBilling.Config',
          name: 'config',
          type: 'tuple',
        },
        {
          internalType: 'address',
          name: 'linkToNativeFeed',
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
      inputs: [],
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
              name: 'maxCallbackGasLimit',
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
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint72',
              name: 'donFee',
              type: 'uint72',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
          ],
          indexed: false,
          internalType: 'struct FunctionsBilling.Config',
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
        {
          internalType: 'address[31]',
          name: 'signers',
          type: 'address[31]',
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
          internalType: 'bytes32',
          name: 'requestId',
          type: 'bytes32',
        },
      ],
      name: 'deleteCommitment',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'node',
          type: 'address',
        },
      ],
      name: 'deleteNodePublicKey',
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
          name: 'gasPriceGwei',
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
      name: 'getAdminFee',
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
      name: 'getAllNodePublicKeys',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
        {
          internalType: 'bytes[]',
          name: '',
          type: 'bytes[]',
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
              name: 'maxCallbackGasLimit',
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
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint72',
              name: 'donFee',
              type: 'uint72',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
          ],
          internalType: 'struct FunctionsBilling.Config',
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
      name: 'getDONFee',
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
          internalType: 'address',
          name: 'node',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'publicKey',
          type: 'bytes',
        },
      ],
      name: 'setNodePublicKey',
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
          internalType: 'address[]',
          name: 'transmitters',
          type: 'address[]',
        },
      ],
      name: 'setTransmitters',
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
              name: 'maxCallbackGasLimit',
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
              internalType: 'uint32',
              name: 'requestTimeoutSeconds',
              type: 'uint32',
            },
            {
              internalType: 'uint72',
              name: 'donFee',
              type: 'uint72',
            },
            {
              internalType: 'uint16',
              name: 'maxSupportedRequestDataVersion',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'fulfillmentGasPriceOverEstimationBP',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'fallbackNativePerUnitLink',
              type: 'uint224',
            },
          ],
          internalType: 'struct FunctionsBilling.Config',
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
    '0x60c06040523480156200001157600080fd5b5060405162004c0d38038062004c0d833981016040819052620000349162000455565b8282828282828260013380600081620000945760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000c757620000c78162000146565b50505015156080526001600160a01b038116620000f757604051632530e88560e11b815260040160405180910390fd5b6001600160a01b0390811660a052600b80549183166c01000000000000000000000000026001600160601b039092169190911790556200013782620001f1565b50505050505050505062000606565b336001600160a01b03821603620001a05760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200008b565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b620001fb62000340565b80516008805460208401516040808601516060870151608088015160a089015160c08a015163ffffffff998a166001600160401b031990981697909717640100000000968a16870217600160401b600160801b03191668010000000000000000948a169490940263ffffffff60601b1916939093176c010000000000000000000000009289169290920291909117600160801b600160e81b031916600160801b91881691909102600160a01b600160e81b03191617600160a01b6001600160481b03909216919091021761ffff60e81b1916600160e81b61ffff909416939093029290921790925560e084015161010085015193166001600160e01b0390931690910291909117600955517f5b6e2e1a03ea742ce04ca36d0175411a0772f99ef4ee84aeb9868a1ef6ddc82c90620003359083906200055e565b60405180910390a150565b6200034a6200034c565b565b6000546001600160a01b031633146200034a5760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016200008b565b80516001600160a01b0381168114620003c057600080fd5b919050565b60405161012081016001600160401b0381118282101715620003f757634e487b7160e01b600052604160045260246000fd5b60405290565b805163ffffffff81168114620003c057600080fd5b80516001600160481b0381168114620003c057600080fd5b805161ffff81168114620003c057600080fd5b80516001600160e01b0381168114620003c057600080fd5b60008060008385036101608112156200046d57600080fd5b6200047885620003a8565b935061012080601f19830112156200048f57600080fd5b62000499620003c5565b9150620004a960208701620003fd565b8252620004b960408701620003fd565b6020830152620004cc60608701620003fd565b6040830152620004df60808701620003fd565b6060830152620004f260a08701620003fd565b60808301526200050560c0870162000412565b60a08301526200051860e087016200042a565b60c08301526101006200052d818801620003fd565b60e08401526200053f8288016200043d565b90830152509150620005556101408501620003a8565b90509250925092565b815163ffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608080840151918216908301526101208201905060a0830151620005bd60a08401826001600160481b03169052565b5060c0830151620005d460c084018261ffff169052565b5060e0830151620005ed60e084018263ffffffff169052565b50610100928301516001600160e01b0316919092015290565b60805160a0516145b762000656600039600081816107e001528181610b1101528181610cc901528181610f68015281816110b20152818161176a0152612d6b0152600061129a01526145b76000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806381ff7048116100f9578063c3f909d411610097578063df61768811610071578063df61768814610535578063e3d0e71214610548578063e4ddcea61461055b578063f2fde38b1461057157600080fd5b8063c3f909d414610406578063d227d24514610502578063d328a91e1461052d57600080fd5b80638da5cb5b116100d35780638da5cb5b14610398578063a631571e146103b3578063afcb95d7146103d3578063b1dc65a4146103f357600080fd5b806381ff70481461031b57806385b214cf146103625780638b26b62b1461038557600080fd5b806366316d8d116101665780637f15e166116101405780637f15e166146102d857806380756031146102eb57806381411834146102fe57806381f1b9381461031357600080fd5b806366316d8d146102b557806379ba5097146102c85780637d480787146102d057600080fd5b806326ceabac116101a257806326ceabac146102435780632a905ccc14610256578063533989871461027857806359b5b7ac1461028e57600080fd5b8063083a5466146101c9578063181f5a77146101de5780631bdf7f1b14610230575b600080fd5b6101dc6101d73660046130ba565b610584565b005b61021a6040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e302e300000000081525081565b6040516102279190613142565b60405180910390f35b6101dc61023e366004613259565b6105c0565b6101dc61025136600461332f565b610776565b61025e6107dc565b60405168ffffffffffffffffff9091168152602001610227565b610280610865565b604051610227929190613390565b61025e61029c366004613472565b50600854600160a01b900468ffffffffffffffffff1690565b6101dc6102c33660046134cf565b610a4c565b6101dc610bbc565b6101dc610c72565b6101dc6102e63660046130ba565b610d93565b6101dc6102f9366004613508565b610dca565b610306610e41565b604051610227919061355d565b61021a610ea3565b61033f60015460025463ffffffff600160a01b8304811693600160c01b9093041691565b6040805163ffffffff948516815293909216602084015290820152606001610227565b610375610370366004613570565b610f5b565b6040519015158152602001610227565b6101dc610393366004613589565b611015565b6000546040516001600160a01b039091168152602001610227565b6103c66103c13660046135e6565b61104e565b6040516102279190613726565b604080516001815260006020820181905291810191909152606001610227565b6101dc61040136600461377a565b6111bb565b6104f56040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915250604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff1660c083015260095490811660e0830152919091046001600160e01b031661010082015290565b6040516102279190613831565b6105156105103660046138ff565b611766565b6040516001600160601b039091168152602001610227565b61021a6118b8565b6101dc61054336600461396f565b6118f6565b6101dc610556366004613a4e565b611902565b61056361208d565b604051908152602001610227565b6101dc61057f36600461332f565b612246565b61058c612257565b60008190036105ae57604051634f42be3d60e01b815260040160405180910390fd5b600e6105bb828483613b9b565b505050565b6105c86122b3565b80516008805460208401516040808601516060870151608088015160a089015160c08a015163ffffffff998a1667ffffffffffffffff1990981697909717640100000000968a168702177fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff1668010000000000000000948a16949094027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff1693909317600160601b92891692909202919091177fffffff00000000000000000000000000ffffffffffffffffffffffffffffffff16600160801b918816919091027fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff1617600160a01b68ffffffffffffffffff90921691909102177fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e81b61ffff909416939093029290921790925560e084015161010085015193166001600160e01b0390931690910291909117600955517f5b6e2e1a03ea742ce04ca36d0175411a0772f99ef4ee84aeb9868a1ef6ddc82c9061076b908390613831565b60405180910390a150565b6000546001600160a01b0316331480159061079a5750336001600160a01b03821614155b156107b85760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600d602052604081206107d991612fa8565b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190613c67565b905090565b606080600060068054806020026020016040519081016040528092919081815260200182805480156108c057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116108a2575b505050505090506000815167ffffffffffffffff8111156108e3576108e361315c565b60405190808252806020026020018201604052801561091657816020015b60608152602001906001900390816109015790505b50905060005b8251811015610a42576000600d600085848151811061093d5761093d613c84565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020805461097090613b1b565b80601f016020809104026020016040519081016040528092919081815260200182805461099c90613b1b565b80156109e95780601f106109be576101008083540402835291602001916109e9565b820191906000526020600020905b8154815290600101906020018083116109cc57829003601f168201915b505050505090508051600003610a1257604051634f42be3d60e01b815260040160405180910390fd5b80838381518110610a2557610a25613c84565b60200260200101819052505080610a3b90613cb0565b905061091c565b5090939092509050565b610a546122bb565b806001600160601b0316600003610a845750336000908152600a60205260409020546001600160601b0316610ac0565b336000908152600a60205260409020546001600160601b0380831691161015610ac057604051631e9acf1760e31b815260040160405180910390fd5b336000908152600a602052604081208054839290610ae89084906001600160601b0316613cc9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550610b337f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301526001600160601b038416602483015291909116906366316d8d90604401600060405180830381600087803b158015610ba057600080fd5b505af1158015610bb4573d6000803e3d6000fd5b505050505050565b6001546001600160a01b03163314610c1b5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610c7a6122b3565b610c826122bb565b6000610c8c610e41565b905060005b8151811015610d8f57336000908152600a6020526040902080546bffffffffffffffffffffffff1981169091556001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166366316d8d848481518110610d0857610d08613c84565b6020026020010151836040518363ffffffff1660e01b8152600401610d4b9291906001600160a01b039290921682526001600160601b0316602082015260400190565b600060405180830381600087803b158015610d6557600080fd5b505af1158015610d79573d6000803e3d6000fd5b505050505080610d8890613cb0565b9050610c91565b5050565b610d9b612257565b6000819003610dbd57604051634f42be3d60e01b815260040160405180910390fd5b600c6105bb828483613b9b565b6000546001600160a01b0316331480610dfb5750610de733612424565b8015610dfb5750336001600160a01b038416145b610e185760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0383166000908152600d60205260409020610e3b828483613b9b565b50505050565b60606006805480602002602001604051908101604052809291908181526020018280548015610e9957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e7b575b5050505050905090565b6060600e8054610eb290613b1b565b9050600003610ed457604051634f42be3d60e01b815260040160405180910390fd5b600e8054610ee190613b1b565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0d90613b1b565b8015610e995780601f10610f2f57610100808354040283529160200191610e99565b820191906000526020600020905b815481529060010190602001808311610f3d57509395945050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fa65760405163c41a5b0960e01b815260040160405180910390fd5b600082815260076020526040902054610fc157506000919050565b60008281526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f416906110049084815260200190565b60405180910390a15060015b919050565b6105bb5a33600484601f806020026040519081016040528092919082601f602002808284376000920191909152508991508890506124e6565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110f05760405163c41a5b0960e01b815260040160405180910390fd5b6111016110fc83613ce9565b6126b4565b9050611113606083016040840161332f565b81516001600160a01b0391909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff3261115460c0870160a08801613dd6565b6111666101608801610140890161332f565b6111708880613df3565b6111826101208b016101008c01613e3a565b60208b01356111986101008d0160e08e01613e55565b8b6040516111ae99989796959493929190613e72565b60405180910390a3919050565b60005a604080518b3580825262ffffff6020808f0135600881901c929092169084015293945092917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16040805160608101825260025480825260035460ff808216602085015261010090910416928201929092529083146112885760405162461bcd60e51b815260206004820152601560248201527f636f6e666967446967657374206d69736d6174636800000000000000000000006044820152606401610c12565b6112968b8b8b8b8b8b6129f0565b60007f0000000000000000000000000000000000000000000000000000000000000000156112f3576002826020015183604001516112d49190613eef565b6112de9190613f1e565b6112e9906001613eef565b60ff169050611309565b6020820151611303906001613eef565b60ff1690505b8881146113585760405162461bcd60e51b815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610c12565b8887146113a75760405162461bcd60e51b815260206004820152601e60248201527f7369676e617475726573206f7574206f6620726567697374726174696f6e00006044820152606401610c12565b3360009081526004602090815260408083208151808301909252805460ff808216845292939192918401916101009091041660028111156113ea576113ea613f40565b60028111156113fb576113fb613f40565b905250905060028160200151600281111561141857611418613f40565b14801561145257506006816000015160ff168154811061143a5761143a613c84565b6000918252602090912001546001600160a01b031633145b61149e5760405162461bcd60e51b815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610c12565b50505050506114ab612fe2565b6000808a8a6040516114be929190613f56565b6040519081900381206114d5918e90602001613f66565b60408051601f198184030181528282528051602091820120838301909252600080845290830152915060005b8981101561174857600060018489846020811061152057611520613c84565b61152d91901a601b613eef565b8e8e8681811061153f5761153f613c84565b905060200201358d8d8781811061155857611558613c84565b9050602002013560405160008152602001604052604051611595949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa1580156115b7573d6000803e3d6000fd5b505060408051601f198101516001600160a01b03811660009081526004602090815290849020838501909452835460ff8082168552929650929450840191610100900416600281111561160c5761160c613f40565b600281111561161d5761161d613f40565b905250925060018360200151600281111561163a5761163a613f40565b146116875760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610c12565b8251600090879060ff16601f81106116a1576116a1613c84565b60200201516001600160a01b0316146116fc5760405162461bcd60e51b815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610c12565b8086846000015160ff16601f811061171657611716613c84565b6001600160a01b039092166020929092020152611734600186613eef565b9450508061174190613cb0565b9050611501565b505050611759833383858e8e6124e6565b5050505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff851660248201526001600160a01b0391909116906310fc49c19060440160006040518083038186803b1580156117f957600080fd5b505afa15801561180d573d6000803e3d6000fd5b505050620f4240831115905061184f576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118596107dc565b9050600061189c87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061029c92505050565b90506118aa85858385612a8d565b925050505b95945050505050565b6060600c80546118c790613b1b565b90506000036118e957604051634f42be3d60e01b815260040160405180910390fd5b600c8054610ee190613b1b565b6105bb60068383613001565b855185518560ff16601f83111561195c576040516389a6198960e01b815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610c12565b806000036119ad576040516389a6198960e01b815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610c12565b818314611a22576040516389a6198960e01b8152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610c12565b611a2d816003613f7a565b8311611a7c576040516389a6198960e01b815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610c12565b611a84612257565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a0810186905290611acb9088612b64565b60055415611bdd57600554600090611ae590600190613f91565b9050600060058281548110611afc57611afc613c84565b6000918252602082200154600680546001600160a01b0390921693509084908110611b2957611b29613c84565b60009182526020808320909101546001600160a01b03858116845260049092526040808420805461ffff1990811690915592909116808452922080549091169055600580549192509080611b7f57611b7f613fa4565b600082815260209020810160001990810180546001600160a01b03191690550190556006805480611bb257611bb2613fa4565b600082815260209020810160001990810180546001600160a01b031916905501905550611acb915050565b60005b815151811015611f1c5760006004600084600001518481518110611c0657611c06613c84565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611c4357611c43613f40565b14611c905760405162461bcd60e51b815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610c12565b6040805180820190915260ff82168152600160208201528251805160049160009185908110611cc157611cc1613c84565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611d1a57611d1a613f40565b021790555060009150611d2a9050565b6004600084602001518481518110611d4457611d44613c84565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611d8157611d81613f40565b14611dce5760405162461bcd60e51b815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610c12565b6040805180820190915260ff821681526020810160028152506004600084602001518481518110611e0157611e01613c84565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611e5a57611e5a613f40565b021790555050825180516005925083908110611e7857611e78613c84565b602090810291909101810151825460018101845560009384529282902090920180546001600160a01b0319166001600160a01b039093169290921790915582015180516006919083908110611ecf57611ecf613c84565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905580611f1481613cb0565b915050611be0565b5060408101516003805460ff191660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116600160c01b63ffffffff4381168202929092178085559204811692918291601491611f90918491600160a01b900416613fba565b92506101000a81548163ffffffff021916908363ffffffff160217905550611fef4630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a00151612b7d565b6002819055825180516003805461ff00191661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e0598612078988b989197600160a01b90920463ffffffff16969095919491939192613fd7565b60405180910390a15050505050505050505050565b604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821684860152600160601b80840483166060860152600160801b840483166080860152600160a01b840468ffffffffffffffffff1660a080870191909152600160e81b90940461ffff1660c086015260095492831660e086015291046001600160e01b0316610100840152600b5484517ffeaf968c0000000000000000000000000000000000000000000000000000000081529451600095869485949093046001600160a01b03169263feaf968c926004808401938290030181865afa15801561218f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b39190614087565b5093505092505080426121c69190613f91565b836020015163ffffffff161080156121e857506000836020015163ffffffff16115b1561220257505061010001516001600160e01b0316919050565b6000821361223f576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610c12565b5092915050565b61224e612257565b6107d981612c0a565b6000546001600160a01b031633146122b15760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610c12565b565b6122b1612257565b600b546001600160601b03166000036122d057565b60006122da610e41565b90508051600003612317576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051600b54600091612331916001600160601b03166140d7565b905060005b82518110156123d45781600a600085848151811061235657612356613c84565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008282829054906101000a90046001600160601b031661239f91906140fd565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550806123cd90613cb0565b9050612336565b5081516123e1908261411d565b600b80546000906123fc9084906001600160601b0316613cc9565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505050565b600080600680548060200260200160405190810160405280929190818152602001828054801561247d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161245f575b5050505050905060005b81518110156124dc57836001600160a01b03168282815181106124ac576124ac613c84565b60200260200101516001600160a01b0316036124cc575060019392505050565b6124d581613cb0565b9050612487565b5060009392505050565b6060808080806124f88688018861421b565b845194995092975090955093509150158061251557508351855114155b8061252257508251855114155b8061252f57508151855114155b8061253c57508051855114155b15612573576040517f0be3632800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b85518110156126a657600061260b87838151811061259657612596613c84565b60200260200101518784815181106125b0576125b0613c84565b60200260200101518785815181106125ca576125ca613c84565b60200260200101518786815181106125e4576125e4613c84565b60200260200101518787815181106125fe576125fe613c84565b6020026020010151612cb3565b9050600081600681111561262157612621613f40565b148061263e5750600181600681111561263c5761263c613f40565b145b156126955786828151811061265557612655613c84565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b5061269f81613cb0565b9050612576565b505050505050505050505050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff90811660c0840181905260095492831660e0850152939091046001600160e01b0316610100808401919091528501519192911611156127f3576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600854600090600160a01b900468ffffffffffffffffff16905060006128238560e001513a848860800151612a8d565b9050806001600160601b031685606001516001600160601b0316101561285c57604051631e9acf1760e31b815260040160405180910390fd5b60006128d23087604001518860a001518960c00151600161287d91906142ed565b604080516001600160a01b03958616602080830191909152949095168582015267ffffffffffffffff928316606086015291166080808501919091528151808503909101815260a09093019052815191012090565b9050604051806101600160405280828152602001306001600160a01b03168152602001836001600160601b0316815260200187604001516001600160a01b031681526020018760a0015167ffffffffffffffff1681526020018760e0015163ffffffff168152602001876080015168ffffffffffffffffff1681526020018468ffffffffffffffffff168152602001856040015163ffffffff1664ffffffffff168152602001856060015163ffffffff1664ffffffffff168152602001856080015163ffffffff16426129a5919061430e565b63ffffffff168152509450846040516020016129c19190613726565b60408051601f198184030181529181528151602092830120600093845260079092529091205550919392505050565b60006129fd826020613f7a565b612a08856020613f7a565b612a148861014461430e565b612a1e919061430e565b612a28919061430e565b612a3390600061430e565b9050368114612a845760405162461bcd60e51b815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610c12565b50505050505050565b60085460009081908690612abc9063ffffffff600160601b820481169168010000000000000000900416613fba565b612ac69190613fba565b60095463ffffffff918216925060009161271091612ae5911688613f7a565b612aef9190614321565b612af9908761430e565b90506000612b0682612ef6565b90506000612b1d846001600160601b038416613f7a565b90506000612b3968ffffffffffffffffff808916908a166140fd565b9050612b56612b516001600160601b0383168461430e565b612f25565b9a9950505050505050505050565b6000612b6e610e41565b511115610d8f57610d8f6122bb565b6000808a8a8a8a8a8a8a8a8a604051602001612ba199989796959493929190614335565b60408051601f1981840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b336001600160a01b03821603612c625760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610c12565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60008083806020019051810190612cca91906143fe565b905080604051602001612cdd9190613726565b60408051601f19818403018152918152815160209283012060008a8152600790935291205414612d115760069150506118af565b600087815260076020526040902054612d2e5760029150506118af565b6000612d393a612ef6565b90506000826101200151836101000151612d5391906144c6565b612d649064ffffffffff168361411d565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663330605298b8b878960e0015168ffffffffffffffffff1688612db691906140fd565b338b6040518763ffffffff1660e01b8152600401612dd9969594939291906144e4565b60408051808303816000875af1158015612df7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e1b919061454e565b90925090506000826006811115612e3457612e34613f40565b1480612e5157506001826006811115612e4f57612e4f613f40565b145b15612ee85760008b815260076020526040812055612e6f81846140fd565b336000908152600a6020526040812080546bffffffffffffffffffffffff19166001600160601b0393841617905560e0870151600b805468ffffffffffffffffff90921693909291612ec3918591166140fd565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505b509998505050505050505050565b6000612f1f612f0361208d565b612f1584670de0b6b3a7640000613f7a565b612b519190614321565b92915050565b60006001600160601b03821115612fa45760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610c12565b5090565b508054612fb490613b1b565b6000825580601f10612fc4575050565b601f0160209004906000526020600020908101906107d9919061305c565b604051806103e00160405280601f906020820280368337509192915050565b828054828255906000526020600020908101928215613054579160200282015b828111156130545781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190613021565b50612fa49291505b5b80821115612fa4576000815560010161305d565b60008083601f84011261308357600080fd5b50813567ffffffffffffffff81111561309b57600080fd5b6020830191508360208285010111156130b357600080fd5b9250929050565b600080602083850312156130cd57600080fd5b823567ffffffffffffffff8111156130e457600080fd5b6130f085828601613071565b90969095509350505050565b6000815180845260005b8181101561312257602081850181015186830182015201613106565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061315560208301846130fc565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156131965761319661315c565b60405290565b604051610160810167ffffffffffffffff811182821017156131965761319661315c565b604051601f8201601f1916810167ffffffffffffffff811182821017156131e9576131e961315c565b604052919050565b63ffffffff811681146107d957600080fd5b8035611010816131f1565b68ffffffffffffffffff811681146107d957600080fd5b80356110108161320e565b803561ffff8116811461101057600080fd5b80356001600160e01b038116811461101057600080fd5b6000610120828403121561326c57600080fd5b613274613172565b61327d83613203565b815261328b60208401613203565b602082015261329c60408401613203565b60408201526132ad60608401613203565b60608201526132be60808401613203565b60808201526132cf60a08401613225565b60a08201526132e060c08401613230565b60c08201526132f160e08401613203565b60e0820152610100613304818501613242565b908201529392505050565b6001600160a01b03811681146107d957600080fd5b80356110108161330f565b60006020828403121561334157600080fd5b81356131558161330f565b600081518084526020808501945080840160005b838110156133855781516001600160a01b031687529582019590820190600101613360565b509495945050505050565b6040815260006133a3604083018561334c565b6020838203818501528185518084528284019150828160051b85010183880160005b838110156133f357601f198784030185526133e18383516130fc565b948601949250908501906001016133c5565b50909998505050505050505050565b600082601f83011261341357600080fd5b813567ffffffffffffffff81111561342d5761342d61315c565b613440601f8201601f19166020016131c0565b81815284602083860101111561345557600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561348457600080fd5b813567ffffffffffffffff81111561349b57600080fd5b6134a784828501613402565b949350505050565b6001600160601b03811681146107d957600080fd5b8035611010816134af565b600080604083850312156134e257600080fd5b82356134ed8161330f565b915060208301356134fd816134af565b809150509250929050565b60008060006040848603121561351d57600080fd5b83356135288161330f565b9250602084013567ffffffffffffffff81111561354457600080fd5b61355086828701613071565b9497909650939450505050565b602081526000613155602083018461334c565b60006020828403121561358257600080fd5b5035919050565b60008060006104008085870312156135a057600080fd5b843567ffffffffffffffff8111156135b757600080fd5b6135c387828801613071565b9095509350508481018610156135d857600080fd5b506020840190509250925092565b6000602082840312156135f857600080fd5b813567ffffffffffffffff81111561360f57600080fd5b8201610160818503121561315557600080fd5b80518252602081015161364060208401826001600160a01b03169052565b50604081015161365b60408401826001600160601b03169052565b50606081015161367660608401826001600160a01b03169052565b506080810151613692608084018267ffffffffffffffff169052565b5060a08101516136aa60a084018263ffffffff169052565b5060c08101516136c760c084018268ffffffffffffffffff169052565b5060e08101516136e460e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff81168483015250506101208181015164ffffffffff81168483015250506101408181015163ffffffff811684830152610e3b565b6101608101612f1f8284613622565b60008083601f84011261374757600080fd5b50813567ffffffffffffffff81111561375f57600080fd5b6020830191508360208260051b85010111156130b357600080fd5b60008060008060008060008060e0898b03121561379657600080fd5b606089018a8111156137a757600080fd5b8998503567ffffffffffffffff808211156137c157600080fd5b6137cd8c838d01613071565b909950975060808b01359150808211156137e657600080fd5b6137f28c838d01613735565b909750955060a08b013591508082111561380b57600080fd5b506138188b828c01613735565b999c989b50969995989497949560c00135949350505050565b815163ffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608080840151918216908301526101208201905060a083015161389160a084018268ffffffffffffffffff169052565b5060c08301516138a760c084018261ffff169052565b5060e08301516138bf60e084018263ffffffff169052565b50610100838101516001600160e01b038116848301525b505092915050565b67ffffffffffffffff811681146107d957600080fd5b8035611010816138de565b60008060008060006080868803121561391757600080fd5b8535613922816138de565b9450602086013567ffffffffffffffff81111561393e57600080fd5b61394a88828901613071565b909550935050604086013561395e816131f1565b949793965091946060013592915050565b6000806020838503121561398257600080fd5b823567ffffffffffffffff81111561399957600080fd5b6130f085828601613735565b600067ffffffffffffffff8211156139bf576139bf61315c565b5060051b60200190565b600082601f8301126139da57600080fd5b813560206139ef6139ea836139a5565b6131c0565b82815260059290921b84018101918181019086841115613a0e57600080fd5b8286015b84811015613a32578035613a258161330f565b8352918301918301613a12565b509695505050505050565b803560ff8116811461101057600080fd5b60008060008060008060c08789031215613a6757600080fd5b863567ffffffffffffffff80821115613a7f57600080fd5b613a8b8a838b016139c9565b97506020890135915080821115613aa157600080fd5b613aad8a838b016139c9565b9650613abb60408a01613a3d565b95506060890135915080821115613ad157600080fd5b613add8a838b01613402565b9450613aeb60808a016138f4565b935060a0890135915080821115613b0157600080fd5b50613b0e89828a01613402565b9150509295509295509295565b600181811c90821680613b2f57607f821691505b602082108103613b4f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156105bb57600081815260208120601f850160051c81016020861015613b7c5750805b601f850160051c820191505b81811015610bb457828155600101613b88565b67ffffffffffffffff831115613bb357613bb361315c565b613bc783613bc18354613b1b565b83613b55565b6000601f841160018114613bfb5760008515613be35750838201355b600019600387901b1c1916600186901b178355613c55565b600083815260209020601f19861690835b82811015613c2c5786850135825560209485019460019092019101613c0c565b5086821015613c495760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b80516110108161320e565b600060208284031215613c7957600080fd5b81516131558161320e565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201613cc257613cc2613c9a565b5060010190565b6001600160601b0382811682821603908082111561223f5761223f613c9a565b60006101608236031215613cfc57600080fd5b613d0461319c565b823567ffffffffffffffff811115613d1b57600080fd5b613d2736828601613402565b82525060208301356020820152613d4060408401613324565b6040820152613d51606084016134c4565b6060820152613d6260808401613225565b6080820152613d7360a084016138f4565b60a0820152613d8460c084016138f4565b60c0820152613d9560e08401613203565b60e0820152610100613da8818501613230565b90820152610120613dba8482016138f4565b90820152610140613dcc848201613324565b9082015292915050565b600060208284031215613de857600080fd5b8135613155816138de565b6000808335601e19843603018112613e0a57600080fd5b83018035915067ffffffffffffffff821115613e2557600080fd5b6020019150368190038213156130b357600080fd5b600060208284031215613e4c57600080fd5b61315582613230565b600060208284031215613e6757600080fd5b8135613155816131f1565b6001600160a01b038a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f8801601f19168301019050612b5660e0830184613622565b60ff8181168382160190811115612f1f57612f1f613c9a565b634e487b7160e01b600052601260045260246000fd5b600060ff831680613f3157613f31613f08565b8060ff84160491505092915050565b634e487b7160e01b600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b8082028115828204841417612f1f57612f1f613c9a565b81810381811115612f1f57612f1f613c9a565b634e487b7160e01b600052603160045260246000fd5b63ffffffff81811683821601908082111561223f5761223f613c9a565b600061012063ffffffff808d1684528b6020850152808b166040850152508060608401526140078184018a61334c565b9050828103608084015261401b818961334c565b905060ff871660a084015282810360c084015261403881876130fc565b905067ffffffffffffffff851660e084015282810361010084015261405d81856130fc565b9c9b505050505050505050505050565b805169ffffffffffffffffffff8116811461101057600080fd5b600080600080600060a0868803121561409f57600080fd5b6140a88661406d565b94506020860151935060408601519250606086015191506140cb6080870161406d565b90509295509295909350565b60006001600160601b03808416806140f1576140f1613f08565b92169190910492915050565b6001600160601b0381811683821601908082111561223f5761223f613c9a565b6001600160601b038181168382160280821691908281146138d6576138d6613c9a565b600082601f83011261415157600080fd5b813560206141616139ea836139a5565b82815260059290921b8401810191818101908684111561418057600080fd5b8286015b84811015613a325780358352918301918301614184565b600082601f8301126141ac57600080fd5b813560206141bc6139ea836139a5565b82815260059290921b840181019181810190868411156141db57600080fd5b8286015b84811015613a3257803567ffffffffffffffff8111156141ff5760008081fd5b61420d8986838b0101613402565b8452509183019183016141df565b600080600080600060a0868803121561423357600080fd5b853567ffffffffffffffff8082111561424b57600080fd5b61425789838a01614140565b9650602088013591508082111561426d57600080fd5b61427989838a0161419b565b9550604088013591508082111561428f57600080fd5b61429b89838a0161419b565b945060608801359150808211156142b157600080fd5b6142bd89838a0161419b565b935060808801359150808211156142d357600080fd5b506142e08882890161419b565b9150509295509295909350565b67ffffffffffffffff81811683821601908082111561223f5761223f613c9a565b80820180821115612f1f57612f1f613c9a565b60008261433057614330613f08565b500490565b60006101208b83526001600160a01b038b16602084015267ffffffffffffffff808b16604085015281606085015261436f8285018b61334c565b91508382036080850152614383828a61334c565b915060ff881660a085015283820360c08501526143a082886130fc565b90861660e0850152838103610100850152905061405d81856130fc565b80516110108161330f565b8051611010816134af565b8051611010816138de565b8051611010816131f1565b805164ffffffffff8116811461101057600080fd5b6000610160828403121561441157600080fd5b61441961319c565b82518152614429602084016143bd565b602082015261443a604084016143c8565b604082015261444b606084016143bd565b606082015261445c608084016143d3565b608082015261446d60a084016143de565b60a082015261447e60c08401613c5c565b60c082015261448f60e08401613c5c565b60e08201526101006144a28185016143e9565b908201526101206144b48482016143e9565b908201526101406133048482016143de565b64ffffffffff81811683821601908082111561223f5761223f613c9a565b60006102008083526144f88184018a6130fc565b9050828103602084015261450c81896130fc565b6001600160601b038881166040860152871660608501526001600160a01b03861660808501529150614543905060a0830184613622565b979650505050505050565b6000806040838503121561456157600080fd5b82516007811061457057600080fd5b60208401519092506134fd816134af56fea2646970667358221220c8ccbfc8ed2d3f3aefadfc8dfff4ba589074ecb4722da270dc97d097e0ebaaf564736f6c63430008130033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106101c45760003560e01c806381ff7048116100f9578063c3f909d411610097578063df61768811610071578063df61768814610535578063e3d0e71214610548578063e4ddcea61461055b578063f2fde38b1461057157600080fd5b8063c3f909d414610406578063d227d24514610502578063d328a91e1461052d57600080fd5b80638da5cb5b116100d35780638da5cb5b14610398578063a631571e146103b3578063afcb95d7146103d3578063b1dc65a4146103f357600080fd5b806381ff70481461031b57806385b214cf146103625780638b26b62b1461038557600080fd5b806366316d8d116101665780637f15e166116101405780637f15e166146102d857806380756031146102eb57806381411834146102fe57806381f1b9381461031357600080fd5b806366316d8d146102b557806379ba5097146102c85780637d480787146102d057600080fd5b806326ceabac116101a257806326ceabac146102435780632a905ccc14610256578063533989871461027857806359b5b7ac1461028e57600080fd5b8063083a5466146101c9578063181f5a77146101de5780631bdf7f1b14610230575b600080fd5b6101dc6101d73660046130ba565b610584565b005b61021a6040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e302e300000000081525081565b6040516102279190613142565b60405180910390f35b6101dc61023e366004613259565b6105c0565b6101dc61025136600461332f565b610776565b61025e6107dc565b60405168ffffffffffffffffff9091168152602001610227565b610280610865565b604051610227929190613390565b61025e61029c366004613472565b50600854600160a01b900468ffffffffffffffffff1690565b6101dc6102c33660046134cf565b610a4c565b6101dc610bbc565b6101dc610c72565b6101dc6102e63660046130ba565b610d93565b6101dc6102f9366004613508565b610dca565b610306610e41565b604051610227919061355d565b61021a610ea3565b61033f60015460025463ffffffff600160a01b8304811693600160c01b9093041691565b6040805163ffffffff948516815293909216602084015290820152606001610227565b610375610370366004613570565b610f5b565b6040519015158152602001610227565b6101dc610393366004613589565b611015565b6000546040516001600160a01b039091168152602001610227565b6103c66103c13660046135e6565b61104e565b6040516102279190613726565b604080516001815260006020820181905291810191909152606001610227565b6101dc61040136600461377a565b6111bb565b6104f56040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915250604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff1660c083015260095490811660e0830152919091046001600160e01b031661010082015290565b6040516102279190613831565b6105156105103660046138ff565b611766565b6040516001600160601b039091168152602001610227565b61021a6118b8565b6101dc61054336600461396f565b6118f6565b6101dc610556366004613a4e565b611902565b61056361208d565b604051908152602001610227565b6101dc61057f36600461332f565b612246565b61058c612257565b60008190036105ae57604051634f42be3d60e01b815260040160405180910390fd5b600e6105bb828483613b9b565b505050565b6105c86122b3565b80516008805460208401516040808601516060870151608088015160a089015160c08a015163ffffffff998a1667ffffffffffffffff1990981697909717640100000000968a168702177fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff1668010000000000000000948a16949094027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff1693909317600160601b92891692909202919091177fffffff00000000000000000000000000ffffffffffffffffffffffffffffffff16600160801b918816919091027fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff1617600160a01b68ffffffffffffffffff90921691909102177fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e81b61ffff909416939093029290921790925560e084015161010085015193166001600160e01b0390931690910291909117600955517f5b6e2e1a03ea742ce04ca36d0175411a0772f99ef4ee84aeb9868a1ef6ddc82c9061076b908390613831565b60405180910390a150565b6000546001600160a01b0316331480159061079a5750336001600160a01b03821614155b156107b85760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600d602052604081206107d991612fa8565b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190613c67565b905090565b606080600060068054806020026020016040519081016040528092919081815260200182805480156108c057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116108a2575b505050505090506000815167ffffffffffffffff8111156108e3576108e361315c565b60405190808252806020026020018201604052801561091657816020015b60608152602001906001900390816109015790505b50905060005b8251811015610a42576000600d600085848151811061093d5761093d613c84565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020805461097090613b1b565b80601f016020809104026020016040519081016040528092919081815260200182805461099c90613b1b565b80156109e95780601f106109be576101008083540402835291602001916109e9565b820191906000526020600020905b8154815290600101906020018083116109cc57829003601f168201915b505050505090508051600003610a1257604051634f42be3d60e01b815260040160405180910390fd5b80838381518110610a2557610a25613c84565b60200260200101819052505080610a3b90613cb0565b905061091c565b5090939092509050565b610a546122bb565b806001600160601b0316600003610a845750336000908152600a60205260409020546001600160601b0316610ac0565b336000908152600a60205260409020546001600160601b0380831691161015610ac057604051631e9acf1760e31b815260040160405180910390fd5b336000908152600a602052604081208054839290610ae89084906001600160601b0316613cc9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550610b337f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301526001600160601b038416602483015291909116906366316d8d90604401600060405180830381600087803b158015610ba057600080fd5b505af1158015610bb4573d6000803e3d6000fd5b505050505050565b6001546001600160a01b03163314610c1b5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610c7a6122b3565b610c826122bb565b6000610c8c610e41565b905060005b8151811015610d8f57336000908152600a6020526040902080546bffffffffffffffffffffffff1981169091556001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166366316d8d848481518110610d0857610d08613c84565b6020026020010151836040518363ffffffff1660e01b8152600401610d4b9291906001600160a01b039290921682526001600160601b0316602082015260400190565b600060405180830381600087803b158015610d6557600080fd5b505af1158015610d79573d6000803e3d6000fd5b505050505080610d8890613cb0565b9050610c91565b5050565b610d9b612257565b6000819003610dbd57604051634f42be3d60e01b815260040160405180910390fd5b600c6105bb828483613b9b565b6000546001600160a01b0316331480610dfb5750610de733612424565b8015610dfb5750336001600160a01b038416145b610e185760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0383166000908152600d60205260409020610e3b828483613b9b565b50505050565b60606006805480602002602001604051908101604052809291908181526020018280548015610e9957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e7b575b5050505050905090565b6060600e8054610eb290613b1b565b9050600003610ed457604051634f42be3d60e01b815260040160405180910390fd5b600e8054610ee190613b1b565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0d90613b1b565b8015610e995780601f10610f2f57610100808354040283529160200191610e99565b820191906000526020600020905b815481529060010190602001808311610f3d57509395945050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fa65760405163c41a5b0960e01b815260040160405180910390fd5b600082815260076020526040902054610fc157506000919050565b60008281526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f416906110049084815260200190565b60405180910390a15060015b919050565b6105bb5a33600484601f806020026040519081016040528092919082601f602002808284376000920191909152508991508890506124e6565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110f05760405163c41a5b0960e01b815260040160405180910390fd5b6111016110fc83613ce9565b6126b4565b9050611113606083016040840161332f565b81516001600160a01b0391909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff3261115460c0870160a08801613dd6565b6111666101608801610140890161332f565b6111708880613df3565b6111826101208b016101008c01613e3a565b60208b01356111986101008d0160e08e01613e55565b8b6040516111ae99989796959493929190613e72565b60405180910390a3919050565b60005a604080518b3580825262ffffff6020808f0135600881901c929092169084015293945092917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16040805160608101825260025480825260035460ff808216602085015261010090910416928201929092529083146112885760405162461bcd60e51b815260206004820152601560248201527f636f6e666967446967657374206d69736d6174636800000000000000000000006044820152606401610c12565b6112968b8b8b8b8b8b6129f0565b60007f0000000000000000000000000000000000000000000000000000000000000000156112f3576002826020015183604001516112d49190613eef565b6112de9190613f1e565b6112e9906001613eef565b60ff169050611309565b6020820151611303906001613eef565b60ff1690505b8881146113585760405162461bcd60e51b815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610c12565b8887146113a75760405162461bcd60e51b815260206004820152601e60248201527f7369676e617475726573206f7574206f6620726567697374726174696f6e00006044820152606401610c12565b3360009081526004602090815260408083208151808301909252805460ff808216845292939192918401916101009091041660028111156113ea576113ea613f40565b60028111156113fb576113fb613f40565b905250905060028160200151600281111561141857611418613f40565b14801561145257506006816000015160ff168154811061143a5761143a613c84565b6000918252602090912001546001600160a01b031633145b61149e5760405162461bcd60e51b815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610c12565b50505050506114ab612fe2565b6000808a8a6040516114be929190613f56565b6040519081900381206114d5918e90602001613f66565b60408051601f198184030181528282528051602091820120838301909252600080845290830152915060005b8981101561174857600060018489846020811061152057611520613c84565b61152d91901a601b613eef565b8e8e8681811061153f5761153f613c84565b905060200201358d8d8781811061155857611558613c84565b9050602002013560405160008152602001604052604051611595949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa1580156115b7573d6000803e3d6000fd5b505060408051601f198101516001600160a01b03811660009081526004602090815290849020838501909452835460ff8082168552929650929450840191610100900416600281111561160c5761160c613f40565b600281111561161d5761161d613f40565b905250925060018360200151600281111561163a5761163a613f40565b146116875760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610c12565b8251600090879060ff16601f81106116a1576116a1613c84565b60200201516001600160a01b0316146116fc5760405162461bcd60e51b815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610c12565b8086846000015160ff16601f811061171657611716613c84565b6001600160a01b039092166020929092020152611734600186613eef565b9450508061174190613cb0565b9050611501565b505050611759833383858e8e6124e6565b5050505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff851660248201526001600160a01b0391909116906310fc49c19060440160006040518083038186803b1580156117f957600080fd5b505afa15801561180d573d6000803e3d6000fd5b505050620f4240831115905061184f576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118596107dc565b9050600061189c87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061029c92505050565b90506118aa85858385612a8d565b925050505b95945050505050565b6060600c80546118c790613b1b565b90506000036118e957604051634f42be3d60e01b815260040160405180910390fd5b600c8054610ee190613b1b565b6105bb60068383613001565b855185518560ff16601f83111561195c576040516389a6198960e01b815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610c12565b806000036119ad576040516389a6198960e01b815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610c12565b818314611a22576040516389a6198960e01b8152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610c12565b611a2d816003613f7a565b8311611a7c576040516389a6198960e01b815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610c12565b611a84612257565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a0810186905290611acb9088612b64565b60055415611bdd57600554600090611ae590600190613f91565b9050600060058281548110611afc57611afc613c84565b6000918252602082200154600680546001600160a01b0390921693509084908110611b2957611b29613c84565b60009182526020808320909101546001600160a01b03858116845260049092526040808420805461ffff1990811690915592909116808452922080549091169055600580549192509080611b7f57611b7f613fa4565b600082815260209020810160001990810180546001600160a01b03191690550190556006805480611bb257611bb2613fa4565b600082815260209020810160001990810180546001600160a01b031916905501905550611acb915050565b60005b815151811015611f1c5760006004600084600001518481518110611c0657611c06613c84565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611c4357611c43613f40565b14611c905760405162461bcd60e51b815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610c12565b6040805180820190915260ff82168152600160208201528251805160049160009185908110611cc157611cc1613c84565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611d1a57611d1a613f40565b021790555060009150611d2a9050565b6004600084602001518481518110611d4457611d44613c84565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611d8157611d81613f40565b14611dce5760405162461bcd60e51b815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610c12565b6040805180820190915260ff821681526020810160028152506004600084602001518481518110611e0157611e01613c84565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611e5a57611e5a613f40565b021790555050825180516005925083908110611e7857611e78613c84565b602090810291909101810151825460018101845560009384529282902090920180546001600160a01b0319166001600160a01b039093169290921790915582015180516006919083908110611ecf57611ecf613c84565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905580611f1481613cb0565b915050611be0565b5060408101516003805460ff191660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116600160c01b63ffffffff4381168202929092178085559204811692918291601491611f90918491600160a01b900416613fba565b92506101000a81548163ffffffff021916908363ffffffff160217905550611fef4630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a00151612b7d565b6002819055825180516003805461ff00191661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e0598612078988b989197600160a01b90920463ffffffff16969095919491939192613fd7565b60405180910390a15050505050505050505050565b604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821684860152600160601b80840483166060860152600160801b840483166080860152600160a01b840468ffffffffffffffffff1660a080870191909152600160e81b90940461ffff1660c086015260095492831660e086015291046001600160e01b0316610100840152600b5484517ffeaf968c0000000000000000000000000000000000000000000000000000000081529451600095869485949093046001600160a01b03169263feaf968c926004808401938290030181865afa15801561218f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b39190614087565b5093505092505080426121c69190613f91565b836020015163ffffffff161080156121e857506000836020015163ffffffff16115b1561220257505061010001516001600160e01b0316919050565b6000821361223f576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610c12565b5092915050565b61224e612257565b6107d981612c0a565b6000546001600160a01b031633146122b15760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610c12565b565b6122b1612257565b600b546001600160601b03166000036122d057565b60006122da610e41565b90508051600003612317576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051600b54600091612331916001600160601b03166140d7565b905060005b82518110156123d45781600a600085848151811061235657612356613c84565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008282829054906101000a90046001600160601b031661239f91906140fd565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550806123cd90613cb0565b9050612336565b5081516123e1908261411d565b600b80546000906123fc9084906001600160601b0316613cc9565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505050565b600080600680548060200260200160405190810160405280929190818152602001828054801561247d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161245f575b5050505050905060005b81518110156124dc57836001600160a01b03168282815181106124ac576124ac613c84565b60200260200101516001600160a01b0316036124cc575060019392505050565b6124d581613cb0565b9050612487565b5060009392505050565b6060808080806124f88688018861421b565b845194995092975090955093509150158061251557508351855114155b8061252257508251855114155b8061252f57508151855114155b8061253c57508051855114155b15612573576040517f0be3632800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b85518110156126a657600061260b87838151811061259657612596613c84565b60200260200101518784815181106125b0576125b0613c84565b60200260200101518785815181106125ca576125ca613c84565b60200260200101518786815181106125e4576125e4613c84565b60200260200101518787815181106125fe576125fe613c84565b6020026020010151612cb3565b9050600081600681111561262157612621613f40565b148061263e5750600181600681111561263c5761263c613f40565b145b156126955786828151811061265557612655613c84565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b5061269f81613cb0565b9050612576565b505050505050505050505050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff90811660c0840181905260095492831660e0850152939091046001600160e01b0316610100808401919091528501519192911611156127f3576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600854600090600160a01b900468ffffffffffffffffff16905060006128238560e001513a848860800151612a8d565b9050806001600160601b031685606001516001600160601b0316101561285c57604051631e9acf1760e31b815260040160405180910390fd5b60006128d23087604001518860a001518960c00151600161287d91906142ed565b604080516001600160a01b03958616602080830191909152949095168582015267ffffffffffffffff928316606086015291166080808501919091528151808503909101815260a09093019052815191012090565b9050604051806101600160405280828152602001306001600160a01b03168152602001836001600160601b0316815260200187604001516001600160a01b031681526020018760a0015167ffffffffffffffff1681526020018760e0015163ffffffff168152602001876080015168ffffffffffffffffff1681526020018468ffffffffffffffffff168152602001856040015163ffffffff1664ffffffffff168152602001856060015163ffffffff1664ffffffffff168152602001856080015163ffffffff16426129a5919061430e565b63ffffffff168152509450846040516020016129c19190613726565b60408051601f198184030181529181528151602092830120600093845260079092529091205550919392505050565b60006129fd826020613f7a565b612a08856020613f7a565b612a148861014461430e565b612a1e919061430e565b612a28919061430e565b612a3390600061430e565b9050368114612a845760405162461bcd60e51b815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610c12565b50505050505050565b60085460009081908690612abc9063ffffffff600160601b820481169168010000000000000000900416613fba565b612ac69190613fba565b60095463ffffffff918216925060009161271091612ae5911688613f7a565b612aef9190614321565b612af9908761430e565b90506000612b0682612ef6565b90506000612b1d846001600160601b038416613f7a565b90506000612b3968ffffffffffffffffff808916908a166140fd565b9050612b56612b516001600160601b0383168461430e565b612f25565b9a9950505050505050505050565b6000612b6e610e41565b511115610d8f57610d8f6122bb565b6000808a8a8a8a8a8a8a8a8a604051602001612ba199989796959493929190614335565b60408051601f1981840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b336001600160a01b03821603612c625760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610c12565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60008083806020019051810190612cca91906143fe565b905080604051602001612cdd9190613726565b60408051601f19818403018152918152815160209283012060008a8152600790935291205414612d115760069150506118af565b600087815260076020526040902054612d2e5760029150506118af565b6000612d393a612ef6565b90506000826101200151836101000151612d5391906144c6565b612d649064ffffffffff168361411d565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663330605298b8b878960e0015168ffffffffffffffffff1688612db691906140fd565b338b6040518763ffffffff1660e01b8152600401612dd9969594939291906144e4565b60408051808303816000875af1158015612df7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e1b919061454e565b90925090506000826006811115612e3457612e34613f40565b1480612e5157506001826006811115612e4f57612e4f613f40565b145b15612ee85760008b815260076020526040812055612e6f81846140fd565b336000908152600a6020526040812080546bffffffffffffffffffffffff19166001600160601b0393841617905560e0870151600b805468ffffffffffffffffff90921693909291612ec3918591166140fd565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505b509998505050505050505050565b6000612f1f612f0361208d565b612f1584670de0b6b3a7640000613f7a565b612b519190614321565b92915050565b60006001600160601b03821115612fa45760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610c12565b5090565b508054612fb490613b1b565b6000825580601f10612fc4575050565b601f0160209004906000526020600020908101906107d9919061305c565b604051806103e00160405280601f906020820280368337509192915050565b828054828255906000526020600020908101928215613054579160200282015b828111156130545781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190613021565b50612fa49291505b5b80821115612fa4576000815560010161305d565b60008083601f84011261308357600080fd5b50813567ffffffffffffffff81111561309b57600080fd5b6020830191508360208285010111156130b357600080fd5b9250929050565b600080602083850312156130cd57600080fd5b823567ffffffffffffffff8111156130e457600080fd5b6130f085828601613071565b90969095509350505050565b6000815180845260005b8181101561312257602081850181015186830182015201613106565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061315560208301846130fc565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156131965761319661315c565b60405290565b604051610160810167ffffffffffffffff811182821017156131965761319661315c565b604051601f8201601f1916810167ffffffffffffffff811182821017156131e9576131e961315c565b604052919050565b63ffffffff811681146107d957600080fd5b8035611010816131f1565b68ffffffffffffffffff811681146107d957600080fd5b80356110108161320e565b803561ffff8116811461101057600080fd5b80356001600160e01b038116811461101057600080fd5b6000610120828403121561326c57600080fd5b613274613172565b61327d83613203565b815261328b60208401613203565b602082015261329c60408401613203565b60408201526132ad60608401613203565b60608201526132be60808401613203565b60808201526132cf60a08401613225565b60a08201526132e060c08401613230565b60c08201526132f160e08401613203565b60e0820152610100613304818501613242565b908201529392505050565b6001600160a01b03811681146107d957600080fd5b80356110108161330f565b60006020828403121561334157600080fd5b81356131558161330f565b600081518084526020808501945080840160005b838110156133855781516001600160a01b031687529582019590820190600101613360565b509495945050505050565b6040815260006133a3604083018561334c565b6020838203818501528185518084528284019150828160051b85010183880160005b838110156133f357601f198784030185526133e18383516130fc565b948601949250908501906001016133c5565b50909998505050505050505050565b600082601f83011261341357600080fd5b813567ffffffffffffffff81111561342d5761342d61315c565b613440601f8201601f19166020016131c0565b81815284602083860101111561345557600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561348457600080fd5b813567ffffffffffffffff81111561349b57600080fd5b6134a784828501613402565b949350505050565b6001600160601b03811681146107d957600080fd5b8035611010816134af565b600080604083850312156134e257600080fd5b82356134ed8161330f565b915060208301356134fd816134af565b809150509250929050565b60008060006040848603121561351d57600080fd5b83356135288161330f565b9250602084013567ffffffffffffffff81111561354457600080fd5b61355086828701613071565b9497909650939450505050565b602081526000613155602083018461334c565b60006020828403121561358257600080fd5b5035919050565b60008060006104008085870312156135a057600080fd5b843567ffffffffffffffff8111156135b757600080fd5b6135c387828801613071565b9095509350508481018610156135d857600080fd5b506020840190509250925092565b6000602082840312156135f857600080fd5b813567ffffffffffffffff81111561360f57600080fd5b8201610160818503121561315557600080fd5b80518252602081015161364060208401826001600160a01b03169052565b50604081015161365b60408401826001600160601b03169052565b50606081015161367660608401826001600160a01b03169052565b506080810151613692608084018267ffffffffffffffff169052565b5060a08101516136aa60a084018263ffffffff169052565b5060c08101516136c760c084018268ffffffffffffffffff169052565b5060e08101516136e460e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff81168483015250506101208181015164ffffffffff81168483015250506101408181015163ffffffff811684830152610e3b565b6101608101612f1f8284613622565b60008083601f84011261374757600080fd5b50813567ffffffffffffffff81111561375f57600080fd5b6020830191508360208260051b85010111156130b357600080fd5b60008060008060008060008060e0898b03121561379657600080fd5b606089018a8111156137a757600080fd5b8998503567ffffffffffffffff808211156137c157600080fd5b6137cd8c838d01613071565b909950975060808b01359150808211156137e657600080fd5b6137f28c838d01613735565b909750955060a08b013591508082111561380b57600080fd5b506138188b828c01613735565b999c989b50969995989497949560c00135949350505050565b815163ffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608080840151918216908301526101208201905060a083015161389160a084018268ffffffffffffffffff169052565b5060c08301516138a760c084018261ffff169052565b5060e08301516138bf60e084018263ffffffff169052565b50610100838101516001600160e01b038116848301525b505092915050565b67ffffffffffffffff811681146107d957600080fd5b8035611010816138de565b60008060008060006080868803121561391757600080fd5b8535613922816138de565b9450602086013567ffffffffffffffff81111561393e57600080fd5b61394a88828901613071565b909550935050604086013561395e816131f1565b949793965091946060013592915050565b6000806020838503121561398257600080fd5b823567ffffffffffffffff81111561399957600080fd5b6130f085828601613735565b600067ffffffffffffffff8211156139bf576139bf61315c565b5060051b60200190565b600082601f8301126139da57600080fd5b813560206139ef6139ea836139a5565b6131c0565b82815260059290921b84018101918181019086841115613a0e57600080fd5b8286015b84811015613a32578035613a258161330f565b8352918301918301613a12565b509695505050505050565b803560ff8116811461101057600080fd5b60008060008060008060c08789031215613a6757600080fd5b863567ffffffffffffffff80821115613a7f57600080fd5b613a8b8a838b016139c9565b97506020890135915080821115613aa157600080fd5b613aad8a838b016139c9565b9650613abb60408a01613a3d565b95506060890135915080821115613ad157600080fd5b613add8a838b01613402565b9450613aeb60808a016138f4565b935060a0890135915080821115613b0157600080fd5b50613b0e89828a01613402565b9150509295509295509295565b600181811c90821680613b2f57607f821691505b602082108103613b4f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156105bb57600081815260208120601f850160051c81016020861015613b7c5750805b601f850160051c820191505b81811015610bb457828155600101613b88565b67ffffffffffffffff831115613bb357613bb361315c565b613bc783613bc18354613b1b565b83613b55565b6000601f841160018114613bfb5760008515613be35750838201355b600019600387901b1c1916600186901b178355613c55565b600083815260209020601f19861690835b82811015613c2c5786850135825560209485019460019092019101613c0c565b5086821015613c495760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b80516110108161320e565b600060208284031215613c7957600080fd5b81516131558161320e565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201613cc257613cc2613c9a565b5060010190565b6001600160601b0382811682821603908082111561223f5761223f613c9a565b60006101608236031215613cfc57600080fd5b613d0461319c565b823567ffffffffffffffff811115613d1b57600080fd5b613d2736828601613402565b82525060208301356020820152613d4060408401613324565b6040820152613d51606084016134c4565b6060820152613d6260808401613225565b6080820152613d7360a084016138f4565b60a0820152613d8460c084016138f4565b60c0820152613d9560e08401613203565b60e0820152610100613da8818501613230565b90820152610120613dba8482016138f4565b90820152610140613dcc848201613324565b9082015292915050565b600060208284031215613de857600080fd5b8135613155816138de565b6000808335601e19843603018112613e0a57600080fd5b83018035915067ffffffffffffffff821115613e2557600080fd5b6020019150368190038213156130b357600080fd5b600060208284031215613e4c57600080fd5b61315582613230565b600060208284031215613e6757600080fd5b8135613155816131f1565b6001600160a01b038a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f8801601f19168301019050612b5660e0830184613622565b60ff8181168382160190811115612f1f57612f1f613c9a565b634e487b7160e01b600052601260045260246000fd5b600060ff831680613f3157613f31613f08565b8060ff84160491505092915050565b634e487b7160e01b600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b8082028115828204841417612f1f57612f1f613c9a565b81810381811115612f1f57612f1f613c9a565b634e487b7160e01b600052603160045260246000fd5b63ffffffff81811683821601908082111561223f5761223f613c9a565b600061012063ffffffff808d1684528b6020850152808b166040850152508060608401526140078184018a61334c565b9050828103608084015261401b818961334c565b905060ff871660a084015282810360c084015261403881876130fc565b905067ffffffffffffffff851660e084015282810361010084015261405d81856130fc565b9c9b505050505050505050505050565b805169ffffffffffffffffffff8116811461101057600080fd5b600080600080600060a0868803121561409f57600080fd5b6140a88661406d565b94506020860151935060408601519250606086015191506140cb6080870161406d565b90509295509295909350565b60006001600160601b03808416806140f1576140f1613f08565b92169190910492915050565b6001600160601b0381811683821601908082111561223f5761223f613c9a565b6001600160601b038181168382160280821691908281146138d6576138d6613c9a565b600082601f83011261415157600080fd5b813560206141616139ea836139a5565b82815260059290921b8401810191818101908684111561418057600080fd5b8286015b84811015613a325780358352918301918301614184565b600082601f8301126141ac57600080fd5b813560206141bc6139ea836139a5565b82815260059290921b840181019181810190868411156141db57600080fd5b8286015b84811015613a3257803567ffffffffffffffff8111156141ff5760008081fd5b61420d8986838b0101613402565b8452509183019183016141df565b600080600080600060a0868803121561423357600080fd5b853567ffffffffffffffff8082111561424b57600080fd5b61425789838a01614140565b9650602088013591508082111561426d57600080fd5b61427989838a0161419b565b9550604088013591508082111561428f57600080fd5b61429b89838a0161419b565b945060608801359150808211156142b157600080fd5b6142bd89838a0161419b565b935060808801359150808211156142d357600080fd5b506142e08882890161419b565b9150509295509295909350565b67ffffffffffffffff81811683821601908082111561223f5761223f613c9a565b80820180821115612f1f57612f1f613c9a565b60008261433057614330613f08565b500490565b60006101208b83526001600160a01b038b16602084015267ffffffffffffffff808b16604085015281606085015261436f8285018b61334c565b91508382036080850152614383828a61334c565b915060ff881660a085015283820360c08501526143a082886130fc565b90861660e0850152838103610100850152905061405d81856130fc565b80516110108161330f565b8051611010816134af565b8051611010816138de565b8051611010816131f1565b805164ffffffffff8116811461101057600080fd5b6000610160828403121561441157600080fd5b61441961319c565b82518152614429602084016143bd565b602082015261443a604084016143c8565b604082015261444b606084016143bd565b606082015261445c608084016143d3565b608082015261446d60a084016143de565b60a082015261447e60c08401613c5c565b60c082015261448f60e08401613c5c565b60e08201526101006144a28185016143e9565b908201526101206144b48482016143e9565b908201526101406133048482016143de565b64ffffffffff81811683821601908082111561223f5761223f613c9a565b60006102008083526144f88184018a6130fc565b9050828103602084015261450c81896130fc565b6001600160601b038881166040860152871660608501526001600160a01b03861660808501529150614543905060a0830184613622565b979650505050505050565b6000806040838503121561456157600080fd5b82516007811061457057600080fd5b60208401519092506134fd816134af56fea2646970667358221220c8ccbfc8ed2d3f3aefadfc8dfff4ba589074ecb4722da270dc97d097e0ebaaf564736f6c63430008130033',
  linkReferences: {},
  deployedLinkReferences: {},
}
