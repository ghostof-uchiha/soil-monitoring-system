import React, { useEffect, useState ,useRef} from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const apiKey = process.env.REACT_APP_API_KEY;

const Register = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
    confirmpassword: "", // Add confirmpassword to your state
  });

  const [errormes, seterrormes] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    // Enable the button only if password and confirm password match
    setIsButtonDisabled(formData.password !== formData.confirmpassword);
  }, [formData.password, formData.confirmpassword]);


  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      seterrormes(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          "API-Key": apiKey,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Registration response:", data);
      seterrormes(data.message);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="w-full max-h-full relative flex flex-col justify-center items-center">
      <h1 className="p-4 font-semibold text-xl">
        Register
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[380px] w-11/12 p-8 py-12 rounded-md shadow-1">
        <label className="flex flex-col gap-3">
          Email or Mobile Number:
          <input
            name="emailOrMobile"
            id="email"
            className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com/123456xxxx"
            required
            value={formData.emailOrMobile}
            onChange={handleInputChange}
          ></input>
        </label>

        <label className="flex flex-col gap-3 relative">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={formData.password}
            onChange={handleInputChange}
          ></input>
          {!isButtonDisabled && formData.password >= 1 ? (
            // Content to show when the button is disabled
            <div className="absolute right-2 bottom-3 text-green-500">
              <BsCheckLg />{" "}
            </div>
          ) : (
            <></>
          )}
        </label>

        <label className="flex flex-col gap-3 relative">
          Confirm Password:
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={formData.confirmpassword}
            onChange={handleInputChange}
          />
          {!isButtonDisabled && formData.password >= 1 ? (
            // Content to show when the button is disabled
            <div className="absolute right-2 bottom-3 text-green-500">
              <BsCheckLg />{" "}
            </div>
          ) : (
            <></>
          )}
        </label>

        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          disabled={isButtonDisabled}
        >
          Register
        </button>

        {/* ...other form elements */}
      </form>

      {errormes ? (
        <div className="absolute zoom-in-out-box ">
        <div
          ref={popupRef}
          className="h-48 w-[450px] relative flex justify-center items-center flex-col  p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className=" mb-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white text-center">
            {errormes}
          </h5>
          <button
            onClick={() => seterrormes(false)}
            className=" text-gray-800 font-bold py-2 px-4 rounded absolute right-0 top-1"
          >
            <AiOutlineClose className="text-xl"/>
          </button>
        </div>
      </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Register;
