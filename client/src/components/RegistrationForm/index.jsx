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
          'API-Key' : apiKey
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
        <input
          className="outline"
          type="text"
          name="emailOrMobile"
          value={formData.emailOrMobile}
          onChange={handleInputChange}
          required
          />
      </label>
      <label className="flex flex-col gap-3">
        Password:
        <input
          className="outline"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>
      {/* other form fields */}
      <button type="submit" className="text-start">Register</button>
    </form>

    <div>{mydata}</div>
    <p>{process.env.API_KEY}</p>
    </div>

  );
};

export default RegistrationForm;
