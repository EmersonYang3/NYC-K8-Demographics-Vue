import axios from 'axios'

const BASE_API_URL = 'https://data.cityofnewyork.us/resource/fm6n-5jvy.json?$limit=10000'

// Fetching Data From API utilizing AXIOS
export const fetchData = async (params = {}) => {
  try {
    const response = await axios.get(BASE_API_URL, { params })
    if (response.data.length === 0) {
      return {
        success: false,
        data: [],
        errorMessage: 'Request Failed. No district found. Try again with a valid district.',
      }
    }
    return { success: true, data: response.data }
  } catch (error) {
    const errorMessage = error.response
      ? `Request failed with status code ${error.response.status}: ${error.response.statusText}. Please check the request parameters and try again.`
      : `Request failed: ${error.message}. Please check your network connection and try again.`
    return { success: false, data: [], errorMessage }
  }
}

// General function to combine data
const combineData = (data) => {
  return data.reduce(
    (acc, item) => {
      if (item.category === 'All Students') {
        acc.Asian += parseFloat(item.asian_1)
        acc.Black += parseFloat(item.black_1)
        acc.Hispanic += parseFloat(item.hispanic_1)
        acc.White += parseFloat(item.white_1)
        acc.Other += parseFloat(item.other_1)
      }
      return acc
    },
    {
      Asian: 0,
      Black: 0,
      Hispanic: 0,
      White: 0,
      Other: 0,
    },
  )
}

// Combines all district statistics into a single dataset
export const getAllDistrictData = async () => {
  const { success, data, errorMessage } = await fetchData()
  const combinedData = success ? combineData(data) : null
  return { success, data: combinedData, errorMessage }
}

// Combines data only for a specified district
export const getDataByDistrict = async (districtNumber) => {
  const { success, data, errorMessage } = await fetchData({ district: districtNumber })
  const combinedData = success ? combineData(data) : null
  return { success, data: combinedData, errorMessage }
}
