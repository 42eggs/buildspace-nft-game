const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("NFTGame");
    const gameContract = await gameContractFactory.deploy(
        ["Leo", "Aang", "Pikachu", "Doggo", "Dragon"], // Names
        [
            "https://i.imgur.com/pKd5Sdk.png", // Images
            "https://i.imgur.com/xVu4vFL.png",
            "https://i.imgur.com/WMB6g9u.png",
            "https://i.imgur.com/7XNfYdH.jpeg",
            "https://i.imgur.com/dxEjIsT.jpeg",
        ],
        [100, 200, 300, 70, 500], // HP values
        [100, 50, 25, 80, 750], // Attack damage values

        "Roko's Basilisk", // Boss name
        "https://i.imgur.com/GezqBeG.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to: %s\n", gameContract.address);

    let txn;

    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1\n");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2\n");

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3\n");

    txn = await gameContract.mintCharacterNFT(3);
    await txn.wait();
    console.log("Minted NFT #4\n");

    txn = await gameContract.mintCharacterNFT(4);
    await txn.wait();
    console.log("Minted NFT #5\n");

    console.log("Done deploying and minting!");
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
