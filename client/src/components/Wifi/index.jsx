import React, { useState } from 'react';

const WifiConfigurationForm = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to your server with the provided SSID and password
      const response = await fetch('http://your-esp8266-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ssid, password }),
      });

      // Handle the response from the server as needed
      const data = await response.json();
      console.log(data.message); // Log the response from the ESP8266 server
    } catch (error) {
      console.error('Error configuring Wi-Fi:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wi-Fi SSID:
        <input type="text" value={ssid} onChange={(e) => setSsid(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Connect to ESP8266</button>
    </form>
  );
};

export default WifiConfigurationForm;
