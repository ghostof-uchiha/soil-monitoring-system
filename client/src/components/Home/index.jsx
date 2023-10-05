import React from 'react'
import * as mqtt from 'mqtt/dist/mqtt'


const brokerUrl = "mqtt://test.mosquitto.org";
const topic = "agro-api/my-soil";

const client = mqtt.connect(brokerUrl);

const HomePage = () => {
  return (
    <div>Home</div>
  )
}

export default HomePage