import { defineStore, acceptHMRUpdate } from 'pinia'

import {
  apiPostProducts,
  apiGetBrands,
  apiGetProducts,
  apiGetProduct,
  apiPatchProducts,
  apiPatchProduct,
  apiDeleteProducts,
  apiDeleteProduct,
} from '@/api/product'

export const useProductStore = defineStore('product', () => {
  const brands = ref([])
  const products = ref([])

  const createProduct = async data => {
    try {
      const postData = {
        ...data,
        url: data.imageUrl[0],
      }
      delete postData.imageUrl
      const { name: id } = await apiPostProducts(postData)

      const patchData = {
        description: data.description,
        imageUrl: data.imageUrl,
        name: data.name,
        price: data.price * data.discount,
      }
      return await apiPatchProduct(id, patchData)
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
      console.error(error)
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
    const productsData = {
      brand: data.brand,
      fullBrand: data.fullBrand,
      name: data.name,
      price: data.price,
      discount: data.discount,
      url: data.imageUrl[0],
    }
    const productData = {
      price: Math.floor(data.price * data.discount),
      imageUrl: data.imageUrl,
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
