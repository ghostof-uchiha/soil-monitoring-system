import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { crops } from '../../utils/crops';
import '../../styles/cards.css';
import SearchBar from '../../components/SearchBar';

const CropList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function truncateText(text, limit) {
    const words = text.split(' ');
    const truncated = words.slice(0, limit).join(' ');
    return words.length > limit ? truncated + '...' : truncated;
  }
  

  return (
    <div className='relative'>
      <Breadcrumb pageName="Crops" />
      <div className='absolute left-30 top-0'>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <ul className="flex flex-wrap gap-5 mt-4">
        <div className="container mb-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {filteredCrops.map((crop) => (
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={crop.id}>
                <Link to={`/crops/${crop.name}`}>
                  <article className="overflow-hidden h-96 rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className='h-60'>
                      <img
                        alt="Placeholder"
                        className="block h-full w-full object-cover"
                        src={crop.image}
                      />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:pt-4 md:px-6">
                      <h1 className="text-graydark dark:text-white font-bold text-title-md">
                        {crop.name}
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:py-1 md:px-4">
                      <a className="no-underline flex items-center text-black" href="#">
                        <p className="ml-2 text-sm text-graydark dark:text-white">
                        {truncateText(crop.desc, 20)}
                        </p>
                      </a>
                      <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
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
