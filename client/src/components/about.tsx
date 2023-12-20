import React, { useEffect } from 'react';
import '../styles/about.css'; // Assuming your custom styles are still needed

const About = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <section id="about" className="section-bg md:pt-10 xl:pt-0">
        <div className="container mx-auto">
          <div className="section-header w-full flex justify-center flex-col items-center gap-6 ">
            <h3 className="text-[#64748b] xl:text-6xl md:text-5xl text-4xl  font-extrabold font-satoshi ">About Us</h3>
            <p className="section-description md:w-3/4 lg:w-1/2 flex mb-6">
            Agro API transforms agriculture with data-driven insights, predictive analytics, and enhanced crop predictions. Empowering farmers for sustainable and informed decisions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:justify-around">
            <div className="lg:w-6/12 " data-aos="fade-right">
              <img
              id="tomb"
                src="https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[500px] h-[500px] object-cover rounded-full xl:ml-45"
              />
            </div>

            <div className="lg:w-6/12 content mt-8 lg:mt-0 px-20 " data-aos="fade-left">
              <h2 className=" text-[#64748b] xl:text-6xl md:text-5xl text-4xl  font-extrabold font-satoshi">
                Purposeful Agriculture Transformation
              </h2>
              <h3 className="text-lg font-satoshi font-normal text-black mt-10">
                Empowering farmers with cutting-edge technology
              </h3>
              <p className='text-[#64748b] font-satoshi'>
                Agro API's mission is to revolutionize agriculture by providing farmers with data-driven insights and predictive analytics. Our platform enhances crop prediction accuracy and agricultural efficiency, empowering farmers for sustainable and informed decision-making.
              </p>

              <p className='text-[#64748b] font-satoshi'>
                Join us in the journey of transforming agriculture into a smarter, more efficient, and sustainable practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
