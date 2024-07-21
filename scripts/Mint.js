const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress = "https://1rpc.io/sepolia";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x776824a42a841621761770e328A87C184c3b9595";

  const IndianNFT = await ethers.getContractFactory("police_cop", signer);
  const contract = await IndianNFT.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
