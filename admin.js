import { kafka } from "./clients.js";

async function init(){
    const admin = kafka.admin();
    console.log("Connecting...");
    await admin.connect();
    console.log("Connected");


    // Create Topics
    console.log("Creating Topics..[Users]");
    await admin.createTopics({
        topics: [
            {
                topic: "Users",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topics Created [Users]");
    await admin.disconnect();
}

init().catch(console.error);