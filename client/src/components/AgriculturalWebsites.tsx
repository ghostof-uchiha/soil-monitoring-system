
import React, { useState } from 'react';
import Government from '../components/Government.tsx';

const GovernmentAgriculturalWebsite = () => {
  
  
  const websites = [
    {
      id: 1,
      name: "National Institute of Food and Agriculture (NIFA)",
      description: "Provides leadership and funding for agricultural research, education, and extension programs.",
      link: "https://www.nifa.usda.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 2,
      name: "United States Department of Agriculture (USDA)",
      description: "Delivers leadership on food, agriculture, natural resources, rural development, nutrition, and trade.",
      link: "https://www.usda.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 3,
      name: "Food and Drug Administration (FDA)",
      description: "Protects public health by ensuring the safety, effectiveness, and security of human and veterinary drugs, animal food & feed, cosmetics, medical devices, and tobacco products.",
      link: "https://www.fda.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 4,
      name: "Environmental Protection Agency (EPA)",
      description: "Works to protect human health and the environment by writing and enforcing environmental regulations.",
      link: "https://www.epa.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 5,
      name: "National Oceanic and Atmospheric Administration (NOAA) Fisheries",
      description: "Manages sustainable fisheries and protects marine life.",
      link: "https://www.fisheries.noaa.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 6,
      name: "Animal and Plant Health Inspection Service (APHIS)",
      description: "Protects American agriculture and natural resources from pests and diseases.",
      link: "https://www.aphis.usda.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 7,
      name: "Rural Development (USDA Rural Development)",
      description: "Invests in rural communities to create jobs, build infrastructure, and strengthen economies.",
      link: "https://www.rd.usda.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 8,
      name: "Farm Service Agency (FSA)",
      description: "Delivers essential financial and conservation programs to support farmers, ranchers, and agricultural businesses.",
      link: "https://www.fsa.usda.gov/" // Replace with actual URL (use search engines)
    },
    {
      id: 9,
      name: "Foreign Agricultural Service (FAS)",
      description: "Promotes U.S. agriculture abroad and helps create a level playing field for U.S. producers globally.",
      link: "https://fas.usda.gov/" // Replace with actual URL (use search engines)
    },
    
  ];
  
  
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-500">Government Agricultural Websites</h1>
      <Government websites={websites} />
    </div>
  );
  }

export default GovernmentAgriculturalWebsite;
