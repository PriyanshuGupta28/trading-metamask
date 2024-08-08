import Web3 from 'web3';
import InvestmentContract from "../../../blockchain/build/contracts/InvestmentContract.json";


const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

const getContractInstance = async () => {
    const networkId = (await web3.eth.net.getId()).toString();  // Convert bigint to string
    const deployedNetwork = InvestmentContract.networks[networkId];

    if (!deployedNetwork) {
        throw new Error('Smart contract not deployed to detected network.');
    }

    const contractInstance = new web3.eth.Contract(
        InvestmentContract.abi as any,
        deployedNetwork && deployedNetwork.address
    );

    return contractInstance;
};

export default getContractInstance;

