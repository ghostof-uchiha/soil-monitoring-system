
type Sample = {
  id: number;
  N: {
    level: number;
  };
  P: {
    level: number;
  };
  K: {
    level: number;
  };
  tempreture:number;
  humidity:number;
  ph:number;
};

// In SoilDataTable component file
type SoilDataTableProps = {
  sample: Sample;
  // Add other props specific to SoilDataTable component if needed
};
const SoilDataTable: React.FC<SoilDataTableProps>  = ({sample}) => {
  return (
    <div className=" rounded-sm  bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      

      <div className=" w-full flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nutrients
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Level
            </h5>
          </div>
          <div className=" p-2.5 text-center block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Percentage
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark ">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className=" text-black dark:text-white sm:block">Nitrogen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{sample?.N?.level}</p>
          </div>

          <div className=" items-center justify-center p-2.5 flex xl:p-5">
            <p className="text-meta-5">{((sample?.N?.level/140)*100).toFixed(1)}%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
             Phosphorus
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{sample?.P?.level}</p>
          </div>

          <div className="items-center justify-center p-2.5 flex xl:p-5">
            <p className="text-meta-5">{((sample?.P?.level/145)*100).toFixed(1)}%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className=" text-black dark:text-white">Potassium</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{sample?.K?.level}</p>
          </div>

          <div className="items-center justify-center p-2.5 flex xl:p-5">
            <p className="text-meta-5">{((sample?.K?.level/205)*100).toFixed(1)}%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className=" text-black dark:text-white ">Tempreture</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{sample.tempreture.toFixed(1)}°C</p>
          </div>

          <div className=" items-center justify-center p-2.5 flex xl:p-5">
            <p className="text-meta-5">{sample.tempreture.toFixed(1)}°C</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-black dark:text-white block">
              Local Humidity
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{sample.humidity}</p>
          </div>

          <div className=" items-center justify-center p-2.5 flex xl:p-5">
            <p className="text-meta-5">{(((sample.humidity-14.3)/(100-14.3))*100).toFixed(1)}%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-black dark:text-white block">
              PH of soil
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{sample.ph}</p>
          </div>

      
        </div>

        <div className="grid grid-cols-3">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-black dark:text-white block">
              Rainfall During the season
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">202.93</p>
          </div>

          <div className=" items-center justify-center p-2.5 flex xl:p-5">
            <p className="text-meta-5">76.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilDataTable;
