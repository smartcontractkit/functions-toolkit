import nock from 'nock'

export const mockOffchainSecretsEndpoints = (): nock.Scope => {
  return nock('https://offchain.secrets.com')
    .get('/valid1')
    .reply(200, {
      encryptedSecrets: '0x1234567890abcdef',
    })
    .get('/valid2')
    .reply(200, {
      encryptedSecrets: '0x1234567890abcdef',
    })
    .get('/valid3')
    .reply(200, {
      encryptedSecrets: '0x1234567890abcdef',
    })
    .get('/fail')
    .reply(500)
    .get('/invalidJson')
    .reply(200, 'not json')
    .get('/invalidSecretsType')
    .reply(200, {
      invalid: 'invalid',
    })
    .get('/invalidHex')
    .reply(200, {
      encryptedSecrets: '0x1234567890abcdefg',
    })
    .get('/different')
    .reply(200, {
      encryptedSecrets: '0x1234567890abcdef00',
    })
}

const nodeSetSuccessResponse = {
  body: {
    payload: {
      success: true,
    },
  },
}

const nodeSetFailResponse = {
  body: {
    payload: {
      success: false,
    },
  },
}

const exampleStorageListRow1 = {
  slot_id: 0,
  version: 0,
  expiration: 100_000,
}

const exampleStorageListRow2 = {
  slot_id: 1,
  version: 1,
  expiration: 200_000,
}

const nodeListSuccessResponse = {
  body: {
    payload: {
      success: true,
      rows: [exampleStorageListRow1, exampleStorageListRow2],
    },
  },
}

const nodeListFailResponse = {
  body: {
    payload: {
      success: false,
    },
  },
}

export const mockGatewayUrl = (): nock.Scope => {
  return nock('https://dongateway.com')
    .post('/uploadSuccess1')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [nodeSetSuccessResponse, nodeSetSuccessResponse],
          },
        },
      },
    })
    .post('/uploadSuccess2')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [
              nodeSetSuccessResponse,
              nodeSetSuccessResponse,
              nodeSetSuccessResponse,
            ],
          },
        },
      },
    })
    .post('/1NodeFail')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [
              nodeSetSuccessResponse,
              {
                body: {
                  payload: {
                    success: false,
                  },
                },
              },
            ],
          },
        },
      },
    })
    .post('/allNodeFail')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [nodeSetFailResponse, nodeSetFailResponse],
          },
        },
      },
    })
    .post('/listSuccess1')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [nodeListSuccessResponse, nodeListSuccessResponse],
          },
        },
      },
    })
    .post('/listSuccess2')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [
              nodeListSuccessResponse,
              nodeListSuccessResponse,
              nodeListSuccessResponse,
            ],
          },
        },
      },
    })
    .post('/listFailAll')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [nodeListFailResponse],
          },
        },
      },
    })
    .post('/listFail1')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [nodeListSuccessResponse, nodeListFailResponse],
          },
        },
      },
    })
    .post('/listDifferentRowCounts')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [
              {
                body: {
                  payload: {
                    success: true,
                    rows: [exampleStorageListRow1, exampleStorageListRow2],
                  },
                },
              },
              {
                body: {
                  payload: {
                    success: true,
                    rows: [exampleStorageListRow1],
                  },
                },
              },
            ],
          },
        },
      },
    })
    .post('/listDifferentRows')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [
              {
                body: {
                  payload: {
                    success: true,
                    rows: [exampleStorageListRow2],
                  },
                },
              },
              {
                body: {
                  payload: {
                    success: true,
                    rows: [exampleStorageListRow1],
                  },
                },
              },
            ],
          },
        },
      },
    })
    .post('/fail')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: false,
            node_responses: undefined,
          },
        },
      },
    })
    .post('/unexpectedGatewayResponse')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: undefined,
          },
        },
      },
    })
    .post('/0NodeResponses')
    .reply(200, {
      result: {
        body: {
          payload: {
            success: true,
            node_responses: [],
          },
        },
      },
    })
}
