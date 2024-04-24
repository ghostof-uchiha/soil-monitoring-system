
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Sample } from './types';
// import FertiForm from '../../components/FertiForm';
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Soildata = () => {
  const [samples, setSoilData] = useState<Sample[]>([]);
  const [fetchingsoilData, setFetchingsoilData] = useState(false);
  const [showError, setShowError] = useState(false);
  const [analzing, setAnalzing] = useState(false);
  const navigate = useNavigate()

  

  const [formData, setFormData] = useState({
    Temparature: '',
    Humidity: '',
    Moisture: '',
    Soil_Type: '',
    Crop_Type: '',
    Nitrogen: '',
    Potassium: '',
    Phosphorous: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      console.log(response.data);

      // Fill form fields with received data
      setFormData(prevState => ({
        ...prevState,
        Moisture: newSample.moisture?.moisture || '',
        Temparature: newSample.Temperature || '',
        Humidity: newSample.humidity || '',
        Nitrogen: newSample.N?.level || '',
        Phosphorous: newSample.P?.level || '',
        Potassium: newSample.K?.level || '',
      }));;

    } catch (error) {
      console.error('Error adding soil sample:', error);
      setShowError(true);
    }
    setFetchingsoilData(false);
  };

  useEffect(() => {

    console.log(formData);
  }, [formData]);


  const handleAnalyzeClick = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setAnalzing(true);
    const userdataString = localStorage.getItem('userdata');
    const userdata = userdataString ? JSON.parse(userdataString) : null;

    try {
      const response = await axios.post(
        `http://localhost:4000/soil/get-fertilizer/${userdata.userId}`,
        formData,
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
        navigate(`/ml/fert_ilizer/${response.data.newSoilData._id}`)
        
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
    <>
      {/* <div className="flex justify-between">
        <h4 className="text-title-md2 font-black text-black dark:text-white">
          Soil Info
        </h4>
        <button className="flex items-center gap-2 mb-6 text-xl font-semibold text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
            className="text-black dark:text-white"
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
      </div> */}

      <div
        className=""
      >

        <>
          <Breadcrumb pageName="Fertilizer Prediction" />


          <div className="grid ">
            <div className="flex flex-col gap-9">
              {/* <!-- Contact Form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex place-content-between">
                  <h3 className="font-medium text-black dark:text-white">
                    Soil Information
                  </h3>
                  {fetchingsoilData ? (
                    <button className="animate-pulse inline-flex items-center justify-center gap-2.5 rounded-full dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"

                      disabled>Loading...</button>
                  ) : (
                    <button
                      className="inline-flex items-center justify-center gap-2.5 rounded-full dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                      onClick={addSample}>
                      Auto add
                    </button>
                  )}
                </div>

                {showError && (
                  <div className="bg-white px-5 pt-6  rounded-md dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
                    <h4 className="flex flex-col justify-center items-center gap-4 mb-6 text-lg font-semibold text-danger dark:text-danger">
                      Please connect your Agro-API device to your wifi Network
                    </h4>
                  </div>
                )}
                <form 
                onSubmit={handleAnalyzeClick}>
                  <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="mb-4.5 w-full xl:w-1/2 ">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Select Crop
                        </label>
                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            name="Crop_Type"
                            value={formData.Crop_Type}
                            required
                            onChange={handleInputChange}
                            >
                            <option value="">Select Crop</option>
                            <option value="0">Barley</option>
                            <option value="1">Cotton</option>
                            <option value="2">Ground Nuts</option>
                            <option value="3">Maize</option>
                            <option value="4">Millets</option>
                            <option value="5">Oil seeds</option>
                            <option value="6">Paddy</option>
                            <option value="7">Pulses</option>
                            <option value="8">Sugarcane</option>
                            <option value="10">Wheat</option>
                          </select>
                          <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                            <svg
                              className="fill-current"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.8">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                  fill=""
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="mb-4.5 w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Select Soil Type
                        </label>
                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            name="Soil_Type"
                            value={formData.Soil_Type}
                            required
                            onChange={handleInputChange}
                            >
                            <option value="">Select Soil Type</option>
                            <option value="0">Black</option>
                            <option value="1">Clayey</option>
                            <option value="2">Loamy</option>
                            <option value="3">Red</option>
                            <option value="4">Sandy</option>
                          </select>
                          <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                            <svg
                              className="fill-current"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.8">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                  fill=""
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white ">
                          Temparature
                        </label>
                        {fetchingsoilData ? (
                          <div className="animate-pulse w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className='flex space-x-2 justify-center items-center mt-2'>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce'></div>
                            </div>
                          </div>
                        ) : (
                          <input
                            name="Temparature"
                            value={formData.Temparature}
                            required
                            onChange={handleInputChange}
                            
                            placeholder="Enter Temparature value in °C"
                            className="w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        )}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Humidity
                        </label>
                        {fetchingsoilData ? (
                          <div className="animate-pulse w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className='flex space-x-2 justify-center items-center mt-2'>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce'></div>
                            </div>
                          </div>
                        ) : (
                        <input
                          name="Humidity"
                          value={formData.Humidity}
                          required
                          onChange={handleInputChange}
                          
                          placeholder="Enter Humidity "
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        )}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Moisture
                        </label>
                        {fetchingsoilData ? (
                          <div className="animate-pulse w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className='flex space-x-2 justify-center items-center mt-2'>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce'></div>
                            </div>
                          </div>
                        ) : (
                        <input
                          name="Moisture"
                          value={formData.Moisture}
                          required
                          onChange={handleInputChange}
                          
                          placeholder="Enter moisture (0-98)"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        )}
                      </div>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Nitrogen (N)
                        </label>
                        {fetchingsoilData ? (
                          <div className="animate-pulse w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className='flex space-x-2 justify-center items-center mt-2'>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce'></div>
                            </div>
                          </div>
                        ) : (
                        <input
                          name="Nitrogen"
                          value={formData.Nitrogen}
                          required
                          onChange={handleInputChange}
                          
                          placeholder="Enter Nitrogen value in mg/kg"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        )}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Phosphorus (P)
                        </label>
                        {fetchingsoilData ? (
                          <div className="animate-pulse w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className='flex space-x-2 justify-center items-center mt-2'>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce'></div>
                            </div>
                          </div>
                        ) : (
                        <input
                          name="Phosphorous"
                          value={formData.Phosphorous}
                          required
                          onChange={handleInputChange}
                          
                          placeholder="Enter Phosphorus value in mg/kg"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        )}
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Potassium (K)
                        </label>
                        {fetchingsoilData ? (
                          <div className="animate-pulse w-full h-12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className='flex space-x-2 justify-center items-center mt-2'>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                              <div className='h-2 w-2 bg-slate-700 rounded-full animate-bounce'></div>
                            </div>
                          </div>
                        ) : (
                        <input
                          name="Potassium"
                          value={formData.Potassium}
                          required
                          onChange={handleInputChange}
                          
                          placeholder="Enter Potassium value in mg/kg"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        )}
                      </div>
                    </div>


                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-10"
                      
                    >
                      Make Analysis
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </>
      </div>



    </>
  );
};

export default Soildata;
function setAnalzing(arg0: boolean) {
  throw new Error('Function not implemented.');
}

