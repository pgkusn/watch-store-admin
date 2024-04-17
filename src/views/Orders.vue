<template>
  <section
    class="border-t border-b border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-gray-900/70 dark:text-white"
  >
    <level>
      <h1 class="text-3xl font-semibold leading-tight">Orders</h1>
    </level>
  </section>

  <main-section>
    <card-component class="mb-6" has-table>
      <table>
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>會員編號</th>
            <th>訂單內容</th>
            <th>訂單金額</th>
            <th>建立時間</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in itemsPaginated"
            :key="order.id"
            :class="['lg:hover:bg-gray-100', index % 2 === 0 ? 'lg:bg-gray-50' : '']"
          >
            <td data-label="訂單編號">{{ order.id }}</td>
            <td data-label="會員編號">{{ order.memberID }}</td>
            <td data-label="訂單內容">
              <ul>
                <li v-for="(item, index) in order.content" :key="index">
                  {{ item.name }} x{{ item.amount }}
                </li>
              </ul>
            </td>
            <td data-label="訂單金額">{{ formatPrice(order.total) }}</td>
            <td data-label="建立時間">
              {{ getFormattedDate(order.createTime) }}
            </td>
            <td class="actions-cell">
              <jb-buttons type="justify-start lg:justify-end" no-wrap>
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="openModal(order.id, 'delete')"
                />
              </jb-buttons>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- pagination -->
      <div class="border-t border-gray-100 p-3 dark:border-gray-800 lg:px-6">
        <level>
          <jb-buttons>
            <jb-button
              v-for="page in pagesList"
              :key="page"
              :active="page === currentPage"
              :label="page + 1"
              :outline="darkMode"
              small
              @click="changePage(page)"
            />
          </jb-buttons>
          <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </level>
      </div>
    </card-component>
  </main-section>

  <!-- 刪除訂單 -->
  <modal-box
    v-model="isModalActive.delete"
    large-title="Please confirm"
    button="danger"
    has-cancel
    @confirm="deleteOrder"
  >
    <p>
      確定要刪除訂單編號 <strong>{{ currentOrder.id }}</strong
      >？
    </p>
  </modal-box>
</template>

<script setup>
import { mdiTrashCan } from '@mdi/js'
import { useDateFormat } from '@vueuse/core'
import JbButton from '@/components/JbButton.vue'
import ModalBox from '@/components/ModalBox.vue'
import { useMainStore } from '@/stores/main'
import { useOrderStore } from '@/stores/order'
import { formatPrice } from '@/composition/formatPrice'
import '@/plugins/velocity.min.js'

const mainStore = useMainStore()
const orderStore = useOrderStore()

const { darkMode, notificationState } = storeToRefs(mainStore)
const { orders } = storeToRefs(orderStore)
const currentOrder = reactive({ id: '' })

const getFormattedDate = date => useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
const setNotification = (type, message) => {
  notificationState.value = { type, message }
  setTimeout(() => {
    notificationState.value = {}
  }, 2000)
}
const resetState = () => {
  currentOrder.id = ''
}
const changePage = page => {
  currentPage.value = page
  Velocity(document.documentElement, 'scroll', { offset: 0, mobileHA: false })
}

// pagination
const perPage = ref(10)
const currentPage = ref(0)
const itemsPaginated = computed(() =>
  orders.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)
const numPages = computed(() => Math.ceil(orders.value.length / perPage.value))
const currentPageHuman = computed(() => currentPage.value + 1)
const pagesList = computed(() => {
  const pagesList = []
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }
  return pagesList
})

// modal display
const isModalActive = reactive({
  delete: false,
})
const openModal = (id, key) => {
  try {
    isModalActive[key] = true
    currentOrder.id = id
  } catch (error) {
    console.error(error)
  }
}

// 取得訂單
const getOrders = async () => {
  try {
    await orderStore.getOrders()
  } catch (error) {
    console.error(error)
  }
}

// 刪除訂單
const deleteOrder = async () => {
  try {
    await orderStore.deleteOrder(currentOrder.id)
    await orderStore.getOrders()
    // 當前頁面沒有資料時，回到上一頁
    if (itemsPaginated.value.length === 0 && currentPage.value > 0) {
      currentPage.value = currentPage.value - 1
    }
    setNotification('success', '刪除成功')
    resetState()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  if (!orders.value.length) {
    getOrders()
  }
})
</script>
