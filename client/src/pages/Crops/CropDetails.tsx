import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { crops } from '../../utils/crops';
import Crophead from '../../components/Crophead';
import '../../styles/cropcard.css';

const CropDetails: React.FC = () => {
  const { cropName = '' } = useParams<{ cropName?: string }>();
  const normalizedCropName = cropName.toLowerCase();
  const crop = crops.find(
    (crop) => crop.name.toLowerCase() === normalizedCropName,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!crop) {
    return <div>Crop not found</div>;
  }

  return (
    <div>
      <Crophead pageName={crop.name} />
      <div
        className="overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark
          text-boxdark-2 dark:text-white"
      >
        <div className="md:flex-row flex items-center w-full lg:px-16 pt-10 justify-around gap-10 flex-col px-7">
          <img
            src={crop.image}
            alt={crop.name}
            id="tomb"
            className="h-90 md:h-96 rounded-lg object-cover md:w-1/2 sm:w-full crop_image_hover transition-scale duration-300 "
          />
          <div className="md:w-1/2 flex flex-col gap-2 sm:w-full">
            <h2 className="lg:text-4xl font-extrabold text-2xl text-boxdark-2 font-satoshi dark:text-white">
              {crop.name}
            </h2>
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.desc}
            </p>
          </div>
        </div>
        <article className="p-6 md:p-16 text-justify">
          {/* Cultivation Section */}
          <section className="my-8">
            <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
              Cultivation
            </h2>
            <img
              src={crop.cultivation.image}
              alt="Cultivation"
              className="w-full h-60 object-cover mb-4 rounded-md"
            />
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.cultivation.methods}
            </p>
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.cultivation.fertilizers}
            </p>
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.cultivation.challenges}
            </p>
          </section>

          {/* Nutrition Section */}
          <section className="my-8 ">
            <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
              Nutrition
            </h2>
            <img
              src={crop.nutrition.image}
              alt="Nutrition"
              className="w-full  object-cover mb-4 rounded-md"
            />
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.nutrition.content}
            </p>
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.nutrition.health_benefits}
            </p>
            <table className="w-full my-4">
              <thead>
                <tr>
                  {Object.keys(crop.nutrition.table).map((key) => (
                    <th
                      key={key}
                      className="text-boxdark-2 font-satoshi dark:text-white capitalize"
                    >
                      {key.replace(/_/g, ' ')}{' '}
                      {/* Replace underscores with spaces */}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.values(crop.nutrition.table).map((value, index) => (
                    <td
                      key={index}
                      className="text-boxdark-2 font-satoshi dark:text-white"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>

          {/* Production Section */}
          <section className="my-8">
            <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
              Production
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {crop.production.video ? (
                <iframe className='w-full h-80' src={crop.production.video}>
                </iframe>
              ) : (
                <img
                  src={crop.production.image}
                  alt="Production"
                  className="w-full h-80 object-cover mb-4 rounded-md"
                />
              )}

              <div>
                <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                  {crop.production.global_statistics}
                </p>
                <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                  {crop.production.environmental_impact}
                </p>
              </div>
            </div>
          </section>

          {/* Varieties Section */}
          <section className="my-8">
            <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
              Varieties
            </h2>
            <img
              src={crop.varieties.image}
              alt="Varieties"
              className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop.varieties.types}
            </p>
          </section>

          {/* Economy Section */}
          <section className="my-8 flex gap-4 w-full justify-center items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
                Economy
              </h2>
              <img
                src={crop.economy.image}
                alt="Economy"
                className="w-full  object-cover mb-4 rounded-md"
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                {crop.economy.economic_significance}
              </p>
              <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                {crop.economy.technology_innovation}
              </p>
            </div>
          </section>

          {/* Culinary Uses Section */}
          <section className="my-8 grid grid-cols-2 gap-4 w-full justify-center items-center">
            <div className="w-full ">
              <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
                Culinary Uses
              </h2>
              <img
                src={crop.culinary.image}
                alt="Culinary Uses"
                className="w-full  object-cover mb-4 rounded-md h-90"
              />
            </div>
            <div className="w-full">
              <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                {crop.culinary.uses}
              </p>
            </div>

            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4 text-boxdark-2 font-satoshi dark:text-white">
                Harvesting Process
              </h2>
              <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                {crop.culinary.harvesting_process}
              </p>
            </div>
            <div className="w-full ">
              <img
                src={crop.culinary.image2}
                alt="Culinary Uses"
                className="w-full  object-cover mb-4 rounded-md h-90"
              />
            </div>
            <div className="w-full ">
              <img
                src={crop.culinary.image3}
                alt="Culinary Uses"
                className="w-full  object-cover mb-4 rounded-md h-90"
              />
            </div>
            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4 text-boxdark-2 font-satoshi dark:text-white">
                Cooking Tips
              </h2>
              <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
                {crop.culinary.cooking_tips}
              </p>
            </div>
          </section>

          {/* Cultural Significance Section */}
          <section className="my-8">
            <h2 className="text-2xl md:text-4xl font-medium mb-4 text-boxdark-2 font-satoshi dark:text-white">
              Cultural Significance
            </h2>
            <img
              src={crop?.cultural_significance.image}
              alt="Cultural Significance"
              className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <p className="text-lg text-justify text-boxdark-2 font-satoshi dark:text-white font-normal">
              {crop?.cultural_significance.description}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default CropDetails;
