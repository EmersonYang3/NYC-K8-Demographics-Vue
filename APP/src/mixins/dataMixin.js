import * as dataService from '@/services/dataService'

export default {
  data() {
    return {
      data: {},
      success: false,
      errorMessage: '',
    }
  },
  methods: {
    async fetchData(query) {
      try {
        const result = query
          ? await dataService.getDataByDistrict(query)
          : await dataService.getAllDistrictData()
        this.data = result.data
        this.success = result.success
        this.errorMessage = result.errorMessage || ''
      } catch (error) {
        this.errorMessage = `Error fetching data: ${error.message}`
        this.success = false
      }
    },
  },
}
