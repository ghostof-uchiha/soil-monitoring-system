import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  truncateDescription,
  formatToDayMonthString,
  formatToDateTimeString,
} from './PredictedData';
import { soilData } from './PredictedDataInterfaceFile';
import Breadcrumb from '../../../components/Breadcrumb';
import DeleteConfirmationModal from '../../../components/DeleteConfirmationModal';
import { crops } from '../../../utils/crops';
import '../../../styles/cropcard.css';
import TableOne from '../../../components/TableOne';
import { CropData } from '../../../utils/fertidata';

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
          `http://localhost:4000/api/ferti/single-soil-data/${id}`,
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
        console.log(data);

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

  const getCropImage = (cropNumber: number) => {
    // Access CropData (assuming it's imported or globally accessible)
    const cropData = CropData[0].Crops;

    // Check if crop number is within valid range
    if (cropNumber < 0 || cropNumber >= Object.keys(cropData).length) {
      return 'https://via.placeholder.com/150'; // Placeholder image for invalid crop number
    }

    // Return the img_url if available, otherwise a placeholder
    return cropData[cropNumber].img_url || 'https://via.placeholder.com/150';
  };


  const getCropName = (cropId: number) => {
    // Access CropData
    const crops = CropData[0].Crops;

    // Check if crop ID is within valid range
    if (cropId < 0 || cropId >= Object.keys(crops).length) {
      return 'Crop Not Found'; // Handle invalid crop ID
    }

    // Return the crop name for the given ID
    return crops[cropId].name;
  };
  const getFertilizerImage = (fertilizerCode: string | number) => {
    // Access Fertilizer data from CropData (assuming structure)
    const fertilizers = CropData[0].Fertilizers;

    // Check if fertilizer code exists
    if (!fertilizers[fertilizerCode]) {
      return null; // Return null for missing image
    }

    return fertilizers[fertilizerCode].img;
  };

  const getFertilizerDesc = (fertilizerCode: string | number) => {
    // Access Fertilizer data from CropData (assuming structure)
    const fertilizers = CropData[0].Fertilizers;

    // Check if fertilizer code exists
    if (!fertilizers[fertilizerCode]) {
      return "Fertilizer description not found.";
    }

    return fertilizers[fertilizerCode].desc;
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


  const transformedSoilSample = transformSoilData(soilData);

  const convertUTCtoIST = (utcTimestamp: string | number | Date) => {
    const utcDate = new Date(utcTimestamp);
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const istDate = new Date(utcDate.getTime() + istOffset);
    return istDate;
  };

  return (
    <div>
      <Breadcrumb pageName="Forecast Details" />

      <div className="flex md:justify-between items-center  flex-wrap justify-center">
        <h3 className="xl:text-6xl md:text-6xl text-4xl ml-4 font-extrabold text-gradient">
          Predictions
        </h3>
        <div className="hidden md:flex-col flex-wrap font-medium md:flex justify-center items-center uppercase description mr-4 p-4 rounded-lg dark:text-white border-stroke xl:text-md md:text-md  text-md bg-white shadow-default dark:border-strokedark dark:bg-[#333]">
          <p>{formatToDayMonthString(new Date(soilData.timestamp))}</p>
          <p>{formatToDateTimeString(new Date(soilData.timestamp))}</p>
        </div>
      </div>

      <div>
        <article className="mt-10 overflow-hidden h-fit rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="h-60 relative">
            <img
              src={getCropImage(soilData.Crop_Type)} // Access crop image using getCropImage
              alt={getCropName(soilData.Crop_Type)} // Set alt text based on crop name
              className="block h-full w-full object-cover absolute inset-0 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-25 z-20"></div>
          </div>
          <header className="flex items-center justify-between leading-tight p-2 md:pt-4 md:px-6">
            <h1 className="text-graydark dark:text-white font-bold text-title-md break-words">
              {getCropName(soilData.Crop_Type)}
            </h1>
            <div className="flex flex-col text-sm">
              <h1 className='text-graydark dark:text-white font-bold text-title-md break-words'>
                Predicted Fertilizer:{soilData.fertilizer}
              </h1>
              <p className="font-medium">{getFertilizerDesc(soilData.fertilizer)}</p>
            </div>
          </header>
          <div>
            <div
              className='mb-10 flex item-center place-content-around space-x-2'>
              <div className='w-full'>
                <TableOne SoilData={soilData}/>
              </div>
              <img
                className='space-x-2 w-100 rounded-md object-cover'
                src={`${getFertilizerImage(soilData.fertilizer)}`} alt="" />

            </div>

          </div>
        </article>
      </div>

      <button
        className="px-3 py-1 text-base hover:text-white hover:border-danger rounded-md text-danger"
        onClick={() => setIsDeleteModalOpen(true)}
      >
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
