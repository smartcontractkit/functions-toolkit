import nock from 'nock'

export const mockApi = (): nock.Scope =>
  nock('http://mockurl.com')
    .get('/')
    .reply(200, () => ({ response: 'test response' }), [
      'Content-Type',
      'application/json',
      'Connection',
      'close',
      'Vary',
      'Accept-Encoding',
      'Vary',
      'Origin',
    ])
    .get('/error')
    .reply(400)

export const mockGithubApi_HappyPath = (): nock.Scope => {
  return nock('https://api.github.com')
    .get('/user')
    .reply(
      200,
      {
        // github response stub
        html_url: 'https://github.com/octocat',
        type: 'User',
      },
      {
        // headers
        'x-oauth-scopes': 'gist, some-scope',
      },
    )
    .post('/gists')
    .reply(200, { html_url: 'https://fake-github.com/gists/1234' })
    .delete('/gists/abcde12345')
    .reply(200)
}

export const mockGithubApi_PATScopeFails = (): nock.Scope => {
  return nock('https://api.github.com').get('/user').reply(401)
}

export const mockGithubApi_ValidToken_InvalidScope = (): nock.Scope => {
  return nock('https://api.github.com').get('/user').reply(
    200,
    {
      // github response stub
      html_url: 'https://github.com/octocat',
      type: 'User',
    },
    {
      // headers
      'x-oauth-scopes': 'no-gist, some-scope',
    },
  )
}

export const mockGithubApi_GistFail = (): nock.Scope => {
  return nock('https://api.github.com')
    .get('/user')
    .reply(200, {
      html_url: 'https://github.com/octocat',
      type: 'User',
    })
    .post('/gists')
    .reply(402)
}

export const mockGithubApi_DeleteGist_Errors = (): nock.Scope => {
  return nock('https://api.github.com').delete('/gists/12345abcdef').reply(401)
}
