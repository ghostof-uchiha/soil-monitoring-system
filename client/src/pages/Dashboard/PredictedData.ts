// apiUtils.js
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const fetchData = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/soil/predicted-soil-data/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') || '',
        'API-Key': apiKey,
      },
    });

    if (response.status === 200) {
      const responseData = await response.json();
      console.log('Data fetched successfully:');
      console.log(responseData);
      return responseData.predictedSoilData;
    } else {
      // Handle errors here
      console.error('Error fetching data');
      return null;
    }
  } catch (error) {
    // Handle network errors here
    console.error('Network error:', error);
    return null;
  }
};

const convertUTCtoIST = (utcTimestamp: string | number | Date) => {
  const utcDate = new Date(utcTimestamp);

  // Adjust for IST (UTC + 5 hours 30 minutes)
  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

  // Format the date and time as per your requirement
  const formattedDate = istDate.toLocaleDateString(); // Adjust options as needed
  const formattedTime = istDate.toLocaleTimeString(); // Adjust options as needed

  return `${formattedDate} ${formattedTime}`;
};

export { fetchData ,convertUTCtoIST};
