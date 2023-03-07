import axios from "axios"

const nodeSize = async () => {

    axios
        .get(`https://api.etherscan.io/api?module=stats&action=chainsize&startdate=2019-02-01&enddate=2019-02-28&clienttype=geth&syncmode=default&sort=asc&apikey=${global.API_KEY}`)
        .then((response) => {
            console.log("\n\n\nEthereum Node Size")
            response.data.result.forEach(node => {
                console.log(`\nBlock: ${node.blockNumber}`)
                console.log(`Chain Timestamp: ${node.chainTimeStamp}`)
                console.log(`Chain Size: ${node.chainSize} bytes`)
                console.log(`Client Type: ${node.clientType}`)
                console.log(`Sync Mode: ${node.syncMode}`)
            })
        })
        .catch((error) => {
            const message = error?.response?.data
                ? error.response.data
                : error.message
            console.log(
                `\n\n\nEthereum Node Size Error: ${message}`
            )
        })
}

export default nodeSize
