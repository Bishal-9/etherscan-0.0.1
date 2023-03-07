import axios from "axios"

const blocksMined = async address => {
    
        axios
            .get(
                `https://api.etherscan.io/api?module=account&action=getminedblocks&address=${address}&blocktype=blocks&page=1&offset=10&apikey=${global.API_KEY}`
            )
            .then((response) => {
                console.log("\n\n\nEthereum Blocks Mined by Address")

                if (response.data.status === "0") {
                    if (response.data.message === "NOTOK") {
                        console.log(`Error Message: ${response.data.result}`)
                    } else {
                        console.log(`Message: ${response.data.message}`)
                    }
                    return
                }
                console.log(`Address: ${address}`)
                response.data.result.forEach(block => {
                    console.log(`\nBlock: ${block.blockNumber}`)
                    console.log(`Block Reward: ${block.blockReward} wei`)
                    console.log(`Block Time: ${block.timeStamp}`)
                })
            })
            .catch((error) => {
                const message = error.response.data ? error.response.data : error.message
                console.log(`\n\n\nEthereum Blocks Mined Error: ${message}`)
            })
}

export default blocksMined
