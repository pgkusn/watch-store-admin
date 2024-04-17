import axios from 'axios'
import { useMainStore } from '@/stores/main'

const orderRequest = axios.create({
  baseURL: import.meta.env.VITE_DB_API_URL,
})

orderRequest.interceptors.request.use(
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
orderRequest.interceptors.response.use(
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

export const apiGetOrders = () => orderRequest.get('/orders.json').then(res => res.data)
export const apiDeleteOrder = id => orderRequest.delete(`/orders/${id}.json`).then(res => res.data)
