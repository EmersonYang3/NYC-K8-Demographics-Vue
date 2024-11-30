import axios from 'axios'

const API_URL = 'https://data.cityofnewyork.us/resource/5rw7-99k7.json?$limit=10000'

export const fetchData = async () => {
  try {
    const APIResponse = await axios.get(API_URL)
    return APIResponse.data
  } catch (error) {
    console.error('Fetching Data Error: ', error)
    throw error
  }
}
