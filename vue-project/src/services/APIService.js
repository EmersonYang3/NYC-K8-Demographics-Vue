import axios from 'axios'

const API_URL = 'https://data.cityofnewyork.us/resource/weg5-33pj.json?$limit=10000'

export const fetchData = async () => {
  try {
    const APIResponse = await axios.get(API_URL)
    const prettifyData = JSON.stringify(APIResponse.data, null, 2)
    return prettifyData
  } catch (error) {
    console.error('Fetching Data Error: ', error)
    throw error
  }
}
