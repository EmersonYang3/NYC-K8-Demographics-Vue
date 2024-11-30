import axios from 'axios'

const API_URL = 'https://data.cityofnewyork.us/resource/rc75-m7u3.json?$limit=10000'

export const fetchData = async () => {
  try {
    const APIResponse = await axios.get(API_URL)
    return formatData(APIResponse.data)
  } catch (error) {
    console.error('Fetching Data Error: ', error)
    throw error
  }
}

function formatData(data) {
  const boroughs = ['bx', 'bk', 'mn', 'qn', 'si']
  const initialData = {
    all: {
      dates: [],
      deaths: [],
      probableCauseCount: [],
      hospitalizedCount: [],
      caseCount: [],
    },
    ...Object.fromEntries(
      boroughs.map((borough) => [
        borough,
        {
          deaths: 0,
          probableCaseCount: 0,
          hospitalizedCount: 0,
          caseCount: 0,
        },
      ]),
    ),
  }

  return data.reduce((acc, item) => {
    acc.all.dates.push(item.date_of_interest)
    acc.all.deaths.push(parseInt(item.death_count))
    acc.all.probableCauseCount.push(parseInt(item.probable_case_count))
    acc.all.hospitalizedCount.push(parseInt(item.hospitalized_count))
    acc.all.caseCount.push(parseInt(item.case_count))

    boroughs.forEach((borough) => {
      acc[borough].deaths += parseInt(item[`${borough}_death_count`])
      acc[borough].probableCaseCount += parseInt(item[`${borough}_probable_case_count`])
      acc[borough].hospitalizedCount += parseInt(item[`${borough}_hospitalized_count`])
      acc[borough].caseCount += parseInt(item[`${borough}_case_count`])
    })

    return acc
  }, initialData)
}
