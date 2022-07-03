import axios from 'axios'

const productRequest = axios.create({
  baseURL: import.meta.env.VITE_DB_API_URL,
})

export const apiGetBrands = () => productRequest.get('brands.json')
export const apiGetProducts = () => productRequest.get('products.json')
export const apiGetProduct = id => productRequest.get(`product/${id}.json`)
export const apiPatchProducts = (id, data) => productRequest.patch(`products/${id}.json`, data)
export const apiPatchProduct = (id, data) => productRequest.patch(`product/${id}.json`, data)
