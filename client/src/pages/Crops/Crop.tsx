import React from 'react';
import { useParams } from 'react-router-dom';

interface CropInfoProps {
  // Define the type for the crop data
  crop: {
    // Define the structure of your crop data (example properties)
    name: string;
    description: string;
    // ...other properties specific to your crop data
  };
}

const CropInfo: React.FC<CropInfoProps> = ({ crop }) => {
  // Use crop data as needed
  const { cropName } = useParams<{ cropName: string }>();

  return (
    <div>
      <h2>{crop.name} Information</h2>
      <p>{crop.description}</p>
      {/* Display other crop-specific information here */}
    </div>
  );
};

export default CropInfo;
