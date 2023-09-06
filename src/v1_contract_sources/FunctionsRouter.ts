export const FunctionsRouterSource = {
  _format: 'hh-sol-artifact-1',
  contractName: 'FunctionsRouter',
  sourceName: 'FunctionsRouter.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'linkToken',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint16',
              name: 'maxConsumersPerSubscription',
              type: 'uint16',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'bytes4',
              name: 'handleOracleFulfillmentSelector',
              type: 'bytes4',
            },
            {
              internalType: 'uint16',
              name: 'gasForCallExactCheck',
              type: 'uint16',
            },
            {
              internalType: 'uint32[]',
              name: 'maxCallbackGasLimits',
              type: 'uint32[]',
            },
          ],
          internalType: 'struct FunctionsRouter.Config',
          name: 'config',
          type: 'tuple',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'CannotRemoveWithPendingRequests',
      type: 'error',
    },
    {
      inputs: [],
      name: 'EmptyRequestData',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'limit',
          type: 'uint32',
        },
      ],
      name: 'GasLimitTooBig',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'IdentifierIsReserved',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint96',
          name: 'currentBalanceJuels',
          type: 'uint96',
        },
      ],
      name: 'InsufficientBalance',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidCalldata',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidConsumer',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'value',
          type: 'uint8',
        },
      ],
      name: 'InvalidGasFlagValue',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidProposal',
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
          name: 'proposedOwner',
          type: 'address',
        },
      ],
      name: 'MustBeProposedOwner',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MustBeSubscriptionOwner',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyCallableFromCoordinator',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyCallableFromLink',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'RouteNotFound',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'SenderMustAcceptTermsOfService',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TimeoutNotExceeded',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint16',
          name: 'maximumConsumers',
          type: 'uint16',
        },
      ],
      name: 'TooManyConsumers',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'totalBalance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deductionAttempt',
          type: 'uint256',
        },
      ],
      name: 'TotalBalanceInvariantViolated',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: 'uint16',
              name: 'maxConsumersPerSubscription',
              type: 'uint16',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'bytes4',
              name: 'handleOracleFulfillmentSelector',
              type: 'bytes4',
            },
            {
              internalType: 'uint16',
              name: 'gasForCallExactCheck',
              type: 'uint16',
            },
            {
              internalType: 'uint32[]',
              name: 'maxCallbackGasLimits',
              type: 'uint32[]',
            },
          ],
          indexed: false,
          internalType: 'struct FunctionsRouter.Config',
          name: '',
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
          indexed: false,
          internalType: 'bytes32',
          name: 'proposedContractSetId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposedContractSetFromAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposedContractSetToAddress',
          type: 'address',
        },
      ],
      name: 'ContractProposed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'ContractUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'FundsRecovered',
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
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
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
          name: 'coordinator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum FunctionsResponse.FulfillResult',
          name: 'resultCode',
          type: 'uint8',
        },
      ],
      name: 'RequestNotProcessed',
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
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'totalCostJuels',
          type: 'uint96',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum FunctionsResponse.FulfillResult',
          name: 'resultCode',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'response',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'err',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'callbackReturnData',
          type: 'bytes',
        },
      ],
      name: 'RequestProcessed',
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
          internalType: 'bytes32',
          name: 'donId',
          type: 'bytes32',
        },
        {
          indexed: true,
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
          internalType: 'uint32',
          name: 'callbackGasLimit',
          type: 'uint32',
        },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'estimatedTotalCostJuels',
          type: 'uint96',
        },
      ],
      name: 'RequestStart',
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
      ],
      name: 'RequestTimedOut',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'fundsRecipient',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fundsAmount',
          type: 'uint256',
        },
      ],
      name: 'SubscriptionCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'consumer',
          type: 'address',
        },
      ],
      name: 'SubscriptionConsumerAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'consumer',
          type: 'address',
        },
      ],
      name: 'SubscriptionConsumerRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'SubscriptionCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBalance',
          type: 'uint256',
        },
      ],
      name: 'SubscriptionFunded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'SubscriptionOwnerTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'SubscriptionOwnerTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      inputs: [],
      name: 'MAX_CALLBACK_RETURN_BYTES',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
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
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      name: 'acceptSubscriptionOwnerTransfer',
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
          internalType: 'address',
          name: 'consumer',
          type: 'address',
        },
      ],
      name: 'addConsumer',
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
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'cancelSubscription',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'createSubscription',
      outputs: [
        {
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'consumer',
          type: 'address',
        },
      ],
      name: 'createSubscriptionWithConsumer',
      outputs: [
        {
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'response',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'err',
          type: 'bytes',
        },
        {
          internalType: 'uint96',
          name: 'juelsPerGas',
          type: 'uint96',
        },
        {
          internalType: 'uint96',
          name: 'costWithoutCallback',
          type: 'uint96',
        },
        {
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
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
          internalType: 'struct FunctionsResponse.Commitment',
          name: 'commitment',
          type: 'tuple',
        },
      ],
      name: 'fulfill',
      outputs: [
        {
          internalType: 'enum FunctionsResponse.FulfillResult',
          name: 'resultCode',
          type: 'uint8',
        },
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      stateMutability: 'nonpayable',
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
      name: 'getAllowListId',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
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
              internalType: 'uint16',
              name: 'maxConsumersPerSubscription',
              type: 'uint16',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'bytes4',
              name: 'handleOracleFulfillmentSelector',
              type: 'bytes4',
            },
            {
              internalType: 'uint16',
              name: 'gasForCallExactCheck',
              type: 'uint16',
            },
            {
              internalType: 'uint32[]',
              name: 'maxCallbackGasLimits',
              type: 'uint32[]',
            },
          ],
          internalType: 'struct FunctionsRouter.Config',
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
          internalType: 'address',
          name: 'client',
          type: 'address',
        },
        {
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      name: 'getConsumer',
      outputs: [
        {
          components: [
            {
              internalType: 'bool',
              name: 'allowed',
              type: 'bool',
            },
            {
              internalType: 'uint64',
              name: 'initiatedRequests',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'completedRequests',
              type: 'uint64',
            },
          ],
          internalType: 'struct IFunctionsSubscriptions.Consumer',
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
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'getContractById',
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
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      name: 'getFlags',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'getProposedContractById',
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
      inputs: [],
      name: 'getProposedContractSet',
      outputs: [
        {
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]',
        },
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
      inputs: [
        {
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      name: 'getSubscription',
      outputs: [
        {
          components: [
            {
              internalType: 'uint96',
              name: 'balance',
              type: 'uint96',
            },
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'uint96',
              name: 'blockedBalance',
              type: 'uint96',
            },
            {
              internalType: 'address',
              name: 'proposedOwner',
              type: 'address',
            },
            {
              internalType: 'address[]',
              name: 'consumers',
              type: 'address[]',
            },
            {
              internalType: 'bytes32',
              name: 'flags',
              type: 'bytes32',
            },
          ],
          internalType: 'struct IFunctionsSubscriptions.Subscription',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getSubscriptionCount',
      outputs: [
        {
          internalType: 'uint64',
          name: '',
          type: 'uint64',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTotalBalance',
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
      inputs: [
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
      ],
      name: 'isValidCallbackGasLimit',
      outputs: [],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'onTokenTransfer',
      outputs: [],
      stateMutability: 'nonpayable',
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
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      name: 'ownerCancelSubscription',
      outputs: [],
      stateMutability: 'nonpayable',
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
      name: 'ownerWithdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint64',
          name: 'subscriptionId',
          type: 'uint64',
        },
      ],
      name: 'pendingRequestExists',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32[]',
          name: 'proposedContractSetIds',
          type: 'bytes32[]',
        },
        {
          internalType: 'address[]',
          name: 'proposedContractSetAddresses',
          type: 'address[]',
        },
      ],
      name: 'proposeContractsUpdate',
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
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'proposeSubscriptionOwnerTransfer',
      outputs: [],
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
      name: 'recoverFunds',
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
          internalType: 'address',
          name: 'consumer',
          type: 'address',
        },
      ],
      name: 'removeConsumer',
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
          internalType: 'uint16',
          name: 'dataVersion',
          type: 'uint16',
        },
        {
          internalType: 'uint32',
          name: 'callbackGasLimit',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: 'donId',
          type: 'bytes32',
        },
      ],
      name: 'sendRequest',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
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
          internalType: 'uint16',
          name: 'dataVersion',
          type: 'uint16',
        },
        {
          internalType: 'uint32',
          name: 'callbackGasLimit',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: 'donId',
          type: 'bytes32',
        },
      ],
      name: 'sendRequestToProposed',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'allowListId',
          type: 'bytes32',
        },
      ],
      name: 'setAllowListId',
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
          internalType: 'bytes32',
          name: 'flags',
          type: 'bytes32',
        },
      ],
      name: 'setFlags',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
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
          internalType: 'struct FunctionsResponse.Commitment[]',
          name: 'requestsToTimeoutByCommitment',
          type: 'tuple[]',
        },
      ],
      name: 'timeoutRequests',
      outputs: [],
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
      inputs: [],
      name: 'unpause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint16',
              name: 'maxConsumersPerSubscription',
              type: 'uint16',
            },
            {
              internalType: 'uint72',
              name: 'adminFee',
              type: 'uint72',
            },
            {
              internalType: 'bytes4',
              name: 'handleOracleFulfillmentSelector',
              type: 'bytes4',
            },
            {
              internalType: 'uint16',
              name: 'gasForCallExactCheck',
              type: 'uint16',
            },
            {
              internalType: 'uint32[]',
              name: 'maxCallbackGasLimits',
              type: 'uint32[]',
            },
          ],
          internalType: 'struct FunctionsRouter.Config',
          name: 'config',
          type: 'tuple',
        },
      ],
      name: 'updateConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'updateContracts',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode:
    '0x60a06040523480156200001157600080fd5b50604051620055d0380380620055d08339810160408190526200003491620004df565b6001600160a01b0382166080526006805460ff191690553380600081620000a25760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600680546001600160a01b0380851661010002610100600160a81b031990921691909117909155811615620000dc57620000dc81620000f8565b505050620000f081620001aa60201b60201c565b50506200067b565b336001600160a01b03821603620001525760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640162000099565b600780546001600160a01b0319166001600160a01b03838116918217909255600654604051919261010090910416907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b620001b462000287565b8051600a80546020808501516040860151606087015161ffff908116600160781b0261ffff60781b1960e09390931c6b010000000000000000000000029290921665ffffffffffff60581b196001600160481b0390941662010000026001600160581b031990961691909716179390931716939093171781556080830151805184936200024792600b92910190620002ea565b509050507f049ce2e6e1420eb4b07b425e90129186833eb346bda40b37d5d921aad482f71c816040516200027c9190620005dd565b60405180910390a150565b60065461010090046001600160a01b03163314620002e85760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015260640162000099565b565b828054828255906000526020600020906007016008900481019282156200038e5791602002820160005b838211156200035a57835183826101000a81548163ffffffff021916908363ffffffff160217905550926020019260040160208160030104928301926001030262000314565b80156200038c5782816101000a81549063ffffffff02191690556004016020816003010492830192600103026200035a565b505b506200039c929150620003a0565b5090565b5b808211156200039c5760008155600101620003a1565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b0381118282101715620003f257620003f2620003b7565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004235762000423620003b7565b604052919050565b805161ffff811681146200043e57600080fd5b919050565b600082601f8301126200045557600080fd5b815160206001600160401b03821115620004735762000473620003b7565b8160051b62000484828201620003f8565b92835284810182019282810190878511156200049f57600080fd5b83870192505b84831015620004d457825163ffffffff81168114620004c45760008081fd5b82529183019190830190620004a5565b979650505050505050565b60008060408385031215620004f357600080fd5b82516001600160a01b03811681146200050b57600080fd5b60208401519092506001600160401b03808211156200052957600080fd5b9084019060a082870312156200053e57600080fd5b62000548620003cd565b62000553836200042b565b815260208301516001600160481b03811681146200057057600080fd5b602082015260408301516001600160e01b0319811681146200059157600080fd5b6040820152620005a4606084016200042b565b6060820152608083015182811115620005bc57600080fd5b620005ca8882860162000443565b6080830152508093505050509250929050565b6020808252825161ffff90811683830152838201516001600160481b03166040808501919091528401516001600160e01b0319166060808501919091528401511660808084019190915283015160a080840152805160c0840181905260009291820190839060e08601905b808310156200067057835163ffffffff16825292840192600192909201919084019062000648565b509695505050505050565b608051614f1d620006b3600039600081816111ea01528181611cfa015281816124760152818161251b0152612ba30152614f1d6000f3fe608060405234801561001057600080fd5b50600436106102de5760003560e01c80637341c10c11610186578063aab396bd116100e3578063d7ae1d3011610097578063e82ad7d411610071578063e82ad7d41461069c578063ea320e0b146106af578063f2fde38b146106c257600080fd5b8063d7ae1d3014610663578063e72f6e3014610676578063e82622aa1461068957600080fd5b8063badc3eb6116100c8578063badc3eb614610625578063c3f909d41461063b578063cc77470a1461065057600080fd5b8063aab396bd14610615578063b734c0f41461061d57600080fd5b80639f87fad71161013a578063a47c76961161011f578063a47c7696146105cf578063a4c0ed36146105ef578063a9c9a9181461060257600080fd5b80639f87fad7146105b4578063a21a23e4146105c757600080fd5b8063823597401161016b57806382359740146105835780638456cb59146105965780638da5cb5b1461059e57600080fd5b80637341c10c1461056857806379ba50971461057b57600080fd5b80633f4ba83a1161023f5780635c975abb116101f357806366419970116101cd57806366419970146104d0578063674603d0146104f55780636a2215de1461053d57600080fd5b80635c975abb146104935780635ed6dfba146104aa57806366316d8d146104bd57600080fd5b8063461d276211610224578063461d2762146104405780634b8832d31461045357806355fedefa1461046657600080fd5b80633f4ba83a1461041757806341db4ca31461041f57600080fd5b80631ded3b36116102965780632a905ccc1161027b5780632a905ccc146103b557806333060529146103e35780633e871e4d1461040457600080fd5b80631ded3b361461038f57806321b60e7f146103a257600080fd5b806310fc49c1116102c757806310fc49c11461031857806312b583491461032b578063181f5a771461034657600080fd5b806302bcc5b6146102e35780630c5d49cb146102f8575b600080fd5b6102f66102f1366004613dc6565b6106d5565b005b610300608481565b60405161ffff90911681526020015b60405180910390f35b6102f6610326366004613e07565b61071d565b6000546040516001600160601b03909116815260200161030f565b6103826040518060400160405280601781526020017f46756e6374696f6e7320526f757465722076312e302e3000000000000000000081525081565b60405161030f9190613e90565b6102f661039d366004613ea3565b610818565b6102f66103b036600461402b565b610849565b600a5462010000900468ffffffffffffffffff1660405168ffffffffffffffffff909116815260200161030f565b6103f66103f136600461428d565b610956565b60405161030f92919061435b565b6102f66104123660046143e3565b610cff565b6102f6610f11565b61043261042d3660046144e3565b610f23565b60405190815260200161030f565b61043261044e3660046144e3565b610f83565b6102f6610461366004614566565b610f8f565b610432610474366004613dc6565b6001600160401b03166000908152600360208190526040909120015490565b60065460ff165b604051901515815260200161030f565b6102f66104b8366004614594565b611084565b6102f66104cb366004614594565b611226565b6002546001600160401b03165b6040516001600160401b03909116815260200161030f565b6105086105033660046145c2565b61130f565b604080518251151581526020808401516001600160401b0390811691830191909152928201519092169082015260600161030f565b61055061054b3660046145f0565b611391565b6040516001600160a01b03909116815260200161030f565b6102f6610576366004614566565b61142a565b6102f661158b565b6102f6610591366004613dc6565b611666565b6102f661176d565b60065461010090046001600160a01b0316610550565b6102f66105c2366004614566565b61177d565b6104dd611a6d565b6105e26105dd366004613dc6565b611bdb565b60405161030f919061464d565b6102f66105fd3660046146c3565b611ce7565b6105506106103660046145f0565b611ebd565b600954610432565b6102f6611ef6565b61062d612010565b60405161030f92919061471e565b6106436120d3565b60405161030f9190614775565b6104dd61065e366004614807565b6121e4565b6102f6610671366004614566565b6123f4565b6102f6610684366004614807565b61243d565b6102f6610697366004614824565b61258a565b61049a6106aa366004613dc6565b61281b565b6102f66106bd3660046145f0565b61294e565b6102f66106d0366004614807565b61295b565b6106dd61296c565b6106e681612974565b6001600160401b03811660009081526003602052604090205461071a908290600160601b90046001600160a01b03166129ba565b50565b6001600160401b038216600090815260036020819052604082200154600b54911a908110610781576040517f45c108ce00000000000000000000000000000000000000000000000000000000815260ff821660048201526024015b60405180910390fd5b6000600a6001018260ff168154811061079c5761079c614899565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff168363ffffffff161115610812576040517f1d70f87a00000000000000000000000000000000000000000000000000000000815263ffffffff82166004820152602401610778565b50505050565b61082061296c565b61082982612974565b6001600160401b0390911660009081526003602081905260409091200155565b610851612c2c565b8051600a80546020808501516040860151606087015161ffff908116600160781b027fffffffffffffffffffffffffffffff0000ffffffffffffffffffffffffffffff60e09390931c6b01000000000000000000000002929092167fffffffffffffffffffffffffffffff000000000000ffffffffffffffffffffff68ffffffffffffffffff90941662010000026affffffffffffffffffffff19909616919097161793909317169390931717815560808301518051849361091892600b92910190613c37565b509050507f049ce2e6e1420eb4b07b425e90129186833eb346bda40b37d5d921aad482f71c8160405161094b9190614775565b60405180910390a150565b600080610961612c8b565b82602001516001600160a01b0316336001600160a01b0316146109b0576040517f8bec23e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8251600090815260056020526040902054610a125782516020840151604051600294507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610a0291889087906148af565b60405180910390a2506000610cf4565b8251600090815260056020908152604091829020549151610a35918691016148d4565b6040516020818303038152906040528051906020012014610a8d5782516020840151604051600694507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610a0291889087906148af565b8261012001518360a0015163ffffffff16610aa891906149f7565b64ffffffffff165a1015610af35782516020840151604051600494507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610a0291889087906148af565b6000610b088460a0015163ffffffff16612c93565b610b129088614a1c565b9050600081878660c0015168ffffffffffffffffff16610b329190614a3f565b610b3c9190614a3f565b9050610b4b8560800151611bdb565b600001516001600160601b0316816001600160601b03161115610bb95784516020860151604051600596507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610ba5918a9089906148af565b60405180910390a25060009150610cf49050565b84604001516001600160601b0316816001600160601b03161115610c145784516020860151604051600396507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610ba5918a9089906148af565b505082516000908152600560205260408120819055835160a08501516060860151610c4492918c918c9190612d16565b8051909150610c54576001610c57565b60005b92506000610c918560800151866040015187606001518860c0015168ffffffffffffffffff168c610c8b8860200151612c93565b8d612e63565b905084608001516001600160401b031685600001517f64778f26c70b60a8d7e29e2451b3844302d959448401c0535b768ed88c6b505e836020015189888f8f8960400151604051610ce796959493929190614a5f565b60405180910390a3519150505b965096945050505050565b610d07612c2c565b8151815181141580610d195750600881115b15610d3757604051631dc0650160e31b815260040160405180910390fd5b60005b81811015610de9576000848281518110610d5657610d56614899565b602002602001015190506000848381518110610d7457610d74614899565b6020026020010151905060006001600160a01b0316816001600160a01b03161480610db857506000828152600860205260409020546001600160a01b038281169116145b15610dd657604051631dc0650160e31b815260040160405180910390fd5b505080610de290614ad0565b9050610d3a565b506040805180820190915283815260208082018490528451600c91610e12918391880190613ce2565b506020828101518051610e2b9260018501920190613d1d565b5090505060005b8351811015610812577f8b052f0f4bf82fede7daffea71592b29d5ef86af1f3c7daaa0345dbb2f52f481848281518110610e6e57610e6e614899565b602002602001015160086000878581518110610e8c57610e8c614899565b6020026020010151815260200190815260200160002060009054906101000a90046001600160a01b0316858481518110610ec857610ec8614899565b6020026020010151604051610ef9939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a1610f0a81614ad0565b9050610e32565b610f19612c2c565b610f2161315c565b565b600080610f2f83611391565b9050610f7783828a8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c92508b91506131ae9050565b98975050505050505050565b600080610f2f83611ebd565b610f97612c8b565b610fa082613513565b610fa861359c565b6001600160a01b0381161580610feb57506001600160401b0382166000908152600360205260409020600101546001600160a01b03828116600160601b90920416145b1561100957604051638129bbcd60e01b815260040160405180910390fd5b6001600160401b03821660008181526003602090815260409182902060010180546001600160601b0316600160601b6001600160a01b038716908102919091179091558251338152918201527f69436ea6df009049404f564eff6622cd00522b0bd6a89efd9e52a355c4a879be910160405180910390a25050565b61108c61296c565b806001600160601b03166000036110b85750306000908152600160205260409020546001600160601b03165b306000908152600160205260409020546001600160601b0390811690821681101561110157604051636b0fe56f60e01b81526001600160601b0382166004820152602401610778565b6000546001600160601b038084169116101561114757600054604051636ed1590b60e11b81526001600160601b0391821660048201529083166024820152604401610778565b306000908152600160205260408120805484929061116f9084906001600160601b0316614ae9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550816000808282829054906101000a90046001600160601b03166111b69190614ae9565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555061122183836001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661368c9092919063ffffffff16565b505050565b61122e612c8b565b806001600160601b031660000361125857604051638129bbcd60e01b815260040160405180910390fd5b336000908152600160205260409020546001600160601b039081169082168110156112a157604051636b0fe56f60e01b81526001600160601b0382166004820152602401610778565b6000546001600160601b03808416911610156112e757600054604051636ed1590b60e11b81526001600160601b0391821660048201529083166024820152604401610778565b336000908152600160205260408120805484929061116f9084906001600160601b0316614ae9565b6040805160608082018352600080835260208084018290529284018190526001600160a01b0386168152600483528381206001600160401b03868116835290845290849020845192830185525460ff81161515835261010081048216938301939093526901000000000000000000909204909116918101919091525b92915050565b6000805b600c5460ff8216101561140d57600c805460ff83169081106113b9576113b9614899565b906000526020600020015483036113fd57600d805460ff83169081106113e1576113e1614899565b6000918252602090912001546001600160a01b03169392505050565b61140681614b09565b9050611395565b506040516380833e3360e01b815260048101839052602401610778565b611432612c8b565b61143b82613513565b61144361359c565b6000611452600a5461ffff1690565b6001600160401b03841660009081526003602052604090206002015490915061ffff821690036114b4576040517fb72bc70300000000000000000000000000000000000000000000000000000000815261ffff82166004820152602401610778565b6001600160a01b03821660009081526004602090815260408083206001600160401b038716845290915290205460ff16156114ee57505050565b6001600160a01b03821660008181526004602090815260408083206001600160401b038816808552908352818420805460ff19166001908117909155600384528285206002018054918201815585529383902090930180546001600160a01b031916851790555192835290917f43dc749a04ac8fb825cbd514f7c0e13f13bc6f2ee66043b76629d51776cff8e091015b60405180910390a2505050565b6007546001600160a01b031633146115e55760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e6572000000000000000000006044820152606401610778565b600680547fffffffffffffffffffffff0000000000000000000000000000000000000000ff81166101003381810292909217909355600780546001600160a01b0319169055604051929091046001600160a01b03169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b61166e612c8b565b61167661359c565b6001600160401b038116600090815260036020526040902080546001909101546001600160a01b03600160601b92839004811692909104163381146116f2576040517f4e1d9f180000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610778565b6001600160401b0383166000818152600360209081526040918290208054600160601b339081026001600160601b0392831617835560019092018054909116905582516001600160a01b0387168152918201527f6f1dc65165ffffedfd8e507b4a0f1fcfdada045ed11f6c26ba27cedfe87802f0910161157e565b611775612c2c565b610f2161370c565b611785612c8b565b61178e82613513565b61179661359c565b6001600160a01b03811660009081526004602090815260408083206001600160401b038087168552908352928190208151606081018352905460ff8116151580835261010082048616948301949094526901000000000000000000900490931690830152611817576040516371e8313760e01b815260040160405180910390fd5b80604001516001600160401b031681602001516001600160401b0316146118505760405162dd621960e31b815260040160405180910390fd5b6001600160401b0383166000908152600360209081526040808320600201805482518185028101850190935280835291929091908301828280156118bd57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161189f575b5050505050905060005b81518110156119ed57836001600160a01b03168282815181106118ec576118ec614899565b60200260200101516001600160a01b0316036119dd5781600183516119119190614b28565b8151811061192157611921614899565b602002602001015160036000876001600160401b03166001600160401b03168152602001908152602001600020600201828154811061196257611962614899565b600091825260208083209190910180546001600160a01b0319166001600160a01b0394909416939093179092556001600160401b03871681526003909152604090206002018054806119b6576119b6614b3b565b600082815260209020810160001990810180546001600160a01b03191690550190556119ed565b6119e681614ad0565b90506118c7565b506001600160a01b03831660008181526004602090815260408083206001600160401b03891680855290835292819020805470ffffffffffffffffffffffffffffffffff191690555192835290917f182bff9831466789164ca77075fffd84916d35a8180ba73c27e45634549b445b91015b60405180910390a250505050565b6000611a77612c8b565b611a7f61359c565b60028054600090611a98906001600160401b0316614b51565b82546001600160401b038083166101009490940a93840293021916919091179091556040805160c0810182526000808252336020830152918101829052606081018290529192506080820190604051908082528060200260200182016040528015611b0d578160200160208202803683370190505b508152600060209182018190526001600160401b0384168152600382526040908190208351848401516001600160a01b03908116600160601b9081026001600160601b039384161784559386015160608701519091169093029216919091176001820155608083015180519192611b8c92600285019290910190613d1d565b5060a091909101516003909101556040513381526001600160401b038216907f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf9060200160405180910390a290565b6040805160c0810182526000808252602082018190529181018290526060808201839052608082015260a0810191909152611c1582612974565b6001600160401b038216600090815260036020908152604091829020825160c08101845281546001600160601b0380821683526001600160a01b03600160601b928390048116848701526001850154918216848801529190041660608201526002820180548551818602810186019096528086529194929360808601939290830182828015611ccd57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611caf575b505050505081526020016003820154815250509050919050565b611cef612c8b565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611d51576040517f44b0e3c300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208114611d7257604051638129bbcd60e01b815260040160405180910390fd5b6000611d8082840184613dc6565b6001600160401b038116600090815260036020526040902054909150600160601b90046001600160a01b0316611dc957604051630fb532db60e11b815260040160405180910390fd5b6001600160401b038116600090815260036020526040812080546001600160601b031691869190611dfa8385614a3f565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550846000808282829054906101000a90046001600160601b0316611e419190614a3f565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550816001600160401b03167fd39ec07f4e209f627a4c427971473820dc129761ba28de8906bd56f57101d4f8828784611e9d9190614b77565b6040805192835260208301919091520160405180910390a2505050505050565b6000818152600860205260408120546001600160a01b03168061138b576040516380833e3360e01b815260048101849052602401610778565b611efe612c2c565b60005b600c54811015611fef576000600c6000018281548110611f2357611f23614899565b906000526020600020015490506000600c6001018381548110611f4857611f48614899565b600091825260208083209190910154848352600882526040928390205483518681526001600160a01b0391821693810193909352169181018290529091507ff8a6175bca1ba37d682089187edc5e20a859989727f10ca6bd9a5bc0de8caf949060600160405180910390a160009182526008602052604090912080546001600160a01b0319166001600160a01b03909216919091179055611fe881614ad0565b9050611f01565b50600c6000611ffe8282613d72565b61200c600183016000613d72565b5050565b606080600c600001600c6001018180548060200260200160405190810160405280929190818152602001828054801561206857602002820191906000526020600020905b815481526020019060010190808311612054575b50505050509150808054806020026020016040519081016040528092919081815260200182805480156120c457602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116120a6575b50505050509050915091509091565b6040805160a08101825260008082526020820181905291810182905260608082019290925260808101919091526040805160a081018252600a805461ffff808216845268ffffffffffffffffff620100008304166020808601919091526001600160e01b03196b010000000000000000000000840460e01b1685870152600160781b909204166060840152600b8054855181840281018401909652808652939492936080860193928301828280156121d657602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116121995790505b505050505081525050905090565b60006121ee612c8b565b6121f661359c565b6002805460009061220f906001600160401b0316614b51565b82546001600160401b038083166101009490940a93840293021916919091179091556040805160c0810182526000808252336020830152918101829052606081018290529192506080820190604051908082528060200260200182016040528015612284578160200160208202803683370190505b508152600060209182018190526001600160401b0384168152600382526040908190208351848401516001600160a01b03908116600160601b9081026001600160601b03938416178455938601516060870151909116909302921691909117600182015560808301518051919261230392600285019290910190613d1d565b5060a091909101516003918201556001600160401b0382166000818152602092835260408082206002018054600180820183559184528584200180546001600160a01b0319166001600160a01b038916908117909155835260048552818320848452855291819020805460ff19169092179091555133815290917f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf910160405180910390a26040516001600160a01b03831681526001600160401b038216907f43dc749a04ac8fb825cbd514f7c0e13f13bc6f2ee66043b76629d51776cff8e09060200160405180910390a2919050565b6123fc612c8b565b61240582613513565b61240d61359c565b6124168261281b565b156124335760405162dd621960e31b815260040160405180910390fd5b61200c82826129ba565b61244561296c565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156124c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e99190614b8a565b6000549091506001600160601b03168181101561122157600061250c8284614b28565b90506125426001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016858361368c565b604080516001600160a01b0386168152602081018390527f59bfc682b673f8cbf945f1e454df9334834abf7dfe7f92237ca29ecb9b436600910160405180910390a150505050565b612592612c8b565b60005b818110156112215760008383838181106125b1576125b1614899565b905061016002018036038101906125c89190614ba3565b805160808201516000828152600560209081526040918290205491519495509293919290916125f9918691016148d4565b604051602081830303815290604052805190602001201461262d57604051638129bbcd60e01b815260040160405180910390fd5b82610140015163ffffffff16421015612672576040517fa2376fe800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208301516040517f85b214cf000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b03909116906385b214cf906024016020604051808303816000875af11580156126d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126fc9190614bc0565b506040808401516001600160401b038316600090815260036020529182206001018054919290916127379084906001600160601b0316614ae9565b82546001600160601b039182166101009390930a92830291909202199091161790555060608301516001600160a01b031660009081526004602090815260408083206001600160401b038086168552925290912080546001926009916127ac9185916901000000000000000000900416614be2565b82546001600160401b039182166101009390930a9283029190920219909116179055506000828152600560205260408082208290555183917ff1ca1e9147be737b04a2b018a79405f687a97de8dd8a2559bbe62357343af41491a25050508061281490614ad0565b9050612595565b6001600160401b03811660009081526003602090815260408083206002018054825181850281018501909352808352849383018282801561288557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612867575b5050505050905060005b8151811015612944576000600460008484815181106128b0576128b0614899565b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081206001600160401b03808a168352908452908290208251606081018452905460ff811615158252610100810483169482018590526901000000000000000000900490911691810182905292501461293357506001949350505050565b5061293d81614ad0565b905061288f565b5060009392505050565b612956612c2c565b600955565b612963612c2c565b61071a81613749565b610f21612c2c565b6001600160401b038116600090815260036020526040902054600160601b90046001600160a01b031661071a57604051630fb532db60e11b815260040160405180910390fd5b6001600160401b0382166000908152600360209081526040808320815160c08101835281546001600160601b0380821683526001600160a01b03600160601b92839004811684880152600185015491821684870152919004166060820152600282018054845181870281018701909552808552919492936080860193909290830182828015612a7257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612a54575b505050918352505060039190910154602090910152805190915060005b826080015151811015612b17576004600084608001518381518110612ab657612ab6614899565b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081206001600160401b03891682529092529020805470ffffffffffffffffffffffffffffffffff19169055612b1081614ad0565b9050612a8f565b506001600160401b03841660009081526003602052604081208181556001810182905590612b486002830182613d72565b50600060039190910181905580548291908190612b6f9084906001600160601b0316614ae9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550612bda83826001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661368c9092919063ffffffff16565b604080516001600160a01b03851681526001600160601b03831660208201526001600160401b038616917fe8ed5b475a5b5987aa9165e8731bb78043f39eee32ec5a1169a89e27fcd498159101611a5f565b60065461010090046001600160a01b03163314610f215760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610778565b610f216137f9565b60006001600160601b03821115612d125760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610778565b5090565b60408051606080820183526000808352602083015291810191909152600a546040516000916b010000000000000000000000900460e01b90612d6090899089908990602401614c02565b60408051601f19818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b03199590951694909417909352600a548151608480825260c0820190935292945061ffff600160781b90910416926000928392839282018180368337019050509050863b612de957600080fd5b5a84811015612df757600080fd5b8490036040810481038910612e0b57600080fd5b505a60008087516020890160008c8ef193505a900391503d6084811115612e30575060845b808252806000602084013e5060408051606081018252931515845260208401929092529082015298975050505050505050565b60408051808201909152600080825260208201526000612e838486614a1c565b9050600081612e928886614a3f565b612e9c9190614a3f565b6001600160401b038b166000908152600360205260409020549091506001600160601b0380831691161015612f0a576001600160401b038a1660009081526003602052604090819020549051636b0fe56f60e01b81526001600160601b039091166004820152602401610778565b6001600160401b038a1660009081526003602052604081208054839290612f3b9084906001600160601b0316614ae9565b82546101009290920a6001600160601b038181021990931691831602179091556001600160401b038c166000908152600360205260409020600101548b8216911610159050612fc3576001600160401b038a1660009081526003602052604090819020549051636b0fe56f60e01b81526001600160601b039091166004820152602401610778565b6001600160401b038a16600090815260036020526040812060010180548b9290612ff79084906001600160601b0316614ae9565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555081846130279190614a3f565b336000908152600160205260408120805490919061304f9084906001600160601b0316614a3f565b82546101009290920a6001600160601b0381810219909316918316021790915530600090815260016020526040812080548b9450909261309191859116614a3f565b82546001600160601b039182166101009390930a9283029190920219909116179055506001600160a01b03881660009081526004602090815260408083206001600160401b03808f168552925290912080546001926009916131029185916901000000000000000000900416614be2565b92506101000a8154816001600160401b0302191690836001600160401b031602179055506040518060400160405280836001600160601b03168152602001826001600160601b031681525092505050979650505050505050565b61316461384c565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60006131b8612c8b565b6131c185612974565b6131cb338661389e565b6131d5858361071d565b835160000361320f576040517ec1cfc000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061321a86611bdb565b90506000613228338861130f565b90506000886001600160a01b031663a631571e6040518061016001604052808a81526020016132708c6001600160401b03166000908152600360208190526040909120015490565b81523360208201526040878101518851919092019161328e91614ae9565b6001600160601b03168152602001600a60000160029054906101000a900468ffffffffffffffffff1668ffffffffffffffffff1681526020018b6001600160401b0316815260200185602001516001600160401b031681526020018863ffffffff1681526020018961ffff16815260200185604001516001600160401b0316815260200186602001516001600160a01b03168152506040518263ffffffff1660e01b815260040161333f9190614c2d565b610160604051808303816000875af115801561335f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133839190614d70565b9050604051806101600160405280826000015181526020018a6001600160a01b0316815260200182604001516001600160601b03168152602001336001600160a01b03168152602001896001600160401b031681526020018663ffffffff168152602001600a60000160029054906101000a900468ffffffffffffffffff1668ffffffffffffffffff1681526020018260e0015168ffffffffffffffffff16815260200182610100015164ffffffffff16815260200182610120015164ffffffffff16815260200182610140015163ffffffff1681525060405160200161346a91906148d4565b604051602081830303815290604052805190602001206005600083600001518152602001908152602001600020819055506134aa338983604001516138eb565b876001600160401b03168a82600001517ff67aec45c9a7ede407974a3e0c3a743dffeab99ee3f2d4c9a8144c2ebf2c7ec9866020015133328d8d8d8a604001516040516134fd9796959493929190614e43565b60405180910390a4519998505050505050505050565b6001600160401b038116600090815260036020526040902054600160601b90046001600160a01b03168061355a57604051630fb532db60e11b815260040160405180910390fd5b336001600160a01b0382161461200c576040517f5a68151d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6009546000908152600860205260409020546001600160a01b0316806135bf5750565b604080516000815260208101918290527f6b14daf8000000000000000000000000000000000000000000000000000000009091526001600160a01b03821690636b14daf89061361390339060248101614ea9565b602060405180830381865afa158015613630573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136549190614bc0565b61071a576040517f22906263000000000000000000000000000000000000000000000000000000008152336004820152602401610778565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526112219084906139ab565b6137146137f9565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586131913390565b336001600160a01b038216036137a15760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610778565b600780546001600160a01b0319166001600160a01b03838116918217909255600654604051919261010090910416907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60065460ff1615610f215760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610778565b60065460ff16610f215760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610778565b6001600160a01b03821660009081526004602090815260408083206001600160401b038516845290915290205460ff1661200c576040516371e8313760e01b815260040160405180910390fd5b6001600160401b0382166000908152600360205260408120600101805483929061391f9084906001600160601b0316614a3f565b82546001600160601b0391821661010093840a90810292021916179091556001600160a01b03851660009081526004602090815260408083206001600160401b038089168552925290912080546001945090928492613982928492900416614be2565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550505050565b6000613a00826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316613a909092919063ffffffff16565b8051909150156112215780806020019051810190613a1e9190614bc0565b6112215760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610778565b6060613a9f8484600085613aa7565b949350505050565b606082471015613b1f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610778565b600080866001600160a01b03168587604051613b3b9190614ecb565b60006040518083038185875af1925050503d8060008114613b78576040519150601f19603f3d011682016040523d82523d6000602084013e613b7d565b606091505b5091509150613b8e87838387613b99565b979650505050505050565b60608315613c08578251600003613c01576001600160a01b0385163b613c015760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610778565b5081613a9f565b613a9f8383815115613c1d5781518083602001fd5b8060405162461bcd60e51b81526004016107789190613e90565b82805482825590600052602060002090600701600890048101928215613cd65791602002820160005b83821115613ca457835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302613c60565b8015613cd45782816101000a81549063ffffffff0219169055600401602081600301049283019260010302613ca4565b505b50612d12929150613d8c565b828054828255906000526020600020908101928215613cd6579160200282015b82811115613cd6578251825591602001919060010190613d02565b828054828255906000526020600020908101928215613cd6579160200282015b82811115613cd657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190613d3d565b508054600082559060005260206000209081019061071a91905b5b80821115612d125760008155600101613d8d565b6001600160401b038116811461071a57600080fd5b8035613dc181613da1565b919050565b600060208284031215613dd857600080fd5b8135613de381613da1565b9392505050565b63ffffffff8116811461071a57600080fd5b8035613dc181613dea565b60008060408385031215613e1a57600080fd5b8235613e2581613da1565b91506020830135613e3581613dea565b809150509250929050565b60005b83811015613e5b578181015183820152602001613e43565b50506000910152565b60008151808452613e7c816020860160208601613e40565b601f01601f19169290920160200192915050565b602081526000613de36020830184613e64565b60008060408385031215613eb657600080fd5b8235613ec181613da1565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b0381118282101715613f0757613f07613ecf565b60405290565b60405161016081016001600160401b0381118282101715613f0757613f07613ecf565b604051601f8201601f191681016001600160401b0381118282101715613f5857613f58613ecf565b604052919050565b803561ffff81168114613dc157600080fd5b68ffffffffffffffffff8116811461071a57600080fd5b8035613dc181613f72565b60006001600160401b03821115613fad57613fad613ecf565b5060051b60200190565b600082601f830112613fc857600080fd5b81356020613fdd613fd883613f94565b613f30565b82815260059290921b84018101918181019086841115613ffc57600080fd5b8286015b8481101561402057803561401381613dea565b8352918301918301614000565b509695505050505050565b60006020828403121561403d57600080fd5b81356001600160401b038082111561405457600080fd5b9083019060a0828603121561406857600080fd5b614070613ee5565b61407983613f60565b8152602083013561408981613f72565b602082015260408301356001600160e01b0319811681146140a957600080fd5b60408201526140ba60608401613f60565b60608201526080830135828111156140d157600080fd5b6140dd87828601613fb7565b60808301525095945050505050565b600082601f8301126140fd57600080fd5b81356001600160401b0381111561411657614116613ecf565b614129601f8201601f1916602001613f30565b81815284602083860101111561413e57600080fd5b816020850160208301376000918101602001919091529392505050565b6001600160601b038116811461071a57600080fd5b8035613dc18161415b565b6001600160a01b038116811461071a57600080fd5b8035613dc18161417b565b64ffffffffff8116811461071a57600080fd5b8035613dc18161419b565b600061016082840312156141cc57600080fd5b6141d4613f0d565b9050813581526141e660208301614190565b60208201526141f760408301614170565b604082015261420860608301614190565b606082015261421960808301613db6565b608082015261422a60a08301613dfc565b60a082015261423b60c08301613f89565b60c082015261424c60e08301613f89565b60e082015261010061425f8184016141ae565b908201526101206142718382016141ae565b90820152610140614283838201613dfc565b9082015292915050565b60008060008060008061020087890312156142a757600080fd5b86356001600160401b03808211156142be57600080fd5b6142ca8a838b016140ec565b975060208901359150808211156142e057600080fd5b506142ed89828a016140ec565b95505060408701356142fe8161415b565b9350606087013561430e8161415b565b9250608087013561431e8161417b565b915061432d8860a089016141b9565b90509295509295509295565b6007811061435757634e487b7160e01b600052602160045260246000fd5b9052565b604081016143698285614339565b6001600160601b03831660208301529392505050565b600082601f83011261439057600080fd5b813560206143a0613fd883613f94565b82815260059290921b840181019181810190868411156143bf57600080fd5b8286015b848110156140205780356143d68161417b565b83529183019183016143c3565b600080604083850312156143f657600080fd5b82356001600160401b038082111561440d57600080fd5b818501915085601f83011261442157600080fd5b81356020614431613fd883613f94565b82815260059290921b8401810191818101908984111561445057600080fd5b948201945b8386101561446e57853582529482019490820190614455565b9650508601359250508082111561448457600080fd5b506144918582860161437f565b9150509250929050565b60008083601f8401126144ad57600080fd5b5081356001600160401b038111156144c457600080fd5b6020830191508360208285010111156144dc57600080fd5b9250929050565b60008060008060008060a087890312156144fc57600080fd5b863561450781613da1565b955060208701356001600160401b0381111561452257600080fd5b61452e89828a0161449b565b9096509450614541905060408801613f60565b9250606087013561455181613dea565b80925050608087013590509295509295509295565b6000806040838503121561457957600080fd5b823561458481613da1565b91506020830135613e358161417b565b600080604083850312156145a757600080fd5b82356145b28161417b565b91506020830135613e358161415b565b600080604083850312156145d557600080fd5b82356145e08161417b565b91506020830135613e3581613da1565b60006020828403121561460257600080fd5b5035919050565b600081518084526020808501945080840160005b838110156146425781516001600160a01b03168752958201959082019060010161461d565b509495945050505050565b6020815260006001600160601b0380845116602084015260208401516001600160a01b038082166040860152826040870151166060860152806060870151166080860152505050608083015160c060a08401526146ad60e0840182614609565b905060a084015160c08401528091505092915050565b600080600080606085870312156146d957600080fd5b84356146e48161417b565b93506020850135925060408501356001600160401b0381111561470657600080fd5b6147128782880161449b565b95989497509550505050565b604080825283519082018190526000906020906060840190828701845b828110156147575781518452928401929084019060010161473b565b5050508381038285015261476b8186614609565b9695505050505050565b6000602080835260c0830161ffff808651168386015268ffffffffffffffffff838701511660408601526001600160e01b0319604087015116606086015280606087015116608086015250608085015160a08086015281815180845260e0870191508483019350600092505b8083101561402057835163ffffffff1682529284019260019290920191908401906147e1565b60006020828403121561481957600080fd5b8135613de38161417b565b6000806020838503121561483757600080fd5b82356001600160401b038082111561484e57600080fd5b818501915085601f83011261486257600080fd5b81358181111561487157600080fd5b8660206101608302850101111561488757600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0384811682528316602082015260608101613a9f6040830184614339565b815181526020808301516101608301916148f8908401826001600160a01b03169052565b50604083015161491360408401826001600160601b03169052565b50606083015161492e60608401826001600160a01b03169052565b50608083015161494960808401826001600160401b03169052565b5060a083015161496160a084018263ffffffff169052565b5060c083015161497e60c084018268ffffffffffffffffff169052565b5060e083015161499b60e084018268ffffffffffffffffff169052565b506101008381015164ffffffffff81168483015250506101208381015164ffffffffff81168483015250506101408381015163ffffffff8116848301525b505092915050565b634e487b7160e01b600052601160045260246000fd5b64ffffffffff818116838216019080821115614a1557614a156149e1565b5092915050565b6001600160601b038181168382160280821691908281146149d9576149d96149e1565b6001600160601b03818116838216019080821115614a1557614a156149e1565b6001600160601b03871681526001600160a01b0386166020820152614a876040820186614339565b60c060608201526000614a9d60c0830186613e64565b8281036080840152614aaf8186613e64565b905082810360a0840152614ac38185613e64565b9998505050505050505050565b600060018201614ae257614ae26149e1565b5060010190565b6001600160601b03828116828216039080821115614a1557614a156149e1565b600060ff821660ff8103614b1f57614b1f6149e1565b60010192915050565b8181038181111561138b5761138b6149e1565b634e487b7160e01b600052603160045260246000fd5b60006001600160401b03808316818103614b6d57614b6d6149e1565b6001019392505050565b8082018082111561138b5761138b6149e1565b600060208284031215614b9c57600080fd5b5051919050565b60006101608284031215614bb657600080fd5b613de383836141b9565b600060208284031215614bd257600080fd5b81518015158114613de357600080fd5b6001600160401b03818116838216019080821115614a1557614a156149e1565b838152606060208201526000614c1b6060830185613e64565b828103604084015261476b8185613e64565b6020815260008251610160806020850152614c4c610180850183613e64565b9150602085015160408501526040850151614c7260608601826001600160a01b03169052565b5060608501516001600160601b038116608086015250608085015168ffffffffffffffffff811660a08601525060a08501516001600160401b03811660c08601525060c08501516001600160401b03811660e08601525060e0850151610100614ce28187018363ffffffff169052565b8601519050610120614cf98682018361ffff169052565b8601519050610140614d15868201836001600160401b03169052565b909501516001600160a01b031693019290925250919050565b8051613dc18161417b565b8051613dc18161415b565b8051613dc181613da1565b8051613dc181613dea565b8051613dc181613f72565b8051613dc18161419b565b60006101608284031215614d8357600080fd5b614d8b613f0d565b82518152614d9b60208401614d2e565b6020820152614dac60408401614d39565b6040820152614dbd60608401614d2e565b6060820152614dce60808401614d44565b6080820152614ddf60a08401614d4f565b60a0820152614df060c08401614d5a565b60c0820152614e0160e08401614d5a565b60e0820152610100614e14818501614d65565b90820152610120614e26848201614d65565b90820152610140614e38848201614d4f565b908201529392505050565b60006001600160a01b03808a168352808916602084015280881660408401525060e06060830152614e7760e0830187613e64565b61ffff9590951660808301525063ffffffff9290921660a08301526001600160601b031660c090910152949350505050565b6001600160a01b0383168152604060208201526000613a9f6040830184613e64565b60008251614edd818460208701613e40565b919091019291505056fea2646970667358221220f65cb5fa135e799ed59287d93acd9d9a004888b8ee3c5f0f03e06ac7065e665f64736f6c63430008130033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106102de5760003560e01c80637341c10c11610186578063aab396bd116100e3578063d7ae1d3011610097578063e82ad7d411610071578063e82ad7d41461069c578063ea320e0b146106af578063f2fde38b146106c257600080fd5b8063d7ae1d3014610663578063e72f6e3014610676578063e82622aa1461068957600080fd5b8063badc3eb6116100c8578063badc3eb614610625578063c3f909d41461063b578063cc77470a1461065057600080fd5b8063aab396bd14610615578063b734c0f41461061d57600080fd5b80639f87fad71161013a578063a47c76961161011f578063a47c7696146105cf578063a4c0ed36146105ef578063a9c9a9181461060257600080fd5b80639f87fad7146105b4578063a21a23e4146105c757600080fd5b8063823597401161016b57806382359740146105835780638456cb59146105965780638da5cb5b1461059e57600080fd5b80637341c10c1461056857806379ba50971461057b57600080fd5b80633f4ba83a1161023f5780635c975abb116101f357806366419970116101cd57806366419970146104d0578063674603d0146104f55780636a2215de1461053d57600080fd5b80635c975abb146104935780635ed6dfba146104aa57806366316d8d146104bd57600080fd5b8063461d276211610224578063461d2762146104405780634b8832d31461045357806355fedefa1461046657600080fd5b80633f4ba83a1461041757806341db4ca31461041f57600080fd5b80631ded3b36116102965780632a905ccc1161027b5780632a905ccc146103b557806333060529146103e35780633e871e4d1461040457600080fd5b80631ded3b361461038f57806321b60e7f146103a257600080fd5b806310fc49c1116102c757806310fc49c11461031857806312b583491461032b578063181f5a771461034657600080fd5b806302bcc5b6146102e35780630c5d49cb146102f8575b600080fd5b6102f66102f1366004613dc6565b6106d5565b005b610300608481565b60405161ffff90911681526020015b60405180910390f35b6102f6610326366004613e07565b61071d565b6000546040516001600160601b03909116815260200161030f565b6103826040518060400160405280601781526020017f46756e6374696f6e7320526f757465722076312e302e3000000000000000000081525081565b60405161030f9190613e90565b6102f661039d366004613ea3565b610818565b6102f66103b036600461402b565b610849565b600a5462010000900468ffffffffffffffffff1660405168ffffffffffffffffff909116815260200161030f565b6103f66103f136600461428d565b610956565b60405161030f92919061435b565b6102f66104123660046143e3565b610cff565b6102f6610f11565b61043261042d3660046144e3565b610f23565b60405190815260200161030f565b61043261044e3660046144e3565b610f83565b6102f6610461366004614566565b610f8f565b610432610474366004613dc6565b6001600160401b03166000908152600360208190526040909120015490565b60065460ff165b604051901515815260200161030f565b6102f66104b8366004614594565b611084565b6102f66104cb366004614594565b611226565b6002546001600160401b03165b6040516001600160401b03909116815260200161030f565b6105086105033660046145c2565b61130f565b604080518251151581526020808401516001600160401b0390811691830191909152928201519092169082015260600161030f565b61055061054b3660046145f0565b611391565b6040516001600160a01b03909116815260200161030f565b6102f6610576366004614566565b61142a565b6102f661158b565b6102f6610591366004613dc6565b611666565b6102f661176d565b60065461010090046001600160a01b0316610550565b6102f66105c2366004614566565b61177d565b6104dd611a6d565b6105e26105dd366004613dc6565b611bdb565b60405161030f919061464d565b6102f66105fd3660046146c3565b611ce7565b6105506106103660046145f0565b611ebd565b600954610432565b6102f6611ef6565b61062d612010565b60405161030f92919061471e565b6106436120d3565b60405161030f9190614775565b6104dd61065e366004614807565b6121e4565b6102f6610671366004614566565b6123f4565b6102f6610684366004614807565b61243d565b6102f6610697366004614824565b61258a565b61049a6106aa366004613dc6565b61281b565b6102f66106bd3660046145f0565b61294e565b6102f66106d0366004614807565b61295b565b6106dd61296c565b6106e681612974565b6001600160401b03811660009081526003602052604090205461071a908290600160601b90046001600160a01b03166129ba565b50565b6001600160401b038216600090815260036020819052604082200154600b54911a908110610781576040517f45c108ce00000000000000000000000000000000000000000000000000000000815260ff821660048201526024015b60405180910390fd5b6000600a6001018260ff168154811061079c5761079c614899565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff168363ffffffff161115610812576040517f1d70f87a00000000000000000000000000000000000000000000000000000000815263ffffffff82166004820152602401610778565b50505050565b61082061296c565b61082982612974565b6001600160401b0390911660009081526003602081905260409091200155565b610851612c2c565b8051600a80546020808501516040860151606087015161ffff908116600160781b027fffffffffffffffffffffffffffffff0000ffffffffffffffffffffffffffffff60e09390931c6b01000000000000000000000002929092167fffffffffffffffffffffffffffffff000000000000ffffffffffffffffffffff68ffffffffffffffffff90941662010000026affffffffffffffffffffff19909616919097161793909317169390931717815560808301518051849361091892600b92910190613c37565b509050507f049ce2e6e1420eb4b07b425e90129186833eb346bda40b37d5d921aad482f71c8160405161094b9190614775565b60405180910390a150565b600080610961612c8b565b82602001516001600160a01b0316336001600160a01b0316146109b0576040517f8bec23e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8251600090815260056020526040902054610a125782516020840151604051600294507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610a0291889087906148af565b60405180910390a2506000610cf4565b8251600090815260056020908152604091829020549151610a35918691016148d4565b6040516020818303038152906040528051906020012014610a8d5782516020840151604051600694507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610a0291889087906148af565b8261012001518360a0015163ffffffff16610aa891906149f7565b64ffffffffff165a1015610af35782516020840151604051600494507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610a0291889087906148af565b6000610b088460a0015163ffffffff16612c93565b610b129088614a1c565b9050600081878660c0015168ffffffffffffffffff16610b329190614a3f565b610b3c9190614a3f565b9050610b4b8560800151611bdb565b600001516001600160601b0316816001600160601b03161115610bb95784516020860151604051600596507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610ba5918a9089906148af565b60405180910390a25060009150610cf49050565b84604001516001600160601b0316816001600160601b03161115610c145784516020860151604051600396507f1a90e9a50793db2e394cf581e7c522e10c358a81e70acf6b5a0edd620c08dee191610ba5918a9089906148af565b505082516000908152600560205260408120819055835160a08501516060860151610c4492918c918c9190612d16565b8051909150610c54576001610c57565b60005b92506000610c918560800151866040015187606001518860c0015168ffffffffffffffffff168c610c8b8860200151612c93565b8d612e63565b905084608001516001600160401b031685600001517f64778f26c70b60a8d7e29e2451b3844302d959448401c0535b768ed88c6b505e836020015189888f8f8960400151604051610ce796959493929190614a5f565b60405180910390a3519150505b965096945050505050565b610d07612c2c565b8151815181141580610d195750600881115b15610d3757604051631dc0650160e31b815260040160405180910390fd5b60005b81811015610de9576000848281518110610d5657610d56614899565b602002602001015190506000848381518110610d7457610d74614899565b6020026020010151905060006001600160a01b0316816001600160a01b03161480610db857506000828152600860205260409020546001600160a01b038281169116145b15610dd657604051631dc0650160e31b815260040160405180910390fd5b505080610de290614ad0565b9050610d3a565b506040805180820190915283815260208082018490528451600c91610e12918391880190613ce2565b506020828101518051610e2b9260018501920190613d1d565b5090505060005b8351811015610812577f8b052f0f4bf82fede7daffea71592b29d5ef86af1f3c7daaa0345dbb2f52f481848281518110610e6e57610e6e614899565b602002602001015160086000878581518110610e8c57610e8c614899565b6020026020010151815260200190815260200160002060009054906101000a90046001600160a01b0316858481518110610ec857610ec8614899565b6020026020010151604051610ef9939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a1610f0a81614ad0565b9050610e32565b610f19612c2c565b610f2161315c565b565b600080610f2f83611391565b9050610f7783828a8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c92508b91506131ae9050565b98975050505050505050565b600080610f2f83611ebd565b610f97612c8b565b610fa082613513565b610fa861359c565b6001600160a01b0381161580610feb57506001600160401b0382166000908152600360205260409020600101546001600160a01b03828116600160601b90920416145b1561100957604051638129bbcd60e01b815260040160405180910390fd5b6001600160401b03821660008181526003602090815260409182902060010180546001600160601b0316600160601b6001600160a01b038716908102919091179091558251338152918201527f69436ea6df009049404f564eff6622cd00522b0bd6a89efd9e52a355c4a879be910160405180910390a25050565b61108c61296c565b806001600160601b03166000036110b85750306000908152600160205260409020546001600160601b03165b306000908152600160205260409020546001600160601b0390811690821681101561110157604051636b0fe56f60e01b81526001600160601b0382166004820152602401610778565b6000546001600160601b038084169116101561114757600054604051636ed1590b60e11b81526001600160601b0391821660048201529083166024820152604401610778565b306000908152600160205260408120805484929061116f9084906001600160601b0316614ae9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550816000808282829054906101000a90046001600160601b03166111b69190614ae9565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555061122183836001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661368c9092919063ffffffff16565b505050565b61122e612c8b565b806001600160601b031660000361125857604051638129bbcd60e01b815260040160405180910390fd5b336000908152600160205260409020546001600160601b039081169082168110156112a157604051636b0fe56f60e01b81526001600160601b0382166004820152602401610778565b6000546001600160601b03808416911610156112e757600054604051636ed1590b60e11b81526001600160601b0391821660048201529083166024820152604401610778565b336000908152600160205260408120805484929061116f9084906001600160601b0316614ae9565b6040805160608082018352600080835260208084018290529284018190526001600160a01b0386168152600483528381206001600160401b03868116835290845290849020845192830185525460ff81161515835261010081048216938301939093526901000000000000000000909204909116918101919091525b92915050565b6000805b600c5460ff8216101561140d57600c805460ff83169081106113b9576113b9614899565b906000526020600020015483036113fd57600d805460ff83169081106113e1576113e1614899565b6000918252602090912001546001600160a01b03169392505050565b61140681614b09565b9050611395565b506040516380833e3360e01b815260048101839052602401610778565b611432612c8b565b61143b82613513565b61144361359c565b6000611452600a5461ffff1690565b6001600160401b03841660009081526003602052604090206002015490915061ffff821690036114b4576040517fb72bc70300000000000000000000000000000000000000000000000000000000815261ffff82166004820152602401610778565b6001600160a01b03821660009081526004602090815260408083206001600160401b038716845290915290205460ff16156114ee57505050565b6001600160a01b03821660008181526004602090815260408083206001600160401b038816808552908352818420805460ff19166001908117909155600384528285206002018054918201815585529383902090930180546001600160a01b031916851790555192835290917f43dc749a04ac8fb825cbd514f7c0e13f13bc6f2ee66043b76629d51776cff8e091015b60405180910390a2505050565b6007546001600160a01b031633146115e55760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e6572000000000000000000006044820152606401610778565b600680547fffffffffffffffffffffff0000000000000000000000000000000000000000ff81166101003381810292909217909355600780546001600160a01b0319169055604051929091046001600160a01b03169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b61166e612c8b565b61167661359c565b6001600160401b038116600090815260036020526040902080546001909101546001600160a01b03600160601b92839004811692909104163381146116f2576040517f4e1d9f180000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610778565b6001600160401b0383166000818152600360209081526040918290208054600160601b339081026001600160601b0392831617835560019092018054909116905582516001600160a01b0387168152918201527f6f1dc65165ffffedfd8e507b4a0f1fcfdada045ed11f6c26ba27cedfe87802f0910161157e565b611775612c2c565b610f2161370c565b611785612c8b565b61178e82613513565b61179661359c565b6001600160a01b03811660009081526004602090815260408083206001600160401b038087168552908352928190208151606081018352905460ff8116151580835261010082048616948301949094526901000000000000000000900490931690830152611817576040516371e8313760e01b815260040160405180910390fd5b80604001516001600160401b031681602001516001600160401b0316146118505760405162dd621960e31b815260040160405180910390fd5b6001600160401b0383166000908152600360209081526040808320600201805482518185028101850190935280835291929091908301828280156118bd57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161189f575b5050505050905060005b81518110156119ed57836001600160a01b03168282815181106118ec576118ec614899565b60200260200101516001600160a01b0316036119dd5781600183516119119190614b28565b8151811061192157611921614899565b602002602001015160036000876001600160401b03166001600160401b03168152602001908152602001600020600201828154811061196257611962614899565b600091825260208083209190910180546001600160a01b0319166001600160a01b0394909416939093179092556001600160401b03871681526003909152604090206002018054806119b6576119b6614b3b565b600082815260209020810160001990810180546001600160a01b03191690550190556119ed565b6119e681614ad0565b90506118c7565b506001600160a01b03831660008181526004602090815260408083206001600160401b03891680855290835292819020805470ffffffffffffffffffffffffffffffffff191690555192835290917f182bff9831466789164ca77075fffd84916d35a8180ba73c27e45634549b445b91015b60405180910390a250505050565b6000611a77612c8b565b611a7f61359c565b60028054600090611a98906001600160401b0316614b51565b82546001600160401b038083166101009490940a93840293021916919091179091556040805160c0810182526000808252336020830152918101829052606081018290529192506080820190604051908082528060200260200182016040528015611b0d578160200160208202803683370190505b508152600060209182018190526001600160401b0384168152600382526040908190208351848401516001600160a01b03908116600160601b9081026001600160601b039384161784559386015160608701519091169093029216919091176001820155608083015180519192611b8c92600285019290910190613d1d565b5060a091909101516003909101556040513381526001600160401b038216907f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf9060200160405180910390a290565b6040805160c0810182526000808252602082018190529181018290526060808201839052608082015260a0810191909152611c1582612974565b6001600160401b038216600090815260036020908152604091829020825160c08101845281546001600160601b0380821683526001600160a01b03600160601b928390048116848701526001850154918216848801529190041660608201526002820180548551818602810186019096528086529194929360808601939290830182828015611ccd57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611caf575b505050505081526020016003820154815250509050919050565b611cef612c8b565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611d51576040517f44b0e3c300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208114611d7257604051638129bbcd60e01b815260040160405180910390fd5b6000611d8082840184613dc6565b6001600160401b038116600090815260036020526040902054909150600160601b90046001600160a01b0316611dc957604051630fb532db60e11b815260040160405180910390fd5b6001600160401b038116600090815260036020526040812080546001600160601b031691869190611dfa8385614a3f565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550846000808282829054906101000a90046001600160601b0316611e419190614a3f565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550816001600160401b03167fd39ec07f4e209f627a4c427971473820dc129761ba28de8906bd56f57101d4f8828784611e9d9190614b77565b6040805192835260208301919091520160405180910390a2505050505050565b6000818152600860205260408120546001600160a01b03168061138b576040516380833e3360e01b815260048101849052602401610778565b611efe612c2c565b60005b600c54811015611fef576000600c6000018281548110611f2357611f23614899565b906000526020600020015490506000600c6001018381548110611f4857611f48614899565b600091825260208083209190910154848352600882526040928390205483518681526001600160a01b0391821693810193909352169181018290529091507ff8a6175bca1ba37d682089187edc5e20a859989727f10ca6bd9a5bc0de8caf949060600160405180910390a160009182526008602052604090912080546001600160a01b0319166001600160a01b03909216919091179055611fe881614ad0565b9050611f01565b50600c6000611ffe8282613d72565b61200c600183016000613d72565b5050565b606080600c600001600c6001018180548060200260200160405190810160405280929190818152602001828054801561206857602002820191906000526020600020905b815481526020019060010190808311612054575b50505050509150808054806020026020016040519081016040528092919081815260200182805480156120c457602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116120a6575b50505050509050915091509091565b6040805160a08101825260008082526020820181905291810182905260608082019290925260808101919091526040805160a081018252600a805461ffff808216845268ffffffffffffffffff620100008304166020808601919091526001600160e01b03196b010000000000000000000000840460e01b1685870152600160781b909204166060840152600b8054855181840281018401909652808652939492936080860193928301828280156121d657602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116121995790505b505050505081525050905090565b60006121ee612c8b565b6121f661359c565b6002805460009061220f906001600160401b0316614b51565b82546001600160401b038083166101009490940a93840293021916919091179091556040805160c0810182526000808252336020830152918101829052606081018290529192506080820190604051908082528060200260200182016040528015612284578160200160208202803683370190505b508152600060209182018190526001600160401b0384168152600382526040908190208351848401516001600160a01b03908116600160601b9081026001600160601b03938416178455938601516060870151909116909302921691909117600182015560808301518051919261230392600285019290910190613d1d565b5060a091909101516003918201556001600160401b0382166000818152602092835260408082206002018054600180820183559184528584200180546001600160a01b0319166001600160a01b038916908117909155835260048552818320848452855291819020805460ff19169092179091555133815290917f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf910160405180910390a26040516001600160a01b03831681526001600160401b038216907f43dc749a04ac8fb825cbd514f7c0e13f13bc6f2ee66043b76629d51776cff8e09060200160405180910390a2919050565b6123fc612c8b565b61240582613513565b61240d61359c565b6124168261281b565b156124335760405162dd621960e31b815260040160405180910390fd5b61200c82826129ba565b61244561296c565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156124c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e99190614b8a565b6000549091506001600160601b03168181101561122157600061250c8284614b28565b90506125426001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016858361368c565b604080516001600160a01b0386168152602081018390527f59bfc682b673f8cbf945f1e454df9334834abf7dfe7f92237ca29ecb9b436600910160405180910390a150505050565b612592612c8b565b60005b818110156112215760008383838181106125b1576125b1614899565b905061016002018036038101906125c89190614ba3565b805160808201516000828152600560209081526040918290205491519495509293919290916125f9918691016148d4565b604051602081830303815290604052805190602001201461262d57604051638129bbcd60e01b815260040160405180910390fd5b82610140015163ffffffff16421015612672576040517fa2376fe800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208301516040517f85b214cf000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b03909116906385b214cf906024016020604051808303816000875af11580156126d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126fc9190614bc0565b506040808401516001600160401b038316600090815260036020529182206001018054919290916127379084906001600160601b0316614ae9565b82546001600160601b039182166101009390930a92830291909202199091161790555060608301516001600160a01b031660009081526004602090815260408083206001600160401b038086168552925290912080546001926009916127ac9185916901000000000000000000900416614be2565b82546001600160401b039182166101009390930a9283029190920219909116179055506000828152600560205260408082208290555183917ff1ca1e9147be737b04a2b018a79405f687a97de8dd8a2559bbe62357343af41491a25050508061281490614ad0565b9050612595565b6001600160401b03811660009081526003602090815260408083206002018054825181850281018501909352808352849383018282801561288557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612867575b5050505050905060005b8151811015612944576000600460008484815181106128b0576128b0614899565b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081206001600160401b03808a168352908452908290208251606081018452905460ff811615158252610100810483169482018590526901000000000000000000900490911691810182905292501461293357506001949350505050565b5061293d81614ad0565b905061288f565b5060009392505050565b612956612c2c565b600955565b612963612c2c565b61071a81613749565b610f21612c2c565b6001600160401b038116600090815260036020526040902054600160601b90046001600160a01b031661071a57604051630fb532db60e11b815260040160405180910390fd5b6001600160401b0382166000908152600360209081526040808320815160c08101835281546001600160601b0380821683526001600160a01b03600160601b92839004811684880152600185015491821684870152919004166060820152600282018054845181870281018701909552808552919492936080860193909290830182828015612a7257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612a54575b505050918352505060039190910154602090910152805190915060005b826080015151811015612b17576004600084608001518381518110612ab657612ab6614899565b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081206001600160401b03891682529092529020805470ffffffffffffffffffffffffffffffffff19169055612b1081614ad0565b9050612a8f565b506001600160401b03841660009081526003602052604081208181556001810182905590612b486002830182613d72565b50600060039190910181905580548291908190612b6f9084906001600160601b0316614ae9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550612bda83826001600160601b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661368c9092919063ffffffff16565b604080516001600160a01b03851681526001600160601b03831660208201526001600160401b038616917fe8ed5b475a5b5987aa9165e8731bb78043f39eee32ec5a1169a89e27fcd498159101611a5f565b60065461010090046001600160a01b03163314610f215760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610778565b610f216137f9565b60006001600160601b03821115612d125760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610778565b5090565b60408051606080820183526000808352602083015291810191909152600a546040516000916b010000000000000000000000900460e01b90612d6090899089908990602401614c02565b60408051601f19818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b03199590951694909417909352600a548151608480825260c0820190935292945061ffff600160781b90910416926000928392839282018180368337019050509050863b612de957600080fd5b5a84811015612df757600080fd5b8490036040810481038910612e0b57600080fd5b505a60008087516020890160008c8ef193505a900391503d6084811115612e30575060845b808252806000602084013e5060408051606081018252931515845260208401929092529082015298975050505050505050565b60408051808201909152600080825260208201526000612e838486614a1c565b9050600081612e928886614a3f565b612e9c9190614a3f565b6001600160401b038b166000908152600360205260409020549091506001600160601b0380831691161015612f0a576001600160401b038a1660009081526003602052604090819020549051636b0fe56f60e01b81526001600160601b039091166004820152602401610778565b6001600160401b038a1660009081526003602052604081208054839290612f3b9084906001600160601b0316614ae9565b82546101009290920a6001600160601b038181021990931691831602179091556001600160401b038c166000908152600360205260409020600101548b8216911610159050612fc3576001600160401b038a1660009081526003602052604090819020549051636b0fe56f60e01b81526001600160601b039091166004820152602401610778565b6001600160401b038a16600090815260036020526040812060010180548b9290612ff79084906001600160601b0316614ae9565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555081846130279190614a3f565b336000908152600160205260408120805490919061304f9084906001600160601b0316614a3f565b82546101009290920a6001600160601b0381810219909316918316021790915530600090815260016020526040812080548b9450909261309191859116614a3f565b82546001600160601b039182166101009390930a9283029190920219909116179055506001600160a01b03881660009081526004602090815260408083206001600160401b03808f168552925290912080546001926009916131029185916901000000000000000000900416614be2565b92506101000a8154816001600160401b0302191690836001600160401b031602179055506040518060400160405280836001600160601b03168152602001826001600160601b031681525092505050979650505050505050565b61316461384c565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60006131b8612c8b565b6131c185612974565b6131cb338661389e565b6131d5858361071d565b835160000361320f576040517ec1cfc000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061321a86611bdb565b90506000613228338861130f565b90506000886001600160a01b031663a631571e6040518061016001604052808a81526020016132708c6001600160401b03166000908152600360208190526040909120015490565b81523360208201526040878101518851919092019161328e91614ae9565b6001600160601b03168152602001600a60000160029054906101000a900468ffffffffffffffffff1668ffffffffffffffffff1681526020018b6001600160401b0316815260200185602001516001600160401b031681526020018863ffffffff1681526020018961ffff16815260200185604001516001600160401b0316815260200186602001516001600160a01b03168152506040518263ffffffff1660e01b815260040161333f9190614c2d565b610160604051808303816000875af115801561335f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133839190614d70565b9050604051806101600160405280826000015181526020018a6001600160a01b0316815260200182604001516001600160601b03168152602001336001600160a01b03168152602001896001600160401b031681526020018663ffffffff168152602001600a60000160029054906101000a900468ffffffffffffffffff1668ffffffffffffffffff1681526020018260e0015168ffffffffffffffffff16815260200182610100015164ffffffffff16815260200182610120015164ffffffffff16815260200182610140015163ffffffff1681525060405160200161346a91906148d4565b604051602081830303815290604052805190602001206005600083600001518152602001908152602001600020819055506134aa338983604001516138eb565b876001600160401b03168a82600001517ff67aec45c9a7ede407974a3e0c3a743dffeab99ee3f2d4c9a8144c2ebf2c7ec9866020015133328d8d8d8a604001516040516134fd9796959493929190614e43565b60405180910390a4519998505050505050505050565b6001600160401b038116600090815260036020526040902054600160601b90046001600160a01b03168061355a57604051630fb532db60e11b815260040160405180910390fd5b336001600160a01b0382161461200c576040517f5a68151d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6009546000908152600860205260409020546001600160a01b0316806135bf5750565b604080516000815260208101918290527f6b14daf8000000000000000000000000000000000000000000000000000000009091526001600160a01b03821690636b14daf89061361390339060248101614ea9565b602060405180830381865afa158015613630573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136549190614bc0565b61071a576040517f22906263000000000000000000000000000000000000000000000000000000008152336004820152602401610778565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526112219084906139ab565b6137146137f9565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586131913390565b336001600160a01b038216036137a15760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610778565b600780546001600160a01b0319166001600160a01b03838116918217909255600654604051919261010090910416907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60065460ff1615610f215760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610778565b60065460ff16610f215760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610778565b6001600160a01b03821660009081526004602090815260408083206001600160401b038516845290915290205460ff1661200c576040516371e8313760e01b815260040160405180910390fd5b6001600160401b0382166000908152600360205260408120600101805483929061391f9084906001600160601b0316614a3f565b82546001600160601b0391821661010093840a90810292021916179091556001600160a01b03851660009081526004602090815260408083206001600160401b038089168552925290912080546001945090928492613982928492900416614be2565b92506101000a8154816001600160401b0302191690836001600160401b03160217905550505050565b6000613a00826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316613a909092919063ffffffff16565b8051909150156112215780806020019051810190613a1e9190614bc0565b6112215760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610778565b6060613a9f8484600085613aa7565b949350505050565b606082471015613b1f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610778565b600080866001600160a01b03168587604051613b3b9190614ecb565b60006040518083038185875af1925050503d8060008114613b78576040519150601f19603f3d011682016040523d82523d6000602084013e613b7d565b606091505b5091509150613b8e87838387613b99565b979650505050505050565b60608315613c08578251600003613c01576001600160a01b0385163b613c015760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610778565b5081613a9f565b613a9f8383815115613c1d5781518083602001fd5b8060405162461bcd60e51b81526004016107789190613e90565b82805482825590600052602060002090600701600890048101928215613cd65791602002820160005b83821115613ca457835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302613c60565b8015613cd45782816101000a81549063ffffffff0219169055600401602081600301049283019260010302613ca4565b505b50612d12929150613d8c565b828054828255906000526020600020908101928215613cd6579160200282015b82811115613cd6578251825591602001919060010190613d02565b828054828255906000526020600020908101928215613cd6579160200282015b82811115613cd657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190613d3d565b508054600082559060005260206000209081019061071a91905b5b80821115612d125760008155600101613d8d565b6001600160401b038116811461071a57600080fd5b8035613dc181613da1565b919050565b600060208284031215613dd857600080fd5b8135613de381613da1565b9392505050565b63ffffffff8116811461071a57600080fd5b8035613dc181613dea565b60008060408385031215613e1a57600080fd5b8235613e2581613da1565b91506020830135613e3581613dea565b809150509250929050565b60005b83811015613e5b578181015183820152602001613e43565b50506000910152565b60008151808452613e7c816020860160208601613e40565b601f01601f19169290920160200192915050565b602081526000613de36020830184613e64565b60008060408385031215613eb657600080fd5b8235613ec181613da1565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b0381118282101715613f0757613f07613ecf565b60405290565b60405161016081016001600160401b0381118282101715613f0757613f07613ecf565b604051601f8201601f191681016001600160401b0381118282101715613f5857613f58613ecf565b604052919050565b803561ffff81168114613dc157600080fd5b68ffffffffffffffffff8116811461071a57600080fd5b8035613dc181613f72565b60006001600160401b03821115613fad57613fad613ecf565b5060051b60200190565b600082601f830112613fc857600080fd5b81356020613fdd613fd883613f94565b613f30565b82815260059290921b84018101918181019086841115613ffc57600080fd5b8286015b8481101561402057803561401381613dea565b8352918301918301614000565b509695505050505050565b60006020828403121561403d57600080fd5b81356001600160401b038082111561405457600080fd5b9083019060a0828603121561406857600080fd5b614070613ee5565b61407983613f60565b8152602083013561408981613f72565b602082015260408301356001600160e01b0319811681146140a957600080fd5b60408201526140ba60608401613f60565b60608201526080830135828111156140d157600080fd5b6140dd87828601613fb7565b60808301525095945050505050565b600082601f8301126140fd57600080fd5b81356001600160401b0381111561411657614116613ecf565b614129601f8201601f1916602001613f30565b81815284602083860101111561413e57600080fd5b816020850160208301376000918101602001919091529392505050565b6001600160601b038116811461071a57600080fd5b8035613dc18161415b565b6001600160a01b038116811461071a57600080fd5b8035613dc18161417b565b64ffffffffff8116811461071a57600080fd5b8035613dc18161419b565b600061016082840312156141cc57600080fd5b6141d4613f0d565b9050813581526141e660208301614190565b60208201526141f760408301614170565b604082015261420860608301614190565b606082015261421960808301613db6565b608082015261422a60a08301613dfc565b60a082015261423b60c08301613f89565b60c082015261424c60e08301613f89565b60e082015261010061425f8184016141ae565b908201526101206142718382016141ae565b90820152610140614283838201613dfc565b9082015292915050565b60008060008060008061020087890312156142a757600080fd5b86356001600160401b03808211156142be57600080fd5b6142ca8a838b016140ec565b975060208901359150808211156142e057600080fd5b506142ed89828a016140ec565b95505060408701356142fe8161415b565b9350606087013561430e8161415b565b9250608087013561431e8161417b565b915061432d8860a089016141b9565b90509295509295509295565b6007811061435757634e487b7160e01b600052602160045260246000fd5b9052565b604081016143698285614339565b6001600160601b03831660208301529392505050565b600082601f83011261439057600080fd5b813560206143a0613fd883613f94565b82815260059290921b840181019181810190868411156143bf57600080fd5b8286015b848110156140205780356143d68161417b565b83529183019183016143c3565b600080604083850312156143f657600080fd5b82356001600160401b038082111561440d57600080fd5b818501915085601f83011261442157600080fd5b81356020614431613fd883613f94565b82815260059290921b8401810191818101908984111561445057600080fd5b948201945b8386101561446e57853582529482019490820190614455565b9650508601359250508082111561448457600080fd5b506144918582860161437f565b9150509250929050565b60008083601f8401126144ad57600080fd5b5081356001600160401b038111156144c457600080fd5b6020830191508360208285010111156144dc57600080fd5b9250929050565b60008060008060008060a087890312156144fc57600080fd5b863561450781613da1565b955060208701356001600160401b0381111561452257600080fd5b61452e89828a0161449b565b9096509450614541905060408801613f60565b9250606087013561455181613dea565b80925050608087013590509295509295509295565b6000806040838503121561457957600080fd5b823561458481613da1565b91506020830135613e358161417b565b600080604083850312156145a757600080fd5b82356145b28161417b565b91506020830135613e358161415b565b600080604083850312156145d557600080fd5b82356145e08161417b565b91506020830135613e3581613da1565b60006020828403121561460257600080fd5b5035919050565b600081518084526020808501945080840160005b838110156146425781516001600160a01b03168752958201959082019060010161461d565b509495945050505050565b6020815260006001600160601b0380845116602084015260208401516001600160a01b038082166040860152826040870151166060860152806060870151166080860152505050608083015160c060a08401526146ad60e0840182614609565b905060a084015160c08401528091505092915050565b600080600080606085870312156146d957600080fd5b84356146e48161417b565b93506020850135925060408501356001600160401b0381111561470657600080fd5b6147128782880161449b565b95989497509550505050565b604080825283519082018190526000906020906060840190828701845b828110156147575781518452928401929084019060010161473b565b5050508381038285015261476b8186614609565b9695505050505050565b6000602080835260c0830161ffff808651168386015268ffffffffffffffffff838701511660408601526001600160e01b0319604087015116606086015280606087015116608086015250608085015160a08086015281815180845260e0870191508483019350600092505b8083101561402057835163ffffffff1682529284019260019290920191908401906147e1565b60006020828403121561481957600080fd5b8135613de38161417b565b6000806020838503121561483757600080fd5b82356001600160401b038082111561484e57600080fd5b818501915085601f83011261486257600080fd5b81358181111561487157600080fd5b8660206101608302850101111561488757600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0384811682528316602082015260608101613a9f6040830184614339565b815181526020808301516101608301916148f8908401826001600160a01b03169052565b50604083015161491360408401826001600160601b03169052565b50606083015161492e60608401826001600160a01b03169052565b50608083015161494960808401826001600160401b03169052565b5060a083015161496160a084018263ffffffff169052565b5060c083015161497e60c084018268ffffffffffffffffff169052565b5060e083015161499b60e084018268ffffffffffffffffff169052565b506101008381015164ffffffffff81168483015250506101208381015164ffffffffff81168483015250506101408381015163ffffffff8116848301525b505092915050565b634e487b7160e01b600052601160045260246000fd5b64ffffffffff818116838216019080821115614a1557614a156149e1565b5092915050565b6001600160601b038181168382160280821691908281146149d9576149d96149e1565b6001600160601b03818116838216019080821115614a1557614a156149e1565b6001600160601b03871681526001600160a01b0386166020820152614a876040820186614339565b60c060608201526000614a9d60c0830186613e64565b8281036080840152614aaf8186613e64565b905082810360a0840152614ac38185613e64565b9998505050505050505050565b600060018201614ae257614ae26149e1565b5060010190565b6001600160601b03828116828216039080821115614a1557614a156149e1565b600060ff821660ff8103614b1f57614b1f6149e1565b60010192915050565b8181038181111561138b5761138b6149e1565b634e487b7160e01b600052603160045260246000fd5b60006001600160401b03808316818103614b6d57614b6d6149e1565b6001019392505050565b8082018082111561138b5761138b6149e1565b600060208284031215614b9c57600080fd5b5051919050565b60006101608284031215614bb657600080fd5b613de383836141b9565b600060208284031215614bd257600080fd5b81518015158114613de357600080fd5b6001600160401b03818116838216019080821115614a1557614a156149e1565b838152606060208201526000614c1b6060830185613e64565b828103604084015261476b8185613e64565b6020815260008251610160806020850152614c4c610180850183613e64565b9150602085015160408501526040850151614c7260608601826001600160a01b03169052565b5060608501516001600160601b038116608086015250608085015168ffffffffffffffffff811660a08601525060a08501516001600160401b03811660c08601525060c08501516001600160401b03811660e08601525060e0850151610100614ce28187018363ffffffff169052565b8601519050610120614cf98682018361ffff169052565b8601519050610140614d15868201836001600160401b03169052565b909501516001600160a01b031693019290925250919050565b8051613dc18161417b565b8051613dc18161415b565b8051613dc181613da1565b8051613dc181613dea565b8051613dc181613f72565b8051613dc18161419b565b60006101608284031215614d8357600080fd5b614d8b613f0d565b82518152614d9b60208401614d2e565b6020820152614dac60408401614d39565b6040820152614dbd60608401614d2e565b6060820152614dce60808401614d44565b6080820152614ddf60a08401614d4f565b60a0820152614df060c08401614d5a565b60c0820152614e0160e08401614d5a565b60e0820152610100614e14818501614d65565b90820152610120614e26848201614d65565b90820152610140614e38848201614d4f565b908201529392505050565b60006001600160a01b03808a168352808916602084015280881660408401525060e06060830152614e7760e0830187613e64565b61ffff9590951660808301525063ffffffff9290921660a08301526001600160601b031660c090910152949350505050565b6001600160a01b0383168152604060208201526000613a9f6040830184613e64565b60008251614edd818460208701613e40565b919091019291505056fea2646970667358221220f65cb5fa135e799ed59287d93acd9d9a004888b8ee3c5f0f03e06ac7065e665f64736f6c63430008130033',
  linkReferences: {},
  deployedLinkReferences: {},
}
