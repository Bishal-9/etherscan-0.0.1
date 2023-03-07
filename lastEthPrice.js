import axios from "axios"

const lastEthPrice = async () => {

    axios
        .get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${global.API_KEY}`)
        .then((response) => {
            console.log("\n\n\nEthereum Last Price")
            console.log(
                `ETHBTC: ${response.data.result.ethbtc} at ${new Date(
                    Number(response.data.result.ethbtc_timestamp + "000")
                ).toLocaleString()}`
            )
            console.log(
                `ETHUSD: ${response.data.result.ethusd} at ${new Date(
                    Number(response.data.result.ethusd_timestamp + "000")
                ).toLocaleString()}\n`
            )
        })
        .catch((error) => {
            const message = error?.response?.data
                ? error.response.data
                : error.message
            console.log(`\n\n\nEthereum Last Price Error: ${message}`)
        })
}

export default lastEthPrice
