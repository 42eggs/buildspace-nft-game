const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("NFTGame");
    const gameContract = await gameContractFactory.deploy(
        ["Leo", "Aang", "Pikachu", "Doggo", "Dragon"], // Names
        [
            "QmVx79jpJTCvh9B8M6ZNucB4ehxLJyZVNsVqSfrwLwSKCG", // Images
            "QmetNRFG8t55zndy9WDBZfLcW37FGSQYELYAt3poiRWTbL",
            "QmRippRQfe5zwRwudtwEy1YjXYpnQ1pt7dKXNcfu66moUS",
            "Qmc34FJukBF7actu19L9MS6ykKXqkYkFjQXLSjfSKEgJnZ",
            "QmdssaRXaaBdTsPCFEsJb2FpBLcn5jCht8FTVVonZrhZ7Q",
        ],
        [100, 200, 300, 70, 500], // HP values
        [100, 50, 25, 80, 750], // Attack damage values

        "Roko's Basilisk", // Boss name
        "QmTLvZajkpePpcyX6AN2CsR1PjAJRrPPsitkTeiXLcfMt8", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to: %s\n", gameContract.address);
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
