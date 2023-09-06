import { Wallet, providers } from 'ethers'
import type { Server } from 'ganache'

export const createTestWallets = (server: Server, port = 8545): Wallet[] => {
  const accounts = server.provider.getInitialAccounts()
  const [addr0, addr1, addr2, addr3, addr4, addr5] = Object.keys(accounts)

  const wallets: Wallet[] = []
  const provider = new providers.JsonRpcProvider(`http://localhost:${port}`)

  for (const addr of Object.keys(accounts)) {
    wallets.push(new Wallet(accounts[addr].secretKey.slice(2), provider))
  }

  return wallets
}
