import React, { useEffect, useState } from "react";
const apiKey = process.env.REACT_APP_API_KEY;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
    // other form fields
  });

  const [mydata, setMydata] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'API-Key': apiKey
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Registration response:", data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  useEffect(() => {
  }, [mydata]);


  return (
    <div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-64">
        <label className="flex flex-col gap-3">
          Email or Mobile Number:
          <input name="emailOrMobile" id="email" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com/123456xxxx"
            required
            value={formData.emailOrMobile}
            onChange={handleInputChange}></input>

        </label>
        <label className="flex flex-col gap-3">
          Password:
          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            value={formData.password}
            onChange={handleInputChange}
          ></input>
        </label>
        <label className="flex flex-col gap-3">
          Confirm Password:
          <input type="password" name="confirmpassword" id="confirmpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            value={formData.confirmpassword}
            onChange={handleInputChange}
          ></input>
        </label>

        <div class="flex items-center justify-between">
          <div class="flex items-start">
            
          </div>
          
        </div>
        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
        </p>
        {/* other form fields */}

      </form>

      <div>{mydata}</div>
      <p>{process.env.API_KEY}</p>
    </div>

  );
};

export default RegistrationForm;
