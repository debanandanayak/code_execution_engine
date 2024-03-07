
const {createClient} = require("redis")


const client = createClient({ url: "redis://redis:6379" })

client.on("error", () => {
    console.log("Error occurred while connecting to redis");

})



// const addToRedis = async (key, value) => {
//     try {
//         await client.connect()
//         await client.setEx(key, 20, JSON.stringify(value))
        
//     } catch (error) {
//         console.log(error)
//     }finally{
//         await client.quit()
//     }
// }

// const getData = async (key) => {
//     try {
//         await client.connect()
//         const data = await client.get(key)
//         // await client.quit()
//         return data
        
//     } catch (error) {
//         console.log(error);
        
//     }finally{
//         await client.quit()
//     }
//     return {error:"Error occurred"}
// }

const addToRedis = async (key, value) => {
    try {
        await client.setEx(key, 20, JSON.stringify(value))
        
    } catch (error) {
        console.log(error)
    }
}

const getData = async (key) => {
    try {
        const data = await client.get(key)
        // await client.quit()
        return data
        
    } catch (error) {
        console.log(error);
        
    }
    return {error:"Error occurred"}
}
module.exports = {getData, addToRedis,client}


