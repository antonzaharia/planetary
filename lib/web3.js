import Web3 from 'web3'
import Planetary from './Planetary.json'

// let web3 = new Web3(Web3.givenProvider)
let web3 = new Web3('https://rinkeby.infura.io/v3/7743689b52a44de99f0af205b634d905')

const contractAddress = "0x15fdFC3605d41f255f94e4ef650eb0522d831b9C"
const contract = new web3.eth.Contract(Planetary.abi, contractAddress)

export { web3, contract, contractAddress }