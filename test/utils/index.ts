import { startLocalFunctionsTestnet } from '../../src'
import { ExampleFunctionsConsumerSource } from './contracts/FunctionsConsumerSource'

import path from 'path'

import { Wallet, providers, ContractFactory, utils } from 'ethers'

import type { GetFunds } from '../../src'

import type { Contract } from 'ethers'
// import type { Server } from 'ganache'

export const setupLocalTestnetFixture = async (
  port: number,
): Promise<{
  donId: string
  linkTokenContract: Contract
  linkTokenAddress: string
  functionsCoordinator: Contract
  functionsRouterAddress: string
  exampleConsumer: Contract
  exampleConsumerAddress: string
  close: () => Promise<void>
  user_A: Wallet
  user_B_NoLINK: Wallet
  subFunder: Wallet
  getFunds: GetFunds
}> => {
  const localFunctionsTestnet = await startLocalFunctionsTestnet(
    path.join(__dirname, 'testSimulationConfig.ts'),
    // {
    //   logging: {
    //     debug: false,
    //     verbose: false,
    //     quiet: true,
    //   },
    // },
    port,
  )

  const provider = new providers.JsonRpcProvider(`http://localhost:${port}/`)
  const admin = new Wallet(localFunctionsTestnet.adminWallet.privateKey, provider)
  const functionsTestConsumerContractFactory = new ContractFactory(
    ExampleFunctionsConsumerSource.abi,
    ExampleFunctionsConsumerSource.bytecode,
    admin,
  )
  const exampleConsumer = await functionsTestConsumerContractFactory
    .connect(admin)
    .deploy(
      localFunctionsTestnet.functionsRouterContract.address,
      utils.formatBytes32String(localFunctionsTestnet.donId),
    )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_admin, user_A, user_B_NoLINK, subFunder, _] = createTestWallets(
    // localFunctionsTestnet.server,
    port,
  )

  const juelsAmount = BigInt(utils.parseUnits('100', 'ether').toString())
  await localFunctionsTestnet.getFunds(user_A.address, {
    juelsAmount,
  })
  await localFunctionsTestnet.getFunds(subFunder.address, {
    juelsAmount,
  })

  return {
    donId: localFunctionsTestnet.donId,
    linkTokenContract: localFunctionsTestnet.linkTokenContract,
    linkTokenAddress: localFunctionsTestnet.linkTokenContract.address,
    functionsCoordinator: localFunctionsTestnet.functionsMockCoordinatorContract,
    functionsRouterAddress: localFunctionsTestnet.functionsRouterContract.address,
    exampleConsumer: exampleConsumer,
    exampleConsumerAddress: exampleConsumer.address,
    close: localFunctionsTestnet.close,
    user_A,
    user_B_NoLINK,
    subFunder,
    getFunds: localFunctionsTestnet.getFunds,
  }
}

// const createTestWallets = (server: Server, port = 8545): Wallet[] => {
const createTestWallets = (port = 8545): Wallet[] => {
  // const accounts = server.provider.getInitialAccounts()

  const provider = new providers.JsonRpcProvider(`http://localhost:${port}`)

  const wallets: Wallet[] = []
  for (let i = 0; i < 4; i++) {
    // const randomWallet = Wallet.createRandom().connect(provider)
    wallets.push(Wallet.createRandom().connect(provider))
  }

  return wallets
}
