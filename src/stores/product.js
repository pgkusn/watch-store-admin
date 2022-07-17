import {
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

  const getBrands = async () => {
    try {
      const { data } = await apiGetBrands()
      const newData = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }))
      brands.value = newData
    } catch (error) {
      console.error(error)
    }
  }
  const getProducts = async () => {
    try {
      const { data } = await apiGetProducts()
      const newData = Object.keys(data).map(key => ({
        ...data[key],
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
      url: data.imageUrl[0]
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
      return await Promise.all([
        apiDeleteProducts(id),
        apiDeleteProduct(id)
      ])
    } catch (error) {
      throw error
    }
  }

  return {
    brands,
    products,
    getBrands,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
  }
})
