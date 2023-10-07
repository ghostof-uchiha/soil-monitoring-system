import React, { useState, useEffect } from 'react';

const Home = () => {
  const [soilData, setSoilData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.4.1/soildata');
        if (response.ok) {
          const data = await response.json();
          setSoilData(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <h1>Soil Data</h1>
      {soilData ? (
        <div>
          <p>nutrient: {soilData.nutrient}</p>
          <p>nutrient1: {soilData.nutrient2}</p>
          {/* Add more data points as needed */}
        </div>
      ) : (
        <p>Loading soil data...</p>
      )}
    </div>
  );
};

export default Home;
