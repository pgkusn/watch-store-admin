import { defineStore, acceptHMRUpdate } from 'pinia'

import {
  apiPostBrands,
  apiGetBrands,
  apiPatchBrands,
  apiDeleteBrands
} from '@/api/brand'

export const useBrandStore = defineStore('brand', () => {
  const brands = ref([])

  const createBrand = async data => {
    try {
      return await apiPostBrands(data)
    } catch (error) {
      throw error
    }
  }
  const getBrands = async () => {
    try {
      const res = await apiGetBrands()
      const newData = Object.keys(res).map(key => ({
        ...res[key],
        id: key,
      }))
      brands.value = newData
    } catch (error) {
      throw error
    }
  }
  const updateBrand = async ({ id, data }) => {
    try {
      return await apiPatchBrands(id, data)
    } catch (error) {
      throw error
    }
  }
  const deleteBrand = async id => {
    try {
      return await apiDeleteBrands(id)
    } catch (error) {
      throw error
    }
  }

  return {
    brands,
    createBrand,
    getBrands,
    updateBrand,
    deleteBrand,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBrandStore, import.meta.hot))
}
