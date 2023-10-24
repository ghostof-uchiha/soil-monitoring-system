import Addlogowhite from '../../images/logo/add-white.png';
import SoilDataTable from '../../components/SoilDataTable';
import ChartThree from '../../components/ChartTwo';
import { useState } from 'react';
import axios from 'axios';

const Soildata = () => {
  const [samples, setSoilData] = useState<{ id: number }[]>([]);

  const addSample = async () => {
    try {
      const response = await axios.get('http://agroapi.local/soildata', {
        params: {
          id: samples.length + 1,
        },
      });

      // Assuming the server responds with the updated sample data
      const newSample = response.data;
      console.log(samples.length);
      console.log(samples);
      

      setSoilData([...samples, newSample]);
    } catch (error) {
      console.error('Error adding soil sample:', error);
    }
  };

  return (
    <>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Soil Information
      </h4>

      {samples.map((sample, index) => (
        <div
          key={index}
          className="bg-white px-5 pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6"
        >
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Sample {index + 1}
          </h4>
          <div className="flex flex-col xl:flex-row">
            <SoilDataTable sample={sample} />
            <ChartThree smaple={sample} />
          </div>
        </div>
      ))}

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
        <button className="ml-4 inline-flex items-center mt-4 justify-center gap-2.5 rounded-full dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
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
    </>
  );
};

export default Soildata;
