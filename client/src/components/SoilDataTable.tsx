
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
  temperature:number;
  humidity:number;
  ph:number;
};

type SoilBarGraphProps = {
  sample: Sample | SoilSample; // Use a union type to allow both Sample and SoilSample
};

const SoilDataTable: React.FC<SoilBarGraphProps>  = ({sample}) => {
  return (
    <div className=" rounded-sm  bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      

      <div className=" w-full flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-base font-medium uppercase xsm:text-base">
              Nutrients
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-base font-medium uppercase xsm:text-base">
              Level
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark ">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className=" text-black dark:text-white sm:block font-semibold">Nitrogen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5">{sample?.N?.level} mg/kg</p>
          </div>

        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="text-black dark:text-white font-semibold">
             Phosphorus
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5">{sample?.P?.level} mg/kg</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className=" text-black dark:text-white font-semibold">Potassium</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5">{sample?.K?.level} mg/kg</p>
          </div>

        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className=" text-black dark:text-white font-semibold">Temperature</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5 ">{sample.temperature.toFixed(1)}°C</p>
          </div>

        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-black dark:text-white block font-semibold">
              Local Humidity
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5">{sample.humidity} g.m<sup>-3</sup></p>
          </div>

        </div>

        <div className="grid grid-cols-2 border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-black dark:text-white block font-semibold">
              PH of soil
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5">{sample.ph}</p>
          </div>

      
        </div>

        <div className="grid grid-cols-2">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-black dark:text-white block font-semibold">
              Rainfall During the season
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-5 dark:text-meta-5">58.34 mm</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SoilDataTable;
