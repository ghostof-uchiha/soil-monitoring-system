import Addlogowhite from '../../images/logo/add-white.png';
import SoilDataTable from '../../components/SoilDataTable';
import SoilBarGraph from '../../components/SoilBarGraph';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Soildata = () => {
  const [samples, setSoilData] = useState<{ id: number }[]>([]);
  const [expandedSamples, setExpandedSamples] = useState<boolean[]>([]);
  const [fetchingsoilData, setFetchingsoilData] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSampleToggle = (index: number) => {
    setExpandedSamples((prevExpandedSamples) => {
      const newExpandedSamples = [...prevExpandedSamples];
      newExpandedSamples[index] = !newExpandedSamples[index];
      return newExpandedSamples;
    });
  };

  const addSample = async () => {
    setFetchingsoilData(true);
    setShowError(false);
    try {
      const response = await axios.get('http://agroapi.local/soildata', {
        params: {
          id: samples.length + 1,
        },
      });

      const newSample = response.data;

      const newExpandedSamples = Array(samples.length + 1).fill(false);
      newExpandedSamples[newExpandedSamples.length - 1] = true; // Set the last index to true (latest sample)
      setExpandedSamples(newExpandedSamples);

      setSoilData([...samples, newSample]);
    } catch (error) {
      console.error('Error adding soil sample:', error);
      setShowError(true);
    }
    setFetchingsoilData(false);
  };

  useEffect(() => {
    // Initialize the expandedSamples state when the component mounts
    // or when samples.length changes
    setExpandedSamples((prevExpandedSamples) => {
      // Create a new array with the same length as samples
      const newExpandedSamples = [...prevExpandedSamples];
      // Set the last index to true (latest sample)
      newExpandedSamples[newExpandedSamples.length - 1] = true;
      return newExpandedSamples;
    });
  }, [samples.length]);

  return (
    <>
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Soil Information
        </h4>
        <button className="flex items-center gap-2 mb-6 text-xl font-semibold text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
            className='text-black dark:text-white'
          >
            <g
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M12,2c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c5.511,0 10,-4.489 10,-10c0,-5.511 -4.489,-10 -10,-10zM12,4c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8zM11,7v2h2v-2zM11,11v6h2v-6z"></path>
              </g>
            </g>
          </svg>
          Information
        </button>
      </div>

      {samples.map((sample, index) => (
        <div
          key={index}
          className="relative cursor-pointer bg-white px-5 mb-2 rounded-md pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6
          transition duration-300 ease-in-out"
          onClick={() => handleSampleToggle(index)}
        >
          <svg
            className={`absolute right-10 top-10 -translate-y-1/2 fill-current ${
              expandedSamples[index] && 'rotate-180'
            }`}
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill=""
            />
          </svg>
          <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Sample {index + 1}
          </h4>
          {expandedSamples[index] && (
            <div className="flex flex-col xl:flex-row">
              <SoilDataTable sample={sample} />
              <SoilBarGraph sample={sample} />
            </div>
          )}
        </div>
      ))}

      {fetchingsoilData && (
        <div className="bg-white px-5 pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
          <h4 className="flex flex-col justify-center items-center gap-4 mb-6 text-xl font-semibold text-black dark:text-white">
            Fetching Soil Data
            <div className="flex space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
          </h4>
        </div>
      )}

      {showError && (
        <div className="bg-white px-5 pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
          <h4 className="flex flex-col justify-center items-center gap-4 mb-6 text-xl font-semibold text-danger dark:text-danger">
            Please connect your Agro-API device to your wifi Network
          </h4>
        </div>
      )}

      <div className="flex flex-wrap sm:gap-4 gap-1">
        {samples.length < 5 && (
          <button
            className="inline-flex items-center mt-4 justify-center gap-2.5 rounded-full dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            onClick={addSample}
          >
            <span>
              <img src={Addlogowhite} alt="add" className="w-7" />
            </span>
            Add Soil Sample
          </button>
        )}
        {samples.length > 0 && (
          <button className=" inline-flex items-center mt-4 justify-center gap-2.5 rounded-full dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" fill="#ffca28"></circle>
                <path
                  fill="#fff"
                  d="M33.5,22h-0.53l0.01-0.97c0.008-0.807-0.301-1.567-0.869-2.141S30.787,18,29.98,18H25v-2.277	c0.595-0.346,1-0.984,1-1.723c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,0.738,0.405,1.376,1,1.723V18h-5c-1.654,0-3,1.346-3,3v1h-0.5	c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1H15v2c0,1.654,1.346,3,3,3h11.89c1.637,0,2.983-1.332,3-2.97L32.91,28h0.59	c0.552,0,1-0.448,1-1v-4C34.5,22.448,34.052,22,33.5,22z M30.89,30.01c-0.005,0.546-0.454,0.99-1,0.99H18c-0.551,0-1-0.449-1-1v-9	c0-0.551,0.449-1,1-1h11.98c0.269,0,0.521,0.105,0.71,0.296s0.292,0.445,0.29,0.714L30.89,30.01z"
                ></path>
                <rect width="2" height="3" x="19" y="23" fill="#fff"></rect>
                <rect width="2" height="3" x="27" y="23" fill="#fff"></rect>
                <rect width="6" height="2" x="21" y="27" fill="#fff"></rect>
              </svg>
            </span>
            Analyze
          </button>
        )}
      </div>
    </>
  );
};

export default Soildata;
