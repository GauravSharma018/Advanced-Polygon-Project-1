const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/police_cop.sol/police_cop.json");

const tokenAddress = "0xA65EF105e53F53634117EC39610559713A3d6019"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xDB9e191ce1584B882c07b343348902Ac76c2F9bE"; // Ethereum public address for the wallet

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
