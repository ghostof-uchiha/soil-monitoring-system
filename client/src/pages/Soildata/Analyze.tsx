import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

interface Sample {
  id: number;
}

interface AnalyzeProps {
  samples: Sample[];
}

interface Sample {
  moisture: {
    analog: number;
    moisture: number;
    message: string;
  };
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
  rainfall: number;
}

function calculateAverage(samples: Sample[]): Sample {
  const totalSamples = samples.length;
  const averageSample: Sample = {
    moisture: {
      analog: 0,
      moisture: 0,
      message: 'Average Moisture',
    },
    N: {
      level: 0,
    },
    P: {
      level: 0,
    },
    K: {
      level: 0,
    },
    temperature: 0,
    humidity: 0,
    ph: 0,
    id: 0,
    rainfall: 0,
  };

  samples.forEach((sample) => {
    averageSample.moisture.analog += sample.moisture.analog;
    averageSample.moisture.moisture += sample.moisture.moisture;
    averageSample.N.level += sample.N.level;
    averageSample.P.level += sample.P.level;
    averageSample.K.level += sample.K.level;
    averageSample.temperature += sample.temperature;
    averageSample.humidity += sample.humidity;
    averageSample.ph += sample.ph;
  });

  averageSample.moisture.analog /= totalSamples;
  averageSample.moisture.moisture /= totalSamples;
  averageSample.N.level /= totalSamples;
  averageSample.P.level /= totalSamples;
  averageSample.K.level /= totalSamples;
  averageSample.temperature /= totalSamples;
  averageSample.humidity /= totalSamples;
  averageSample.ph /= totalSamples;
  averageSample.rainfall = 67;

  return averageSample;
}

const Analyze: React.FC<AnalyzeProps> = ({ samples }) => {
  const [analzing, setAnalzing] = useState(false);
  const Navigate = useNavigate();

  const handleAnalyzeClick = async () => {
    setAnalzing(true);
    const averageSample = calculateAverage(samples);
    const userdataString = localStorage.getItem('userdata');
    const userdata = userdataString ? JSON.parse(userdataString) : null;
    console.log(averageSample);

    try {
      const response = await axios.post(
        `http://localhost:4000/soil/soil-data/${userdata.userId}`,
        averageSample,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
            'API-Key': apiKey,
          },
        },
      );

      if (response.status === 200) {
        // Handle the successful response here, if needed
        console.log('Data sent successfully');
        console.log(response.data);
        console.log(response.data.soilData._id);
        Navigate(`/ml/${response.data.soilData._id}`);
      } else {
        // Handle errors here
        console.error('Error sending data');
      }
    } catch (error) {
      // Handle network errors here
      console.error('Network error:', error);
    }

    setAnalzing(false);
  };
  return (
    <div>
      {analzing ? (
        <>
          <button
            disabled
            className="inline-flex items-center mt-4 justify-center gap-2.5 rounded-full py-4 px-10 text-center font-medium text-white lg:px-8 xl:px-10 border-2 gradient-border"
          >
            Analyzing
            <div className="flex space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
          </button>
        </>
      ) : (
        <button
          onClick={handleAnalyzeClick}
          className=" inline-flex items-center mt-4 justify-center gap-2.5 rounded-full dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
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
  );
};

export default Analyze;
