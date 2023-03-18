import client from 'amqplib'
import { Message } from '../types'


const QUEUE_NAME = "CODE"
 export async function publish(message:Message) {
  const connection = await client.connect("amqp://queue:5672")
  const channel = await connection.createChannel()
  await channel.assertQueue(QUEUE_NAME)
  const stringMessage = JSON.stringify(message)
  channel.sendToQueue(QUEUE_NAME, Buffer.from(stringMessage))
  await channel.close()
  await connection.close()
}
