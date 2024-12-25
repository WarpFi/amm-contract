import { ethers, upgrades } from 'hardhat'

// import NftDescriptorOffchainArtifact from '../artifacts/contracts/NonfungibleTokenPositionDescriptorOffChain.sol/NonfungibleTokenPositionDescriptorOffChain.json'
import nonPosition from'../artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'

async function main() {
  const [owner] = await ethers.getSigners()
  console.log('owner', owner.address)

  const NonfungiblePositionManager = await ethers.getContractFactoryFromArtifact(nonPosition)
  // const baseTokenUri = 'https://nft.pancakeswap.com/v3/'
  const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(
    "0xD8aa3087C251e6916B152b203914c8bc028D0BA2",
    "0x23e258bA1bF6b13Dee9B6BF12aDfABF796170F39",
    "0xC5f15624b4256C1206e4BB93f2CCc9163A75b703",
    "0xE0204D2fe686926929D37cBAb5af75ADe7637A36"
  )
  console.log('nonfungiblePositionManager', nonfungiblePositionManager.address)
  // console.log('NonfungibleTokenPositionDescriptor deployed at', nonfungibleTokenPositionDescriptor.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
