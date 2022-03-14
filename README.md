# Bored Ape NFT Minting dApp ( Udemy The Fullstack Nft Minting Website Course)

This a complete example of fullstack NFT minting dApp. **BoredApe** is built with the purpose of providing an _entry point for future NFT Minting Website_ projects.

To see the demo check this link:

[![vercel](https://img.shields.io/badge/vercel-5624d0?style=for-the-badge&logo=vercel&logoColor=white)](https://boredape-minting-dapp.vercel.app/)


To better understand take my course:

[![udemy](https://img.shields.io/badge/udemy-5624d0?style=for-the-badge&logo=udemy&logoColor=white)](https://www.udemy.com/course/the-fullstack-nft-minting-website-course/?referralCode=5C50F6A55E29FC7E0107)

## Installation

You can use **the default BoredApe smart contract** and play with it or you can also put **your own smart contract** and make changes as needed. Remember to change `.env` file with your own variables.

Use the default **BoredApe Smart Contract:**

```bash

  # Clone the repository and change directory into it
  git clone https://github.com/codingwithdidem/boredape-minting-dapp.git
  cd boredape-nft-minting-dapp

  npm install            # Download packages
  npm run dev            # Run the dev server
```

## Making Changes

First of all change .env variables with yours. And update the `dapp.config.js` file according to your needs.

If you want to make changes on BoredApe smart contract, you can find BoredApe.sol inside `/contracts`folder. After making changes you need to recompile your smart contract using `npx hardhat compile` command. It will recompile the smart contract and create & update `/artifacts` folder. Smart contract ABI is also in this folder.

After making changes you need to update the `scripts/whitelist.js` with your whitelisted users accounts and deploy & verify your smart contract on ethereum blockchain. Use the scripts I created for you
to do that. You can find the _deploy_ & _verify_ scripts inside `/scripts`folder.

```bash
  # This command will deploy your smart contract on rinkeby test network
  npx hardhat run scripts/deployContract.js --network rinkeby

  # This command will verify your smart contract on rinkeby etherscan
  npx hardhat run scripts/verifyContract.js --network rinkeby
```

\*\* If you want to use a different network you need to pass its name instead of rinkeby. Also make sure you configured it
in `hardhat.config.js` file as a network option.

Finally update the `/utils/interact.js` file so that it uses the related functions from your updated contract. Also change the contract address and the imported ABI in this file with your newly deployed contract.

## Deploying on mainnet

When you are done with making changes and your minting dapp is just as you wanted it is time to deploy on ethereum mainnet.
To do that;

- Make sure you changed all env variables with yours. And also for the network you need to chose ethereum mainnet.
- Update `hardhat.config.js` so that as network option you use _mainnet_ not _rinkeby_. [hardhat](https://hardhat.org/tutorial/deploying-to-a-live-network.html)
- While deploying your contract with hardhat you need to use mainnet as network-name

```bash
  # This command will deploy your smart contract on ethereum mainnet
  npx hardhat run scripts/deployContract.js --network mainnet

  # This command will verify your smart contract on mainnet etherscan
  npx hardhat run scripts/verifyContract.js --network mainnet
```

## Tech Stack

**Client:** React, TailwindCSS, web3.js

**Server:** Alchemy, NextJS, Hardhat

## Support

For support, email codingwithdidem@gmail.com

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/codewithdidem)
