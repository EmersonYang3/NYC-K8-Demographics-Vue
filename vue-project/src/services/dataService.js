// Importing Axios for making HTTP requests
import axios, { all } from 'axios'

// Runaway and Homeless Youth (RHY) Daily Census - Social Services:
// Updates daily, providing a concise and easily accessible snapshot of changes on a day-to-day basis.
// Relatively small updates, allowing quick and easy retrieval and monitoring of daily changes.
const API_URL = 'https://data.cityofnewyork.us/resource/5rw7-99k7.json?$limit=10000'

// Fetching Data From API utilizing AXIOS
export const fetchData = async (url = API_URL) => {
  try {
    // * Fullfilled promise
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    // * Rejected Promise
    // TODO: handle rejected promises
    console.error('Fetching Data Error:', error)
    throw error
  }
}

// Combines all program statistics into a single dataset
export const getAllProgramData = async () => {
  // apiData = [{program data for the day}]
  const apiData = await fetchData()

  const allProgramData = apiData.reduce((acc, item) => {

  });
}

// Combines data only for a specified program
export const getProgramDataByType = async (programType) => {}
