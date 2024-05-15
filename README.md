## Decentralized Crowdfunding

The project structure is as follows:
1. client folder - frontend application
2. smart-contract folder - smart contract code 

To start running the project:
```
git clone https://github.com/kingggg0416/Decentralized-Crowdfunding
cd client
npm install
cd ..
cd smart-contract
npm install
```

After npm install create a project on Alchemy. Alchemy is used as a RPC provider connecting to the sepolia testnet. `https://www.alchemy.com/`

After installation,
please modify the template.env file in both folders and add the corresponding secrets accroding to the instructions.

To test the frontend application without deploying any contract, you can use the deployed contract address `0x5DEDBD3975Fa007F7F084ea0Fd448BD7201842c4`.

For interacting with the deployed contract, you can go to remix `https://remix.ethereum.org/` and choose to interact with the deployed contract using the connected wallet.


