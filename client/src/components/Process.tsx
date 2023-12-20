
const Process = () => {
  return (
    <section id="process" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="xl:text-6xl md:text-4xl font-bold mb-8 text-[#64748b] font-satoshi">How Agro API Works</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Data Collection Card */}
          <div id="tomb" className="max-w-lg  bg-white p-8 rounded-xl  transition-transform transform hover:scale-105 shadow-2xl hover:shadow-color-green-500 duration-500">
            <div className="text-4xl mb-6">Smart Data Collection</div>
            <i className="fas fa-database text-6xl text-blue-500 mb-6"></i>
            <p className="text-[#64748b] font-satoshi">
              Agro API employs state-of-the-art IoT devices to gather comprehensive soil data, including essential nutrients (N, P, K), moisture levels, humidity, temperature, and pH.
            </p>
          </div>

          {/* Intelligent Analysis Card */}
          <div id="tomb"  className="max-w-lg bg-white p-8 rounded-xl  transition-transform transform hover:scale-105 shadow-2xl hover:shadow-color-green duration-500">
            <div className="text-4xl mb-6">Intelligent Data Analysis</div>
            <i className="fas fa-brain text-6xl text-green-500 mb-6"></i>
            <p className="text-[#64748b] font-satoshi">
              Our platform intelligently processes the collected data, leveraging advanced analytics to generate valuable insights and trends for farmers.
            </p>
          </div>

          {/* Predictive Crop Modeling Card */}
          <div id="tomb" className="max-w-lg bg-white p-8 rounded-xl  transition-transform transform hover:scale-105 shadow-2xl hover:shadow-color-green duration-500">
            <div className="text-4xl mb-6">Predictive Crop Modeling</div>
            <i className="fas fa-chart-line text-6xl text-purple-500 mb-6"></i>
            <p className="text-[#64748b] font-satoshi">
              Agro API's machine learning algorithms analyze soil conditions, weather data, and historical patterns to predict optimal crops with remarkable accuracy.
            </p>
          </div>

          {/* Fertilizer Recommendations Card */}
          <div id="tomb"  className="max-w-lg bg-white p-8 rounded-xl  transition-transform transform hover:scale-105 shadow-2xl hover:shadow-color-green-500 duration-500">
            <div className="text-4xl mb-6">Tailored Fertilizer Recommendations</div>
            <i className="fas fa-flask text-6xl text-orange-500 mb-6"></i>
            <p className=" text-[#64748b] font-satoshi">
              Receive personalized fertilizer recommendations based on crop predictions, ensuring optimal growth and yield for your specific soil conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
