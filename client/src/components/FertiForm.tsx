import { SetStateAction, useState } from "react";
import Breadcrumb from "./Breadcrumb";

interface FertiFormProps {
    addSample: () => Promise<void>; // Define the type of addSample prop
    fetchingSoilData: boolean; // Define the type of fetchingSoilData prop
    showError: boolean; // Define the type of fetchingSoilData prop
}



const FertiForm: React.FC<FertiFormProps> = ({ addSample, fetchingSoilData, showError }) => {

    return (
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
                            {fetchingSoilData ? (
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

                        <div className="animate-pulse w-64 h-40 bg-slate-700 rounded-lg flex items-center justify-center">
                            <p className="text-white text-xl"></p>
                        </div>

                        {showError && (
                            <div className="bg-white px-5 pt-6  rounded-md dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
                                <h4 className="flex flex-col justify-center items-center gap-4 mb-6 text-lg font-semibold text-danger dark:text-danger">
                                    Please connect your Agro-API device to your wifi Network
                                </h4>
                            </div>
                        )}
                        <form action="#">
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="mb-4.5 w-full xl:w-1/2 ">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Select Crop
                                        </label>
                                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                                            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
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
                                                <option value="9">Tobacco</option>
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
                                            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
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
                                        <input
                                            type="text"
                                            placeholder="Enter Temparature value in °C"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Humidity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Humidity "
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Moisture
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter moisture (0-98)"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Nitrogen (N)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Nitrogen value in mg/kg"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Phosphorus (P)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Phosphorus value in mg/kg"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Potassium (K)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Potassium value in mg/kg"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>


                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-10">
                                    Make Analysis
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FertiForm;
