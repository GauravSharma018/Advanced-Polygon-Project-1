# Advanced-Polygon-Project-1
Deploy an NFT collection on the Ethereum blockchain, map the collection to a polygon, and transfer assets over the polygon bridge.

# Description

In this module, we will be creating an NFT collection using the Lexica (AI-generated images) software, once we have created we will upload it on IPFS (InterPlanetary File System) using the pinata cloud software. We will copy the base URL of the IPFS for future use. We deploy the NFT collection to the sepolia Testnet network, once it is done we will map this to the polygon Amoy network. Polygon is similar to Ethereum but is built on top of Ethereum with updated features. In the code, we check the hardhat configurations and we add the networks of sepolia and Amoy. At first, we implement the deploy.js to deploy our code on the sepolia network, after that we will mint the tokens. Now it is time to map to the polygon network, for this, we implement the depositTransfer.js to approve the particular token, wallet, and fxERC721A address. Once it is validated the confirmation pops up on the console, and the particular tokens will be transferred to the polygon network. The balance will be fetched successfully once it is approved and deposited to the polygon mumbai network. In this way, we will map our NFT collection and transfer the assets over the polygon bridge.


# Getting Started

1) We install all the dependencies for the hardhat using the "npm i" command.
2) We paste the private key of our wallet in the .env file.
3) We run the "npx hardhat run scripts/deploy.js --network sepolia" to deploy the NFT collection on the sepolia network.
4) We run the  "npx hardhat run scripts/Mint.js --network sepolia" to mint the tokens on the sepolia network and transfer them to the polygon network.
5) We run the  "npx hardhat run scripts/depositTransfer.js --network sepolia" to validate the token address, and wallet address to connect to the polygon network.
6) We use polygonscan amoy to check the transaction details and the balance.
7) The balance will be fetched successfully and will be printed on the console as Indian NFT balance is 5 tokens.


# Authors

Gaurav Sharma
