import React, { useState } from 'react';
import { FaGlobe, FaInfoCircle, FaExternalLinkAlt } from 'react-icons/fa'; // Import FontAwesome icons

const Government = ({ websites }: any) => {
  const [showAll, setShowAll] = useState(false);

  const displayedWebsites = showAll ? websites : websites.slice(0, 5);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
  <tr>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      <FaGlobe className="inline-block mr-2" /> Website
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      <FaInfoCircle className="inline-block mr-2" /> Description
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      <FaExternalLinkAlt className="inline-block mr-2" /> Link
    </th>
  </tr>
</thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {displayedWebsites.map((website: any) => (
            <tr key={website.id}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <FaGlobe className="mr-2" />
                <span>{website.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-wrap overflow-hidden hover:overflow-visible">
                <div className="max-w-xs">
                  <FaInfoCircle className="mr-2" />
                  <p>{website.description}</p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                <a href={website.link} className="text-indigo-600 hover:text-indigo-900">Visit Website</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {websites.length > 5 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showAll ? 'Show Less' : 'Read More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Government;
