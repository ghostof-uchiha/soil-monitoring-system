
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

const TableOne : React.FC<SoilData> = ({ SoilData }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-lg font-normal text-black dark:text-white">
        Soil Nutrient
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
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
        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark sm:grid-cols-2">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Temperature</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Temparature}</p>
          </div>
          
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Moisture</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Moisture}</p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Humidity</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Humidity}</p>
          </div>
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Nitrogen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Nitrogen}</p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Phosphorous</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Phosphorous}</p>
          </div>

          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Potassium</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{SoilData.Potassium}</p>
          </div>

         
        </div>

      </div>
    </div>
  );
};

export default TableOne;
