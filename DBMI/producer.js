import {kafka} from "./clients.js";

async function produce(){
    const producer = kafka.producer();
    console.log("Connecting...");
    await producer.connect();
    console.log("Producer Connected");

    // Send Messages
    console.log("Sending Messages...");
    await producer.send({
        topic: "Users",
        messages: [
            {   key: "1",
                value: JSON.stringify({
                    name: "Piyush",
                    age: 21,
                    email: "piyush@gmail.com",
                }),
            },
            {   key: "2",
                value: JSON.stringify({
                    name: "Yuvraj",
                    age: 20,
                    email: "yuvraj@gmail.com",
                }),
            },
        ],
    });
    console.log("Messages Sent");
    await producer.disconnect();
    }
// Call the function
produce().catch(console.error);
