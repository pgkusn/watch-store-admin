<template>
  <hero-bar>Products</hero-bar>

  <main-section>
    <card-component class="mb-6" has-table>
      <table>
        <thead>
          <tr>
            <th>商品圖片</th>
            <th>商品名稱</th>
            <th>品牌</th>
            <th>價錢</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in itemsPaginated"
            :key="item.id"
            :class="['lg:hover:bg-gray-100', index % 2 === 0 ? 'lg:bg-gray-50' : '']"
          >
            <td data-label="商品圖片">
              <img class="h-24 w-24 object-cover" :src="item.url" :alt="item.name" />
            </td>
            <td data-label="商品名稱">{{ item.name }}</td>
            <td data-label="品牌">{{ item.fullBrand }}</td>
            <td data-label="價錢">{{ getPrice(item) }}</td>
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
              ref="$edit"
              @click="currentPage = page"
            />
          </jb-buttons>
          <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </level>
      </div>
    </card-component>
  </main-section>

  <!-- product info -->
  <modal-box
    v-model="isModalActive.info"
    title="修改商品"
    @confirm="closeModal('info', updateItem)"
    @cancel="closeModal('info')"
  >
    <template v-if="isModalActive.info">
      <field label="名稱" class="mb-0">
        <control v-model.trim="currentItem.data.name" type="text" />
      </field>
      <field label="品牌">
        <control v-model="brandSelected" :options="brandOptions" />
      </field>
      <field label="描述">
        <control v-model.trim="currentItem.data.description" type="textarea" />
      </field>
      <div
        class="flex items-center gap-4 after:self-end after:leading-[48px] after:content-['='attr(data-total)]"
        :data-total="getPrice(currentItem.data)"
      >
        <field label="原價" class="mb-0">
          <control v-model.number="currentItem.data.price" type="text" />
        </field>
        <field label="折扣" class="mb-0">
          <input
            v-model="currentItem.data.discount"
            type="number"
            min="0"
            max="1"
            step="0.01"
            class="h-12 rounded border-gray-700"
          />
        </field>
      </div>
      <field label="上傳圖片" class="mb-0">
        <div
          v-for="(url, index) in currentItem.data.imageUrl"
          :key="url"
          class="mt-4 flex items-center gap-4 first:mt-0"
        >
          <img
            class="h-20 w-20 object-cover"
            :src="previewUrl[index] || url"
            :alt="currentItem.data.name"
          />
          <file-picker v-model="files[index]" color="white" />
        </div>
      </field>
    </template>
  </modal-box>

  <!-- confirm delete -->
  <modal-box
    v-model="isModalActive.delete"
    large-title="Please confirm"
    button="danger"
    has-cancel
    @confirm="closeModal('delete', deleteItem)"
    @cancel="closeModal('delete')"
  >
    <p>確定要刪除<strong>「{{ currentItem.data.name }}」</strong>？</p>
  </modal-box>
</template>

<script setup>
import { mdiPencil, mdiTrashCan } from '@mdi/js'
import { initializeApp } from 'firebase/app'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import JbButton from '@/components/JbButton.vue'
import ModalBox from '@/components/ModalBox.vue'
import { useMainStore } from '@/stores/main'
import { useProductStore } from '@/stores/product'
import { formatPrice } from '@/composition/formatPrice'

const mainStore = useMainStore()
const productStore = useProductStore()

const { darkMode } = storeToRefs(mainStore)
const { products, brands } = storeToRefs(productStore)
const currentItem = reactive({
  id: '',
  data: {},
})

// modal
const isModalActive = reactive({
  info: false,
  delete: false,
})
const openModal = async ({ id, brand, fullBrand, price, discount = 1 }, key) => {
  try {
    const { data } = await productStore.getProduct(id)
    isModalActive[key] = true
    currentItem.id = id
    currentItem.data = { ...data, brand, fullBrand, price, discount }
    files.value = new Array(data.imageUrl.length).fill(null)
  } catch (error) {
    console.error(error)
  }
}
const closeModal = async (key, fn) => {
  if (fn) {
    await fn()
    // TODO: Add notifications (UI)
    console.log(`${key} 更新成功`)
  }
  isModalActive[key] = false
  currentItem.id = ''
  currentItem.data = ''
}

// pagination
const perPage = ref(10)
const currentPage = ref(0)
const itemsPaginated = computed(() =>
  products.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)
const numPages = computed(() => Math.ceil(products.value.length / perPage.value))
const currentPageHuman = computed(() => currentPage.value + 1)
const pagesList = computed(() => {
  const pagesList = []
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }
  return pagesList
})

// modal brand select
const brandSelected = computed({
  get: () => ({
    id: brands.value.find(item => item.brand === currentItem.data.brand)?.id,
    label: currentItem.data.fullBrand,
  }),
  set({ id }) {
    const { brand, fullBrand } = brands.value.find(item => item.id === id)
    currentItem.data.brand = brand
    currentItem.data.fullBrand = fullBrand
  },
})
const brandOptions = computed(() =>
  brands.value.map(item => ({
    id: item.id,
    label: item.fullBrand,
  }))
)

// images
const firebaseConfig = {
  apiKey: 'AIzaSyCe0etdPskhxSxGh0w_IdZt3FDqcDQWbOo',
  authDomain: 'perfume-8b21d.firebaseapp.com',
  databaseURL: 'https://perfume-8b21d-default-rtdb.firebaseio.com',
  projectId: 'perfume-8b21d',
  storageBucket: 'perfume-8b21d.appspot.com',
  messagingSenderId: '597712973003',
  appId: '1:597712973003:web:de7dde8daa03a2d47c7f4e',
}
const storage = getStorage(initializeApp(firebaseConfig))
const files = ref([])
const previewUrl = computed(() =>
  files.value.map(file => (file ? URL.createObjectURL(file) : null))
)
const uploadImage = () => {
  const promises = files.value.map(file => {
    if (!file) return null
    const fileRef = storageRef(storage, `product/${currentItem.id}/${file.name}`)
    return uploadBytes(fileRef, file)
  })
  return Promise.all(promises)
}
const setImageUrl = () => {
  return new Promise(resolve => {
    let count = 0
    files.value.forEach(async (file, index) => {
      if (file) {
        const fileRef = storageRef(storage, `product/${currentItem.id}/${file.name}`)
        const url = await getDownloadURL(fileRef).then(url => url)
        currentItem.data.imageUrl[index] = url
      }
      count++
      if (count === files.value.length) resolve()
    })
  })
}

const getPrice = ({ price, discount = 1 }) =>
  formatPrice(discount ? Math.floor(price * discount) : 0)
const updateItem = async () => {
  try {
    await uploadImage()
    await setImageUrl()
    await productStore.updateProduct(currentItem)
    await productStore.getProducts()
  } catch (error) {
    console.error(error)
  }
}
const deleteItem = async () => {
  try {
    await productStore.deleteProduct(currentItem.id)
    await productStore.getProducts()
    // 當前頁面沒有資料時，回到上一頁
    if (itemsPaginated.value.length === 0 && currentPage.value > 0) {
      currentPage.value = currentPage.value - 1
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  productStore.getProducts()
  productStore.getBrands()
})
</script>
