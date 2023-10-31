// CropDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { crops } from './crops';

const CropDetails: React.FC = () => {
  const { cropName } = useParams<{ cropName: string }>();
  const crop = crops.find((c) => c.name === cropName);

  if (!crop) {
    return <div>Crop not found</div>;
  }

  return (
    <div>
      <h2>Crop Details</h2>
      <h3>{crop.name}</h3>
      {/* Display other crop details here */}
    </div>
  );
};

export default CropDetails;
