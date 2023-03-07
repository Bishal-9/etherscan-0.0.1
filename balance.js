import axios from "axios"

const balance = async address => {

    axios
        .get(
            `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${global.API_KEY}`
        )
        .then((response) => {
            console.log(`\n\n\nEthereum Wallet Balance \nAddress: ${address} \nBalance: ${response.data.result} wei`)
        })
        .catch((error) => {
            console.log(`\n\n\nEthereum Wallet Balance Error: ${error.message}`)
        })
}

export default balance

