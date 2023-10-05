import React, { Component } from 'react';
import { Client } from 'paho-mqtt';

class MQTTComponent extends Component {
  constructor(props) {
    super(props);
    this.client = new Client({ 
      brokerURL: 'mqtt://test.mosquitto.org', // Replace with your MQTT broker URL
      clientId: '1245' // Provide a unique client ID
    });
    this.client.onConnectionLost = this.onConnectionLost;
    this.client.onMessageArrived = this.onMessageArrived;
  }

  componentDidMount() {
    this.client.connect({
      onSuccess: this.onConnect,
      onFailure: this.onFailure,
    });
  }

  onConnect = () => {
    console.log('Connected to MQTT broker');
    // Subscribe to a topic
    this.client.subscribe('agro-api/my-soil');
  }

  onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.error(`Connection lost: ${responseObject.errorMessage}`);
    }
  }

  onMessageArrived = (message) => {
    // Handle incoming MQTT messages here
    console.log(`Received message on topic ${message.destinationName}: ${message.payloadString}`);
  }

  componentWillUnmount() {
    // Disconnect from the MQTT broker when the component unmounts
    this.client.disconnect();
  }

  render() {
    return (
      <div>
        <h1>MQTT Connection in React</h1>
        {/* Your component content */}
      </div>
    );
  }
}

export default MQTTComponent;
