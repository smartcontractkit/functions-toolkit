import { startLocalFunctionsTestnet } from '../../src'
import { ExampleFunctionsConsumerSource } from './contracts/FunctionsConsumerSource'

import path from 'path'

import { Wallet, providers, ContractFactory, utils } from 'ethers'

import type { GetFunds } from '../../src'

import type { Contract } from 'ethers'

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
    port,
  )

  const provider = new providers.JsonRpcProvider(`http://127.0.0.1:${port}/`)
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

  const [user_A, user_B_NoLINK, subFunder] = createTestWallets(port)

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

const createTestWallets = (port = 8545): Wallet[] => {
  const wallets: Wallet[] = []
  const provider = new providers.JsonRpcProvider(`http://127.0.0.1:${port}`)

  // these are random private keys provided by anvil
  wallets.push(
    new Wallet('59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d').connect(
      provider,
    ),
  )
  wallets.push(
    new Wallet('5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a').connect(
      provider,
    ),
  )
  wallets.push(
    new Wallet('7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6').connect(
      provider,
    ),
  )

  return wallets
}
