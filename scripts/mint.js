const { ethers } = require("hardhat")
const lishnJSON = require("../artifacts/contracts/LISHN.sol/LISHN.json")

async function main() {
    const abi = lishnJSON.abi
    const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_PROJECT_ID)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const signer = wallet.connect(provider)
    const lishn = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
    await lishn.mint("https://ipfs.io/ipfs/Qma6EjA2Z24JDJkz76WTAD4ySHWxReo7nwe7d6NtiuCKa6")

    console.log('NFT Minted!!')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });