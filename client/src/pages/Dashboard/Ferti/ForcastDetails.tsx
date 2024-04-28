import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  formatToDayMonthString,
  formatToDateTimeString,
} from './PredictedData';
import Breadcrumb from '../../../components/Breadcrumb';
import DeleteConfirmationModal from '../../../components/DeleteConfirmationModal';
import '../../../styles/cropcard.css';
import TableOne from '../../../components/TableOne';
import { CropData } from '../../../utils/fertidata';
import CropFertilizerNeed from './cropFertilizerNeed';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

interface soilData{
  Crop_Type:number,
  fertilizer:string,
  timestamp:string
}


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
        `http://localhost:4000/api/ferti/delete-soil-data/${id}`,
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


  // const getCropDescription = (cropName: string) => {
  //   const lowercaseCropName = cropName.toLowerCase();
  //   const crop = crops.find((c) => c.name.toLowerCase() === lowercaseCropName);
  //   return crop ? crop.desc : '';
  // };

  if (loading || !soilData) {
    return (
      <div>
        <Breadcrumb pageName="Forecast Details" />
        Loading...
      </div>
    );
  }


  // const transformedSoilSample = transformSoilData(soilData);

  // const convertUTCtoIST = (utcTimestamp: string | number | Date) => {
  //   const utcDate = new Date(utcTimestamp);
  //   const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  //   const istDate = new Date(utcDate.getTime() + istOffset);
  //   return istDate;
  // };

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
              src={(CropData as any)[0].Crops[soilData.Crop_Type].img_url} // Access crop image using getCropImage
              alt={(CropData as any)[0].Crops[soilData.Crop_Type].name} // Set alt text based on crop name
              className="block h-full w-full object-cover absolute inset-0 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-25 z-20"></div>
          </div>
          <header className="flex items-center justify-start leading-tight p-2 md:pt-4 md:px-6">
            <h1 className="text-graydark dark:text-white font-bold text-title-md break-words w-1/2">
              {(CropData as any)[0].Crops[soilData.Crop_Type].name}
            </h1>
            <div className="flex flex-col text-sm  w-1/2">
              <h1 className='text-graydark dark:text-white font-bold text-title-md break-words'>
                Predicted Fertilizer:{soilData.fertilizer}
              </h1>
              <p className="font-medium">{(CropData as any)[1].Fertilizers[soilData.fertilizer].desc}</p>
            </div>
          </header>
          <div>
            <div
              className='mb-10 flex item-center place-content-around space-x-2 w-full px-6'>

              <div className='w-1/2'>
                <CropFertilizerNeed CropId={soilData.Crop_Type}/>
              </div>

              <div className='w-1/2 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>

                <a href={(CropData as any)[1].Fertilizers[soilData.fertilizer].link} target="_blank" rel="noreferrer" 
                className='flex justify-center'>


                  <img
                    className='space-x-2 w-full h-100 rounded-md object-cover'
                    src={`${(CropData as any)[1].Fertilizers[soilData.fertilizer].img}`} alt="" />

                </a>
                <TableOne SoilData={soilData} />
              </div>

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
