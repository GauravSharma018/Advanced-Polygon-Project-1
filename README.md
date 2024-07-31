# Advanced-Polygon-Project-1
Deploy an NFT collection on the Ethereum blockchain, map the collection to a polygon, and transfer assets over the polygon bridge.

# Description

In this module, we will be creating an NFT collection using the Lexica (AI-generated images) software, once we have created we will upload it on IPFS (InterPlanetary File System) using the pinata cloud software. We will copy the base URL of the IPFS for future use. We deploy the NFT collection to the sepolia Testnet network, once it is done we will map this to the polygon Amoy network. Polygon is similar to Ethereum but is built on top of Ethereum with updated features. In the code, we check the hardhat configurations and we add the networks of sepolia and Amoy. At first, we implement the deploy.js to deploy our code on the sepolia network, after that we will mint the tokens. Now it is time to map to the polygon network, for this, we implement the depositTransfer.js to approve the particular token, wallet, and fxERC721A address. Once it is validated the confirmation pops up on the console, and the particular tokens will be transferred to the polygon network. The balance will be fetched successfully once it is approved and deposited to the polygon mumbai network. In this way, we will map our NFT collection and transfer the assets over the polygon bridge.


# Getting Started
To run the code you can use gitpod online platform using the link https://www.gitpod.io/ or your VS Code. 
We install all the dependencies for the hardhat using the "npm i" command.
   
# Deploying the ERC721 Contract
Before deploying, make sure to paste the private key of our wallet in the .env file i.e. "PRIVATE_KEY= 'your wallet private key'". Run the following command to deploy the ERC721 contract to the sepolia Ethereum Testnet:
`npx hardhat run scripts/DEPLOY.js --network sepolia `

## Note:
After deploying the address will generate. So, copy that address into contarctAddress.js(stored in metadata folder) and also in MINT.js(stored in scripts folder)

The script will deploy the contract

# Batch Mint NFTs
Run the following command to MINT NFTs using the deployed ERC721 contract:
`npx hardhat run scripts/Mint.js --network sepolia`

# Approve and Deposit NFTs to Polygon Amoy Testnet
Edit the depositTransfer.js script with necessary details. Run the following commands to approve and deposit the minted NFTs from Ethereum testnet sepolia.
`npx hardhat run scripts/depositTransfer.js --network sepolia`
You use polygonscan amoy or sepolia etherscan to check the transaction details and the balance.

# Checking the balance of the wallet
Run the following command to get the balance of the particular wallet address

`npx hardhat run scripts/getBalance.js --network sepolia`

# Authors

Gaurav Sharma
