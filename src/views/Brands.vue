<template>
  <section
    class="border-t border-b border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-gray-900/70 dark:text-white"
  >
    <level>
      <h1 class="text-3xl font-semibold leading-tight">Brands</h1>
      <jb-button color="white" label="新增品牌" @click="openCreateModal" />
    </level>
  </section>

  <main-section>
    <card-component class="mb-6" has-table>
      <table>
        <thead>
          <tr>
            <th>品牌名稱</th>
            <th>品牌全名</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in itemsPaginated"
            :key="item.id"
            :class="['lg:hover:bg-gray-100', index % 2 === 0 ? 'lg:bg-gray-50' : '']"
          >
            <td data-label="品牌名稱">{{ item.brand }}</td>
            <td data-label="品牌全名">{{ item.fullBrand }}</td>
            <td class="actions-cell">
              <jb-buttons type="justify-start lg:justify-end" no-wrap>
                <jb-button color="info" :icon="mdiPencil" small @click="openModal(item, 'info')" />
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="openModal(item, 'delete')"
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

  <!-- 新增品牌 -->
  <modal-box
    v-model="isModalActive.create"
    title="新增品牌"
    @confirm="createBrand"
    @cancel="onCreateModalCancel"
  >
    <template v-if="isModalActive.create">
      <field label="品牌名稱" class="mb-0">
        <control v-model.trim="newBrand.brand" type="text" />
      </field>
      <field label="品牌全名">
        <control v-model.trim="newBrand.fullBrand" type="text" />
      </field>
    </template>
  </modal-box>

  <!-- 修改品牌 -->
  <modal-box
    v-model="isModalActive.info"
    title="修改品牌"
    @confirm="updateBrand"
    @cancel="resetState"
  >
    <template v-if="isModalActive.info">
      <field label="名稱" class="mb-0">
        <control v-model.trim="currentBrand.data.brand" type="text" />
      </field>
      <field label="全名">
        <control v-model.trim="currentBrand.data.fullBrand" type="text" />
      </field>
    </template>
  </modal-box>

  <!-- 刪除品牌 -->
  <modal-box
    v-model="isModalActive.delete"
    large-title="Please confirm"
    button="danger"
    has-cancel
    @confirm="deleteBrand"
    @cancel="resetState"
  >
    <p>
      確定要刪除<strong>「{{ currentBrand.data.fullBrand }}」</strong>？
    </p>
  </modal-box>
</template>

<script setup>
import { mdiPencil, mdiTrashCan } from '@mdi/js'
import JbButton from '@/components/JbButton.vue'
import ModalBox from '@/components/ModalBox.vue'
import { useMainStore } from '@/stores/main'
import { useBrandStore } from '@/stores/brand'
import '@/plugins/velocity.min.js'

const mainStore = useMainStore()
const brandStore = useBrandStore()

const { darkMode, notificationState } = storeToRefs(mainStore)
const { brands } = storeToRefs(brandStore)
const currentBrand = reactive({
  id: '',
  data: {},
})

const setNotification = (type, message) => {
  notificationState.value = { type, message }
  setTimeout(() => {
    notificationState.value = {}
  }, 2000)
}
const resetState = () => {
  currentBrand.id = ''
  currentBrand.data = {}
}
const changePage = page => {
  currentPage.value = page
  Velocity(document.documentElement, 'scroll', { offset: 0, mobileHA: false })
}

// pagination
const perPage = ref(10)
const currentPage = ref(0)
const itemsPaginated = computed(() =>
  brands.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)
const numPages = computed(() => Math.ceil(brands.value.length / perPage.value))
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
  create: false,
  info: false,
  delete: false,
})
const openModal = async ({ id, ...data }, key) => {
  try {
    isModalActive[key] = true
    currentBrand.id = id
    currentBrand.data = data
  } catch (error) {
    console.error(error)
  }
}

// 新增品牌
const newBrand = reactive({
  brand: '',
  fullBrand: '',
})
const openCreateModal = () => {
  isModalActive.create = true
}
const createBrand = async () => {
  try {
    await brandStore.createBrand(newBrand)
    await brandStore.getBrands()
    setNotification('success', '新增品牌成功')
    resetState()
    resetNewBrand()
  } catch (error) {
    console.error(error)
  }
}
const onCreateModalCancel = () => {
  resetState()
  resetNewBrand()
}
const resetNewBrand = () => {
  newBrand.brand = ''
  newBrand.fullBrand = ''
}

// 取得品牌
const getBrands = async () => {
  try {
    await brandStore.getBrands()
  } catch (error) {
    console.log(error)
  }
}

// 修改品牌
const updateBrand = async () => {
  try {
    await brandStore.updateBrand(currentBrand)
    await brandStore.getBrands()
    setNotification('success', '修改品牌成功')
    resetState()
  } catch (error) {
    console.error(error)
  }
}

// 刪除品牌
const deleteBrand = async () => {
  try {
    await brandStore.deleteBrand(currentBrand.id)
    await brandStore.getBrands()
    // 當前頁面沒有資料時，回到上一頁
    if (itemsPaginated.value.length === 0 && currentPage.value > 0) {
      currentPage.value = currentPage.value - 1
    }
    setNotification('success', '刪除品牌成功')
    resetState()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  if (!brands.value.length) {
    getBrands()
  }
})
</script>
