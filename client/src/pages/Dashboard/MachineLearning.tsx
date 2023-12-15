import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { fetchData, convertUTCtoIST } from './PredictedData';

interface PredictedSoilData {
  _id: any;
  timestamp: number; // Replace 'number' with the actual type of timestamp
  probability: number; // Replace 'number' with the actual type of probability
}

const Machine = () => {
  const [predictedSoilData, setPredictedSoilData] = useState<
    PredictedSoilData[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setPredictedSoilData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <>
      <Breadcrumb pageName="Agro Forecast" />

      {/* Your JSX content here */}

      {/* Render loading state */}
      {loading && <p>Loading...</p>}

      {/* Example rendering predicted soil data list */}
      <div>
        <ul>
          {predictedSoilData.map((data, index) => (
            <li key={index}>
              <Link to={`/ml/${data._id}`}>
                {' '}
                {/* Use _id for navigation */}
                Date: {convertUTCtoIST(data.timestamp)}, Probability:{' '}
                {data.probability}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Machine;
