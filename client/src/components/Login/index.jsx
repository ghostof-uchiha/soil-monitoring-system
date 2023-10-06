import React, { useState } from "react";
const apiKey = process.env.REACT_APP_API_KEY;


const LoginForm = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
    // other form fields
  });

  const [mydata, setMydata] = useState('');

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
          'API-Key' : apiKey
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
    <div>
      <form  className="flex flex-col  gap-6 w-64" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          Email or Mobile Number:
          <input
            type="text"
            name="emailOrMobile"
            className="outline"
            value={formData.emailOrMobile}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col gap-3">
          Password:
          <input
            type="password"
            name="password"
            className="outline"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* other form fields */}
        <button type="submit">Login</button>
      </form>
    <p>{mydata}</p>
    </div>

  );
};

export default LoginForm;
