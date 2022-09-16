const { ethers } = require("hardhat")

async function main() {
    const LISHN = await ethers.getContractFactory("LISHN")
    const lishn = await LISHN.deploy("LISHN", "LISHN")

    await lishn.deployed()
    console.log(`Contract Successfully deployed to ${lishn.address}`)

    const newItemId = await lishn.mint("https://ipfs.io/ipfs/QmYg4JTaSrmDvxGr5nF6HVLCUFkWVJaYbkrDuEsyk1AXkn")
    console.log(`NFT minted successfully! :: ${newItemId}`)

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });