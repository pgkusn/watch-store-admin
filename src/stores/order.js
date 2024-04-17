import { defineStore, acceptHMRUpdate } from 'pinia'
import { apiGetOrders, apiDeleteOrder } from '@/api/order'

export const useOrderStore = defineStore('order', () => {
  const orders = ref([])

  const getOrders = async () => {
    try {
      const res = await apiGetOrders()
      const newData = Object.keys(res).map(key => ({
        ...res[key],
        id: key,
      }))
      orders.value = newData.sort((a, b) => b.createTime - a.createTime)
    } catch (error) {
      throw error
    }
  }
  const deleteOrder = async id => {
    try {
      return await apiDeleteOrder(id)
    } catch (error) {
      throw error
    }
  }

  return {
    orders,
    getOrders,
    deleteOrder,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderStore, import.meta.hot))
}
