import axios from 'axios'
import { useMainStore } from '@/stores/main'

const brandRequest = axios.create({
  baseURL: import.meta.env.VITE_DB_API_URL,
})

brandRequest.interceptors.request.use(
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
brandRequest.interceptors.response.use(
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

export const apiPostBrands = data => brandRequest.post('/brands.json', data).then(res => res.data)
export const apiGetBrands = () => brandRequest.get('/brands.json').then(res => res.data)
export const apiPatchBrands = (id, data) =>
  brandRequest.patch(`/brands/${id}.json`, data).then(res => res.data)
export const apiDeleteBrands = (id, data) =>
  brandRequest.delete(`/brands/${id}.json`, data).then(res => res.data)
