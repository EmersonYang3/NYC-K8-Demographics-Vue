// Importing Axios for making HTTP requests
import axios from 'axios';

// Runaway and Homeless Youth (RHY) Daily Census - Social Services:
// Updates daily, providing a concise and easily accessible snapshot of changes on a day-to-day basis.
// Relatively small updates, allowing quick and easy retrieval and monitoring of daily changes.
const API_URL = 'https://data.cityofnewyork.us/resource/5rw7-99k7.json?$limit=10000';

export const fetchData = async () => {
  try {
    // * Fullfilled promise
    const response = await axios.get(API_URL);
    return response.data;

  } catch (error) {
    // * Rejected Promise 
    // TODO: handle rejected promises
    console.error('Fetching Data Error:', error);
    throw error;
  }
};
