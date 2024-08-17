require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { POLYGON_API_URL, SEPOLIA_API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon_amoy: {
      url: "https://polygon-amoy.drpc.org",
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
