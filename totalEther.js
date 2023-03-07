import axios from "axios"

const totalEther = async () => {
    axios
        .get(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${global.API_KEY}`)
        .then((response) => {
            console.log(`\n\n\nEthereum Total Supply excluding ETH2\nEther: ${response.data.result} eth`)
        })
        .catch((error) => {
            const message = error?.response?.data
                ? error.response.data
                : error.message
            console.log(
                `\n\n\nEthereum Total Supply excluding ETH2 Error: ${message}`
            )
        })
}

export default totalEther
