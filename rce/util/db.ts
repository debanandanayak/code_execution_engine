
import { createClient } from "redis"
import { QueueResponse } from "../types";
import { kQueueResponse } from "../src/constants/constants";
console.log("Connecting to redis ...!");

var client = createClient({ url: "redis://redis:6379"})

client.on("error", () => {
    console.log("Error occurred while connecting to redis");

})

client.on("connection", () => {
    console.log("Connection to redis established");

})




export const addToRedis = async (key: string, value: QueueResponse) => {
    try {
        await client.connect()

        const dataString = JSON.stringify(value)
        await client.setEx(key, 200, dataString)

    } catch (error) {
        console.log(error)
    } finally {
        await client.quit()
    }
}

export const getData = async (key: string): Promise<QueueResponse> => {
    try {
        await client.connect()
        const data = await client.get(key)
        if (data)
            return JSON.parse(data)
        else
            return {...kQueueResponse, error: "Invalid key" }

    } catch (error) {
        console.log(error);
        return {...kQueueResponse, error: "Error occurred" }

    } finally {
        await client.quit()
    }
}




