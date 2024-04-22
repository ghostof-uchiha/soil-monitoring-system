import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import 'react-datepicker/dist/react-datepicker.css';
import cropimage from "../../images/cards/cards-01.png"

interface CropPrediction {
  crop: string;
  probability: number;
}


const Dashboard = () => {


  return (
    <>
      <Breadcrumb pageName="Agro Forecast" />

      <div className='flex space-x-10'>

        <div className="max-w-sm border-gray-200  dark:bg-gray-800 dark:border-gray-700 overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <a href="/ml/crop/">
            <img className="rounded-t-lg h-64 w-full object-cover" src="https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </a>
          <div className="p-5">
            <a href="/ml/crop/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Predicted Crops</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This section displays the crops most suitable for planting based on your soil data and other factors.</p>
            <a href="/ml/crop/" className="animate-pulse inline-flex items-center py-2  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none text-m text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm border-gray-200  dark:bg-gray-800 dark:border-gray-700 overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <a href="/ml/fert_ilizer/">
            <img className="rounded-t-lg h-64 w-full object-cover" src="https://images.unsplash.com/photo-1637500980709-6e65a6c2418a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </a>
          <div className="p-5">
            <a href="/ml/fert_ilizer/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Predicted Fertilizers</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This section displays the Fertilizers most suitable for planting based on your soil data and other factors.</p>
            <a href="/ml/fert_ilizer/" className="animate-pulse inline-flex items-center py-2  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none text-m text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      </div>

    </>
  );
};

export default Dashboard;
