import axios from 'axios'

const API_URL = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json'

export const fetchData = async () => {
  try {
    const APIResponse = await axios.get(API_URL)
    return APIResponse.data
  } catch (error) {
    console.error('Fetching Data Error: ', error)
    throw error
  }
}
