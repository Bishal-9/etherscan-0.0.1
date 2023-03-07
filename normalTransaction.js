import axios from "axios"

const normalTransaction = async (address) => {

    axios
        .get(
            `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&page=1&offset=100&sort=asc&apikey=${global.API_KEY}`
    )
        .then((response) => {
            console.log("\n\n\nEthereum Normal Transactions")

            if (response.data.status === "0") {

                if (response.data.message === "NOTOK") {
                    console.log(`Error Message: ${response.data.result}`)
                } else {
                    console.log(`Message: ${response.data.message}`)
                }
                return
            }
            console.log(`Address: ${address}`)
            response.data.result.forEach(transaction => {
                console.log(`\nBlock: ${transaction.blockNumber}`)
                console.log(`Block Hash: ${transaction.blockHash}`)
                console.log(`Nonce: ${transaction.nonce}`)
                console.log(`From: ${transaction.from}`)
                console.log(`To: ${transaction.to}`)
                console.log(`Value: ${transaction.value} wei`)
                console.log(`Time: ${transaction.timeStamp}`)
                console.log(`Hash: ${transaction.hash}`)
                console.log(`Contract Address: ${transaction.contractAddress}`)
                console.log(`Value: ${transaction.value} wei`)
                console.log(`Transaction Index: ${transaction.transactionIndex}`)
                console.log(`Gas: ${transaction.gas}`)
                console.log(`Gas Price: ${transaction.gasPrice}`)
                console.log(`Gas Used: ${transaction.gasUsed}`)
                console.log(`Tax Receipt Status: ${transaction.txreceipt_status}`)
                console.log(`Cumulative Gas Used: ${transaction.cumulativeGasUsed}`)
                console.log(`Input: ${transaction.input}`)
                console.log(`Confirmations: ${transaction.confirmations}`)
                console.log(`Method ID: ${transaction.methodId}`)
                console.log(`Function Name: ${transaction.functionName}`)
            })
        })
        .catch((error) => {
            const message = error?.response?.data ? error.response.data : error.message
            console.log(`\n\n\nEthereum Normal Transactions Error: ${message}`)
        })
}

export default normalTransaction
