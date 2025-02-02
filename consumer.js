import { kafka } from "./clients.js";

async function init() {
    const consumer = kafka.consumer({ groupId: "AllUser" });

    try {
        console.log("Connecting to Kafka...");
        await consumer.connect();
        console.log("Connected to Kafka");

        console.log("Subscribing to topic: Users");
        await consumer.subscribe({ topic: "Users", fromBeginning: true });
        console.log("Subscribed to topic 'Users'");

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    console.log(`Message received on topic ${topic} [Partition: ${partition}]`);
                    const messageValue = message.value.toString();
                    console.log(`Message content: ${messageValue}`);
                } catch (err) {
                    console.error("Error processing message:", err);
                }
            },
        });
    } catch (error) {
        console.error("Error connecting or subscribing to Kafka:", error);
        
    }
}

init();
