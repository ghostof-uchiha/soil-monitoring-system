import { useEffect, useState } from 'react';

interface SuccessMessageProps {
  message: string;
}

const SucessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000); // Hide the message after 5 seconds
    }
  }, [message]);
  return (
    <div
      className={`fixed top-20 right-20 z-9999 transform translate-y-[-50%] ${
        show ? 'translate-x-0' : 'translate-x-full'
      } rounded shadow duration-500`}
    >
      <div className="px-8 py-6 bg-green-400 text-white flex justify-between rounded">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SucessMessage;
