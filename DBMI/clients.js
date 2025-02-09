import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    brokers: ["192.168.0.100:9092"],
    clientId: "Piyush",
});
