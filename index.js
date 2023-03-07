import { config } from "dotenv"
config()

console.log("Etherscan API Testing\n\n")
console.log(`Process is running on Node version: ${process.version}`)
console.log("Operating System: ", process.platform.toString().toUpperCase())
console.log(`Parent process id: ${process.ppid}`)
console.log(`Process id: ${process.pid}`)

global.API_KEY = process.env.API_KEY

const address = process.env.WALLET_ADDRESS
const contractAddress = process.env.CONTRACT_ADDRESS

import balance from "./balance.js"
import blocksMined from "./blocksMined.js"
import erc20Transfers from "./erc20Transfers.js"
import internalTransaction from "./internalTransaction.js"
import totalEther from "./totalEther.js"
import totalEther2 from "./totalEther2.js"
import lastEthPrice from "./lastEthPrice.js"
import nodeSize from "./nodeSize.js"
import totalNodesCount from "./totalNodesCount.js"

// ! Accounts Specific
balance(address)
blocksMined(address)
erc20Transfers(
    address,
    contractAddress
)
internalTransaction(address)

// ! Stats Specific
totalEther()
totalEther2()
lastEthPrice()
nodeSize()
totalNodesCount()
