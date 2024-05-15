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
To look up on block explorer: `https://sepolia.etherscan.io/address/0x5dedbd3975fa007f7f084ea0fd448bd7201842c4`

For interacting with the deployed contract, you can go to remix `https://remix.ethereum.org/` and choose to interact with the deployed contract using the connected wallet. Remember to connect the wallet to the sepolia testnet, otherwise it won't work.

## Screenshot Images

### Dashboard Overview
![dashboard-overview](https://github.com/kingggg0416/Decentralized-Crowdfunding/assets/85118159/08120627-44b5-4675-a4f0-2cd3508612c1)

![account-overview](https://github.com/kingggg0416/Decentralized-Crowdfunding/assets/85118159/44c4b57e-637b-4133-83d5-a261d3481f8f)

![campaign-creation](https://github.com/kingggg0416/Decentralized-Crowdfunding/assets/85118159/811b9e3b-bf9b-4d01-8e5c-fbd4b6b91fee)

![campaign-details](https://github.com/kingggg0416/Decentralized-Crowdfunding/assets/85118159/93990991-baae-4433-8e80-0f63478932ee)


## Attribute
Thank you Ahmed Semih Erkan for the project idea and structure. Your repo offered me lots of guidance and help on integrating web3 with react/nextjs. 

