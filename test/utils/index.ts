import { startLocalFunctionsTestnet } from '../../src'
import { ExampleFunctionsConsumerSource } from './contracts/FunctionsConsumerSource'

import path from 'path'

import { Wallet, JsonRpcProvider, ContractFactory, ethers, BaseContract } from 'ethers'

import type { GetFunds } from '../../src'

import type { Server } from 'ganache'

export const setupLocalTestnetFixture = async (
  port: number,
): Promise<{
  donId: string
  linkTokenContract: BaseContract
  linkTokenAddress: string
  functionsCoordinator: BaseContract
  functionsRouterAddress: string
  exampleConsumer: BaseContract
  exampleConsumerAddress: string
  close: () => Promise<void>
  user_A: Wallet
  user_B_NoLINK: Wallet
  subFunder: Wallet
  getFunds: GetFunds
}> => {
  const localFunctionsTestnet = await startLocalFunctionsTestnet(
    path.join(__dirname, 'testSimulationConfig.ts'),
    {
      logging: {
        debug: false,
        verbose: false,
        quiet: true,
      },
    },
    port,
  )

  const provider = new JsonRpcProvider(`http://localhost:${port}/`)
  const admin = new Wallet(localFunctionsTestnet.adminWallet.privateKey, provider)
  const functionsTestConsumerContractFactory = new ContractFactory(
    ExampleFunctionsConsumerSource.abi,
    ExampleFunctionsConsumerSource.bytecode,
    admin,
  )
  const exampleConsumer = await functionsTestConsumerContractFactory
    .connect(admin)
    .deploy(
      await localFunctionsTestnet.functionsRouterContract.getAddress(),
      ethers.encodeBytes32String(localFunctionsTestnet.donId),
    )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_admin, user_A, user_B_NoLINK, subFunder, _] = createTestWallets(
    localFunctionsTestnet.server,
    port,
  )

  const juelsAmount = BigInt(ethers.parseUnits('100', 'ether').toString())
  await localFunctionsTestnet.getFunds(user_A.address, {
    juelsAmount,
  })
  await localFunctionsTestnet.getFunds(subFunder.address, {
    juelsAmount,
  })

  return {
    donId: localFunctionsTestnet.donId,
    linkTokenContract: localFunctionsTestnet.linkTokenContract,
    linkTokenAddress: await localFunctionsTestnet.linkTokenContract.getAddress(),
    functionsCoordinator: localFunctionsTestnet.functionsMockCoordinatorContract,
    functionsRouterAddress: await localFunctionsTestnet.functionsRouterContract.getAddress(),
    exampleConsumer: exampleConsumer,
    exampleConsumerAddress: await exampleConsumer.getAddress(),
    close: localFunctionsTestnet.close,
    user_A,
    user_B_NoLINK,
    subFunder,
    getFunds: localFunctionsTestnet.getFunds,
  }
}

const createTestWallets = (server: Server, port = 8545): Wallet[] => {
  const accounts = server.provider.getInitialAccounts()

  const wallets: Wallet[] = []
  const provider = new JsonRpcProvider(`http://localhost:${port}`)

  for (const addr of Object.keys(accounts)) {
    wallets.push(new Wallet(accounts[addr].secretKey.slice(2), provider))
  }

  return wallets
}
