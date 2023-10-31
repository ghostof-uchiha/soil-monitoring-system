// CropList.tsx
import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { crops } from './crops';
import '../../styles/cards.css';

const CropList: React.FC = () => {
  return (
    <div>
      <Breadcrumb pageName="Crops" />
      <ul className="flex flex-wrap gap-5 mt-4">
        <div className="container mb-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {crops.map((crop) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <Link to={`/crops/${crop.name} key={crop.id}`}>
                  <article className="overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className='h-60'>
                      <img
                        alt="Placeholder"
                        className="block h-full w-full object-cover"
                        src={crop.image}
                      />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className=" text-black dark:text-white font-bold text-title-md">
                          {crop.name}
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                      >
                        <p className="ml-2 text-sm text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officiis.</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="#"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                </Link>
            </div>
              ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default CropList;
