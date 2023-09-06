import { createGist, deleteGist } from '../../src'
import {
  mockGithubApi_GistFail,
  mockGithubApi_HappyPath,
  mockGithubApi_PATScopeFails,
  mockGithubApi_ValidToken_InvalidScope,
  mockGithubApi_DeleteGist_Errors,
} from './apiFixture'

describe('Offchain Storage - Gists', () => {
  describe('createGist', () => {
    it('create gist ', async () => {
      mockGithubApi_HappyPath()
      const response: string = await createGist('gh-access-token', ' test GIST!')
      expect(response).toEqual('https://fake-github.com/gists/1234/raw')
    })

    it('throws if gist creation fails ', async () => {
      mockGithubApi_GistFail()

      await expect(async () => {
        await createGist('gh-access-token', ' test GIST!')
      }).rejects.toThrowError(/Failed to create Gist/)
    })

    it('throws if accessing github user token details fails', async () => {
      mockGithubApi_PATScopeFails()

      await expect(async () => {
        await createGist('gh-access-token', ' test GIST!')
      }).rejects.toThrowError(/Check that your access token is valid/)
    })

    it('throws with classic token with no gist in scope', async () => {
      mockGithubApi_ValidToken_InvalidScope()

      await expect(async () => {
        await createGist('gh-access-token', ' test GIST!')
      }).rejects.toThrowError(/does not have permissions to read and write Gists/)
    })

    it('throws an error if content is not a string', async () => {
      await expect(async () => {
        // @ts-ignore
        await createGist('gh-access-token', 1234)
      }).rejects.toThrowError(/Gist content must be a string/)
    })

    it('throws an error if no access token is provided', async () => {
      await expect(async () => {
        // @ts-ignore
        await createGist(undefined, 'test GIST!')
      }).rejects.toThrowError(/Github API token is required/)
    })
  })

  describe('deleteGist', () => {
    it('deletes gist', async () => {
      mockGithubApi_HappyPath()
      const response: boolean = await deleteGist(
        'gh-access-token',
        'https://gist.github.com/fake-user/abcde12345',
      )
      expect(response).toBe(true)
    })

    it('deletes gist with /', async () => {
      mockGithubApi_HappyPath()
      const response: boolean = await deleteGist(
        'gh-access-token',
        'https://gist.github.com/fake-user/abcde12345/',
      )
      expect(response).toBe(true)
    })

    it('deletes gist with /raw', async () => {
      mockGithubApi_HappyPath()
      const response: boolean = await deleteGist(
        'gh-access-token',
        'https://gist.github.com/fake-user/abcde12345/raw',
      )
      expect(response).toBe(true)
    })

    it('deletes gist with /raw/', async () => {
      mockGithubApi_HappyPath()
      const response: boolean = await deleteGist(
        'gh-access-token',
        'gist.github.com/fake-user/abcde12345/raw/',
      )
      expect(response).toBe(true)
    })

    it('deletes gist with #file-filename', async () => {
      mockGithubApi_HappyPath()
      const response: boolean = await deleteGist(
        'gh-access-token',
        'https://gist.github.com/fake-user/abcde12345#file-filename',
      )
      expect(response).toBe(true)
    })

    it('throws an error for an invalid gist URL', async () => {
      await expect(async () => {
        await deleteGist('gh-access-token', 'https://gist.github.com/fake-user')
      }).rejects.toThrowError(/Invalid Gist URL/)
    })

    it('throws on error when github api delete fails', async () => {
      mockGithubApi_DeleteGist_Errors()
      await expect(async () => {
        await deleteGist('gh-access-token', 'https://gist.github.com/fake-user/12345abcdef')
      }).rejects.toThrowError(/Error deleting Gist/)
    })

    it('throws on error no access token provided', async () => {
      await expect(async () => {
        // @ts-ignore
        await deleteGist(undefined, 'https://gist.github.com/etc')
      }).rejects.toThrowError(/Github API token is required/)
    })

    it('throws on error no Gist URL provided', async () => {
      await expect(async () => {
        // @ts-ignore
        await deleteGist('gh-access-token', undefined)
      }).rejects.toThrowError(/ Gist URL is required/)
    })
  })
})
