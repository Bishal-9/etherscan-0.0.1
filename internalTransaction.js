import axios from "axios"

const internalTransaction = async (address) => {
    axios
        .get(
            `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&page=1&offset=100&sort=asc&apikey=${global.API_KEY}`
        )
        .then((response) => {
            console.log("\n\n\nEthereum Internal Transactions")

            if (response.data.status === "0") {
                if (response.data.message === "NOTOK") {
                    console.log(`Error Message: ${response.data.result}`)
                } else {
                    console.log(`Message: ${response.data.message}`)
                }
                return
            }
            console.log(`Address: ${address}`)
            response.data.result.forEach((transaction) => {
                console.log(`\nBlock: ${transaction.blockNumber}`)
                console.log(`From: ${transaction.from}`)
                console.log(`To: ${transaction.to}`)
                console.log(`Value: ${transaction.value} wei`)
                console.log(`Time: ${transaction.timeStamp}`)
                console.log(`Hash: ${transaction.hash}`)
                console.log(`Contract Address: ${transaction.contractAddress}`)
                console.log(`Type: ${transaction.type}`)
                console.log(`Gas: ${transaction.gas}`)
                console.log(`Gas Used: ${transaction.gasUsed}`)
                console.log(`Input: ${transaction.input}`)
                console.log(`Trace ID: ${transaction.traceId}`)
                console.log(`Is Error: ${transaction.isError}`)
                console.log(`Err Code: ${transaction.errCode}`)
            })
        })
        .catch((error) => {
            const message = error?.response?.data
                ? error.response.data
                : error.message
            console.log(
                `\n\n\nEthereum Internal Transactions Error: ${message}`
            )
        })
}

export default internalTransaction
