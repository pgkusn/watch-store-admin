import axios from 'axios'
import { useMainStore } from '@/stores/main'

const productRequest = axios.create({
  baseURL: import.meta.env.VITE_DB_API_URL,
})

productRequest.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    const mainStore = useMainStore()
    mainStore.notificationState.type = 'error'
    mainStore.notificationState.message = '出現錯誤，請稍後再試。'
    return Promise.reject(error)
  }
)
productRequest.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const mainStore = useMainStore()
    mainStore.notificationState.type = 'error'
    mainStore.notificationState.message = '出現錯誤，請稍後再試。'
    return Promise.reject(error)
  }
)

export const apiPostProducts = data => productRequest.post('products.json', data).then(res => res.data)
export const apiGetBrands = () => productRequest.get('brands.json').then(res => res.data)
export const apiGetProducts = () => productRequest.get('products.json').then(res => res.data)
export const apiGetProduct = id => productRequest.get(`product/${id}.json`).then(res => res.data)
export const apiPatchProducts = (id, data) => productRequest.patch(`products/${id}.json`, data).then(res => res.data)
export const apiPatchProduct = (id, data) => productRequest.patch(`product/${id}.json`, data).then(res => res.data)
export const apiDeleteProducts = (id, data) => productRequest.delete(`products/${id}.json`, data).then(res => res.data)
export const apiDeleteProduct = (id, data) => productRequest.delete(`product/${id}.json`, data).then(res => res.data)
