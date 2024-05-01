const hre = require("hardhat");

async function main() {
    signer = await hre.ethers.provider.getSigner();
    const contractAddress = "0x5DEDBD3975Fa007F7F084ea0Fd448BD7201842c4"
    const myContract = await hre.ethers.getContractAt("CrowdFunding", contractAddress);
    console.log(await myContract.getCampaigns());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
