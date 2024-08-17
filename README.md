# Advanced-Polygon-Project-1
Deploy an NFT collection on the Ethereum blockchain, map the collection to a polygon, and transfer assets over the polygon bridge.<br />
rawrNFT is an ERC721A compliant NFT contract that allows the owner to mint NFTs with specific URLs and prompts. The contract is built using Solidity and leverages the OpenZeppelin library for ownership management. Additionally, this project includes scripts to deploy and interact with the contract using Hardhat.

# Description

In this module, we will be creating an NFT collection using the Lexica (AI-generated images) software, once we have created we will upload it on IPFS (InterPlanetary File System) using the pinata cloud software. We will copy the base URL of the IPFS for future use. We deploy the NFT collection to the sepolia Testnet network, once it is done we will map this to the polygon Amoy network. Polygon is similar to Ethereum but is built on top of Ethereum with updated features. In the code, we check the hardhat configurations and we add the networks of sepolia and Amoy. At first, we implement the deploy.js to deploy our code on the sepolia network, after that we will mint the tokens. Now it is time to map to the polygon network, for this, we implement the depositTransfer.js to approve the particular token, wallet, and fxERC721A address. Once it is validated the confirmation pops up on the console, and the particular tokens will be transferred to the polygon network. The balance will be fetched successfully once it is approved and deposited to the polygon mumbai network. In this way, we will map our NFT collection and transfer the assets over the polygon bridge.

## ERC721A
rawrNFT is built using the ERC721A standard, which is a more gas-efficient implementation of the ERC721 standard. ERC721A allows for batch minting of multiple tokens in a single transaction, significantly reducing the gas cost per token when compared to the traditional ERC721 standard. This efficiency makes ERC721A an ideal choice for projects looking to mint large quantities of NFTs.
## Bridging from Sepolia to Amoy
The rawrNFT project includes functionality to bridge NFTs from the Sepolia test network to the Amoy network. This process involves:

Approval for All: Setting approval for the bridging contract to manage the NFTs on behalf of the user.
Depositing Tokens: Depositing NFTs into the bridging contract, which then handles the transfer to the destination network. The bridging process ensures that NFTs can be transferred between networks securely and efficiently, allowing for greater flexibility and reach of the NFT project.

# Getting Started
To run the code you can use gitpod online platform using the link https://www.gitpod.io/ or your VS Code. 
We install all the dependencies for the hardhat using the `npm i` command.
   
# Deploying the ERC721 Contract
Before deploying, make sure to paste the private key of our wallet in the .env file i.e. "PRIVATE_KEY= 'your wallet private key'". Run the following command to deploy the ERC721 contract to the sepolia Ethereum Testnet: <br />
`npx hardhat run scripts/deploy.js --network sepolia `

## Note:
After deploying the address will generated. So, copy that address into contarctAddress.js(stored in metadata folder) and also in MINT.js(stored in scripts folder) and getBalance.js(also in scripts folder).

The script will deploy the contract.

# Batch Mint NFTs
Run the following command to MINT NFTs using the deployed ERC721 contract:<br />
`npx hardhat run scripts/mint.js --network sepolia`

# Approve and Deposit NFTs to Polygon Amoy Testnet
Edit the depositTransfer.js script with necessary details. Run the following commands to approve and deposit the minted NFTs from Ethereum testnet sepolia.<br />
`npx hardhat run scripts/approveDeposit.js --network sepolia` <br />
You use polygonscan amoy or sepolia etherscan to check the transaction details and the balance.

# Checking the balance of the wallet
Run the following command to get the balance of the particular wallet address<br />

`npx hardhat run scripts/getBalance.js --network amoy`

# Authors

Gaurav Sharma

# License
This project is licensed under the MIT License - see the LICENSE.md file for details
