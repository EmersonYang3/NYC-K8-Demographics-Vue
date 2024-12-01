// src/services/fuzzySearch.js
import Fuse from 'fuse.js'
import { fetchData } from './APIService'

// TODO: change fuzzy search method to be available programs
export const fuzzyResult = async (searchQuery) => {
  try {
    const response = await fetchData()
    const parsedData = JSON.parse(response)

    const fuseOptions = {
      keys: ['school'],
    }

    const fuse = new Fuse(parsedData, fuseOptions)

    return fuse.search(searchQuery)
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
