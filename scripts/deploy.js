const hre = require("hardhat");

// File system module for reading and writing files
const fs = require("fs");

async function main() {
  const NFT = await hre.ethers.getContractFactory("police_cop");

  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("police cop NFT contract deployed to:", nft.address);

  // export the addresses to metadata/contractAddress.js 
  fs.writeFileSync(
    "metadata/contractAddress.js",
    `
    export const nftAddress = "${nft.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
