import React, { useState, useRef, useEffect } from 'react';
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

interface PassOtpProps {
  setSuccess: React.Dispatch<React.SetStateAction<string | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSetPass: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {
    emailOrMobile: string;
    otp: string;
    password: string;
	  confirmpassword:string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{ emailOrMobile: string; otp: string }>>;
}



const PassOtp:React.FC<PassOtpProps> = ({ setSuccess, setError, setIsVisible , formData, setFormData,setToken ,setSetPass}) => {
  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleClose = () => {
    setIsVisible(false);
  };
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    // Log input values when the component mounts or when inputValue changes
    setFormData(prevData => ({
      ...prevData,
      otp: inputValue,
    }));
  }, [inputValue]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      if (value === '' && index > 0) {
        // If the user deletes a digit, move focus to the previous input
        inputRefs[index - 1]?.current?.focus();
      } else if (index < inputRefs.length - 1) {
        // Move focus to the next input if it's not the last one
        inputRefs[index + 1]?.current?.focus();
      }

      // Update inputValue by replacing the character at the current index
      const newInputValue =
        inputValue.substring(0, index) + value + inputValue.substring(index + 1);
      setInputValue(newInputValue);

      setError('');
    } else {
      setError('Please enter valid integers.');
    }
  };

  const sendOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClose();
    try {
      const response = await fetch(
        'http://localhost:4000/auth/verifyOtp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'API-Key': apiKey,
          },
          body: JSON.stringify(formData),
        },
      );


      const data = await response.json();
      if (response.ok) {

        // Now otp input is visible
        setSetPass(true);
        setToken(data.token)
        
        setSuccess(data.message);
        setIsVisible(true)

        setTimeout(() => {handleClose()}, 3000);
      } else {
        console.log(data.message);
        setIsVisible(true)
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during Sending OTP:', error);
    }
  };

  return (

    <>
      
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Forget Password OTP</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a OTP to {formData.emailOrMobile}</p>
            </div>
          </div>

          <div>
            <form onSubmit={sendOTPHandler}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-sm space-x-2">
                  {inputRefs.map((ref, index) => (
                    <div className="w-16 h-16" key={index}>
                      <input
                        ref={ref}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        maxLength={1}
                        value={inputValue[index] || ''}
                        // Set input value from state
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-5 my-8">
                <div>
                  <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke text-white p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover-bg-opacity-50 bg-blue-500">
                    Done
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive code?</p>{' '}
                  <a
                    className="flex flex-row items-center text-blue-500"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default PassOtp;
