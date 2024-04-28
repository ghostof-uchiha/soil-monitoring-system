import React, { useEffect, useState } from "react";
import { CropData } from "../utils/fertidata";
interface SoilData {
  _id: string;
  userId: string;
  Temparature: number;
  Humidity: number;
  Moisture: number;
  Soil_Type: number;
  Crop_Type: number;
  Nitrogen: number;
  Phosphorous: number;
  Potassium: number;
  fertilizer: string;
  timestamp: string;
  __v: number;
}

const TableOne: React.FC<SoilData> = ({ SoilData }) => {
  function useCharLimit(text: any, limit: any) {
    const [truncatedText, setTruncatedText] = useState(text);

    useEffect(() => {
      if (text.length > limit) {
        setTruncatedText(text.substring(0, limit) + "... ");
      } else {
        setTruncatedText(text);
      }
    }, [text, limit]);

    return truncatedText;
  }

  const characterLimit = 350; // Adjust limit as needed
  const soilDesc = (CropData as any)[2].Soils[SoilData.Soil_Type].desc // Assuming desc exists

  const truncatedDesc = useCharLimit(soilDesc, characterLimit);

  return (
    <div className="rounded-sm bg-white pt-6 pb-2.5  dark:bg-boxdark  xl:pb-1">
      <h4 className="mb-4 text-lg font-normal text-black dark:text-white">
        Soil Type : {(CropData as any)[2].Soils[SoilData.Soil_Type].soil}
      </h4>

      <img src={`${(CropData as any)[2].Soils[SoilData.Soil_Type].img}`} alt=""
        className="rounded-md h-60 w-full object-cover" />


      <p className="mb-8" >
        {truncatedDesc}
        <a href={`${(CropData as any)[2].Soils[SoilData.Soil_Type].link}`} className="text-[#1dc8cd]"> read more</a>
      </p>


      <h4 className="mb-6 text-lg font-normal text-black dark:text-white">
        Soil Nutrient
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nutrients
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Value
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              recommended  Value
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-3">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Temperature</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Temparature} °C</p>
          </div>

          <div className="flex justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block ">
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.temperature.min}&nbsp;-&nbsp;
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.temperature.max} °C
            </p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Moisture</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Moisture}%</p>
          </div>

          <div className="flex justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block ">
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.moisture.min}&nbsp;-&nbsp;
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.moisture.max}%
            </p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Humidity</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Humidity}%</p>
          </div>

          <div className="flex justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.humidity.min}&nbsp;-&nbsp;
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.humidity.max}%
            </p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Nitrogen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Nitrogen} mg/kg</p>
          </div>

          <div className="flex justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.nitrogen.min}&nbsp;-&nbsp;
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.nitrogen.max} kg/ha
            </p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Phosphorous</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Phosphorous} mg/kg</p>
          </div>

          <div className="flex justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.phosphorus.min}&nbsp;-&nbsp;
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.phosphorus.max} kg/ha
            </p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Potassium</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Potassium} mg/kg</p>
          </div>

          <div className="flex justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.potassium.min}&nbsp;-&nbsp;
              {(CropData as any)[0].Crops[SoilData.Crop_Type].requirements.potassium.max} kg/ha
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TableOne;
