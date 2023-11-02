// CropDetails.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { crops } from './crops';
import Crophead from '../../components/Crophead';

const CropDetails: React.FC = () => {
  const { cropName = '' } = useParams<{ cropName?: string }>(); // Provide a default empty string for cropName
  const normalizedCropName = cropName.toLowerCase();
  const crop = crops.find((crop) => crop.name.toLowerCase() === normalizedCropName);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  
  if (!crop) {
    return <div>Crop not found</div>;
  }

  return (
    <div>
      <Crophead pageName={crop.name}/>
      <div className='overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className="">
        <img src={crop.image} alt={crop.name} className='w-full h-65 object-cover box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;'/>

        </div>
        <article className='py-8 px-16 text-justify'>
          {crop.name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea dignissimos maiores laborum temporibus voluptatum iste sequi eaque libero dicta numquam delectus dolorum, facilis dolores optio! Obcaecati voluptatum molestias sunt repudiandae quae autem expedita sequi saepe, quod ullam mollitia cumque, rem eum quia laborum. Unde, harum et? Voluptatum repellendus dolore, fugiat illum inventore quisquam nemo maiores. Suscipit illo repellendus ipsam incidunt sint quae, nulla voluptatibus modi enim mollitia quam provident ipsum culpa eum assumenda, ut reprehenderit facere, totam sed optio corrupti harum necessitatibus. Id qui, corrupti amet pariatur voluptatem quo saepe debitis nostrum ea sed consectetur quis. Repudiandae provident quisquam, dolores facere fugiat, cumque tempore alias nemo non cupiditate, nesciunt dolore in deserunt rerum eaque. Nostrum quisquam amet recusandae soluta unde a. Saepe provident laboriosam sint, magni harum aliquid, veniam eligendi tempore sunt, obcaecati deleniti similique consequuntur beatae asperiores consequatur totam reprehenderit. Rerum esse sit culpa quia accusamus, hic, obcaecati tempora natus deserunt voluptas magni commodi ipsa qui similique consequatur incidunt suscipit fugiat! Soluta repellat pariatur, sapiente labore accusantium dolores illo ex similique perferendis itaque, modi sed quam repellendus voluptates, tempore quis fugit delectus ipsum veniam libero harum beatae voluptatum? Perspiciatis ducimus animi sunt labore consequuntur laudantium laborum a earum possimus est natus consectetur, non itaque eveniet magnam numquam! Expedita, odit ipsam temporibus minima, debitis doloremque, tempora quasi quidem dolores provident culpa eum delectus pariatur cumque. Quos at rem dolore, accusantium eveniet excepturi vitae commodi! Odio dicta sint aut cum autem provident nobis asperiores quis! Est error quis ut dolores officia ullam reiciendis deleniti repellat unde necessitatibus libero odio, omnis explicabo eaque repellendus voluptatum sit quibusdam tenetur consequatur quod, minima nesciunt ad iusto iste. Modi harum possimus maxime et voluptatibus illo corrupti! Voluptatum ipsam voluptates velit adipisci soluta temporibus, unde suscipit, nulla eveniet qui pariatur consequatur distinctio. Accusamus magni explicabo mollitia! Aspernatur illum id commodi doloremque facere minus assumenda beatae eligendi fugiat quisquam laudantium consequatur sit corporis quod ab amet quos iusto, aperiam ex! Asperiores fuga consequatur totam delectus blanditiis reprehenderit voluptas explicabo doloribus natus culpa sit, in laborum obcaecati maiores, ea, pariatur id! Asperiores doloremque ducimus quia a. Illum eos ratione asperiores, repellendus praesentium neque at rerum doloremque aperiam qui earum nostrum architecto nisi perspiciatis. Nulla nam nobis labore accusantium quisquam sunt vero dicta, amet aliquid iusto earum corrupti quos eligendi autem omnis quibusdam quod nesciunt perspiciatis in delectus ea sed impedit explicabo. Optio consequuntur totam doloribus sint natus quod veritatis fugit quae tempora odio nihil eos, cumque, atque tenetur porro? Officiis, impedit ut. At voluptatibus beatae voluptas ipsa numquam in fuga reprehenderit animi nulla! Numquam obcaecati, ipsam ipsum eaque asperiores in minima possimus error blanditiis repellat. Nulla fugiat aliquam eligendi harum, voluptatibus earum mollitia quod hic est assumenda iste laborum asperiores quo aut maxime possimus vero similique nobis ipsum? Veritatis reiciendis illo quis voluptates sunt odio, minus voluptate omnis recusandae repudiandae saepe eveniet inventore, excepturi soluta eaque expedita maxime amet cumque officiis officia velit porro. Veritatis, ad, possimus nostrum dolore explicabo magni commodi necessitatibus veniam harum deserunt atque.
        </article>
      </div>
    </div>
  );
};

export default CropDetails;
