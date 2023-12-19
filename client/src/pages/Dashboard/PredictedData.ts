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




function formatToDateTimeString(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(date);
  return formattedDate;
}
function formatToDayOfWeekString(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options = {
    weekday: 'long',
  };
  const dayOfWeek = new Intl.DateTimeFormat('en-IN', options).format(date);
  return dayOfWeek;
}


const convertTimestampToCustomFormat = (utcTimestamp: string | number | Date) => {
  
  const utcDate = new Date(utcTimestamp);

  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    weekday: 'long' as const, 
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  // Adjust for IST (UTC + 5 hours 30 minutes)
  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

  // Format the date and time as per your requirement
  return istDate.toLocaleString('en-US', options);
};

const truncateDescription = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  } else {
    return text;
  }
};

function formatToDayMonthString(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(date);
  return formattedDate;
}

export { fetchData,formatToDateTimeString,formatToDayMonthString ,convertTimestampToCustomFormat,truncateDescription};
