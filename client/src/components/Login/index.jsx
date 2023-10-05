import React, { useState } from "react";

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
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Login response:", data);
      setMydata(data.message);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email or Mobile Number:
          <input
            type="text"
            name="emailOrMobile"
            value={formData.emailOrMobile}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
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
