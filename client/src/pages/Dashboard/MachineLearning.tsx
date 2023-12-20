import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import {
  fetchData,
  formatToDateTimeString,
  formatToDayMonthString,
} from './PredictedData';
import { crops } from '../../utils/crops';
import 'react-datepicker/dist/react-datepicker.css';

interface CropPrediction {
  crop: string;
  probability: number;
}

interface PredictedSoilData {
  _id: any;
  timestamp: string;
  probability: number;
  predictions: CropPrediction[];
}

const Machine = () => {
  const itemsPerPage = 5;
  const [predictedSoilData, setPredictedSoilData] = useState<
    PredictedSoilData[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData();
        if (data && data.length > 0) {
          setPredictedSoilData(data);
          setIsEmpty(false); // Set isEmpty to false since data is found
        } else {
          setPredictedSoilData([]); // Optional: Set predicted data to an empty array
          setIsEmpty(true); // Set isEmpty to true if no data is found
        }
        console.log(predictedSoilData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  const handleDateFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedDate = event.target.value;
    setDateFilter(selectedDate);
    setCurrentPage(1); // Reset to the first page when changing the date filter
  };

  const clearDateFilter = () => {
    setDateFilter(null);
    setCurrentPage(1); // Reset to the first page when clearing the date filter
  };

  const filterByDate = (
    data: PredictedSoilData,
    selectedDate: string | null,
  ) => {
    if (!selectedDate) {
      return true; // No date filter applied
    }

    const istDate = new Date(data.timestamp);
    istDate.setHours(istDate.getHours()); // Adjust for IST

    const filterDateUTC = new Date(`${selectedDate}T00:00:00Z`);
    filterDateUTC.setHours(filterDateUTC.getHours()); // Adjust for UTC

    return (
      istDate.toISOString().slice(0, 10) ===
      filterDateUTC.toISOString().slice(0, 10)
    );
  };

  const getCropWithHighestProbability = (predictions: CropPrediction[]) => {
    const maxProbabilityEntry = predictions.reduce((max, current) =>
      max.probability > current.probability ? max : current,
    );

    return maxProbabilityEntry.crop;
  };

  const getCropImage = (cropName: string) => {
    const lowercaseCropName = cropName.toLowerCase();
    const crop = crops.find((c) => c.name.toLowerCase() === lowercaseCropName);
    return crop ? crop.image : '';
  };

  const filteredPredictedSoilData = predictedSoilData.filter((data) =>
    filterByDate(data, dateFilter),
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPredictedSoilData.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Breadcrumb pageName="Agro Forecast" />

      {loading && <p>Loading...</p>}
      {isEmpty ? (
        <div className="h-96 w-full flex justify-center items-center">
          <div className='flex flex-col justify-center items-center gap-10'>
            <h2 className="text-3xl font-satoshi font-extrabold">
              You can test your soil here
            </h2>
            <a href="/soildata">
              <button className='border-2 p-3 px-4 rounded-md '>Click here</button>
            </a>
          </div>
        </div>
      ) : (
        <section className="flex gap-3 flex-col items-end">
          <div className="flex items-center mb-3">
            <label className="mr-2">Filter by Date:</label>
            <div className="relative">
              <input
                type="date"
                onChange={handleDateFilterChange}
                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <button onClick={clearDateFilter} className="ml-2">
              Clear Filter
            </button>
          </div>

          {currentItems.map((data, index) => (
            <article
              key={index}
              className="w-full overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark transition duration-300 ease-in-out transform zoom111"
            >
              <Link to={`/ml/${data._id}`}>
                <div className="flex justify-between items-center p-4">
                  <div>
                    <p className="text-black flex dark:text-white font-bold ">
                      Date:{' '}
                      <p className="text-black flex dark:text-white font-bold uppercase">
                        {formatToDateTimeString(new Date(data.timestamp))}
                      </p>
                    </p>
                    <p className="text-black capitalize dark:text-white font-bold">
                      Day: {formatToDayMonthString(new Date(data.timestamp))}
                    </p>
                  </div>
                  <div
                    className="w-16 h-16 overflow-hidden rounded-lg relative"
                    style={{
                      backgroundImage: `url(${getCropImage(
                        getCropWithHighestProbability(data.predictions),
                      )})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <img
                      src={getCropImage(
                        getCropWithHighestProbability(data.predictions),
                      )}
                      alt="Crop"
                      className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </article>
          ))}

          <div className="flex justify-end mt-4">
            <ul className="flex">
              {Array(Math.ceil(filteredPredictedSoilData.length / itemsPerPage))
                .fill(0)
                .map((_, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer mx-1 px-3 py-2 border ${
                      currentPage === index + 1
                        ? 'border-primary bg-primary text-white'
                        : 'border-stroke hover:border-primary hover:bg-primary hover:text-white'
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Machine;
