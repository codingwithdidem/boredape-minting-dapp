const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('../scripts/whitelist.js')

const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL)
import { config } from '../dapp.config'

const contract = require('../artifacts/contracts/BoredApe.sol/BoredApe.json')
const nftContract = new web3.eth.Contract(contract.abi, config.contractAddress)

// Calculate merkle root from the whitelist array
const leafNodes = whitelist.map((addr) => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
const root = merkleTree.getRoot()

export const getTotalMinted = async () => {
  const totalMinted = await nftContract.methods.totalSupply().call()
  return totalMinted
}

export const getMaxSupply = async () => {
  const maxSupply = await nftContract.methods.maxSupply().call()
  return maxSupply
}

export const isPausedState = async () => {
  const paused = await nftContract.methods.paused().call()
  return paused
}

export const isPublicSaleState = async () => {
  const publicSale = await nftContract.methods.publicM().call()
  return publicSale
}

export const isPreSaleState = async () => {
  const preSale = await nftContract.methods.presaleM().call()
  return preSale
}

export const getPrice = async () => {
  const price = await nftContract.methods.price().call()
  return price
}
