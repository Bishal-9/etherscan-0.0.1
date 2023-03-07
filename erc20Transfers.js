import axios from "axios"

const erc20Transfers = async (address, contractAddress) => {

    axios
        .get(
            `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&contractaddress=${contractAddress}&page=1&offset=100&sort=asc&apikey=${global.API_KEY}`
    )
        .then((response) => {
            console.log("\n\n\nEthereum ERC20 Transfers")

            if (response.data.status === "0") {

                if (response.data.message === "NOTOK") {
                    console.log(`Error Message: ${response.data.result}`)
                } else {
                    console.log(`Message: ${response.data.message}`)
                }
                return
            }
            console.log(`Address: ${address}`)
            console.log(`Contract Address: ${contractAddress}`)
            response.data.result.forEach(transfer => {
                console.log(`\nBlock: ${transfer.blockNumber}`)
                console.log(`Block Hash: ${transfer.blockHash}`)
                console.log(`Nonce: ${transfer.nonce}`)
                console.log(`From: ${transfer.from}`)
                console.log(`To: ${transfer.to}`)
                console.log(`Value: ${transfer.value} wei`)
                console.log(`Time: ${transfer.timeStamp}`)
                console.log(`Hash: ${transfer.hash}`)
                console.log(`Contract Address: ${transfer.contractAddress}`)
                console.log(`Token Name: ${transfer.tokenName}`)
                console.log(`Token Symbol: ${transfer.tokenSymbol}`)
                console.log(`Token Decimal: ${transfer.tokenDecimal}`)
                console.log(`Transaction Index: ${transfer.transactionIndex}`)
                console.log(`Gas: ${transfer.gas}`)
                console.log(`Gas Price: ${transfer.gasPrice}`)
                console.log(`Gas Used: ${transfer.gasUsed}`)
                console.log(`Cumulative Gas Used: ${transfer.cumulativeGasUsed}`)
                console.log(`Input: ${transfer.input}`)
                console.log(`Confirmations: ${transfer.confirmations}`)
            })
        })
        .catch((error) => {
            const message = error?.response?.data ? error.response.data : error.message
            console.log(`\n\n\nEthereum ERC20 Transfers Error: ${message}`)
        })
}

export default erc20Transfers
