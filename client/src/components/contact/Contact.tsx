import './Styles.css';
import './ResponsiveContact.css';
import ContactPic from '../../images/cards/bloco_final_image.svg';

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contatWrapper">
        <div className="leftContact">
          <div className="infosContact">
            <div className="flex flex-col font-satoshi">
              <h2 className='text-[#64748b] xl:text-6xl md:text-5xl text-4xl  font-extrabold font-satoshi'>Project/Agro-API</h2>

              <div className="text-gray-600 font-satoshi">
                Agro-API, a revolutionary agricultural project, integrates
                cutting-edge technology with IoT and machine learning. The
                system employs an advanced sensor hub, measuring NPK values,
                soil moisture, and environmental factors. Real-time data is
                transmitted to a web interface, offering farmers actionable
                insights for precision farming. With a focus on sustainability
                and increased efficiency, Agro-API paves the way for
                agricultural entrepreneurship, fostering smarter cultivation
                practices and informed decision-making in the field.
              </div>
            </div>
          </div>
        </div>
        <div className="rigthContact">
          <img src={ContactPic} alt="draw of two persons doing a hand shek" />
        </div>
      </div>
    </section>
  );
};
