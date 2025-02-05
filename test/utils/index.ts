import { startLocalFunctionsTestnet } from '../../src'
import { ExampleFunctionsConsumerSource } from './contracts/FunctionsConsumerSource'

import path from 'path'

import { Wallet, JsonRpcProvider, ContractFactory, encodeBytes32String, parseUnits } from 'ethers'

import type { GetFunds } from '../../src'

import type { BaseContract, Contract } from 'ethers'

export const setupLocalTestnetFixture = async (
  port: number,
): Promise<{
  donId: string
  linkTokenContract: BaseContract
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

  const provider = new JsonRpcProvider(`http://127.0.0.1:${port}/`)
  const admin = new Wallet(localFunctionsTestnet.adminWallet.privateKey, provider)
  console.log('setupLocalTestnetFixture 2: ', await admin.getNonce(), admin.address)
  const functionsTestConsumerContractFactory = new ContractFactory(
    ExampleFunctionsConsumerSource.abi,
    ExampleFunctionsConsumerSource.bytecode,
    admin,
  )
  const exampleConsumer = await functionsTestConsumerContractFactory
    .connect(admin)
    .deploy(
      await localFunctionsTestnet.functionsRouterContract.getAddress(),
      encodeBytes32String(localFunctionsTestnet.donId),
    )
  await exampleConsumer.waitForDeployment()
  console.log('setupLocalTestnetFixture 3: ', await admin.getNonce(), admin.address)

  const [user_A, user_B_NoLINK, subFunder] = createTestWallets(port)

  console.log('setupLocalTestnetFixture 4: ', await admin.getNonce(), admin.address)
  const juelsAmount = BigInt(parseUnits('100', 'ether').toString())
  await localFunctionsTestnet.getFunds(user_A.address, {
    juelsAmount,
  })
  await localFunctionsTestnet.getFunds(subFunder.address, {
    juelsAmount,
  })
  console.log('setupLocalTestnetFixture 5')

  return {
    donId: localFunctionsTestnet.donId,
    linkTokenContract: localFunctionsTestnet.linkTokenContract,
    linkTokenAddress: await localFunctionsTestnet.linkTokenContract.getAddress(),
    functionsCoordinator: localFunctionsTestnet.functionsMockCoordinatorContract,
    functionsRouterAddress: await localFunctionsTestnet.functionsRouterContract.getAddress(),
    exampleConsumer: exampleConsumer as Contract,
    exampleConsumerAddress: await exampleConsumer.getAddress(),
    close: localFunctionsTestnet.close,
    user_A,
    user_B_NoLINK,
    subFunder,
    getFunds: localFunctionsTestnet.getFunds,
  }
}

const createTestWallets = (port = 8545): Wallet[] => {
  const wallets: Wallet[] = []
  const provider = new JsonRpcProvider(`http://127.0.0.1:${port}`)

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
