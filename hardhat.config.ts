import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import dotenv from "dotenv"

dotenv.config()

import "hardhat-deploy"

const config: HardhatUserConfig = {
  defaultNetwork: "devnet",
  solidity: "0.8.24",
  networks: {
    // hardhat: {},
    devnet: {
      url: "https://devnet.coti.io/rpc",
      chainId: 13068200,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!]
    },
  },
  namedAccounts: {
    deployer: {
      default: process.env.DEPLOYER_PUBLIC_KEY!
    }
  },
  deterministicDeployment: {
    default: {
      factory: "0x4e59b44847b379578588920cA78FbF26c0B4956C",
      deployer: process.env.DEPLOYER_PUBLIC_KEY!,
      funding: "0",
      signedTx: ""
    }
  }
}

export default config
