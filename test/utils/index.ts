import { startLocalFunctionsTestnet } from '../../src'
import { ExampleFunctionsConsumerSource } from './contracts/FunctionsConsumerSource'

import path from 'path'

import { Wallet, ContractFactory, encodeBytes32String, parseUnits, JsonRpcProvider } from 'ethers'
// import { ethers } from '@nomicfoundation/hardhat-ethers'
// import '@nomiclabs/hardhat-ethers'

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
    // {
    //   logging: {
    //     debug: false,
    //     verbose: false,
    //     quiet: true,
    //   },
    // },
    port,
  )

  const provider = new JsonRpcProvider(`http://127.0.0.1:${port}`)
  const admin = new Wallet(localFunctionsTestnet.adminWallet.privateKey, provider)
  const functionsTestConsumerContractFactory = new ContractFactory(
    ExampleFunctionsConsumerSource.abi,
    ExampleFunctionsConsumerSource.bytecode,
    admin,
  )
  const exampleConsumer = (await functionsTestConsumerContractFactory
    .connect(admin)
    .deploy(
      localFunctionsTestnet.functionsRouterContract.address,
      encodeBytes32String(localFunctionsTestnet.donId),
    )) as Contract

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_admin, user_A, user_B_NoLINK, subFunder, _] = createTestWallets(
    // localFunctionsTestnet.server,
    port,
  )

  const juelsAmount = BigInt(parseUnits('100', 'ether').toString())
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

// const createTestWallets = (server: Server, port = 8545): Wallet[] => {
const createTestWallets = (port = 8545): Wallet[] => {
  // const accounts = server.provider.getInitialAccounts()

  const provider = new JsonRpcProvider(`http://127.0.0.1:${port}`)

  const wallets: Wallet[] = []
  for (let i = 0; i < 4; i++) {
    const randomWallet = new Wallet(Wallet.createRandom().privateKey, provider)
    wallets.push(randomWallet)
  }

  return wallets
}
