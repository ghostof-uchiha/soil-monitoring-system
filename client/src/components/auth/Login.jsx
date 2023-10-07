import React, { useState } from "react";
const apiKey = process.env.REACT_APP_API_KEY;


const Login = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
    // other form fields
  });


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
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'API-Key': apiKey
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Login response:", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="w-full max-h-full relative flex flex-col justify-center items-center" >
      <h1 className="p-4 font-semibold text-xl">
        Login
      </h1>
      <form className="flex flex-col gap-6 max-w-[380px] w-11/12 p-8 py-12 rounded-md shadow-1" onSubmit={handleSubmit}>
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

        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
          </div>
          <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>
        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</a>
        </p>
        {/* other form fields */}

      </form>
    </div>

  );
};

export default Login;
