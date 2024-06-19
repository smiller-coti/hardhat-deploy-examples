import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;

    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    const res = await deploy('Lock', {
        from: deployer,
        args: [9876543210],
        deterministicDeployment: true
    })

    console.log(res)
}

export default func;