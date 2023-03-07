import axios from "axios"

const totalEther2 = async () => {
    axios
        .get(
            `https://api.etherscan.io/api?module=stats&action=ethsupply2&apikey=${global.API_KEY}`
        )
        .then((response) => {
            console.log(
                `\n\n\nEthereum Total Supply\nEther Supply: ${response.data.result.EthSupply} eth\nEther 2 Staking: ${response.data.result.Eth2Staking} eth\nEIP1559 Burnt Fees: ${response.data.result.BurntFees} \n\n Note: The EthSupply is calculated before adding ETH minted as Eth2Staking rewards and subtracting BurntFees from EIP-1559. `
            )
        })
        .catch((error) => {
            const message = error?.response?.data
                ? error.response.data
                : error.message
            console.log(`\n\n\nEthereum Total Supply Error: ${message}`)
        })
}

export default totalEther2
