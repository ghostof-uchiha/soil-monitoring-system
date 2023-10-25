import { useState } from 'react';
import PassOtp from '../../components/PassOtp';
import ForgetPass from '../../components/ForgetPass';

const VerifyForOtp = () => {
  const [condition, setCondition] = useState(false);


  return (
    <>
      {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>OTP Recive Details</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-sm space-x-2">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Enter your Email/number"
                        required
                        name="emailOrMobile"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke text-white p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 bg-blue-500">
                        Send
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
      </div> */}

      {condition ? <PassOtp /> : <ForgetPass />}
    </>
  );
};

export default VerifyForOtp;
