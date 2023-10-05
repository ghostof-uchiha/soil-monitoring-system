import React from 'react'
import mqttClient from '../../utils/mqttClient';

const HomePage = () => {
  return (
    <div>Home
      <mqttClient/>
    </div>
  )
}

export default HomePage