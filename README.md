# Buildspace NFT Game Project


## **Backend** (Hardhat)

1. Replace/Add character values as you wish in ***backend/scripts/deploy.js***  and ***backend/scripts/run.js*** (script for local testing).
 
2. Create `.env` file in ***backend/*** and fill it up with `PRIVATE_KEY`, `GOERLI_API_URL` and `MAINNET_API_URL`(for mainnet deployment) string values.


## **Frontend** (React)

1. A smart contract address with the deployed script in Goerli is already provided in ***frontend/src/constants.js***. Feel free to replace it with your own.
 
2. If you make any changes to the smart contract, replace the file ***frontend/src/utils/NFTGame.json*** with your newly generated json ***backend/artifacts/contracts/NFTGame.sol/NFTGame.json***

