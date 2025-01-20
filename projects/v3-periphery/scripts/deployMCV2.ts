import { ethers, upgrades } from 'hardhat'

// import NftDescriptorOffchainArtifact from '../artifacts/contracts/NonfungibleTokenPositionDescriptorOffChain.sol/NonfungibleTokenPositionDescriptorOffChain.json'
import nonPosition from'../artifacts/contracts/lens/PancakeInterfaceMulticallV2.sol/PancakeInterfaceMulticallV2.json'
async function main() {
  const [owner] = await ethers.getSigners()
  console.log('owner', owner.address)

  const NonfungiblePositionManager = await ethers.getContractFactoryFromArtifact(nonPosition)
  // const baseTokenUri = 'https://nft.pancakeswap.com/v3/'
  const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(
    
  )
  console.log('PancakeInterfaceMulticall', nonfungiblePositionManager.address)
  // console.log('NonfungibleTokenPositionDescriptor deployed at', nonfungibleTokenPositionDescriptor.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
