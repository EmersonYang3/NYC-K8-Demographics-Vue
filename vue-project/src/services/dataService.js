import axios from 'axios'

const BASE_API_URL = 'https://data.cityofnewyork.us/resource/fm6n-5jvy.json?$limit=10000'

// Fetching Data From API utilizing AXIOS
export const fetchData = async (params = {}) => {
  try {
    const response = await axios.get(BASE_API_URL, { params })
    const success = response.data.length > 0
    return { success, data: response.data }
  } catch (error) {
    console.error('Fetching Data Error:', error)
    return { success: false, data: [] }
  }
}

// General function to combine data
const combineData = (data) => {
  return data.reduce(
    (acc, item) => {
      if (item.category === 'All Students') {
        acc.asian += parseFloat(item.asian_1)
        acc.black += parseFloat(item.black_1)
        acc.hispanic += parseFloat(item.hispanic_1)
        acc.white += parseFloat(item.white_1)
        acc.other += parseFloat(item.other_1)
      }
      return acc
    },
    {
      asian: 0,
      black: 0,
      hispanic: 0,
      white: 0,
      other: 0,
    },
  )
}

// Combines all district statistics into a single dataset
export const getAllDistrictData = async () => {
  const { success, data } = await fetchData()
  const combinedData = success ? combineData(data) : null
  return { success, data: combinedData }
}

// Combines data only for a specified district
export const getDataByDistrict = async (districtNumber) => {
  const { success, data } = await fetchData({ district: districtNumber })
  const combinedData = success ? combineData(data) : null
  return { success, data: combinedData }
}
