import { ChangeEvent, useEffect, useState } from 'react';
import PassOtp from '../../components/PassOtp';
import ResetPassword from '../../components/ResetPassword';
import Processing from '../../components/Processing';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const VerifyForOtp = () => {
  const [sendOtp, setsendOtp] = useState(false);
  const [sucess, setSucess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [token, setToken] = useState('');
  const [setPass, setSetPass] = useState(false);

  const [formData, setFormData] = useState({
    emailOrMobile: '',
    otp: '',
    password: "",
	  confirmpassword:"",
  });
  const [passOtp, setPassOtp] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsendOtp(true);
    handleClose();
    try {
      const response = await fetch(
        'http://localhost:4000/api/users/forgetpass',
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
        setPassOtp(true);

        setSucess(data.message);
        setIsVisible(true);

        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        console.log(data.message);
        setIsVisible(true);
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during Sending OTP:', error);
    }
    setsendOtp(false);
  };

  useEffect(() => {
    console.log(token);
    
  }, [token]);

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible ? (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-3 max-w-2xl mx-auto transition-transform duration-300 ease-in-out">
          <div
            id="toast-default"
            className={`${error ? 'border-danger' : 'border-green-light'}
            flex items-center w-full max-w-xs p-4 text-gray-500 border-2  bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ">
              {error ? (
                <>
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                      fill="#FBBF24"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 12"
                    fill="none"
                    className="bg-green-light p-2 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                      fill="white"
                      stroke="white"
                    ></path>
                  </svg>
                </>
              )}
            </div>
            <div className="ml-3 text-sm font-normal">
              {error ? (
                <p className="text-danger">{error}</p>
              ) : (
                <p className="text-green-light">{sucess}</p>
              )}
            </div>
            {error ? (
              <button
                type="button"
                onClick={handleClose}
                className="cursor-pointer ml-6 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-collapse-toggle="toast-default"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}

      {setPass ? 
        <ResetPassword 
        setSuccess={setSucess}
        setError={setError}
        setIsVisible={setIsVisible}
        formData={formData}
        setFormData={setFormData}
        token={token}/> : <></>}

      {passOtp ? (
        <PassOtp
          setSuccess={setSucess}
          setError={setError}
          setIsVisible={setIsVisible}
          formData={formData}
          setFormData={setFormData}
          setToken={setToken}
          setSetPass={setSetPass}
        />
      ) : (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
          <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl">
                  <p>OTP Recive Details</p>
                </div>
              </div>

              <div>
                <form onSubmit={sendOTPHandler}>
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-sm space-x-2">
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Enter your Email/number"
                          required
                          value={formData.emailOrMobile}
                          name="emailOrMobile"
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-5">
                      <div>
                        <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke text-white p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 bg-blue-500">
                          {sendOtp ? <Processing /> : <>Send</>}
                        </button>
                      </div>

                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn't recieve code?</p>{' '}
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyForOtp;
