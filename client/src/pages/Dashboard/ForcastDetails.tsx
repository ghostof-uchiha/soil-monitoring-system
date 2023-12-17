import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchData, convertUTCtoIST } from './PredictedData';
import { soilData } from './PredictedDataInterfaceFile';
import Breadcrumb from '../../components/Breadcrumb';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';
import { crops } from '../../utils/crops';
import '../../styles/cropcard.css';
import SoilDataTable from '../../components/SoilDataTable';
import SoilBarGraph from '../../components/SoilBarGraph';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

// Define the structure expected by SoilDataTable
type SoilSample = {
  id: number | string;
  N: {
    level: number;
  };
  P: {
    level: number;
  };
  K: {
    level: number;
  };
  temperature: number;
  humidity: number;
  ph: number;
};

const transformSoilData = (data: soilData): SoilSample => {
  // Perform the necessary transformation here based on your soilData structure
  return {
    id: data._id, // Adjust accordingly
    N: { level: data.N_level },
    P: { level: data.P_level },
    K: { level: data.K_level },
    temperature: data.temperature,
    humidity: data.humidity,
    ph: data.ph,
  };
};

const ForecastDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [soilData, setSoilData] = useState<soilData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchSoilData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/soil/single-soil-data/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem('token') || '',
              'API-Key': apiKey,
            },
          },
        );
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

    fetchSoilData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/soil/delete-soil-data/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token') || '',
            'API-Key': apiKey,
          },
        },
      );

      if (response.ok) {
        navigate('/ml');
      } else {
        const errorText = await response.text();
        console.error('Error deleting soil data. Server response:', errorText);
      }
    } catch (error) {
      console.error('Error deleting soil data:', error);
    }
  };

  const getCropImage = (cropName: string) => {
    const lowercaseCropName = cropName.toLowerCase();
    const crop = crops.find((c) => c.name.toLowerCase() === lowercaseCropName);
    return crop ? crop.image : '';
  };

  const getCropDescription = (cropName: string) => {
    const lowercaseCropName = cropName.toLowerCase();
    const crop = crops.find((c) => c.name.toLowerCase() === lowercaseCropName);
    return crop ? crop.desc : '';
  };

  if (loading || !soilData) {
    return (
      <div>
        <Breadcrumb pageName="Forecast Details" />
        Loading...
      </div>
    );
  }

  const sortedPredictions = soilData.predictions.sort(
    (a: { probability: number }, b: { probability: number }) =>
      b.probability - a.probability,
  );

  const transformedSoilSample = transformSoilData(soilData);

  const timestampDate = new Date(convertUTCtoIST(soilData.timestamp));
  const formattedDate = timestampDate.toLocaleDateString();
  const formattedTime = timestampDate.toLocaleTimeString();

  return (
    <div>
      <Breadcrumb pageName="Forecast Details" />

      <div className="flex justify-between items-center">
        <h3 className="text-8xl font-extrabold text-gradient">Predictions</h3>
        <p className="description ml-2 text-md font-medium text-black dark:text-white">
          {formattedDate} at
          <br />
          {formattedTime}
        </p>
      </div>

      <ul className="wrap">
        {/* first crop predicted  */}
        <div
          className="crops_card h-100"
          id="tomb"
          style={{
            backgroundImage: `url(${getCropImage(
              soilData.predictions[0].crop,
            )})`,
          }}
        >
          <div className="info_section">
            <div className="crops_header">
              <h1 className="capitalize text-white font-black text-5xl  ">
                {soilData.predictions[0].crop}
              </h1>
              <h4 className="text-base md:py-2 text-md font-medium text-gray-500">
                Probability: {soilData.predictions[0].probability}%
              </h4>
            </div>
            <div className="crops_desc ">
              <p className="text ml-2 text-md font-medium text-gray-100">
                {getCropDescription(soilData.predictions[0].crop)}
              </p>
            </div>
            <Link
              to={`/crops/${encodeURIComponent(soilData.predictions[0].crop)}`}
              className=" items-center  transition ease-in-out justify-center  
                hover:text-blue-500 xl:ml-8  text-center font-medium duration-400 text-primary "
            >
              Read More
            </Link>
          </div>
        </div>

        {sortedPredictions.slice(1, 7).map((prediction, index) => (
          <div
            key={index}
            className="box rounded-lg border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="box-top">
              <img
                src={getCropImage(prediction.crop)}
                alt={prediction.crop}
                className="box-image rounded-lg "
              />
              <header className="flex items-center justify-between leading-tight md:p-2">
                <h1 className="text-black dark:text-white font-bold text-title-md capitalize">
                  {prediction.crop}
                </h1>
                <p className="text-base md:p-2 text-md font-medium text-black dark:text-white">
                  Probability: {prediction.probability}%
                </p>
              </header>
              <p className="description ml-2 text-md font-medium text-black dark:text-white">
                {getCropDescription(prediction.crop)}
              </p>
            </div>

            <Link
              to={`/crops/${encodeURIComponent(prediction.crop)}`}
              className=" items-center dark:text-white transition ease-in-out justify-center 
                hover:text-white px-10 text-center font-medium duration-400 text-primary pb-5"
            >
              Read More
            </Link>
          </div>
        ))}
      </ul>

      <div
        className={`relative  bg-white px-5 mb-2 rounded-md pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6 `}
      >
        <div className="flex flex-col xl:flex-row h-full justify-around">
          <SoilDataTable sample={transformedSoilSample} />
          <SoilBarGraph sample={transformedSoilSample} />
        </div>
      </div>
      <button onClick={() => setIsDeleteModalOpen(true)}>
        Delete Forecast
      </button>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ForecastDetails;
