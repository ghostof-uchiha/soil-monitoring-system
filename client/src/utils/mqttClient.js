import * as mqtt from 'mqtt/dist/mqtt'
const brokerUrl = "mqtt://test.mosquitto.org";
const topic = "agro-api/my-soil";

const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(topic, (err) => {
    if (err) {
      console.error("Error subscribing to topic:", err);
    } else {
      console.log("Subscribed to topic:", topic);
    }
  });
});

client.on("message", (receivedTopic, message) => {
  console.log(
    `Received message on topic '${receivedTopic}': ${message.toString()}`
  );
});

client.on("error", (err) => {
  console.error("Error:", err);
});

process.on("exit", () => {
  client.end();
});

export default client;
