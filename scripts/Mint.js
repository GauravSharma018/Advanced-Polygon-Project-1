// This script batch mints ERC721A tokens.
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

   // The  URL of the Sepolia test network
  const networkAddress = "https://ethereum-sepolia.blockpi.network/v1/rpc/public";

   // connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

   // Create a signer (account) 
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract
  const contractAddress = "0x01653DA3fb255de60adBA3D393450AB066383218";

  // Get the contract factory for the contract and attach it to the signer
  const IndianNFT = await ethers.getContractFactory("police_cop", signer);
  const contract = await IndianNFT.attach(contractAddress);

  // Call the mint function to mint 5 tokens
  await contract.mint(5);

  console.log("Successfully minted '5' tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
