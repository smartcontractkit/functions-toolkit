require('@nomicfoundation/hardhat-ethers')
require('@nomicfoundation/hardhat-verify')
require('@typechain/hardhat')

module.exports = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
}