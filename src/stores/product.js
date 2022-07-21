import { defineStore, acceptHMRUpdate } from 'pinia'

import {
  apiPostProducts,
  apiGetProducts,
  apiGetProduct,
  apiPatchProducts,
  apiPatchProduct,
  apiDeleteProducts,
  apiDeleteProduct,
} from '@/api/product'
import { apiGetBrands } from '@/api/brand'

export const useProductStore = defineStore('product', () => {
  const brands = ref([])
  const products = ref([])

  const createProduct = async data => {
    try {
      const postData = { ...data }
      delete postData.imageUrl
      
      const { name: id } = await apiPostProducts(postData)
      
      return await apiPatchProduct(id, {
        description: data.description,
        imageUrl: data.imageUrl,
        name: data.name,
        price: data.price * data.discount,
      })
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
  const getProducts = async () => {
    try {
      const res = await apiGetProducts()
      const newData = Object.keys(res).map(key => ({
        ...res[key],
        id: key,
      }))
      products.value = newData
    } catch (error) {
      throw error
    }
  }
  const getProduct = async id => {
    try {
      return await apiGetProduct(id)
    } catch (error) {
      throw error
    }
  }
  const updateProduct = async ({ id, data }) => {
    const productsData = { ...data }
    delete productsData.imageUrl
    
    const productData = {
      description: data.description,
      imageUrl: data.imageUrl,
      name: data.name,
      price: Math.floor(data.price * data.discount),
    }
    
    try {
      return await Promise.all([
        apiPatchProducts(id, productsData),
        apiPatchProduct(id, productData),
      ])
    } catch (error) {
      throw error
    }
  }
  const deleteProduct = async id => {
    try {
      return await Promise.all([apiDeleteProducts(id), apiDeleteProduct(id)])
    } catch (error) {
      throw error
    }
  }

  return {
    brands,
    products,
    createProduct,
    getBrands,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
