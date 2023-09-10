export const FunctionsCoordinatorTestHelperSource = {
  "_format": "hh-sol-artifact-1",
  "contractName": "FunctionsCoordinatorTestHelper",
  "sourceName": "FunctionsCoordinatorTestHelper.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "router",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "internalType": "struct FunctionsBilling.Config",
          "name": "config",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "linkToNativeFeed",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "EmptyPublicKey",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InconsistentReportData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCalldata",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "InvalidConfig",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "linkWei",
          "type": "int256"
        }
      ],
      "name": "InvalidLinkWeiPrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSubscription",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "MustBeSubOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoTransmittersSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableByRouter",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableByRouterOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PaymentTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReportInvalid",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RouterMustBeSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnauthorizedPublicKeyChange",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnauthorizedSender",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsupportedRequestDataVersion",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "CommitmentDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "previousConfigBlockNumber",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "configDigest",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "configCount",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "signers",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "transmitters",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "f",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "onchainConfig",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "offchainConfigVersion",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "offchainConfig",
          "type": "bytes"
        }
      ],
      "name": "ConfigSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "indexed": false,
          "internalType": "struct FunctionsBilling.Config",
          "name": "config",
          "type": "tuple"
        }
      ],
      "name": "ConfigUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "requestingContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "requestInitiator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "subscriptionOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "dataVersion",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "flags",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "callbackGasLimit",
          "type": "uint64"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "coordinator",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "estimatedTotalCostJuels",
              "type": "uint96"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "uint32",
              "name": "callbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "adminFee",
              "type": "uint72"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint40",
              "name": "gasOverheadBeforeCallback",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "gasOverheadAfterCallback",
              "type": "uint40"
            },
            {
              "internalType": "uint32",
              "name": "timeoutTimestamp",
              "type": "uint32"
            }
          ],
          "indexed": false,
          "internalType": "struct FunctionsResponse.Commitment",
          "name": "commitment",
          "type": "tuple"
        }
      ],
      "name": "OracleRequest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "transmitter",
          "type": "address"
        }
      ],
      "name": "OracleResponse",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "configDigest",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "epoch",
          "type": "uint32"
        }
      ],
      "name": "Transmitted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "report",
          "type": "bytes"
        }
      ],
      "name": "callReport",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "report",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "secondSigner",
          "type": "address"
        }
      ],
      "name": "callReportMultipleSigners",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "report",
          "type": "bytes"
        },
        {
          "internalType": "address[31]",
          "name": "signers",
          "type": "address[31]"
        }
      ],
      "name": "callReportWithSigners",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "deleteCommitment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "callbackGasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasPriceWei",
          "type": "uint256"
        }
      ],
      "name": "estimateCost",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdminFee",
      "outputs": [
        {
          "internalType": "uint72",
          "name": "",
          "type": "uint72"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "internalType": "struct FunctionsBilling.Config",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "getDONFee",
      "outputs": [
        {
          "internalType": "uint72",
          "name": "",
          "type": "uint72"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDONPublicKey",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getThresholdPublicKey",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWeiPerUnitLink",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestConfigDetails",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "configCount",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "blockNumber",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "configDigest",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestConfigDigestAndEpoch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "scanLogs",
          "type": "bool"
        },
        {
          "internalType": "bytes32",
          "name": "configDigest",
          "type": "bytes32"
        },
        {
          "internalType": "uint32",
          "name": "epoch",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "amount",
          "type": "uint96"
        }
      ],
      "name": "oracleWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "oracleWithdrawAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_signers",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "_transmitters",
          "type": "address[]"
        },
        {
          "internalType": "uint8",
          "name": "_f",
          "type": "uint8"
        },
        {
          "internalType": "bytes",
          "name": "_onchainConfig",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "_offchainConfigVersion",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "_offchainConfig",
          "type": "bytes"
        }
      ],
      "name": "setConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "donPublicKey",
          "type": "bytes"
        }
      ],
      "name": "setDONPublicKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "thresholdPublicKey",
          "type": "bytes"
        }
      ],
      "name": "setThresholdPublicKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "flags",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "requestingContract",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "availableBalance",
              "type": "uint96"
            },
            {
              "internalType": "uint72",
              "name": "adminFee",
              "type": "uint72"
            },
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "initiatedRequests",
              "type": "uint64"
            },
            {
              "internalType": "uint32",
              "name": "callbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "dataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint64",
              "name": "completedRequests",
              "type": "uint64"
            },
            {
              "internalType": "address",
              "name": "subscriptionOwner",
              "type": "address"
            }
          ],
          "internalType": "struct FunctionsResponse.RequestMeta",
          "name": "request",
          "type": "tuple"
        }
      ],
      "name": "startRequest",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "coordinator",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "estimatedTotalCostJuels",
              "type": "uint96"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "uint32",
              "name": "callbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "adminFee",
              "type": "uint72"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint40",
              "name": "gasOverheadBeforeCallback",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "gasOverheadAfterCallback",
              "type": "uint40"
            },
            {
              "internalType": "uint32",
              "name": "timeoutTimestamp",
              "type": "uint32"
            }
          ],
          "internalType": "struct FunctionsResponse.Commitment",
          "name": "commitment",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[3]",
          "name": "reportContext",
          "type": "bytes32[3]"
        },
        {
          "internalType": "bytes",
          "name": "report",
          "type": "bytes"
        },
        {
          "internalType": "bytes32[]",
          "name": "rs",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "ss",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes32",
          "name": "rawVs",
          "type": "bytes32"
        }
      ],
      "name": "transmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "transmitters",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "typeAndVersion",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "internalType": "struct FunctionsBilling.Config",
          "name": "config",
          "type": "tuple"
        }
      ],
      "name": "updateConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60c06040523480156200001157600080fd5b50604051620052d3380380620052d383398101604081905262000034916200041e565b8282828282828260013380600081620000945760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000c757620000c78162000146565b50505015156080526001600160a01b038116620000f757604051632530e88560e11b815260040160405180910390fd5b6001600160a01b0390811660a052600b80549183166c01000000000000000000000000026001600160601b039092169190911790556200013782620001f1565b505050505050505050620005cc565b336001600160a01b03821603620001a05760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200008b565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b620001fb62000341565b80516008805460208401516040808601516060870151608088015160a089015160c08a015161ffff16600160e81b0261ffff60e81b196001600160481b03909216600160a01b02600160a01b600160e81b031963ffffffff948516600160801b0216600160801b600160e81b03199585166c010000000000000000000000000263ffffffff60601b19978616680100000000000000000297909716600160401b600160801b0319998616640100000000026001600160401b0319909b1695909c1694909417989098179690961698909817929092171617929092179390931692909217905560e0820151600980546001600160e01b039092166001600160e01b0319909216919091179055517f8efd15b0efe82b55a8dc915f88e835007cc65ad0b442997d3c10604961e3907a90620003369083906200053c565b60405180910390a150565b6200034b6200034d565b565b6000546001600160a01b031633146200034b5760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016200008b565b80516001600160a01b0381168114620003c157600080fd5b919050565b805163ffffffff81168114620003c157600080fd5b80516001600160481b0381168114620003c157600080fd5b805161ffff81168114620003c157600080fd5b80516001600160e01b0381168114620003c157600080fd5b60008060008385036101408112156200043657600080fd5b6200044185620003a9565b935061010080601f19830112156200045857600080fd5b60405191508082016001600160401b03811183821017156200048a57634e487b7160e01b600052604160045260246000fd5b6040526200049b60208701620003c6565b8252620004ab60408701620003c6565b6020830152620004be60608701620003c6565b6040830152620004d160808701620003c6565b6060830152620004e460a08701620003c6565b6080830152620004f760c08701620003db565b60a08301526200050a60e08701620003f3565b60c08301526200051c81870162000406565b60e0830152509150620005336101208501620003a9565b90509250925092565b60006101008201905063ffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401525060018060481b0360a08401511660a083015260c0830151620005a960c084018261ffff169052565b5060e0830151620005c560e08401826001600160e01b03169052565b5092915050565b60805160a051614cb76200061c60003960008181610618015281816107e201528181610ade01528181610d72015281816110b9015281816118a401526132f4015260006112e20152614cb76000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806381ff7048116100ee578063b1dc65a411610097578063d328a91e11610071578063d328a91e1461057b578063e3d0e71214610583578063e4ddcea614610596578063f2fde38b146105ac57600080fd5b8063b1dc65a4146103fb578063c3f909d41461040e578063d227d2451461054b57600080fd5b80639314176d116100c85780639314176d146103a8578063a631571e146103bb578063afcb95d7146103db57600080fd5b806381ff70481461030057806385b214cf1461036d5780638da5cb5b1461038057600080fd5b8063736d7e0f1161015b5780637d480787116101355780637d480787146102c85780637f15e166146102d057806381411834146102e357806381f1b938146102f857600080fd5b8063736d7e0f1461029a57806377d28a35146102ad57806379ba5097146102c057600080fd5b80633901c40e1161018c5780633901c40e1461023c57806359b5b7ac1461024f57806366316d8d1461028757600080fd5b8063083a5466146101b3578063181f5a77146101c85780632a905ccc1461021a575b600080fd5b6101c66101c13660046135e7565b6105bf565b005b6102046040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e302e300000000081525081565b604051610211919061368d565b60405180910390f35b610222610614565b60405168ffffffffffffffffff9091168152602001610211565b6101c661024a3660046136d4565b6106aa565b61022261025d366004613861565b5060085474010000000000000000000000000000000000000000900468ffffffffffffffffff1690565b6101c66102953660046138c3565b6106e6565b6101c66102a83660046135e7565b61089f565b6101c66102bb3660046138fc565b6108b9565b6101c66108c8565b6101c66109ca565b6101c66102de3660046135e7565b610bca565b6102eb610c1a565b6040516102119190613a06565b610204610c89565b61034a60015460025463ffffffff74010000000000000000000000000000000000000000830481169378010000000000000000000000000000000000000000000000009093041691565b6040805163ffffffff948516815293909216602084015290820152606001610211565b6101c661037b366004613a19565b610d5a565b60005460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610211565b6101c66103b6366004613aaf565b610e17565b6103ce6103c9366004613b79565b611048565b6040516102119190613cd8565b604080516001815260006020820181905291810191909152606001610211565b6101c6610409366004613d2c565b6111e9565b61053e6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915250604080516101008101825260085463ffffffff80821683526401000000008204811660208401526801000000000000000082048116938301939093526c010000000000000000000000008104831660608301527001000000000000000000000000000000008104909216608082015274010000000000000000000000000000000000000000820468ffffffffffffffffff1660a08201527d01000000000000000000000000000000000000000000000000000000000090910461ffff1660c08201526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e082015290565b6040516102119190613de3565b61055e610559366004613ea3565b6118a0565b6040516bffffffffffffffffffffffff9091168152602001610211565b610204611a02565b6101c6610591366004613fbc565b611a59565b61059e612485565b604051908152602001610211565b6101c66105ba366004614089565b6126aa565b6105c76126be565b6000819003610602576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600d61060f82848361413f565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610681573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a59190614265565b905090565b6106b261357f565b33815273ffffffffffffffffffffffffffffffffffffffff821660208201526106e05a336002848888612741565b50505050565b6106ee61290f565b806bffffffffffffffffffffffff166000036107285750336000908152600a60205260409020546bffffffffffffffffffffffff16610782565b336000908152600a60205260409020546bffffffffffffffffffffffff80831691161015610782576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000908152600a6020526040812080548392906107af9084906bffffffffffffffffffffffff166142e0565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506108047f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301526bffffffffffffffffffffffff8416602483015291909116906366316d8d90604401600060405180830381600087803b15801561088357600080fd5b505af1158015610897573d6000803e3d6000fd5b505050505050565b6108a761357f565b33815261060f5a336001848787612741565b61060f5a336002848787612741565b60015473ffffffffffffffffffffffffffffffffffffffff16331461094e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6109d2612aba565b6109da61290f565b60006109e4610c1a565b905060005b8151811015610bc6576000600a6000848481518110610a0a57610a0a614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252810191909152604001600020546bffffffffffffffffffffffff1690508015610bb5576000600a6000858581518110610a6957610a69614282565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550610b007f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff166366316d8d848481518110610b2d57610b2d614282565b6020026020010151836040518363ffffffff1660e01b8152600401610b8292919073ffffffffffffffffffffffffffffffffffffffff9290921682526bffffffffffffffffffffffff16602082015260400190565b600060405180830381600087803b158015610b9c57600080fd5b505af1158015610bb0573d6000803e3d6000fd5b505050505b50610bbf81614305565b90506109e9565b5050565b610bd26126be565b6000819003610c0d576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c61060f82848361413f565b60606006805480602002602001604051908101604052809291908181526020018280548015610c7f57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610c54575b5050505050905090565b6060600d8054610c98906140a6565b9050600003610cd3576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600d8054610ce0906140a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0c906140a6565b8015610c7f5780601f10610d2e57610100808354040283529160200191610c7f565b820191906000526020600020905b815481529060010190602001808311610d3c57509395945050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610dc9576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f41690610e0c9083815260200190565b60405180910390a150565b610e1f612aba565b80516008805460208401516040808601516060870151608088015160a089015160c08a015161ffff167d010000000000000000000000000000000000000000000000000000000000027fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff68ffffffffffffffffff90921674010000000000000000000000000000000000000000027fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff63ffffffff94851670010000000000000000000000000000000002167fffffff00000000000000000000000000ffffffffffffffffffffffffffffffff9585166c01000000000000000000000000027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff9786166801000000000000000002979097167fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff998616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909b1695909c1694909417989098179690961698909817929092171617929092179390931692909217905560e0820151600980547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092167fffffffff00000000000000000000000000000000000000000000000000000000909216919091179055517f8efd15b0efe82b55a8dc915f88e835007cc65ad0b442997d3c10604961e3907a90610e0c908390613de3565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091523373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611110576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61112161111c8361433d565b612ac2565b90506111336060830160408401614089565b815173ffffffffffffffffffffffffffffffffffffffff91909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff3261118160c0870160a0880161442a565b61119361016088016101408901614089565b61119d8880614447565b6111af6101208b016101008c016144ac565b60208b01356111c56101008d0160e08e016144c7565b8b6040516111db999897969594939291906144e4565b60405180910390a35b919050565b60005a604080518b3580825262ffffff6020808f0135600881901c929092169084015293945092917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16040805160608101825260025480825260035460ff808216602085015261010090910416928201929092529083146112d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f636f6e666967446967657374206d69736d6174636800000000000000000000006044820152606401610945565b6112de8b8b8b8b8b8b612ec3565b60007f00000000000000000000000000000000000000000000000000000000000000001561133b5760028260200151836040015161131c919061458c565b61132691906145d4565b61133190600161458c565b60ff169050611351565b602082015161134b90600161458c565b60ff1690505b8881146113ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610945565b888714611423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f7369676e617475726573206f7574206f6620726567697374726174696f6e00006044820152606401610945565b3360009081526004602090815260408083208151808301909252805460ff80821684529293919291840191610100909104166002811115611466576114666145f6565b6002811115611477576114776145f6565b9052509050600281602001516002811115611494576114946145f6565b1480156114db57506006816000015160ff16815481106114b6576114b6614282565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1633145b611541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610945565b505050505061154e61357f565b6000808a8a604051611561929190614625565b604051908190038120611578918e90602001614635565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120838301909252600080845290830152915060005b898110156118825760006001848984602081106115e1576115e1614282565b6115ee91901a601b61458c565b8e8e8681811061160057611600614282565b905060200201358d8d8781811061161957611619614282565b9050602002013560405160008152602001604052604051611656949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611678573d6000803e3d6000fd5b5050604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081015173ffffffffffffffffffffffffffffffffffffffff811660009081526004602090815290849020838501909452835460ff808216855292965092945084019161010090041660028111156116f8576116f86145f6565b6002811115611709576117096145f6565b9052509250600183602001516002811115611726576117266145f6565b1461178d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610945565b8251600090879060ff16601f81106117a7576117a7614282565b602002015173ffffffffffffffffffffffffffffffffffffffff1614611829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610945565b8086846000015160ff16601f811061184357611843614282565b73ffffffffffffffffffffffffffffffffffffffff909216602092909202015261186e60018661458c565b9450508061187b90614305565b90506115c2565b505050611893833383858e8e612741565b5050505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff8516602482015273ffffffffffffffffffffffffffffffffffffffff91909116906310fc49c19060440160006040518083038186803b15801561194057600080fd5b505afa158015611954573d6000803e3d6000fd5b5050505066038d7ea4c68000821115611999576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119a3610614565b905060006119e687878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061025d92505050565b90506119f485858385612f7a565b925050505b95945050505050565b6060600c8054611a11906140a6565b9050600003611a4c576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c8054610ce0906140a6565b855185518560ff16601f831115611acc576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610945565b80600003611b36576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610945565b818314611bc4576040517f89a61989000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610945565b611bcf816003614649565b8311611c37576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610945565b611c3f6126be565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a0810186905290611c869088613064565b60055415611e3b57600554600090611ca090600190614660565b9050600060058281548110611cb757611cb7614282565b60009182526020822001546006805473ffffffffffffffffffffffffffffffffffffffff90921693509084908110611cf157611cf1614282565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff85811684526004909252604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000090811690915592909116808452922080549091169055600580549192509080611d7157611d71614673565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556006805480611dda57611dda614673565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905550611c86915050565b60005b8151518110156122a25760006004600084600001518481518110611e6457611e64614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff166002811115611eae57611eae6145f6565b14611f15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610945565b6040805180820190915260ff82168152600160208201528251805160049160009185908110611f4657611f46614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001617610100836002811115611fe757611fe76145f6565b021790555060009150611ff79050565b600460008460200151848151811061201157612011614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff16600281111561205b5761205b6145f6565b146120c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610945565b6040805180820190915260ff8216815260208101600281525060046000846020015184815181106120f5576120f5614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001617610100836002811115612196576121966145f6565b0217905550508251805160059250839081106121b4576121b4614282565b602090810291909101810151825460018101845560009384529282902090920180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909316929092179091558201518051600691908390811061223057612230614282565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558061229a81614305565b915050611e3e565b506040810151600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116780100000000000000000000000000000000000000000000000063ffffffff438116820292909217808555920481169291829160149161235a918491740100000000000000000000000000000000000000009004166146a2565b92506101000a81548163ffffffff021916908363ffffffff1602179055506123b94630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a0015161307d565b600281905582518051600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e0598612470988b9891977401000000000000000000000000000000000000000090920463ffffffff169690959194919391926146bf565b60405180910390a15050505050505050505050565b604080516101008101825260085463ffffffff80821683526401000000008204811660208401526801000000000000000082048116838501526c01000000000000000000000000808304821660608501527001000000000000000000000000000000008304909116608084015274010000000000000000000000000000000000000000820468ffffffffffffffffff1660a0808501919091527d01000000000000000000000000000000000000000000000000000000000090920461ffff1660c08401526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e0840152600b5484517ffeaf968c00000000000000000000000000000000000000000000000000000000815294516000958694859490930473ffffffffffffffffffffffffffffffffffffffff169263feaf968c926004808401938290030181865afa1580156125df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612603919061476f565b5093505092505080426126169190614660565b836020015163ffffffff1610801561263857506000836020015163ffffffff16115b1561266657505060e001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16919050565b600082136126a3576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610945565b5092915050565b6126b26126be565b6126bb81613128565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461273f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610945565b565b6060808080806127538688018861489a565b845194995092975090955093509150158061277057508351855114155b8061277d57508251855114155b8061278a57508151855114155b8061279757508051855114155b156127ce576040517f0be3632800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b85518110156129015760006128668783815181106127f1576127f1614282565b602002602001015187848151811061280b5761280b614282565b602002602001015187858151811061282557612825614282565b602002602001015187868151811061283f5761283f614282565b602002602001015187878151811061285957612859614282565b602002602001015161321d565b9050600081600681111561287c5761287c6145f6565b148061289957506001816006811115612897576128976145f6565b145b156128f0578682815181106128b0576128b0614282565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b506128fa81614305565b90506127d1565b505050505050505050505050565b600b546bffffffffffffffffffffffff1660000361292957565b6000612933610c1a565b90508051600003612970576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051600b5460009161298f916bffffffffffffffffffffffff1661496c565b905060005b8251811015612a5b5781600a60008584815181106129b4576129b4614282565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282829054906101000a90046bffffffffffffffffffffffff16612a1c9190614997565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555080612a5490614305565b9050612994565b508151612a6890826149bc565b600b8054600090612a889084906bffffffffffffffffffffffff166142e0565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505050565b61273f6126be565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915260408051610100808201835260085463ffffffff80821684526401000000008204811660208501526801000000000000000082048116948401949094526c010000000000000000000000008104841660608401527001000000000000000000000000000000008104909316608083015274010000000000000000000000000000000000000000830468ffffffffffffffffff1660a08301527d01000000000000000000000000000000000000000000000000000000000090920461ffff90811660c083018190526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e084015292850151919291161115612c48576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085460009074010000000000000000000000000000000000000000900468ffffffffffffffffff1690506000612c898560e001513a848860800151612f7a565b9050806bffffffffffffffffffffffff1685606001516bffffffffffffffffffffffff161015612ce5576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000612d683087604001518860a001518960c001516001612d0691906149ec565b6040805173ffffffffffffffffffffffffffffffffffffffff958616602080830191909152949095168582015267ffffffffffffffff928316606086015291166080808501919091528151808503909101815260a09093019052815191012090565b90506040518061016001604052808281526020013073ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff168152602001876040015173ffffffffffffffffffffffffffffffffffffffff1681526020018760a0015167ffffffffffffffff1681526020018760e0015163ffffffff168152602001876080015168ffffffffffffffffff1681526020018468ffffffffffffffffff168152602001856040015163ffffffff1664ffffffffff168152602001856060015163ffffffff1664ffffffffff168152602001856080015163ffffffff1642612e5a9190614a0d565b63ffffffff16815250945084604051602001612e769190613cd8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600093845260079092529091205550919392505050565b6000612ed0826020614649565b612edb856020614649565b612ee788610144614a0d565b612ef19190614a0d565b612efb9190614a0d565b612f06906000614a0d565b9050368114612f71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610945565b50505050505050565b60085460009081908690612fb29063ffffffff6c010000000000000000000000008204811691680100000000000000009004166146a2565b612fbc91906146a2565b60085463ffffffff918216925060009161271091612fdb911688614649565b612fe59190614a20565b612fef9087614a0d565b90506000612ffc826134ae565b90506000613018846bffffffffffffffffffffffff8416614649565b9050600061303468ffffffffffffffffff808916908a16614997565b90506130566130516bffffffffffffffffffffffff831684614a0d565b6134dd565b9a9950505050505050505050565b600061306e610c1a565b511115610bc657610bc661290f565b6000808a8a8a8a8a8a8a8a8a6040516020016130a199989796959493929190614a34565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff8216036131a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610945565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b600080838060200190518101906132349190614b0a565b6000888152600760205260409020549091506132545760029150506119f9565b806040516020016132659190613cd8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152815160209283012060008a81526007909352912054146132b75760069150506119f9565b60006132c23a6134ae565b905060008261012001518361010001516132dc9190614bdd565b6132ed9064ffffffffff16836149bc565b90506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663330605298b8b878960e0015168ffffffffffffffffff168861334c9190614997565b338b6040518763ffffffff1660e01b815260040161336f96959493929190614bfb565b60408051808303816000875af115801561338d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133b19190614c77565b909250905060008260068111156133ca576133ca6145f6565b14806133e7575060018260068111156133e5576133e56145f6565b145b156134a05760008b8152600760205260408120556134058184614997565b336000908152600a6020526040812080547fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166bffffffffffffffffffffffff93841617905560e0870151600b805468ffffffffffffffffff9092169390929161347191859116614997565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505b509998505050505050505050565b60006134d76134bb612485565b6134cd84670de0b6b3a7640000614649565b6130519190614a20565b92915050565b60006bffffffffffffffffffffffff82111561357b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610945565b5090565b604051806103e00160405280601f906020820280368337509192915050565b60008083601f8401126135b057600080fd5b50813567ffffffffffffffff8111156135c857600080fd5b6020830191508360208285010111156135e057600080fd5b9250929050565b600080602083850312156135fa57600080fd5b823567ffffffffffffffff81111561361157600080fd5b61361d8582860161359e565b90969095509350505050565b6000815180845260005b8181101561364f57602081850181015186830182015201613633565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006136a06020830184613629565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146126bb57600080fd5b80356111e4816136a7565b6000806000604084860312156136e957600080fd5b833567ffffffffffffffff81111561370057600080fd5b61370c8682870161359e565b9094509250506020840135613720816136a7565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561377e5761377e61372b565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156137cb576137cb61372b565b604052919050565b600082601f8301126137e457600080fd5b813567ffffffffffffffff8111156137fe576137fe61372b565b61382f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613784565b81815284602083860101111561384457600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561387357600080fd5b813567ffffffffffffffff81111561388a57600080fd5b613896848285016137d3565b949350505050565b6bffffffffffffffffffffffff811681146126bb57600080fd5b80356111e48161389e565b600080604083850312156138d657600080fd5b82356138e1816136a7565b915060208301356138f18161389e565b809150509250929050565b600080600061040080858703121561391357600080fd5b843567ffffffffffffffff8082111561392b57600080fd5b6139378883890161359e565b909650945060209150603f8701881361394f57600080fd5b6040516103e08101818110838211171561396b5761396b61372b565b604052928701929050808884111561398257600080fd5b8288015b848110156139a6578035613999816136a7565b8352918301918301613986565b50809450505050509250925092565b600081518084526020808501945080840160005b838110156139fb57815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016139c9565b509495945050505050565b6020815260006136a060208301846139b5565b600060208284031215613a2b57600080fd5b5035919050565b63ffffffff811681146126bb57600080fd5b80356111e481613a32565b68ffffffffffffffffff811681146126bb57600080fd5b80356111e481613a4f565b803561ffff811681146111e457600080fd5b80357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff811681146111e457600080fd5b6000610100808385031215613ac357600080fd5b6040519081019067ffffffffffffffff82118183101715613ae657613ae661372b565b8160405283359150613af782613a32565b818152613b0660208501613a44565b6020820152613b1760408501613a44565b6040820152613b2860608501613a44565b6060820152613b3960808501613a44565b6080820152613b4a60a08501613a66565b60a0820152613b5b60c08501613a71565b60c0820152613b6c60e08501613a83565b60e0820152949350505050565b600060208284031215613b8b57600080fd5b813567ffffffffffffffff811115613ba257600080fd5b820161016081850312156136a057600080fd5b805182526020810151613be0602084018273ffffffffffffffffffffffffffffffffffffffff169052565b506040810151613c0060408401826bffffffffffffffffffffffff169052565b506060810151613c28606084018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151613c44608084018267ffffffffffffffff169052565b5060a0810151613c5c60a084018263ffffffff169052565b5060c0810151613c7960c084018268ffffffffffffffffff169052565b5060e0810151613c9660e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff81168483015250506101208181015164ffffffffff81168483015250506101408181015163ffffffff8116848301526106e0565b61016081016134d78284613bb5565b60008083601f840112613cf957600080fd5b50813567ffffffffffffffff811115613d1157600080fd5b6020830191508360208260051b85010111156135e057600080fd5b60008060008060008060008060e0898b031215613d4857600080fd5b606089018a811115613d5957600080fd5b8998503567ffffffffffffffff80821115613d7357600080fd5b613d7f8c838d0161359e565b909950975060808b0135915080821115613d9857600080fd5b613da48c838d01613ce7565b909750955060a08b0135915080821115613dbd57600080fd5b50613dca8b828c01613ce7565b999c989b50969995989497949560c00135949350505050565b60006101008201905063ffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401525068ffffffffffffffffff60a08401511660a083015260c0830151613e5260c084018261ffff169052565b5060e08301516126a360e08401827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169052565b67ffffffffffffffff811681146126bb57600080fd5b80356111e481613e82565b600080600080600060808688031215613ebb57600080fd5b8535613ec681613e82565b9450602086013567ffffffffffffffff811115613ee257600080fd5b613eee8882890161359e565b9095509350506040860135613f0281613a32565b949793965091946060013592915050565b600067ffffffffffffffff821115613f2d57613f2d61372b565b5060051b60200190565b600082601f830112613f4857600080fd5b81356020613f5d613f5883613f13565b613784565b82815260059290921b84018101918181019086841115613f7c57600080fd5b8286015b84811015613fa0578035613f93816136a7565b8352918301918301613f80565b509695505050505050565b803560ff811681146111e457600080fd5b60008060008060008060c08789031215613fd557600080fd5b863567ffffffffffffffff80821115613fed57600080fd5b613ff98a838b01613f37565b9750602089013591508082111561400f57600080fd5b61401b8a838b01613f37565b965061402960408a01613fab565b9550606089013591508082111561403f57600080fd5b61404b8a838b016137d3565b945061405960808a01613e98565b935060a089013591508082111561406f57600080fd5b5061407c89828a016137d3565b9150509295509295509295565b60006020828403121561409b57600080fd5b81356136a0816136a7565b600181811c908216806140ba57607f821691505b6020821081036140f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561060f57600081815260208120601f850160051c810160208610156141205750805b601f850160051c820191505b818110156108975782815560010161412c565b67ffffffffffffffff8311156141575761415761372b565b61416b8361416583546140a6565b836140f9565b6000601f8411600181146141bd57600085156141875750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355614253565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101561420c57868501358255602094850194600190920191016141ec565b5086821015614247577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b80516111e481613a4f565b60006020828403121561427757600080fd5b81516136a081613a4f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6bffffffffffffffffffffffff8281168282160390808211156126a3576126a36142b1565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614336576143366142b1565b5060010190565b6000610160823603121561435057600080fd5b61435861375a565b823567ffffffffffffffff81111561436f57600080fd5b61437b368286016137d3565b82525060208301356020820152614394604084016136c9565b60408201526143a5606084016138b8565b60608201526143b660808401613a66565b60808201526143c760a08401613e98565b60a08201526143d860c08401613e98565b60c08201526143e960e08401613a44565b60e08201526101006143fc818501613a71565b9082015261012061440e848201613e98565b908201526101406144208482016136c9565b9082015292915050565b60006020828403121561443c57600080fd5b81356136a081613e82565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261447c57600080fd5b83018035915067ffffffffffffffff82111561449757600080fd5b6020019150368190038213156135e057600080fd5b6000602082840312156144be57600080fd5b6136a082613a71565b6000602082840312156144d957600080fd5b81356136a081613a32565b73ffffffffffffffffffffffffffffffffffffffff8a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f88017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016830101905061305660e0830184613bb5565b60ff81811683821601908111156134d7576134d76142b1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600060ff8316806145e7576145e76145a5565b8060ff84160491505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b80820281158282048414176134d7576134d76142b1565b818103818111156134d7576134d76142b1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b63ffffffff8181168382160190808211156126a3576126a36142b1565b600061012063ffffffff808d1684528b6020850152808b166040850152508060608401526146ef8184018a6139b5565b9050828103608084015261470381896139b5565b905060ff871660a084015282810360c08401526147208187613629565b905067ffffffffffffffff851660e08401528281036101008401526147458185613629565b9c9b505050505050505050505050565b805169ffffffffffffffffffff811681146111e457600080fd5b600080600080600060a0868803121561478757600080fd5b61479086614755565b94506020860151935060408601519250606086015191506147b360808701614755565b90509295509295909350565b600082601f8301126147d057600080fd5b813560206147e0613f5883613f13565b82815260059290921b840181019181810190868411156147ff57600080fd5b8286015b84811015613fa05780358352918301918301614803565b600082601f83011261482b57600080fd5b8135602061483b613f5883613f13565b82815260059290921b8401810191818101908684111561485a57600080fd5b8286015b84811015613fa057803567ffffffffffffffff81111561487e5760008081fd5b61488c8986838b01016137d3565b84525091830191830161485e565b600080600080600060a086880312156148b257600080fd5b853567ffffffffffffffff808211156148ca57600080fd5b6148d689838a016147bf565b965060208801359150808211156148ec57600080fd5b6148f889838a0161481a565b9550604088013591508082111561490e57600080fd5b61491a89838a0161481a565b9450606088013591508082111561493057600080fd5b61493c89838a0161481a565b9350608088013591508082111561495257600080fd5b5061495f8882890161481a565b9150509295509295909350565b60006bffffffffffffffffffffffff8084168061498b5761498b6145a5565b92169190910492915050565b6bffffffffffffffffffffffff8181168382160190808211156126a3576126a36142b1565b6bffffffffffffffffffffffff8181168382160280821691908281146149e4576149e46142b1565b505092915050565b67ffffffffffffffff8181168382160190808211156126a3576126a36142b1565b808201808211156134d7576134d76142b1565b600082614a2f57614a2f6145a5565b500490565b60006101208b835273ffffffffffffffffffffffffffffffffffffffff8b16602084015267ffffffffffffffff808b166040850152816060850152614a7b8285018b6139b5565b91508382036080850152614a8f828a6139b5565b915060ff881660a085015283820360c0850152614aac8288613629565b90861660e085015283810361010085015290506147458185613629565b80516111e4816136a7565b80516111e48161389e565b80516111e481613e82565b80516111e481613a32565b805164ffffffffff811681146111e457600080fd5b60006101608284031215614b1d57600080fd5b614b2561375a565b82518152614b3560208401614ac9565b6020820152614b4660408401614ad4565b6040820152614b5760608401614ac9565b6060820152614b6860808401614adf565b6080820152614b7960a08401614aea565b60a0820152614b8a60c0840161425a565b60c0820152614b9b60e0840161425a565b60e0820152610100614bae818501614af5565b90820152610120614bc0848201614af5565b90820152610140614bd2848201614aea565b908201529392505050565b64ffffffffff8181168382160190808211156126a3576126a36142b1565b6000610200808352614c0f8184018a613629565b90508281036020840152614c238189613629565b6bffffffffffffffffffffffff88811660408601528716606085015273ffffffffffffffffffffffffffffffffffffffff861660808501529150614c6c905060a0830184613bb5565b979650505050505050565b60008060408385031215614c8a57600080fd5b825160078110614c9957600080fd5b60208401519092506138f18161389e56fea164736f6c6343000813000a",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101ae5760003560e01c806381ff7048116100ee578063b1dc65a411610097578063d328a91e11610071578063d328a91e1461057b578063e3d0e71214610583578063e4ddcea614610596578063f2fde38b146105ac57600080fd5b8063b1dc65a4146103fb578063c3f909d41461040e578063d227d2451461054b57600080fd5b80639314176d116100c85780639314176d146103a8578063a631571e146103bb578063afcb95d7146103db57600080fd5b806381ff70481461030057806385b214cf1461036d5780638da5cb5b1461038057600080fd5b8063736d7e0f1161015b5780637d480787116101355780637d480787146102c85780637f15e166146102d057806381411834146102e357806381f1b938146102f857600080fd5b8063736d7e0f1461029a57806377d28a35146102ad57806379ba5097146102c057600080fd5b80633901c40e1161018c5780633901c40e1461023c57806359b5b7ac1461024f57806366316d8d1461028757600080fd5b8063083a5466146101b3578063181f5a77146101c85780632a905ccc1461021a575b600080fd5b6101c66101c13660046135e7565b6105bf565b005b6102046040518060400160405280601c81526020017f46756e6374696f6e7320436f6f7264696e61746f722076312e302e300000000081525081565b604051610211919061368d565b60405180910390f35b610222610614565b60405168ffffffffffffffffff9091168152602001610211565b6101c661024a3660046136d4565b6106aa565b61022261025d366004613861565b5060085474010000000000000000000000000000000000000000900468ffffffffffffffffff1690565b6101c66102953660046138c3565b6106e6565b6101c66102a83660046135e7565b61089f565b6101c66102bb3660046138fc565b6108b9565b6101c66108c8565b6101c66109ca565b6101c66102de3660046135e7565b610bca565b6102eb610c1a565b6040516102119190613a06565b610204610c89565b61034a60015460025463ffffffff74010000000000000000000000000000000000000000830481169378010000000000000000000000000000000000000000000000009093041691565b6040805163ffffffff948516815293909216602084015290820152606001610211565b6101c661037b366004613a19565b610d5a565b60005460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610211565b6101c66103b6366004613aaf565b610e17565b6103ce6103c9366004613b79565b611048565b6040516102119190613cd8565b604080516001815260006020820181905291810191909152606001610211565b6101c6610409366004613d2c565b6111e9565b61053e6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915250604080516101008101825260085463ffffffff80821683526401000000008204811660208401526801000000000000000082048116938301939093526c010000000000000000000000008104831660608301527001000000000000000000000000000000008104909216608082015274010000000000000000000000000000000000000000820468ffffffffffffffffff1660a08201527d01000000000000000000000000000000000000000000000000000000000090910461ffff1660c08201526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e082015290565b6040516102119190613de3565b61055e610559366004613ea3565b6118a0565b6040516bffffffffffffffffffffffff9091168152602001610211565b610204611a02565b6101c6610591366004613fbc565b611a59565b61059e612485565b604051908152602001610211565b6101c66105ba366004614089565b6126aa565b6105c76126be565b6000819003610602576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600d61060f82848361413f565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a905ccc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610681573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a59190614265565b905090565b6106b261357f565b33815273ffffffffffffffffffffffffffffffffffffffff821660208201526106e05a336002848888612741565b50505050565b6106ee61290f565b806bffffffffffffffffffffffff166000036107285750336000908152600a60205260409020546bffffffffffffffffffffffff16610782565b336000908152600a60205260409020546bffffffffffffffffffffffff80831691161015610782576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000908152600a6020526040812080548392906107af9084906bffffffffffffffffffffffff166142e0565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506108047f000000000000000000000000000000000000000000000000000000000000000090565b6040517f66316d8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301526bffffffffffffffffffffffff8416602483015291909116906366316d8d90604401600060405180830381600087803b15801561088357600080fd5b505af1158015610897573d6000803e3d6000fd5b505050505050565b6108a761357f565b33815261060f5a336001848787612741565b61060f5a336002848787612741565b60015473ffffffffffffffffffffffffffffffffffffffff16331461094e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6109d2612aba565b6109da61290f565b60006109e4610c1a565b905060005b8151811015610bc6576000600a6000848481518110610a0a57610a0a614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252810191909152604001600020546bffffffffffffffffffffffff1690508015610bb5576000600a6000858581518110610a6957610a69614282565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550610b007f000000000000000000000000000000000000000000000000000000000000000090565b73ffffffffffffffffffffffffffffffffffffffff166366316d8d848481518110610b2d57610b2d614282565b6020026020010151836040518363ffffffff1660e01b8152600401610b8292919073ffffffffffffffffffffffffffffffffffffffff9290921682526bffffffffffffffffffffffff16602082015260400190565b600060405180830381600087803b158015610b9c57600080fd5b505af1158015610bb0573d6000803e3d6000fd5b505050505b50610bbf81614305565b90506109e9565b5050565b610bd26126be565b6000819003610c0d576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c61060f82848361413f565b60606006805480602002602001604051908101604052809291908181526020018280548015610c7f57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610c54575b5050505050905090565b6060600d8054610c98906140a6565b9050600003610cd3576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600d8054610ce0906140a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0c906140a6565b8015610c7f5780601f10610d2e57610100808354040283529160200191610c7f565b820191906000526020600020905b815481529060010190602001808311610d3c57509395945050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610dc9576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526007602052604080822091909155517f8a4b97add3359bd6bcf5e82874363670eb5ad0f7615abddbd0ed0a3a98f0f41690610e0c9083815260200190565b60405180910390a150565b610e1f612aba565b80516008805460208401516040808601516060870151608088015160a089015160c08a015161ffff167d010000000000000000000000000000000000000000000000000000000000027fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff68ffffffffffffffffff90921674010000000000000000000000000000000000000000027fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff63ffffffff94851670010000000000000000000000000000000002167fffffff00000000000000000000000000ffffffffffffffffffffffffffffffff9585166c01000000000000000000000000027fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff9786166801000000000000000002979097167fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff998616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909b1695909c1694909417989098179690961698909817929092171617929092179390931692909217905560e0820151600980547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092167fffffffff00000000000000000000000000000000000000000000000000000000909216919091179055517f8efd15b0efe82b55a8dc915f88e835007cc65ad0b442997d3c10604961e3907a90610e0c908390613de3565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091523373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611110576040517fc41a5b0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61112161111c8361433d565b612ac2565b90506111336060830160408401614089565b815173ffffffffffffffffffffffffffffffffffffffff91909116907fbf50768ccf13bd0110ca6d53a9c4f1f3271abdd4c24a56878863ed25b20598ff3261118160c0870160a0880161442a565b61119361016088016101408901614089565b61119d8880614447565b6111af6101208b016101008c016144ac565b60208b01356111c56101008d0160e08e016144c7565b8b6040516111db999897969594939291906144e4565b60405180910390a35b919050565b60005a604080518b3580825262ffffff6020808f0135600881901c929092169084015293945092917fb04e63db38c49950639fa09d29872f21f5d49d614f3a969d8adf3d4b52e41a62910160405180910390a16040805160608101825260025480825260035460ff808216602085015261010090910416928201929092529083146112d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f636f6e666967446967657374206d69736d6174636800000000000000000000006044820152606401610945565b6112de8b8b8b8b8b8b612ec3565b60007f00000000000000000000000000000000000000000000000000000000000000001561133b5760028260200151836040015161131c919061458c565b61132691906145d4565b61133190600161458c565b60ff169050611351565b602082015161134b90600161458c565b60ff1690505b8881146113ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f77726f6e67206e756d626572206f66207369676e6174757265730000000000006044820152606401610945565b888714611423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f7369676e617475726573206f7574206f6620726567697374726174696f6e00006044820152606401610945565b3360009081526004602090815260408083208151808301909252805460ff80821684529293919291840191610100909104166002811115611466576114666145f6565b6002811115611477576114776145f6565b9052509050600281602001516002811115611494576114946145f6565b1480156114db57506006816000015160ff16815481106114b6576114b6614282565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1633145b611541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f756e617574686f72697a6564207472616e736d697474657200000000000000006044820152606401610945565b505050505061154e61357f565b6000808a8a604051611561929190614625565b604051908190038120611578918e90602001614635565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120838301909252600080845290830152915060005b898110156118825760006001848984602081106115e1576115e1614282565b6115ee91901a601b61458c565b8e8e8681811061160057611600614282565b905060200201358d8d8781811061161957611619614282565b9050602002013560405160008152602001604052604051611656949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611678573d6000803e3d6000fd5b5050604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081015173ffffffffffffffffffffffffffffffffffffffff811660009081526004602090815290849020838501909452835460ff808216855292965092945084019161010090041660028111156116f8576116f86145f6565b6002811115611709576117096145f6565b9052509250600183602001516002811115611726576117266145f6565b1461178d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f61646472657373206e6f7420617574686f72697a656420746f207369676e00006044820152606401610945565b8251600090879060ff16601f81106117a7576117a7614282565b602002015173ffffffffffffffffffffffffffffffffffffffff1614611829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f6e2d756e69717565207369676e61747572650000000000000000000000006044820152606401610945565b8086846000015160ff16601f811061184357611843614282565b73ffffffffffffffffffffffffffffffffffffffff909216602092909202015261186e60018661458c565b9450508061187b90614305565b90506115c2565b505050611893833383858e8e612741565b5050505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f10fc49c100000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8816600482015263ffffffff8516602482015273ffffffffffffffffffffffffffffffffffffffff91909116906310fc49c19060440160006040518083038186803b15801561194057600080fd5b505afa158015611954573d6000803e3d6000fd5b5050505066038d7ea4c68000821115611999576040517f8129bbcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119a3610614565b905060006119e687878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061025d92505050565b90506119f485858385612f7a565b925050505b95945050505050565b6060600c8054611a11906140a6565b9050600003611a4c576040517f4f42be3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c8054610ce0906140a6565b855185518560ff16601f831115611acc576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f746f6f206d616e79207369676e657273000000000000000000000000000000006044820152606401610945565b80600003611b36576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f66206d75737420626520706f73697469766500000000000000000000000000006044820152606401610945565b818314611bc4576040517f89a61989000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6f7261636c6520616464726573736573206f7574206f6620726567697374726160448201527f74696f6e000000000000000000000000000000000000000000000000000000006064820152608401610945565b611bcf816003614649565b8311611c37576040517f89a6198900000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661756c74792d6f7261636c65206620746f6f206869676800000000000000006044820152606401610945565b611c3f6126be565b6040805160c0810182528a8152602081018a905260ff89169181018290526060810188905267ffffffffffffffff8716608082015260a0810186905290611c869088613064565b60055415611e3b57600554600090611ca090600190614660565b9050600060058281548110611cb757611cb7614282565b60009182526020822001546006805473ffffffffffffffffffffffffffffffffffffffff90921693509084908110611cf157611cf1614282565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff85811684526004909252604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000090811690915592909116808452922080549091169055600580549192509080611d7157611d71614673565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556006805480611dda57611dda614673565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905501905550611c86915050565b60005b8151518110156122a25760006004600084600001518481518110611e6457611e64614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff166002811115611eae57611eae6145f6565b14611f15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f7265706561746564207369676e657220616464726573730000000000000000006044820152606401610945565b6040805180820190915260ff82168152600160208201528251805160049160009185908110611f4657611f46614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001617610100836002811115611fe757611fe76145f6565b021790555060009150611ff79050565b600460008460200151848151811061201157612011614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002054610100900460ff16600281111561205b5761205b6145f6565b146120c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f7265706561746564207472616e736d69747465722061646472657373000000006044820152606401610945565b6040805180820190915260ff8216815260208101600281525060046000846020015184815181106120f5576120f5614282565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff168252818101929092526040016000208251815460ff9091167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592840151919283917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001617610100836002811115612196576121966145f6565b0217905550508251805160059250839081106121b4576121b4614282565b602090810291909101810151825460018101845560009384529282902090920180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909316929092179091558201518051600691908390811061223057612230614282565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558061229a81614305565b915050611e3e565b506040810151600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff909216919091179055600180547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff8116780100000000000000000000000000000000000000000000000063ffffffff438116820292909217808555920481169291829160149161235a918491740100000000000000000000000000000000000000009004166146a2565b92506101000a81548163ffffffff021916908363ffffffff1602179055506123b94630600160149054906101000a900463ffffffff1663ffffffff16856000015186602001518760400151886060015189608001518a60a0015161307d565b600281905582518051600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1661010060ff9093169290920291909117905560015460208501516040808701516060880151608089015160a08a015193517f1591690b8638f5fb2dbec82ac741805ac5da8b45dc5263f4875b0496fdce4e0598612470988b9891977401000000000000000000000000000000000000000090920463ffffffff169690959194919391926146bf565b60405180910390a15050505050505050505050565b604080516101008101825260085463ffffffff80821683526401000000008204811660208401526801000000000000000082048116838501526c01000000000000000000000000808304821660608501527001000000000000000000000000000000008304909116608084015274010000000000000000000000000000000000000000820468ffffffffffffffffff1660a0808501919091527d01000000000000000000000000000000000000000000000000000000000090920461ffff1660c08401526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e0840152600b5484517ffeaf968c00000000000000000000000000000000000000000000000000000000815294516000958694859490930473ffffffffffffffffffffffffffffffffffffffff169263feaf968c926004808401938290030181865afa1580156125df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612603919061476f565b5093505092505080426126169190614660565b836020015163ffffffff1610801561263857506000836020015163ffffffff16115b1561266657505060e001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16919050565b600082136126a3576040517f43d4cf6600000000000000000000000000000000000000000000000000000000815260048101839052602401610945565b5092915050565b6126b26126be565b6126bb81613128565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461273f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000006044820152606401610945565b565b6060808080806127538688018861489a565b845194995092975090955093509150158061277057508351855114155b8061277d57508251855114155b8061278a57508151855114155b8061279757508051855114155b156127ce576040517f0be3632800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b85518110156129015760006128668783815181106127f1576127f1614282565b602002602001015187848151811061280b5761280b614282565b602002602001015187858151811061282557612825614282565b602002602001015187868151811061283f5761283f614282565b602002602001015187878151811061285957612859614282565b602002602001015161321d565b9050600081600681111561287c5761287c6145f6565b148061289957506001816006811115612897576128976145f6565b145b156128f0578682815181106128b0576128b0614282565b60209081029190910181015160405133815290917fc708e0440951fd63499c0f7a73819b469ee5dd3ecc356c0ab4eb7f18389009d9910160405180910390a25b506128fa81614305565b90506127d1565b505050505050505050505050565b600b546bffffffffffffffffffffffff1660000361292957565b6000612933610c1a565b90508051600003612970576040517f30274b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051600b5460009161298f916bffffffffffffffffffffffff1661496c565b905060005b8251811015612a5b5781600a60008584815181106129b4576129b4614282565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282829054906101000a90046bffffffffffffffffffffffff16612a1c9190614997565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555080612a5490614305565b9050612994565b508151612a6890826149bc565b600b8054600090612a889084906bffffffffffffffffffffffff166142e0565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505050565b61273f6126be565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915260408051610100808201835260085463ffffffff80821684526401000000008204811660208501526801000000000000000082048116948401949094526c010000000000000000000000008104841660608401527001000000000000000000000000000000008104909316608083015274010000000000000000000000000000000000000000830468ffffffffffffffffff1660a08301527d01000000000000000000000000000000000000000000000000000000000090920461ffff90811660c083018190526009547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660e084015292850151919291161115612c48576040517fdada758700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085460009074010000000000000000000000000000000000000000900468ffffffffffffffffff1690506000612c898560e001513a848860800151612f7a565b9050806bffffffffffffffffffffffff1685606001516bffffffffffffffffffffffff161015612ce5576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000612d683087604001518860a001518960c001516001612d0691906149ec565b6040805173ffffffffffffffffffffffffffffffffffffffff958616602080830191909152949095168582015267ffffffffffffffff928316606086015291166080808501919091528151808503909101815260a09093019052815191012090565b90506040518061016001604052808281526020013073ffffffffffffffffffffffffffffffffffffffff168152602001836bffffffffffffffffffffffff168152602001876040015173ffffffffffffffffffffffffffffffffffffffff1681526020018760a0015167ffffffffffffffff1681526020018760e0015163ffffffff168152602001876080015168ffffffffffffffffff1681526020018468ffffffffffffffffff168152602001856040015163ffffffff1664ffffffffff168152602001856060015163ffffffff1664ffffffffff168152602001856080015163ffffffff1642612e5a9190614a0d565b63ffffffff16815250945084604051602001612e769190613cd8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600093845260079092529091205550919392505050565b6000612ed0826020614649565b612edb856020614649565b612ee788610144614a0d565b612ef19190614a0d565b612efb9190614a0d565b612f06906000614a0d565b9050368114612f71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f63616c6c64617461206c656e677468206d69736d6174636800000000000000006044820152606401610945565b50505050505050565b60085460009081908690612fb29063ffffffff6c010000000000000000000000008204811691680100000000000000009004166146a2565b612fbc91906146a2565b60085463ffffffff918216925060009161271091612fdb911688614649565b612fe59190614a20565b612fef9087614a0d565b90506000612ffc826134ae565b90506000613018846bffffffffffffffffffffffff8416614649565b9050600061303468ffffffffffffffffff808916908a16614997565b90506130566130516bffffffffffffffffffffffff831684614a0d565b6134dd565b9a9950505050505050505050565b600061306e610c1a565b511115610bc657610bc661290f565b6000808a8a8a8a8a8a8a8a8a6040516020016130a199989796959493929190614a34565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101207dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e01000000000000000000000000000000000000000000000000000000000000179150509998505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff8216036131a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610945565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b600080838060200190518101906132349190614b0a565b6000888152600760205260409020549091506132545760029150506119f9565b806040516020016132659190613cd8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152815160209283012060008a81526007909352912054146132b75760069150506119f9565b60006132c23a6134ae565b905060008261012001518361010001516132dc9190614bdd565b6132ed9064ffffffffff16836149bc565b90506000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663330605298b8b878960e0015168ffffffffffffffffff168861334c9190614997565b338b6040518763ffffffff1660e01b815260040161336f96959493929190614bfb565b60408051808303816000875af115801561338d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133b19190614c77565b909250905060008260068111156133ca576133ca6145f6565b14806133e7575060018260068111156133e5576133e56145f6565b145b156134a05760008b8152600760205260408120556134058184614997565b336000908152600a6020526040812080547fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166bffffffffffffffffffffffff93841617905560e0870151600b805468ffffffffffffffffff9092169390929161347191859116614997565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505b509998505050505050505050565b60006134d76134bb612485565b6134cd84670de0b6b3a7640000614649565b6130519190614a20565b92915050565b60006bffffffffffffffffffffffff82111561357b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610945565b5090565b604051806103e00160405280601f906020820280368337509192915050565b60008083601f8401126135b057600080fd5b50813567ffffffffffffffff8111156135c857600080fd5b6020830191508360208285010111156135e057600080fd5b9250929050565b600080602083850312156135fa57600080fd5b823567ffffffffffffffff81111561361157600080fd5b61361d8582860161359e565b90969095509350505050565b6000815180845260005b8181101561364f57602081850181015186830182015201613633565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006136a06020830184613629565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146126bb57600080fd5b80356111e4816136a7565b6000806000604084860312156136e957600080fd5b833567ffffffffffffffff81111561370057600080fd5b61370c8682870161359e565b9094509250506020840135613720816136a7565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561377e5761377e61372b565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156137cb576137cb61372b565b604052919050565b600082601f8301126137e457600080fd5b813567ffffffffffffffff8111156137fe576137fe61372b565b61382f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613784565b81815284602083860101111561384457600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561387357600080fd5b813567ffffffffffffffff81111561388a57600080fd5b613896848285016137d3565b949350505050565b6bffffffffffffffffffffffff811681146126bb57600080fd5b80356111e48161389e565b600080604083850312156138d657600080fd5b82356138e1816136a7565b915060208301356138f18161389e565b809150509250929050565b600080600061040080858703121561391357600080fd5b843567ffffffffffffffff8082111561392b57600080fd5b6139378883890161359e565b909650945060209150603f8701881361394f57600080fd5b6040516103e08101818110838211171561396b5761396b61372b565b604052928701929050808884111561398257600080fd5b8288015b848110156139a6578035613999816136a7565b8352918301918301613986565b50809450505050509250925092565b600081518084526020808501945080840160005b838110156139fb57815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016139c9565b509495945050505050565b6020815260006136a060208301846139b5565b600060208284031215613a2b57600080fd5b5035919050565b63ffffffff811681146126bb57600080fd5b80356111e481613a32565b68ffffffffffffffffff811681146126bb57600080fd5b80356111e481613a4f565b803561ffff811681146111e457600080fd5b80357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff811681146111e457600080fd5b6000610100808385031215613ac357600080fd5b6040519081019067ffffffffffffffff82118183101715613ae657613ae661372b565b8160405283359150613af782613a32565b818152613b0660208501613a44565b6020820152613b1760408501613a44565b6040820152613b2860608501613a44565b6060820152613b3960808501613a44565b6080820152613b4a60a08501613a66565b60a0820152613b5b60c08501613a71565b60c0820152613b6c60e08501613a83565b60e0820152949350505050565b600060208284031215613b8b57600080fd5b813567ffffffffffffffff811115613ba257600080fd5b820161016081850312156136a057600080fd5b805182526020810151613be0602084018273ffffffffffffffffffffffffffffffffffffffff169052565b506040810151613c0060408401826bffffffffffffffffffffffff169052565b506060810151613c28606084018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151613c44608084018267ffffffffffffffff169052565b5060a0810151613c5c60a084018263ffffffff169052565b5060c0810151613c7960c084018268ffffffffffffffffff169052565b5060e0810151613c9660e084018268ffffffffffffffffff169052565b506101008181015164ffffffffff81168483015250506101208181015164ffffffffff81168483015250506101408181015163ffffffff8116848301526106e0565b61016081016134d78284613bb5565b60008083601f840112613cf957600080fd5b50813567ffffffffffffffff811115613d1157600080fd5b6020830191508360208260051b85010111156135e057600080fd5b60008060008060008060008060e0898b031215613d4857600080fd5b606089018a811115613d5957600080fd5b8998503567ffffffffffffffff80821115613d7357600080fd5b613d7f8c838d0161359e565b909950975060808b0135915080821115613d9857600080fd5b613da48c838d01613ce7565b909750955060a08b0135915080821115613dbd57600080fd5b50613dca8b828c01613ce7565b999c989b50969995989497949560c00135949350505050565b60006101008201905063ffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401525068ffffffffffffffffff60a08401511660a083015260c0830151613e5260c084018261ffff169052565b5060e08301516126a360e08401827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169052565b67ffffffffffffffff811681146126bb57600080fd5b80356111e481613e82565b600080600080600060808688031215613ebb57600080fd5b8535613ec681613e82565b9450602086013567ffffffffffffffff811115613ee257600080fd5b613eee8882890161359e565b9095509350506040860135613f0281613a32565b949793965091946060013592915050565b600067ffffffffffffffff821115613f2d57613f2d61372b565b5060051b60200190565b600082601f830112613f4857600080fd5b81356020613f5d613f5883613f13565b613784565b82815260059290921b84018101918181019086841115613f7c57600080fd5b8286015b84811015613fa0578035613f93816136a7565b8352918301918301613f80565b509695505050505050565b803560ff811681146111e457600080fd5b60008060008060008060c08789031215613fd557600080fd5b863567ffffffffffffffff80821115613fed57600080fd5b613ff98a838b01613f37565b9750602089013591508082111561400f57600080fd5b61401b8a838b01613f37565b965061402960408a01613fab565b9550606089013591508082111561403f57600080fd5b61404b8a838b016137d3565b945061405960808a01613e98565b935060a089013591508082111561406f57600080fd5b5061407c89828a016137d3565b9150509295509295509295565b60006020828403121561409b57600080fd5b81356136a0816136a7565b600181811c908216806140ba57607f821691505b6020821081036140f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561060f57600081815260208120601f850160051c810160208610156141205750805b601f850160051c820191505b818110156108975782815560010161412c565b67ffffffffffffffff8311156141575761415761372b565b61416b8361416583546140a6565b836140f9565b6000601f8411600181146141bd57600085156141875750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355614253565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101561420c57868501358255602094850194600190920191016141ec565b5086821015614247577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b80516111e481613a4f565b60006020828403121561427757600080fd5b81516136a081613a4f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6bffffffffffffffffffffffff8281168282160390808211156126a3576126a36142b1565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614336576143366142b1565b5060010190565b6000610160823603121561435057600080fd5b61435861375a565b823567ffffffffffffffff81111561436f57600080fd5b61437b368286016137d3565b82525060208301356020820152614394604084016136c9565b60408201526143a5606084016138b8565b60608201526143b660808401613a66565b60808201526143c760a08401613e98565b60a08201526143d860c08401613e98565b60c08201526143e960e08401613a44565b60e08201526101006143fc818501613a71565b9082015261012061440e848201613e98565b908201526101406144208482016136c9565b9082015292915050565b60006020828403121561443c57600080fd5b81356136a081613e82565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261447c57600080fd5b83018035915067ffffffffffffffff82111561449757600080fd5b6020019150368190038213156135e057600080fd5b6000602082840312156144be57600080fd5b6136a082613a71565b6000602082840312156144d957600080fd5b81356136a081613a32565b73ffffffffffffffffffffffffffffffffffffffff8a8116825267ffffffffffffffff8a166020830152881660408201526102406060820181905281018690526000610260878982850137600083890182015261ffff8716608084015260a0830186905263ffffffff851660c0840152601f88017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016830101905061305660e0830184613bb5565b60ff81811683821601908111156134d7576134d76142b1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600060ff8316806145e7576145e76145a5565b8060ff84160491505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8183823760009101908152919050565b828152606082602083013760800192915050565b80820281158282048414176134d7576134d76142b1565b818103818111156134d7576134d76142b1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b63ffffffff8181168382160190808211156126a3576126a36142b1565b600061012063ffffffff808d1684528b6020850152808b166040850152508060608401526146ef8184018a6139b5565b9050828103608084015261470381896139b5565b905060ff871660a084015282810360c08401526147208187613629565b905067ffffffffffffffff851660e08401528281036101008401526147458185613629565b9c9b505050505050505050505050565b805169ffffffffffffffffffff811681146111e457600080fd5b600080600080600060a0868803121561478757600080fd5b61479086614755565b94506020860151935060408601519250606086015191506147b360808701614755565b90509295509295909350565b600082601f8301126147d057600080fd5b813560206147e0613f5883613f13565b82815260059290921b840181019181810190868411156147ff57600080fd5b8286015b84811015613fa05780358352918301918301614803565b600082601f83011261482b57600080fd5b8135602061483b613f5883613f13565b82815260059290921b8401810191818101908684111561485a57600080fd5b8286015b84811015613fa057803567ffffffffffffffff81111561487e5760008081fd5b61488c8986838b01016137d3565b84525091830191830161485e565b600080600080600060a086880312156148b257600080fd5b853567ffffffffffffffff808211156148ca57600080fd5b6148d689838a016147bf565b965060208801359150808211156148ec57600080fd5b6148f889838a0161481a565b9550604088013591508082111561490e57600080fd5b61491a89838a0161481a565b9450606088013591508082111561493057600080fd5b61493c89838a0161481a565b9350608088013591508082111561495257600080fd5b5061495f8882890161481a565b9150509295509295909350565b60006bffffffffffffffffffffffff8084168061498b5761498b6145a5565b92169190910492915050565b6bffffffffffffffffffffffff8181168382160190808211156126a3576126a36142b1565b6bffffffffffffffffffffffff8181168382160280821691908281146149e4576149e46142b1565b505092915050565b67ffffffffffffffff8181168382160190808211156126a3576126a36142b1565b808201808211156134d7576134d76142b1565b600082614a2f57614a2f6145a5565b500490565b60006101208b835273ffffffffffffffffffffffffffffffffffffffff8b16602084015267ffffffffffffffff808b166040850152816060850152614a7b8285018b6139b5565b91508382036080850152614a8f828a6139b5565b915060ff881660a085015283820360c0850152614aac8288613629565b90861660e085015283810361010085015290506147458185613629565b80516111e4816136a7565b80516111e48161389e565b80516111e481613e82565b80516111e481613a32565b805164ffffffffff811681146111e457600080fd5b60006101608284031215614b1d57600080fd5b614b2561375a565b82518152614b3560208401614ac9565b6020820152614b4660408401614ad4565b6040820152614b5760608401614ac9565b6060820152614b6860808401614adf565b6080820152614b7960a08401614aea565b60a0820152614b8a60c0840161425a565b60c0820152614b9b60e0840161425a565b60e0820152610100614bae818501614af5565b90820152610120614bc0848201614af5565b90820152610140614bd2848201614aea565b908201529392505050565b64ffffffffff8181168382160190808211156126a3576126a36142b1565b6000610200808352614c0f8184018a613629565b90508281036020840152614c238189613629565b6bffffffffffffffffffffffff88811660408601528716606085015273ffffffffffffffffffffffffffffffffffffffff861660808501529150614c6c905060a0830184613bb5565b979650505050505050565b60008060408385031215614c8a57600080fd5b825160078110614c9957600080fd5b60208401519092506138f18161389e56fea164736f6c6343000813000a",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

