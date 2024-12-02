// src/services/fuzzySearch.js
import Fuse from 'fuse.js'
import { fetchData } from './dataService'

// TODO: change fuzzy search method to be available programs
export const fuzzyResult = async (searchQuery) => {
  try {
    const response = await fetchData()

    const fuseOptions = {
      keys: ['program_type'],
    }

    const fuse = new Fuse(response, fuseOptions)

    return fuse.search(searchQuery)
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
