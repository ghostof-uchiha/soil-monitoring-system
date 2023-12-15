import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, convertUTCtoIST } from './PredictedData'; // Adjust the path based on your file structure
import { PredictedSoilData } from './PredictedDataInterfaceFile'; // Adjust the path based on your file structure
import Breadcrumb from '../../components/Breadcrumb';

const ForecastDetails = () => {
  const { id } = useParams();
  const [forecastData, setForecastData] = useState<PredictedSoilData | null>(
    null,
  );
  const [soilData, setSoilData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoilData = async () => {
      try {
        const response = await fetch(`/api/soil-data/${id}`);
        const data = await response.json();

        if (response.status === 200) {
          setSoilData(data.soilData);
        } else {
          console.error(data.error || 'Error fetching soil data');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    const fetchForecastData = async () => {
      try {
        const fetchedData = await fetchData(); // Assuming fetchData returns an array
        const selectedForecastData = fetchedData.find(
          (item: { _id: string | undefined }) => item._id === id,
        );

        if (selectedForecastData) {
          setForecastData(selectedForecastData);
        } else {
          console.error('Forecast data not found');
        }
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchSoilData();
    fetchForecastData();
  }, [id]);

  if (loading || !forecastData) {
    // You can render a loading state here if needed
    return <div><Breadcrumb pageName="Forecast Details" />Loading...</div>;
  }
  const sortedPredictions = forecastData.predictions.sort(
    (a, b) => b.probability - a.probability,
  );

  return (
    <div>
      <Breadcrumb pageName="Forecast Details" />
      <p>Date: {convertUTCtoIST(forecastData.timestamp)}</p>
      <p>Temperature: {forecastData.temperature}</p>
      <p>Humidity: {forecastData.humidity}</p>
      <p>pH: {forecastData.ph}</p>
      <p>Rainfall: {forecastData.rainfall}</p>
      <h3>Predictions:</h3>
      <ul>
        {sortedPredictions.slice(0, 5).map((prediction, index) => (
          <li key={index}>
            Crop: {prediction.crop}, Probability: {prediction.probability}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastDetails;
