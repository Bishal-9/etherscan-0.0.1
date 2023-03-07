import axios from "axios"

const totalNodesCount = async () => {
    axios
        .get(
            `https://api.etherscan.io/api?module=stats&action=nodecount&apikey=${global.API_KEY}`
        )
        .then((response) => {
            console.log(
                `\n\n\nEthereum Total Nodes Count\nNodes: ${response.data.result.TotalNodeCount}`
            )
        })
        .catch((error) => {
            const message = error?.response?.data
                ? error.response.data
                : error.message
            console.log(`\n\n\nEthereum Total Nodes Count Error: ${message}`)
        })
}

export default totalNodesCount
