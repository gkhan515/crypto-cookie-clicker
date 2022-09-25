import Web3 from 'https://cdn.esm.sh/v58/web3@1.6.1/es2021/web3.js'

const ethereumButton = document.querySelector('.enable');
const sendEthButton = document.querySelector('.redeem');

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0xB020d19b19640d7bD2E225D8786B6Fe963E9CA3E',
          data: getDataFieldValue("0x72cE5FBB059e7FB8AE801b411e6A7D5B547Fb197", 10000000 * cookieNum),
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

function getDataFieldValue(tokenRecipientAddress, tokenAmount) {
    const web3 = new Web3();
    const TRANSFER_FUNCTION_ABI = {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"};
    return web3.eth.abi.encodeFunctionCall(TRANSFER_FUNCTION_ABI, [
        tokenRecipientAddress,
        tokenAmount
    ]);
}

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
      console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
      window.web3 = new Web3(web3.currentProvider);
  } else {
      console.log('No Web3 Detected... using HTTP Provider')
      window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
  }
})