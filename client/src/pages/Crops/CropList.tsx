import React from 'react';
import { Link } from 'react-router-dom';

const CropList = ({ crops }) => {
  return (
    <div>
      <h2>List of Crops</h2>
      <ul>
        {crops.map((crop, index) => (
          <li key={index}>
            <Link to={`/crop/${crop.name}`}>{crop.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropList;
