export const FunctionsCoordinatorSource = {
  _format: 'hh-sol-artifact-1',
  contractName: 'FunctionsCoordinator',
  sourceName: 'FunctionsCoordinator.sol',
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
    '0x60c06040523480156200001157600080fd5b5060405162004a9838038062004a9883398101604081905262000034916200044f565b8282828260013380600081620000915760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000c457620000c48162000140565b50505015156080526001600160a01b038116620000f457604051632530e88560e11b815260040160405180910390fd5b6001600160a01b0390811660a052600b80549183166c01000000000000000000000000026001600160601b039092169190911790556200013482620001eb565b50505050505062000600565b336001600160a01b038216036200019a5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640162000088565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b620001f56200033a565b80516008805460208401516040808601516060870151608088015160a089015160c08a015163ffffffff998a166001600160401b031990981697909717640100000000968a16870217600160401b600160801b03191668010000000000000000948a169490940263ffffffff60601b1916939093176c010000000000000000000000009289169290920291909117600160801b600160e81b031916600160801b91881691909102600160a01b600160e81b03191617600160a01b6001600160481b03909216919091021761ffff60e81b1916600160e81b61ffff909416939093029290921790925560e084015161010085015193166001600160e01b0390931690910291909117600955517f5b6e2e1a03ea742ce04ca36d0175411a0772f99ef4ee84aeb9868a1ef6ddc82c906200032f90839062000558565b60405180910390a150565b6200034462000346565b565b6000546001600160a01b03163314620003445760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015260640162000088565b80516001600160a01b0381168114620003ba57600080fd5b919050565b60405161012081016001600160401b0381118282101715620003f157634e487b7160e01b600052604160045260246000fd5b60405290565b805163ffffffff81168114620003ba57600080fd5b80516001600160481b0381168114620003ba57600080fd5b805161ffff81168114620003ba57600080fd5b80516001600160e01b0381168114620003ba57600080fd5b60008060008385036101608112156200046757600080fd5b6200047285620003a2565b935061012080601f19830112156200048957600080fd5b62000493620003bf565b9150620004a360208701620003f7565b8252620004b360408701620003f7565b6020830152620004c660608701620003f7565b6040830152620004d960808701620003f7565b6060830152620004ec60a08701620003f7565b6080830152620004ff60c087016200040c565b60a08301526200051260e0870162000424565b60c083015261010062000527818801620003f7565b60e08401526200053982880162000437565b908301525091506200054f6101408501620003a2565b90509250925092565b815163ffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608080840151918216908301526101208201905060a0830151620005b760a08401826001600160481b03169052565b5060c0830151620005ce60c084018261ffff169052565b5060e0830151620005e760e084018263ffffffff169052565b50610100928301516001600160e01b0316919092015290565b60805160a05161444862000650600039600081816107a401528181610ad501528181610c8d01528181610f2c0152818161103d015281816116f50152612cea0152600061122501526144486000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806381f1b938116100ee578063b1dc65a411610097578063d328a91e11610071578063d328a91e14610504578063e3d0e7121461050c578063e4ddcea61461051f578063f2fde38b1461053557600080fd5b8063b1dc65a4146103ca578063c3f909d4146103dd578063d227d245146104d957600080fd5b80638da5cb5b116100c85780638da5cb5b1461036f578063a631571e1461038a578063afcb95d7146103aa57600080fd5b806381f1b938146102fd57806381ff70481461030557806385b214cf1461034c57600080fd5b806359b5b7ac1161015b5780637d480787116101355780637d480787146102ba5780637f15e166146102c257806380756031146102d557806381411834146102e857600080fd5b806359b5b7ac1461027857806366316d8d1461029f57806379ba5097146102b257600080fd5b806326ceabac1161018c57806326ceabac1461022d5780632a905ccc14610240578063533989871461026257600080fd5b8063083a5466146101b3578063181f5a77146101c85780631bdf7f1b1461021a575b600080fd5b6101c66101c1366004612fde565b610548565b005b6102046040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e302e300000000081525081565b6040516102119190613066565b60405180910390f35b6101c661022836600461317d565b610584565b6101c661023b366004613253565b61073a565b6102486107a0565b60405168ffffffffffffffffff9091168152602001610211565b61026a610829565b6040516102119291906132b4565b610248610286366004613396565b50600854600160a01b900468ffffffffffffffffff1690565b6101c66102ad3660046133f3565b610a10565b6101c6610b80565b6101c6610c36565b6101c66102d0366004612fde565b610d57565b6101c66102e336600461342c565b610d8e565b6102f0610e05565b6040516102119190613481565b610204610e67565b61032960015460025463ffffffff600160a01b8304811693600160c01b9093041691565b6040805163ffffffff948516815293909216602084015290820152606001610211565b61035f61035a366004613494565b610f1f565b6040519015158152602001610211565b6000546040516001600160a01b039091168152602001610211565b61039d6103983660046134ad565b610fd9565b60405161021191906135ed565b604080516001815260006020820181905291810191909152606001610211565b6101c66103d8366004613641565b611146565b6104cc6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915250604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff1660c083015260095490811660e0830152919091046001600160e01b031661010082015290565b60405161021191906136f8565b6104ec6104e73660046137c6565b6116f1565b6040516001600160601b039091168152602001610211565b610204611843565b6101c661051a3660046138df565b611881565b61052761200c565b604051908152602001610211565b6101c6610543366004613253565b6121c5565b6105506121d6565b600081900361057257604051634f42be3d60e01b815260040160405180910390fd5b600e61057f828483613a2c565b505050565b61058c612232565b80516008805460208401516040808601516060870151608088015160a089015160c08a015163ffffffff998a1667ffffffffffffffff1990981697909717640100000000968a168702177fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff1668010000000000000000948a16949094027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff1693909317600160601b92891692909202919091177fffffff00000000000000000000000000ffffffffffffffffffffffffffffffff16600160801b918816919091027fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff1617600160a01b68ffffffffffffffffff90921691909102177fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e81b61ffff909416939093029290921790925560e084015161010085015193166001600160e01b0390931690910291909117600955517f5b6e2e1a03ea742ce04ca36d0175411a0772f99ef4ee84aeb9868a1ef6ddc82c9061072f9083906136f8565b60405180910390a150565b6000546001600160a01b0316331480159061075e5750336001600160a01b03821614155b1561077c5760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600d6020526040812061079d91612f27565b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190613af8565b905090565b6060806000600680548060200260200160405190810160405280929190818152602001828054801561088457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610866575b505050505090506000815167ffffffffffffffff8111156108a7576108a7613080565b6040519080825280602002602001820160405280156108da57816020015b60608152602001906001900390816108c55790505b50905060005b8251811015610a06576000600d600085848151811061090157610901613b15565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208054610934906139ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610960906139ac565b80156109ad5780601f10610982576101008083540402835291602001916109ad565b820191906000526020600020905b81548152906001019060200180831161099057829003601f168201915b5050505050905080516000036109d657604051634f42be3d60e01b815260040160405180910390fd5b808383815181106109e9576109e9613b15565b602002602001018190525050806109ff90613b41565b90506108e0565b5090939092509050565b610a1861223a565b806001600160601b0316600003610a485750336000908152600a60205260409020546001600160601b0316610a84565b336000908152600a60205260409020546001600160601b0380831691161015610a8457604051631e9acf1760e31b815260040160405180910390fd5b336000908152600a602052604081208054839290610aac9084906001600160601b0316613b5a565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550610af77f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301526001600160601b038416602483015291909116906366316d8d90604401600060405180830381600087803b158015610b6457600080fd5b505af1158015610b78573d6000803e3d6000fd5b505050505050565b6001546001600160a01b03163314610bdf5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610c3e612232565b610c4661223a565b6000610c50610e05565b905060005b8151811015610d5357336000908152600a6020526040902080546bffffffffffffffffffffffff1981169091556001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166366316d8d848481518110610ccc57610ccc613b15565b6020026020010151836040518363ffffffff1660e01b8152600401610d0f9291906001600160a01b039290921682526001600160601b0316602082015260400190565b600060405180830381600087803b158015610d2957600080fd5b505af1158015610d3d573d6000803e3d6000fd5b505050505080610d4c90613b41565b9050610c55565b5050565b610d5f6121d6565b6000819003610d8157604051634f42be3d60e01b815260040160405180910390fd5b600c61057f828483613a2c565b6000546001600160a01b0316331480610dbf5750610dab336123a3565b8015610dbf5750336001600160a01b038416145b610ddc5760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0383166000908152600d60205260409020610dff828483613a2c565b50505050565b60606006805480602002602001604051908101604052809291908181526020018280548015610e5d57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e3f575b5050505050905090565b6060600e8054610e76906139ac565b9050600003610e9857604051634f42be3d60e01b815260040160405180910390fd5b600e8054610ea5906139ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed1906139ac565b8015610e5d5780601f10610ef357610100808354040283529160200191610e5d565b820191906000526020600020905b815481529060010190602001808311610f0157509395945050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f6a5760405163c41a5b0960e01b815260040160405180910390fd5b600082815260076020526040902054610f8557506000919050565b60008281526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f41690610fc89084815260200190565b60405180910390a15060015b919050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461107b5760405163c41a5b0960e01b815260040160405180910390fd5b61108c61108783613b7a565b612465565b905061109e6060830160408401613253565b81516001600160a01b0391909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff326110df60c0870160a08801613c67565b6110f161016088016101408901613253565b6110fb8880613c84565b61110d6101208b016101008c01613ccb565b60208b01356111236101008d0160e08e01613ce6565b8b60405161113999989796959493929190613d03565b60405180910390a3919050565b60005a604080518b3580825262ffffff6020808f0135600881901c929092169084015293945092917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16040805160608101825260025480825260035460ff808216602085015261010090910416928201929092529083146112135760405162461bcd60e51b815260206004820152601560248201527f636f6e666967446967657374206d69736d6174636800000000000000000000006044820152606401610bd6565b6112218b8b8b8b8b8b6127a1565b60007f00000000000000000000000000000000000000000000000000000000000000001561127e5760028260200151836040015161125f9190613d80565b6112699190613daf565b611274906001613d80565b60ff169050611294565b602082015161128e906001613d80565b60ff1690505b8881146112e35760405162461bcd60e51b815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610bd6565b8887146113325760405162461bcd60e51b815260206004820152601e60248201527f7369676e617475726573206f7574206f6620726567697374726174696f6e00006044820152606401610bd6565b3360009081526004602090815260408083208151808301909252805460ff8082168452929391929184019161010090910416600281111561137557611375613dd1565b600281111561138657611386613dd1565b90525090506002816020015160028111156113a3576113a3613dd1565b1480156113dd57506006816000015160ff16815481106113c5576113c5613b15565b6000918252602090912001546001600160a01b031633145b6114295760405162461bcd60e51b815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610bd6565b5050505050611436612f61565b6000808a8a604051611449929190613de7565b604051908190038120611460918e90602001613df7565b60408051601f198184030181528282528051602091820120838301909252600080845290830152915060005b898110156116d35760006001848984602081106114ab576114ab613b15565b6114b891901a601b613d80565b8e8e868181106114ca576114ca613b15565b905060200201358d8d878181106114e3576114e3613b15565b9050602002013560405160008152602001604052604051611520949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611542573d6000803e3d6000fd5b505060408051601f198101516001600160a01b03811660009081526004602090815290849020838501909452835460ff8082168552929650929450840191610100900416600281111561159757611597613dd1565b60028111156115a8576115a8613dd1565b90525092506001836020015160028111156115c5576115c5613dd1565b146116125760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610bd6565b8251600090879060ff16601f811061162c5761162c613b15565b60200201516001600160a01b0316146116875760405162461bcd60e51b815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610bd6565b8086846000015160ff16601f81106116a1576116a1613b15565b6001600160a01b0390921660209290920201526116bf600186613d80565b945050806116cc90613b41565b905061148c565b5050506116e4833383858e8e61283e565b5050505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff851660248201526001600160a01b0391909116906310fc49c19060440160006040518083038186803b15801561178457600080fd5b505afa158015611798573d6000803e3d6000fd5b505050620f424083111590506117da576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117e46107a0565b9050600061182787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061028692505050565b905061183585858385612a0c565b925050505b95945050505050565b6060600c8054611852906139ac565b905060000361187457604051634f42be3d60e01b815260040160405180910390fd5b600c8054610ea5906139ac565b855185518560ff16601f8311156118db576040516389a6198960e01b815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610bd6565b8060000361192c576040516389a6198960e01b815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610bd6565b8183146119a1576040516389a6198960e01b8152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610bd6565b6119ac816003613e0b565b83116119fb576040516389a6198960e01b815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610bd6565b611a036121d6565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a0810186905290611a4a9088612ae3565b60055415611b5c57600554600090611a6490600190613e22565b9050600060058281548110611a7b57611a7b613b15565b6000918252602082200154600680546001600160a01b0390921693509084908110611aa857611aa8613b15565b60009182526020808320909101546001600160a01b03858116845260049092526040808420805461ffff1990811690915592909116808452922080549091169055600580549192509080611afe57611afe613e35565b600082815260209020810160001990810180546001600160a01b03191690550190556006805480611b3157611b31613e35565b600082815260209020810160001990810180546001600160a01b031916905501905550611a4a915050565b60005b815151811015611e9b5760006004600084600001518481518110611b8557611b85613b15565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611bc257611bc2613dd1565b14611c0f5760405162461bcd60e51b815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610bd6565b6040805180820190915260ff82168152600160208201528251805160049160009185908110611c4057611c40613b15565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611c9957611c99613dd1565b021790555060009150611ca99050565b6004600084602001518481518110611cc357611cc3613b15565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611d0057611d00613dd1565b14611d4d5760405162461bcd60e51b815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610bd6565b6040805180820190915260ff821681526020810160028152506004600084602001518481518110611d8057611d80613b15565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611dd957611dd9613dd1565b021790555050825180516005925083908110611df757611df7613b15565b602090810291909101810151825460018101845560009384529282902090920180546001600160a01b0319166001600160a01b039093169290921790915582015180516006919083908110611e4e57611e4e613b15565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905580611e9381613b41565b915050611b5f565b5060408101516003805460ff191660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116600160c01b63ffffffff4381168202929092178085559204811692918291601491611f0f918491600160a01b900416613e4b565b92506101000a81548163ffffffff021916908363ffffffff160217905550611f6e4630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a00151612afc565b6002819055825180516003805461ff00191661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e0598611ff7988b989197600160a01b90920463ffffffff16969095919491939192613e68565b60405180910390a15050505050505050505050565b604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821684860152600160601b80840483166060860152600160801b840483166080860152600160a01b840468ffffffffffffffffff1660a080870191909152600160e81b90940461ffff1660c086015260095492831660e086015291046001600160e01b0316610100840152600b5484517ffeaf968c0000000000000000000000000000000000000000000000000000000081529451600095869485949093046001600160a01b03169263feaf968c926004808401938290030181865afa15801561210e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121329190613f18565b5093505092505080426121459190613e22565b836020015163ffffffff1610801561216757506000836020015163ffffffff16115b1561218157505061010001516001600160e01b0316919050565b600082136121be576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610bd6565b5092915050565b6121cd6121d6565b61079d81612b89565b6000546001600160a01b031633146122305760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610bd6565b565b6122306121d6565b600b546001600160601b031660000361224f57565b6000612259610e05565b90508051600003612296576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051600b546000916122b0916001600160601b0316613f68565b905060005b82518110156123535781600a60008584815181106122d5576122d5613b15565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008282829054906101000a90046001600160601b031661231e9190613f8e565b92506101000a8154816001600160601b0302191690836001600160601b031602179055508061234c90613b41565b90506122b5565b5081516123609082613fae565b600b805460009061237b9084906001600160601b0316613b5a565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505050565b60008060068054806020026020016040519081016040528092919081815260200182805480156123fc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116123de575b5050505050905060005b815181101561245b57836001600160a01b031682828151811061242b5761242b613b15565b60200260200101516001600160a01b03160361244b575060019392505050565b61245481613b41565b9050612406565b5060009392505050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff90811660c0840181905260095492831660e0850152939091046001600160e01b0316610100808401919091528501519192911611156125a4576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600854600090600160a01b900468ffffffffffffffffff16905060006125d48560e001513a848860800151612a0c565b9050806001600160601b031685606001516001600160601b0316101561260d57604051631e9acf1760e31b815260040160405180910390fd5b60006126833087604001518860a001518960c00151600161262e9190613fd1565b604080516001600160a01b03958616602080830191909152949095168582015267ffffffffffffffff928316606086015291166080808501919091528151808503909101815260a09093019052815191012090565b9050604051806101600160405280828152602001306001600160a01b03168152602001836001600160601b0316815260200187604001516001600160a01b031681526020018760a0015167ffffffffffffffff1681526020018760e0015163ffffffff168152602001876080015168ffffffffffffffffff1681526020018468ffffffffffffffffff168152602001856040015163ffffffff1664ffffffffff168152602001856060015163ffffffff1664ffffffffff168152602001856080015163ffffffff16426127569190613ff2565b63ffffffff1681525094508460405160200161277291906135ed565b60408051601f198184030181529181528151602092830120600093845260079092529091205550919392505050565b60006127ae826020613e0b565b6127b9856020613e0b565b6127c588610144613ff2565b6127cf9190613ff2565b6127d99190613ff2565b6127e4906000613ff2565b90503681146128355760405162461bcd60e51b815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610bd6565b50505050505050565b606080808080612850868801886140e0565b845194995092975090955093509150158061286d57508351855114155b8061287a57508251855114155b8061288757508151855114155b8061289457508051855114155b156128cb576040517f0be3632800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b85518110156129fe5760006129638783815181106128ee576128ee613b15565b602002602001015187848151811061290857612908613b15565b602002602001015187858151811061292257612922613b15565b602002602001015187868151811061293c5761293c613b15565b602002602001015187878151811061295657612956613b15565b6020026020010151612c32565b9050600081600681111561297957612979613dd1565b14806129965750600181600681111561299457612994613dd1565b145b156129ed578682815181106129ad576129ad613b15565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b506129f781613b41565b90506128ce565b505050505050505050505050565b60085460009081908690612a3b9063ffffffff600160601b820481169168010000000000000000900416613e4b565b612a459190613e4b565b60095463ffffffff918216925060009161271091612a64911688613e0b565b612a6e91906141b2565b612a789087613ff2565b90506000612a8582612e75565b90506000612a9c846001600160601b038416613e0b565b90506000612ab868ffffffffffffffffff808916908a16613f8e565b9050612ad5612ad06001600160601b03831684613ff2565b612ea4565b9a9950505050505050505050565b6000612aed610e05565b511115610d5357610d5361223a565b6000808a8a8a8a8a8a8a8a8a604051602001612b20999897969594939291906141c6565b60408051601f1981840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b336001600160a01b03821603612be15760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610bd6565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60008083806020019051810190612c49919061428f565b905080604051602001612c5c91906135ed565b60408051601f19818403018152918152815160209283012060008a8152600790935291205414612c9057600691505061183a565b600087815260076020526040902054612cad57600291505061183a565b6000612cb83a612e75565b90506000826101200151836101000151612cd29190614357565b612ce39064ffffffffff1683613fae565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663330605298b8b878960e0015168ffffffffffffffffff1688612d359190613f8e565b338b6040518763ffffffff1660e01b8152600401612d5896959493929190614375565b60408051808303816000875af1158015612d76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d9a91906143df565b90925090506000826006811115612db357612db3613dd1565b1480612dd057506001826006811115612dce57612dce613dd1565b145b15612e675760008b815260076020526040812055612dee8184613f8e565b336000908152600a6020526040812080546bffffffffffffffffffffffff19166001600160601b0393841617905560e0870151600b805468ffffffffffffffffff90921693909291612e4291859116613f8e565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505b509998505050505050505050565b6000612e9e612e8261200c565b612e9484670de0b6b3a7640000613e0b565b612ad091906141b2565b92915050565b60006001600160601b03821115612f235760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610bd6565b5090565b508054612f33906139ac565b6000825580601f10612f43575050565b601f01602090049060005260206000209081019061079d9190612f80565b604051806103e00160405280601f906020820280368337509192915050565b5b80821115612f235760008155600101612f81565b60008083601f840112612fa757600080fd5b50813567ffffffffffffffff811115612fbf57600080fd5b602083019150836020828501011115612fd757600080fd5b9250929050565b60008060208385031215612ff157600080fd5b823567ffffffffffffffff81111561300857600080fd5b61301485828601612f95565b90969095509350505050565b6000815180845260005b818110156130465760208185018101518683018201520161302a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006130796020830184613020565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156130ba576130ba613080565b60405290565b604051610160810167ffffffffffffffff811182821017156130ba576130ba613080565b604051601f8201601f1916810167ffffffffffffffff8111828210171561310d5761310d613080565b604052919050565b63ffffffff8116811461079d57600080fd5b8035610fd481613115565b68ffffffffffffffffff8116811461079d57600080fd5b8035610fd481613132565b803561ffff81168114610fd457600080fd5b80356001600160e01b0381168114610fd457600080fd5b6000610120828403121561319057600080fd5b613198613096565b6131a183613127565b81526131af60208401613127565b60208201526131c060408401613127565b60408201526131d160608401613127565b60608201526131e260808401613127565b60808201526131f360a08401613149565b60a082015261320460c08401613154565b60c082015261321560e08401613127565b60e0820152610100613228818501613166565b908201529392505050565b6001600160a01b038116811461079d57600080fd5b8035610fd481613233565b60006020828403121561326557600080fd5b813561307981613233565b600081518084526020808501945080840160005b838110156132a95781516001600160a01b031687529582019590820190600101613284565b509495945050505050565b6040815260006132c76040830185613270565b6020838203818501528185518084528284019150828160051b85010183880160005b8381101561331757601f19878403018552613305838351613020565b948601949250908501906001016132e9565b50909998505050505050505050565b600082601f83011261333757600080fd5b813567ffffffffffffffff81111561335157613351613080565b613364601f8201601f19166020016130e4565b81815284602083860101111561337957600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156133a857600080fd5b813567ffffffffffffffff8111156133bf57600080fd5b6133cb84828501613326565b949350505050565b6001600160601b038116811461079d57600080fd5b8035610fd4816133d3565b6000806040838503121561340657600080fd5b823561341181613233565b91506020830135613421816133d3565b809150509250929050565b60008060006040848603121561344157600080fd5b833561344c81613233565b9250602084013567ffffffffffffffff81111561346857600080fd5b61347486828701612f95565b9497909650939450505050565b6020815260006130796020830184613270565b6000602082840312156134a657600080fd5b5035919050565b6000602082840312156134bf57600080fd5b813567ffffffffffffffff8111156134d657600080fd5b8201610160818503121561307957600080fd5b80518252602081015161350760208401826001600160a01b03169052565b50604081015161352260408401826001600160601b03169052565b50606081015161353d60608401826001600160a01b03169052565b506080810151613559608084018267ffffffffffffffff169052565b5060a081015161357160a084018263ffffffff169052565b5060c081015161358e60c084018268ffffffffffffffffff169052565b5060e08101516135ab60e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff81168483015250506101208181015164ffffffffff81168483015250506101408181015163ffffffff811684830152610dff565b6101608101612e9e82846134e9565b60008083601f84011261360e57600080fd5b50813567ffffffffffffffff81111561362657600080fd5b6020830191508360208260051b8501011115612fd757600080fd5b60008060008060008060008060e0898b03121561365d57600080fd5b606089018a81111561366e57600080fd5b8998503567ffffffffffffffff8082111561368857600080fd5b6136948c838d01612f95565b909950975060808b01359150808211156136ad57600080fd5b6136b98c838d016135fc565b909750955060a08b01359150808211156136d257600080fd5b506136df8b828c016135fc565b999c989b50969995989497949560c00135949350505050565b815163ffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608080840151918216908301526101208201905060a083015161375860a084018268ffffffffffffffffff169052565b5060c083015161376e60c084018261ffff169052565b5060e083015161378660e084018263ffffffff169052565b50610100838101516001600160e01b038116848301525b505092915050565b67ffffffffffffffff8116811461079d57600080fd5b8035610fd4816137a5565b6000806000806000608086880312156137de57600080fd5b85356137e9816137a5565b9450602086013567ffffffffffffffff81111561380557600080fd5b61381188828901612f95565b909550935050604086013561382581613115565b949793965091946060013592915050565b600067ffffffffffffffff82111561385057613850613080565b5060051b60200190565b600082601f83011261386b57600080fd5b8135602061388061387b83613836565b6130e4565b82815260059290921b8401810191818101908684111561389f57600080fd5b8286015b848110156138c35780356138b681613233565b83529183019183016138a3565b509695505050505050565b803560ff81168114610fd457600080fd5b60008060008060008060c087890312156138f857600080fd5b863567ffffffffffffffff8082111561391057600080fd5b61391c8a838b0161385a565b9750602089013591508082111561393257600080fd5b61393e8a838b0161385a565b965061394c60408a016138ce565b9550606089013591508082111561396257600080fd5b61396e8a838b01613326565b945061397c60808a016137bb565b935060a089013591508082111561399257600080fd5b5061399f89828a01613326565b9150509295509295509295565b600181811c908216806139c057607f821691505b6020821081036139e057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561057f57600081815260208120601f850160051c81016020861015613a0d5750805b601f850160051c820191505b81811015610b7857828155600101613a19565b67ffffffffffffffff831115613a4457613a44613080565b613a5883613a5283546139ac565b836139e6565b6000601f841160018114613a8c5760008515613a745750838201355b600019600387901b1c1916600186901b178355613ae6565b600083815260209020601f19861690835b82811015613abd5786850135825560209485019460019092019101613a9d565b5086821015613ada5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b8051610fd481613132565b600060208284031215613b0a57600080fd5b815161307981613132565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201613b5357613b53613b2b565b5060010190565b6001600160601b038281168282160390808211156121be576121be613b2b565b60006101608236031215613b8d57600080fd5b613b956130c0565b823567ffffffffffffffff811115613bac57600080fd5b613bb836828601613326565b82525060208301356020820152613bd160408401613248565b6040820152613be2606084016133e8565b6060820152613bf360808401613149565b6080820152613c0460a084016137bb565b60a0820152613c1560c084016137bb565b60c0820152613c2660e08401613127565b60e0820152610100613c39818501613154565b90820152610120613c4b8482016137bb565b90820152610140613c5d848201613248565b9082015292915050565b600060208284031215613c7957600080fd5b8135613079816137a5565b6000808335601e19843603018112613c9b57600080fd5b83018035915067ffffffffffffffff821115613cb657600080fd5b602001915036819003821315612fd757600080fd5b600060208284031215613cdd57600080fd5b61307982613154565b600060208284031215613cf857600080fd5b813561307981613115565b6001600160a01b038a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f8801601f19168301019050612ad560e08301846134e9565b60ff8181168382160190811115612e9e57612e9e613b2b565b634e487b7160e01b600052601260045260246000fd5b600060ff831680613dc257613dc2613d99565b8060ff84160491505092915050565b634e487b7160e01b600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b8082028115828204841417612e9e57612e9e613b2b565b81810381811115612e9e57612e9e613b2b565b634e487b7160e01b600052603160045260246000fd5b63ffffffff8181168382160190808211156121be576121be613b2b565b600061012063ffffffff808d1684528b6020850152808b16604085015250806060840152613e988184018a613270565b90508281036080840152613eac8189613270565b905060ff871660a084015282810360c0840152613ec98187613020565b905067ffffffffffffffff851660e0840152828103610100840152613eee8185613020565b9c9b505050505050505050505050565b805169ffffffffffffffffffff81168114610fd457600080fd5b600080600080600060a08688031215613f3057600080fd5b613f3986613efe565b9450602086015193506040860151925060608601519150613f5c60808701613efe565b90509295509295909350565b60006001600160601b0380841680613f8257613f82613d99565b92169190910492915050565b6001600160601b038181168382160190808211156121be576121be613b2b565b6001600160601b0381811683821602808216919082811461379d5761379d613b2b565b67ffffffffffffffff8181168382160190808211156121be576121be613b2b565b80820180821115612e9e57612e9e613b2b565b600082601f83011261401657600080fd5b8135602061402661387b83613836565b82815260059290921b8401810191818101908684111561404557600080fd5b8286015b848110156138c35780358352918301918301614049565b600082601f83011261407157600080fd5b8135602061408161387b83613836565b82815260059290921b840181019181810190868411156140a057600080fd5b8286015b848110156138c357803567ffffffffffffffff8111156140c45760008081fd5b6140d28986838b0101613326565b8452509183019183016140a4565b600080600080600060a086880312156140f857600080fd5b853567ffffffffffffffff8082111561411057600080fd5b61411c89838a01614005565b9650602088013591508082111561413257600080fd5b61413e89838a01614060565b9550604088013591508082111561415457600080fd5b61416089838a01614060565b9450606088013591508082111561417657600080fd5b61418289838a01614060565b9350608088013591508082111561419857600080fd5b506141a588828901614060565b9150509295509295909350565b6000826141c1576141c1613d99565b500490565b60006101208b83526001600160a01b038b16602084015267ffffffffffffffff808b1660408501528160608501526142008285018b613270565b91508382036080850152614214828a613270565b915060ff881660a085015283820360c08501526142318288613020565b90861660e08501528381036101008501529050613eee8185613020565b8051610fd481613233565b8051610fd4816133d3565b8051610fd4816137a5565b8051610fd481613115565b805164ffffffffff81168114610fd457600080fd5b600061016082840312156142a257600080fd5b6142aa6130c0565b825181526142ba6020840161424e565b60208201526142cb60408401614259565b60408201526142dc6060840161424e565b60608201526142ed60808401614264565b60808201526142fe60a0840161426f565b60a082015261430f60c08401613aed565b60c082015261432060e08401613aed565b60e082015261010061433381850161427a565b9082015261012061434584820161427a565b9082015261014061322884820161426f565b64ffffffffff8181168382160190808211156121be576121be613b2b565b60006102008083526143898184018a613020565b9050828103602084015261439d8189613020565b6001600160601b038881166040860152871660608501526001600160a01b038616608085015291506143d4905060a08301846134e9565b979650505050505050565b600080604083850312156143f257600080fd5b82516007811061440157600080fd5b6020840151909250613421816133d356fea2646970667358221220b939979f854facb03e7cde68e15396aceb5645bf1e3019239ebb4898ef20c79b64736f6c63430008130033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106101ae5760003560e01c806381f1b938116100ee578063b1dc65a411610097578063d328a91e11610071578063d328a91e14610504578063e3d0e7121461050c578063e4ddcea61461051f578063f2fde38b1461053557600080fd5b8063b1dc65a4146103ca578063c3f909d4146103dd578063d227d245146104d957600080fd5b80638da5cb5b116100c85780638da5cb5b1461036f578063a631571e1461038a578063afcb95d7146103aa57600080fd5b806381f1b938146102fd57806381ff70481461030557806385b214cf1461034c57600080fd5b806359b5b7ac1161015b5780637d480787116101355780637d480787146102ba5780637f15e166146102c257806380756031146102d557806381411834146102e857600080fd5b806359b5b7ac1461027857806366316d8d1461029f57806379ba5097146102b257600080fd5b806326ceabac1161018c57806326ceabac1461022d5780632a905ccc14610240578063533989871461026257600080fd5b8063083a5466146101b3578063181f5a77146101c85780631bdf7f1b1461021a575b600080fd5b6101c66101c1366004612fde565b610548565b005b6102046040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e302e300000000081525081565b6040516102119190613066565b60405180910390f35b6101c661022836600461317d565b610584565b6101c661023b366004613253565b61073a565b6102486107a0565b60405168ffffffffffffffffff9091168152602001610211565b61026a610829565b6040516102119291906132b4565b610248610286366004613396565b50600854600160a01b900468ffffffffffffffffff1690565b6101c66102ad3660046133f3565b610a10565b6101c6610b80565b6101c6610c36565b6101c66102d0366004612fde565b610d57565b6101c66102e336600461342c565b610d8e565b6102f0610e05565b6040516102119190613481565b610204610e67565b61032960015460025463ffffffff600160a01b8304811693600160c01b9093041691565b6040805163ffffffff948516815293909216602084015290820152606001610211565b61035f61035a366004613494565b610f1f565b6040519015158152602001610211565b6000546040516001600160a01b039091168152602001610211565b61039d6103983660046134ad565b610fd9565b60405161021191906135ed565b604080516001815260006020820181905291810191909152606001610211565b6101c66103d8366004613641565b611146565b6104cc6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915250604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff1660c083015260095490811660e0830152919091046001600160e01b031661010082015290565b60405161021191906136f8565b6104ec6104e73660046137c6565b6116f1565b6040516001600160601b039091168152602001610211565b610204611843565b6101c661051a3660046138df565b611881565b61052761200c565b604051908152602001610211565b6101c6610543366004613253565b6121c5565b6105506121d6565b600081900361057257604051634f42be3d60e01b815260040160405180910390fd5b600e61057f828483613a2c565b505050565b61058c612232565b80516008805460208401516040808601516060870151608088015160a089015160c08a015163ffffffff998a1667ffffffffffffffff1990981697909717640100000000968a168702177fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff1668010000000000000000948a16949094027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff1693909317600160601b92891692909202919091177fffffff00000000000000000000000000ffffffffffffffffffffffffffffffff16600160801b918816919091027fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff1617600160a01b68ffffffffffffffffff90921691909102177fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160e81b61ffff909416939093029290921790925560e084015161010085015193166001600160e01b0390931690910291909117600955517f5b6e2e1a03ea742ce04ca36d0175411a0772f99ef4ee84aeb9868a1ef6ddc82c9061072f9083906136f8565b60405180910390a150565b6000546001600160a01b0316331480159061075e5750336001600160a01b03821614155b1561077c5760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600d6020526040812061079d91612f27565b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190613af8565b905090565b6060806000600680548060200260200160405190810160405280929190818152602001828054801561088457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610866575b505050505090506000815167ffffffffffffffff8111156108a7576108a7613080565b6040519080825280602002602001820160405280156108da57816020015b60608152602001906001900390816108c55790505b50905060005b8251811015610a06576000600d600085848151811061090157610901613b15565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208054610934906139ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610960906139ac565b80156109ad5780601f10610982576101008083540402835291602001916109ad565b820191906000526020600020905b81548152906001019060200180831161099057829003601f168201915b5050505050905080516000036109d657604051634f42be3d60e01b815260040160405180910390fd5b808383815181106109e9576109e9613b15565b602002602001018190525050806109ff90613b41565b90506108e0565b5090939092509050565b610a1861223a565b806001600160601b0316600003610a485750336000908152600a60205260409020546001600160601b0316610a84565b336000908152600a60205260409020546001600160601b0380831691161015610a8457604051631e9acf1760e31b815260040160405180910390fd5b336000908152600a602052604081208054839290610aac9084906001600160601b0316613b5a565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550610af77f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301526001600160601b038416602483015291909116906366316d8d90604401600060405180830381600087803b158015610b6457600080fd5b505af1158015610b78573d6000803e3d6000fd5b505050505050565b6001546001600160a01b03163314610bdf5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610c3e612232565b610c4661223a565b6000610c50610e05565b905060005b8151811015610d5357336000908152600a6020526040902080546bffffffffffffffffffffffff1981169091556001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166366316d8d848481518110610ccc57610ccc613b15565b6020026020010151836040518363ffffffff1660e01b8152600401610d0f9291906001600160a01b039290921682526001600160601b0316602082015260400190565b600060405180830381600087803b158015610d2957600080fd5b505af1158015610d3d573d6000803e3d6000fd5b505050505080610d4c90613b41565b9050610c55565b5050565b610d5f6121d6565b6000819003610d8157604051634f42be3d60e01b815260040160405180910390fd5b600c61057f828483613a2c565b6000546001600160a01b0316331480610dbf5750610dab336123a3565b8015610dbf5750336001600160a01b038416145b610ddc5760405163ed6dd19b60e01b815260040160405180910390fd5b6001600160a01b0383166000908152600d60205260409020610dff828483613a2c565b50505050565b60606006805480602002602001604051908101604052809291908181526020018280548015610e5d57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e3f575b5050505050905090565b6060600e8054610e76906139ac565b9050600003610e9857604051634f42be3d60e01b815260040160405180910390fd5b600e8054610ea5906139ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed1906139ac565b8015610e5d5780601f10610ef357610100808354040283529160200191610e5d565b820191906000526020600020905b815481529060010190602001808311610f0157509395945050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f6a5760405163c41a5b0960e01b815260040160405180910390fd5b600082815260076020526040902054610f8557506000919050565b60008281526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f41690610fc89084815260200190565b60405180910390a15060015b919050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461107b5760405163c41a5b0960e01b815260040160405180910390fd5b61108c61108783613b7a565b612465565b905061109e6060830160408401613253565b81516001600160a01b0391909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff326110df60c0870160a08801613c67565b6110f161016088016101408901613253565b6110fb8880613c84565b61110d6101208b016101008c01613ccb565b60208b01356111236101008d0160e08e01613ce6565b8b60405161113999989796959493929190613d03565b60405180910390a3919050565b60005a604080518b3580825262ffffff6020808f0135600881901c929092169084015293945092917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16040805160608101825260025480825260035460ff808216602085015261010090910416928201929092529083146112135760405162461bcd60e51b815260206004820152601560248201527f636f6e666967446967657374206d69736d6174636800000000000000000000006044820152606401610bd6565b6112218b8b8b8b8b8b6127a1565b60007f00000000000000000000000000000000000000000000000000000000000000001561127e5760028260200151836040015161125f9190613d80565b6112699190613daf565b611274906001613d80565b60ff169050611294565b602082015161128e906001613d80565b60ff1690505b8881146112e35760405162461bcd60e51b815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610bd6565b8887146113325760405162461bcd60e51b815260206004820152601e60248201527f7369676e617475726573206f7574206f6620726567697374726174696f6e00006044820152606401610bd6565b3360009081526004602090815260408083208151808301909252805460ff8082168452929391929184019161010090910416600281111561137557611375613dd1565b600281111561138657611386613dd1565b90525090506002816020015160028111156113a3576113a3613dd1565b1480156113dd57506006816000015160ff16815481106113c5576113c5613b15565b6000918252602090912001546001600160a01b031633145b6114295760405162461bcd60e51b815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610bd6565b5050505050611436612f61565b6000808a8a604051611449929190613de7565b604051908190038120611460918e90602001613df7565b60408051601f198184030181528282528051602091820120838301909252600080845290830152915060005b898110156116d35760006001848984602081106114ab576114ab613b15565b6114b891901a601b613d80565b8e8e868181106114ca576114ca613b15565b905060200201358d8d878181106114e3576114e3613b15565b9050602002013560405160008152602001604052604051611520949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611542573d6000803e3d6000fd5b505060408051601f198101516001600160a01b03811660009081526004602090815290849020838501909452835460ff8082168552929650929450840191610100900416600281111561159757611597613dd1565b60028111156115a8576115a8613dd1565b90525092506001836020015160028111156115c5576115c5613dd1565b146116125760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610bd6565b8251600090879060ff16601f811061162c5761162c613b15565b60200201516001600160a01b0316146116875760405162461bcd60e51b815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610bd6565b8086846000015160ff16601f81106116a1576116a1613b15565b6001600160a01b0390921660209290920201526116bf600186613d80565b945050806116cc90613b41565b905061148c565b5050506116e4833383858e8e61283e565b5050505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff851660248201526001600160a01b0391909116906310fc49c19060440160006040518083038186803b15801561178457600080fd5b505afa158015611798573d6000803e3d6000fd5b505050620f424083111590506117da576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117e46107a0565b9050600061182787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061028692505050565b905061183585858385612a0c565b925050505b95945050505050565b6060600c8054611852906139ac565b905060000361187457604051634f42be3d60e01b815260040160405180910390fd5b600c8054610ea5906139ac565b855185518560ff16601f8311156118db576040516389a6198960e01b815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610bd6565b8060000361192c576040516389a6198960e01b815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610bd6565b8183146119a1576040516389a6198960e01b8152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610bd6565b6119ac816003613e0b565b83116119fb576040516389a6198960e01b815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610bd6565b611a036121d6565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a0810186905290611a4a9088612ae3565b60055415611b5c57600554600090611a6490600190613e22565b9050600060058281548110611a7b57611a7b613b15565b6000918252602082200154600680546001600160a01b0390921693509084908110611aa857611aa8613b15565b60009182526020808320909101546001600160a01b03858116845260049092526040808420805461ffff1990811690915592909116808452922080549091169055600580549192509080611afe57611afe613e35565b600082815260209020810160001990810180546001600160a01b03191690550190556006805480611b3157611b31613e35565b600082815260209020810160001990810180546001600160a01b031916905501905550611a4a915050565b60005b815151811015611e9b5760006004600084600001518481518110611b8557611b85613b15565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611bc257611bc2613dd1565b14611c0f5760405162461bcd60e51b815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610bd6565b6040805180820190915260ff82168152600160208201528251805160049160009185908110611c4057611c40613b15565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611c9957611c99613dd1565b021790555060009150611ca99050565b6004600084602001518481518110611cc357611cc3613b15565b6020908102919091018101516001600160a01b0316825281019190915260400160002054610100900460ff166002811115611d0057611d00613dd1565b14611d4d5760405162461bcd60e51b815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610bd6565b6040805180820190915260ff821681526020810160028152506004600084602001518481518110611d8057611d80613b15565b6020908102919091018101516001600160a01b03168252818101929092526040016000208251815460ff90911660ff19821681178355928401519192839161ffff191617610100836002811115611dd957611dd9613dd1565b021790555050825180516005925083908110611df757611df7613b15565b602090810291909101810151825460018101845560009384529282902090920180546001600160a01b0319166001600160a01b039093169290921790915582015180516006919083908110611e4e57611e4e613b15565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905580611e9381613b41565b915050611b5f565b5060408101516003805460ff191660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116600160c01b63ffffffff4381168202929092178085559204811692918291601491611f0f918491600160a01b900416613e4b565b92506101000a81548163ffffffff021916908363ffffffff160217905550611f6e4630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a00151612afc565b6002819055825180516003805461ff00191661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e0598611ff7988b989197600160a01b90920463ffffffff16969095919491939192613e68565b60405180910390a15050505050505050505050565b604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821684860152600160601b80840483166060860152600160801b840483166080860152600160a01b840468ffffffffffffffffff1660a080870191909152600160e81b90940461ffff1660c086015260095492831660e086015291046001600160e01b0316610100840152600b5484517ffeaf968c0000000000000000000000000000000000000000000000000000000081529451600095869485949093046001600160a01b03169263feaf968c926004808401938290030181865afa15801561210e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121329190613f18565b5093505092505080426121459190613e22565b836020015163ffffffff1610801561216757506000836020015163ffffffff16115b1561218157505061010001516001600160e01b0316919050565b600082136121be576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610bd6565b5092915050565b6121cd6121d6565b61079d81612b89565b6000546001600160a01b031633146122305760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610bd6565b565b6122306121d6565b600b546001600160601b031660000361224f57565b6000612259610e05565b90508051600003612296576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051600b546000916122b0916001600160601b0316613f68565b905060005b82518110156123535781600a60008584815181106122d5576122d5613b15565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008282829054906101000a90046001600160601b031661231e9190613f8e565b92506101000a8154816001600160601b0302191690836001600160601b031602179055508061234c90613b41565b90506122b5565b5081516123609082613fae565b600b805460009061237b9084906001600160601b0316613b5a565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505050565b60008060068054806020026020016040519081016040528092919081815260200182805480156123fc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116123de575b5050505050905060005b815181101561245b57836001600160a01b031682828151811061242b5761242b613b15565b60200260200101516001600160a01b03160361244b575060019392505050565b61245481613b41565b9050612406565b5060009392505050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810191909152604080516101208101825260085463ffffffff808216835264010000000080830482166020850152680100000000000000008304821694840194909452600160601b820481166060840152600160801b820481166080840152600160a01b820468ffffffffffffffffff1660a0840152600160e81b90910461ffff90811660c0840181905260095492831660e0850152939091046001600160e01b0316610100808401919091528501519192911611156125a4576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600854600090600160a01b900468ffffffffffffffffff16905060006125d48560e001513a848860800151612a0c565b9050806001600160601b031685606001516001600160601b0316101561260d57604051631e9acf1760e31b815260040160405180910390fd5b60006126833087604001518860a001518960c00151600161262e9190613fd1565b604080516001600160a01b03958616602080830191909152949095168582015267ffffffffffffffff928316606086015291166080808501919091528151808503909101815260a09093019052815191012090565b9050604051806101600160405280828152602001306001600160a01b03168152602001836001600160601b0316815260200187604001516001600160a01b031681526020018760a0015167ffffffffffffffff1681526020018760e0015163ffffffff168152602001876080015168ffffffffffffffffff1681526020018468ffffffffffffffffff168152602001856040015163ffffffff1664ffffffffff168152602001856060015163ffffffff1664ffffffffff168152602001856080015163ffffffff16426127569190613ff2565b63ffffffff1681525094508460405160200161277291906135ed565b60408051601f198184030181529181528151602092830120600093845260079092529091205550919392505050565b60006127ae826020613e0b565b6127b9856020613e0b565b6127c588610144613ff2565b6127cf9190613ff2565b6127d99190613ff2565b6127e4906000613ff2565b90503681146128355760405162461bcd60e51b815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610bd6565b50505050505050565b606080808080612850868801886140e0565b845194995092975090955093509150158061286d57508351855114155b8061287a57508251855114155b8061288757508151855114155b8061289457508051855114155b156128cb576040517f0be3632800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b85518110156129fe5760006129638783815181106128ee576128ee613b15565b602002602001015187848151811061290857612908613b15565b602002602001015187858151811061292257612922613b15565b602002602001015187868151811061293c5761293c613b15565b602002602001015187878151811061295657612956613b15565b6020026020010151612c32565b9050600081600681111561297957612979613dd1565b14806129965750600181600681111561299457612994613dd1565b145b156129ed578682815181106129ad576129ad613b15565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b506129f781613b41565b90506128ce565b505050505050505050505050565b60085460009081908690612a3b9063ffffffff600160601b820481169168010000000000000000900416613e4b565b612a459190613e4b565b60095463ffffffff918216925060009161271091612a64911688613e0b565b612a6e91906141b2565b612a789087613ff2565b90506000612a8582612e75565b90506000612a9c846001600160601b038416613e0b565b90506000612ab868ffffffffffffffffff808916908a16613f8e565b9050612ad5612ad06001600160601b03831684613ff2565b612ea4565b9a9950505050505050505050565b6000612aed610e05565b511115610d5357610d5361223a565b6000808a8a8a8a8a8a8a8a8a604051602001612b20999897969594939291906141c6565b60408051601f1981840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b336001600160a01b03821603612be15760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610bd6565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60008083806020019051810190612c49919061428f565b905080604051602001612c5c91906135ed565b60408051601f19818403018152918152815160209283012060008a8152600790935291205414612c9057600691505061183a565b600087815260076020526040902054612cad57600291505061183a565b6000612cb83a612e75565b90506000826101200151836101000151612cd29190614357565b612ce39064ffffffffff1683613fae565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663330605298b8b878960e0015168ffffffffffffffffff1688612d359190613f8e565b338b6040518763ffffffff1660e01b8152600401612d5896959493929190614375565b60408051808303816000875af1158015612d76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d9a91906143df565b90925090506000826006811115612db357612db3613dd1565b1480612dd057506001826006811115612dce57612dce613dd1565b145b15612e675760008b815260076020526040812055612dee8184613f8e565b336000908152600a6020526040812080546bffffffffffffffffffffffff19166001600160601b0393841617905560e0870151600b805468ffffffffffffffffff90921693909291612e4291859116613f8e565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505b509998505050505050505050565b6000612e9e612e8261200c565b612e9484670de0b6b3a7640000613e0b565b612ad091906141b2565b92915050565b60006001600160601b03821115612f235760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610bd6565b5090565b508054612f33906139ac565b6000825580601f10612f43575050565b601f01602090049060005260206000209081019061079d9190612f80565b604051806103e00160405280601f906020820280368337509192915050565b5b80821115612f235760008155600101612f81565b60008083601f840112612fa757600080fd5b50813567ffffffffffffffff811115612fbf57600080fd5b602083019150836020828501011115612fd757600080fd5b9250929050565b60008060208385031215612ff157600080fd5b823567ffffffffffffffff81111561300857600080fd5b61301485828601612f95565b90969095509350505050565b6000815180845260005b818110156130465760208185018101518683018201520161302a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006130796020830184613020565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156130ba576130ba613080565b60405290565b604051610160810167ffffffffffffffff811182821017156130ba576130ba613080565b604051601f8201601f1916810167ffffffffffffffff8111828210171561310d5761310d613080565b604052919050565b63ffffffff8116811461079d57600080fd5b8035610fd481613115565b68ffffffffffffffffff8116811461079d57600080fd5b8035610fd481613132565b803561ffff81168114610fd457600080fd5b80356001600160e01b0381168114610fd457600080fd5b6000610120828403121561319057600080fd5b613198613096565b6131a183613127565b81526131af60208401613127565b60208201526131c060408401613127565b60408201526131d160608401613127565b60608201526131e260808401613127565b60808201526131f360a08401613149565b60a082015261320460c08401613154565b60c082015261321560e08401613127565b60e0820152610100613228818501613166565b908201529392505050565b6001600160a01b038116811461079d57600080fd5b8035610fd481613233565b60006020828403121561326557600080fd5b813561307981613233565b600081518084526020808501945080840160005b838110156132a95781516001600160a01b031687529582019590820190600101613284565b509495945050505050565b6040815260006132c76040830185613270565b6020838203818501528185518084528284019150828160051b85010183880160005b8381101561331757601f19878403018552613305838351613020565b948601949250908501906001016132e9565b50909998505050505050505050565b600082601f83011261333757600080fd5b813567ffffffffffffffff81111561335157613351613080565b613364601f8201601f19166020016130e4565b81815284602083860101111561337957600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156133a857600080fd5b813567ffffffffffffffff8111156133bf57600080fd5b6133cb84828501613326565b949350505050565b6001600160601b038116811461079d57600080fd5b8035610fd4816133d3565b6000806040838503121561340657600080fd5b823561341181613233565b91506020830135613421816133d3565b809150509250929050565b60008060006040848603121561344157600080fd5b833561344c81613233565b9250602084013567ffffffffffffffff81111561346857600080fd5b61347486828701612f95565b9497909650939450505050565b6020815260006130796020830184613270565b6000602082840312156134a657600080fd5b5035919050565b6000602082840312156134bf57600080fd5b813567ffffffffffffffff8111156134d657600080fd5b8201610160818503121561307957600080fd5b80518252602081015161350760208401826001600160a01b03169052565b50604081015161352260408401826001600160601b03169052565b50606081015161353d60608401826001600160a01b03169052565b506080810151613559608084018267ffffffffffffffff169052565b5060a081015161357160a084018263ffffffff169052565b5060c081015161358e60c084018268ffffffffffffffffff169052565b5060e08101516135ab60e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff81168483015250506101208181015164ffffffffff81168483015250506101408181015163ffffffff811684830152610dff565b6101608101612e9e82846134e9565b60008083601f84011261360e57600080fd5b50813567ffffffffffffffff81111561362657600080fd5b6020830191508360208260051b8501011115612fd757600080fd5b60008060008060008060008060e0898b03121561365d57600080fd5b606089018a81111561366e57600080fd5b8998503567ffffffffffffffff8082111561368857600080fd5b6136948c838d01612f95565b909950975060808b01359150808211156136ad57600080fd5b6136b98c838d016135fc565b909750955060a08b01359150808211156136d257600080fd5b506136df8b828c016135fc565b999c989b50969995989497949560c00135949350505050565b815163ffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608080840151918216908301526101208201905060a083015161375860a084018268ffffffffffffffffff169052565b5060c083015161376e60c084018261ffff169052565b5060e083015161378660e084018263ffffffff169052565b50610100838101516001600160e01b038116848301525b505092915050565b67ffffffffffffffff8116811461079d57600080fd5b8035610fd4816137a5565b6000806000806000608086880312156137de57600080fd5b85356137e9816137a5565b9450602086013567ffffffffffffffff81111561380557600080fd5b61381188828901612f95565b909550935050604086013561382581613115565b949793965091946060013592915050565b600067ffffffffffffffff82111561385057613850613080565b5060051b60200190565b600082601f83011261386b57600080fd5b8135602061388061387b83613836565b6130e4565b82815260059290921b8401810191818101908684111561389f57600080fd5b8286015b848110156138c35780356138b681613233565b83529183019183016138a3565b509695505050505050565b803560ff81168114610fd457600080fd5b60008060008060008060c087890312156138f857600080fd5b863567ffffffffffffffff8082111561391057600080fd5b61391c8a838b0161385a565b9750602089013591508082111561393257600080fd5b61393e8a838b0161385a565b965061394c60408a016138ce565b9550606089013591508082111561396257600080fd5b61396e8a838b01613326565b945061397c60808a016137bb565b935060a089013591508082111561399257600080fd5b5061399f89828a01613326565b9150509295509295509295565b600181811c908216806139c057607f821691505b6020821081036139e057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561057f57600081815260208120601f850160051c81016020861015613a0d5750805b601f850160051c820191505b81811015610b7857828155600101613a19565b67ffffffffffffffff831115613a4457613a44613080565b613a5883613a5283546139ac565b836139e6565b6000601f841160018114613a8c5760008515613a745750838201355b600019600387901b1c1916600186901b178355613ae6565b600083815260209020601f19861690835b82811015613abd5786850135825560209485019460019092019101613a9d565b5086821015613ada5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b8051610fd481613132565b600060208284031215613b0a57600080fd5b815161307981613132565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201613b5357613b53613b2b565b5060010190565b6001600160601b038281168282160390808211156121be576121be613b2b565b60006101608236031215613b8d57600080fd5b613b956130c0565b823567ffffffffffffffff811115613bac57600080fd5b613bb836828601613326565b82525060208301356020820152613bd160408401613248565b6040820152613be2606084016133e8565b6060820152613bf360808401613149565b6080820152613c0460a084016137bb565b60a0820152613c1560c084016137bb565b60c0820152613c2660e08401613127565b60e0820152610100613c39818501613154565b90820152610120613c4b8482016137bb565b90820152610140613c5d848201613248565b9082015292915050565b600060208284031215613c7957600080fd5b8135613079816137a5565b6000808335601e19843603018112613c9b57600080fd5b83018035915067ffffffffffffffff821115613cb657600080fd5b602001915036819003821315612fd757600080fd5b600060208284031215613cdd57600080fd5b61307982613154565b600060208284031215613cf857600080fd5b813561307981613115565b6001600160a01b038a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f8801601f19168301019050612ad560e08301846134e9565b60ff8181168382160190811115612e9e57612e9e613b2b565b634e487b7160e01b600052601260045260246000fd5b600060ff831680613dc257613dc2613d99565b8060ff84160491505092915050565b634e487b7160e01b600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b8082028115828204841417612e9e57612e9e613b2b565b81810381811115612e9e57612e9e613b2b565b634e487b7160e01b600052603160045260246000fd5b63ffffffff8181168382160190808211156121be576121be613b2b565b600061012063ffffffff808d1684528b6020850152808b16604085015250806060840152613e988184018a613270565b90508281036080840152613eac8189613270565b905060ff871660a084015282810360c0840152613ec98187613020565b905067ffffffffffffffff851660e0840152828103610100840152613eee8185613020565b9c9b505050505050505050505050565b805169ffffffffffffffffffff81168114610fd457600080fd5b600080600080600060a08688031215613f3057600080fd5b613f3986613efe565b9450602086015193506040860151925060608601519150613f5c60808701613efe565b90509295509295909350565b60006001600160601b0380841680613f8257613f82613d99565b92169190910492915050565b6001600160601b038181168382160190808211156121be576121be613b2b565b6001600160601b0381811683821602808216919082811461379d5761379d613b2b565b67ffffffffffffffff8181168382160190808211156121be576121be613b2b565b80820180821115612e9e57612e9e613b2b565b600082601f83011261401657600080fd5b8135602061402661387b83613836565b82815260059290921b8401810191818101908684111561404557600080fd5b8286015b848110156138c35780358352918301918301614049565b600082601f83011261407157600080fd5b8135602061408161387b83613836565b82815260059290921b840181019181810190868411156140a057600080fd5b8286015b848110156138c357803567ffffffffffffffff8111156140c45760008081fd5b6140d28986838b0101613326565b8452509183019183016140a4565b600080600080600060a086880312156140f857600080fd5b853567ffffffffffffffff8082111561411057600080fd5b61411c89838a01614005565b9650602088013591508082111561413257600080fd5b61413e89838a01614060565b9550604088013591508082111561415457600080fd5b61416089838a01614060565b9450606088013591508082111561417657600080fd5b61418289838a01614060565b9350608088013591508082111561419857600080fd5b506141a588828901614060565b9150509295509295909350565b6000826141c1576141c1613d99565b500490565b60006101208b83526001600160a01b038b16602084015267ffffffffffffffff808b1660408501528160608501526142008285018b613270565b91508382036080850152614214828a613270565b915060ff881660a085015283820360c08501526142318288613020565b90861660e08501528381036101008501529050613eee8185613020565b8051610fd481613233565b8051610fd4816133d3565b8051610fd4816137a5565b8051610fd481613115565b805164ffffffffff81168114610fd457600080fd5b600061016082840312156142a257600080fd5b6142aa6130c0565b825181526142ba6020840161424e565b60208201526142cb60408401614259565b60408201526142dc6060840161424e565b60608201526142ed60808401614264565b60808201526142fe60a0840161426f565b60a082015261430f60c08401613aed565b60c082015261432060e08401613aed565b60e082015261010061433381850161427a565b9082015261012061434584820161427a565b9082015261014061322884820161426f565b64ffffffffff8181168382160190808211156121be576121be613b2b565b60006102008083526143898184018a613020565b9050828103602084015261439d8189613020565b6001600160601b038881166040860152871660608501526001600160a01b038616608085015291506143d4905060a08301846134e9565b979650505050505050565b600080604083850312156143f257600080fd5b82516007811061440157600080fd5b6020840151909250613421816133d356fea2646970667358221220b939979f854facb03e7cde68e15396aceb5645bf1e3019239ebb4898ef20c79b64736f6c63430008130033',
  linkReferences: {},
  deployedLinkReferences: {},
}
