import {React,useState} from 'react'
import * as mqtt from 'mqtt/dist/mqtt'

const brokerUrl = "mqtt://test.mosquitto.org:8080";

const client = mqtt.connect(brokerUrl);




const HomePage = () => {
  const [soildata, setsoildata] = useState('')

  client.on('connect', () => {
    console.log('Connected to MQTT Broker');
    client.subscribe('agro-api/my-soil');
  });
  
  client.on('message', (topic, message) => {
    setsoildata(message.toString())
  });
  
  return (
    <div>
      <p>
        {soildata}
      </p>
    </div>
  )
}

export default HomePage