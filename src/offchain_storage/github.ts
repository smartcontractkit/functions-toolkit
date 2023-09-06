import axios from 'axios'

export const createGist = async (githubApiToken: string, content: string): Promise<string> => {
  if (typeof content !== 'string') {
    throw new Error('Gist content must be a string')
  }

  if (!githubApiToken) {
    throw new Error('Github API token is required')
  }

  await checkTokenGistScope(githubApiToken)

  const headers = {
    Authorization: `token ${githubApiToken}`,
  }

  // construct the API endpoint for creating a Gist
  const url = 'https://api.github.com/gists'
  const body = {
    public: false,
    files: {
      [`encrypted-functions-request-data-${Date.now()}.json`]: {
        content: content,
      },
    },
  }

  try {
    const response = await axios.post(url, body, { headers })
    const gistUrl = response.data.html_url + '/raw'
    return gistUrl
  } catch (error) {
    throw Error(`Failed to create Gist: ${error}`)
  }
}

const checkTokenGistScope = async (githubApiToken: string) => {
  const headers = {
    Authorization: `Bearer ${githubApiToken}`,
  }

  let response
  try {
    response = await axios.get('https://api.github.com/user', { headers })
  } catch (error) {
    throw new Error(
      `Failed to get token data. Check that your access token is valid. Error: ${error}`,
    )
  }

  // Github's newly-added fine-grained token do not currently allow for verifying that the token scope is restricted to Gists.
  // This verification feature only works with classic Github tokens and is otherwise ignored
  const scopes = response.headers['x-oauth-scopes']?.split(', ')

  if (scopes && scopes?.[0] !== 'gist') {
    throw Error('The provided Github API token does not have permissions to read and write Gists')
  }

  if (scopes && scopes.length > 1) {
    console.log(
      'WARNING: The provided Github API token has additional permissions beyond reading and writing to Gists',
    )
  }

  return true
}

export const deleteGist = async (githubApiToken: string, gistURL: string) => {
  const headers = {
    Authorization: `Bearer ${githubApiToken}`,
  }

  if (!githubApiToken) {
    throw Error('Github API token is required')
  }

  if (!gistURL) {
    throw Error('Github Gist URL is required')
  }

  const matchArr = gistURL.match(/gist\.github\.com\/[^\/]+\/([a-zA-Z0-9]+)/)

  if (!matchArr || !matchArr[1]) {
    throw Error('Invalid Gist URL')
  }

  const gistId = matchArr[1]

  try {
    await axios.delete(`https://api.github.com/gists/${gistId}`, { headers })
    return true
  } catch (error: any) {
    throw Error(`Error deleting Gist ${gistURL} : ${error}`)
  }
}
