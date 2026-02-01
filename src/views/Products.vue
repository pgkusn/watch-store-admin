<template>
  <section
    class="border-t border-b border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-gray-900/70 dark:text-white"
  >
    <level>
      <h1 class="text-3xl font-semibold leading-tight">Products</h1>
      <jb-button color="white" label="新增商品" @click="openCreateModal" />
    </level>
  </section>

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
              @click="changePage(page)"
            />
          </jb-buttons>
          <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </level>
      </div>
    </card-component>
  </main-section>

  <!-- 新增商品 -->
  <modal-box
    v-model="isModalActive.create"
    title="新增商品"
    @confirm="createProduct"
    @cancel="onCreateModalCancel"
  >
    <template v-if="isModalActive.create">
      <field label="名稱" class="mb-0">
        <control v-model.trim="newProduct.name" type="text" />
      </field>
      <field label="品牌">
        <control v-model="brandSelected" :options="brandOptions" />
      </field>
      <field label="描述">
        <control v-model.trim="newProduct.description" type="textarea" />
      </field>
      <div
        class="flex items-center gap-4 after:self-end after:leading-[48px] after:content-['='attr(data-total)]"
        :data-total="getPrice(newProduct)"
      >
        <field label="原價" class="mb-0">
          <control v-model.number="newProduct.price" type="text" />
        </field>
        <field label="折扣" class="mb-0">
          <input
            v-model="newProduct.discount"
            type="number"
            min="0"
            max="1"
            step="0.01"
            class="h-12 rounded border-gray-700 dark:bg-gray-800"
          />
        </field>
      </div>
      <field label="上傳圖片" class="mb-0">
        <div
          v-for="(url, index) in newProduct.imageUrl"
          :key="url"
          class="mt-4 flex items-center gap-4 first:mt-0"
        >
          <img
            :src="previewUrl[index] || url"
            class="h-20 w-20 object-cover"
            :alt="newProduct.name"
          />
          <file-picker v-model="files[index]" color="white" />
        </div>
      </field>
    </template>
  </modal-box>

  <!-- 修改商品 -->
  <modal-box
    v-model="isModalActive.info"
    title="修改商品"
    @confirm="updateProduct"
    @cancel="resetState"
  >
    <template v-if="isModalActive.info">
      <field label="名稱" class="mb-0">
        <control v-model.trim="currentProduct.data.name" type="text" />
      </field>
      <field label="品牌">
        <control v-model="brandSelected" :options="brandOptions" />
      </field>
      <field label="描述">
        <control v-model.trim="currentProduct.data.description" type="textarea" />
      </field>
      <div
        class="flex items-center gap-4 after:self-end after:leading-[48px] after:content-['='attr(data-total)]"
        :data-total="getPrice(currentProduct.data)"
      >
        <field label="原價" class="mb-0">
          <control v-model.number="currentProduct.data.price" type="text" />
        </field>
        <field label="折扣" class="mb-0">
          <input
            v-model="currentProduct.data.discount"
            type="number"
            min="0"
            max="1"
            step="0.01"
            class="h-12 rounded border-gray-700 dark:bg-gray-800"
          />
        </field>
      </div>
      <field label="上傳圖片" class="mb-0">
        <div
          v-for="(url, index) in currentProduct.data.imageUrl"
          :key="url"
          class="mt-4 flex items-center gap-4 first:mt-0"
        >
          <img
            class="h-20 w-20 object-cover"
            :src="previewUrl[index] || url"
            :alt="currentProduct.data.name"
          />
          <file-picker v-model="files[index]" color="white" />
        </div>
      </field>
    </template>
  </modal-box>

  <!-- 刪除商品 -->
  <modal-box
    v-model="isModalActive.delete"
    large-title="Please confirm"
    button="danger"
    has-cancel
    @confirm="deleteProduct"
    @cancel="resetState"
  >
    <p>
      確定要刪除<strong>「{{ currentProduct.data.name }}」</strong>？
    </p>
  </modal-box>
</template>

<script setup>
import { mdiPencil, mdiTrashCan } from '@mdi/js'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '@/firebase'
import JbButton from '@/components/JbButton.vue'
import ModalBox from '@/components/ModalBox.vue'
import { useMainStore } from '@/stores/main'
import { useProductStore } from '@/stores/product'
import { formatPrice } from '@/composition/formatPrice'
import '@/plugins/velocity.min.js'

const mainStore = useMainStore()
const productStore = useProductStore()

const { darkMode, notificationState } = storeToRefs(mainStore)
const { products, brands } = storeToRefs(productStore)
const currentProduct = reactive({
  id: '',
  data: {},
})

const getPrice = ({ price, discount = 1 }) =>
  formatPrice(discount ? Math.floor(price * discount) : 0)
const setNotification = (type, message) => {
  notificationState.value = { type, message }
  setTimeout(() => {
    notificationState.value = {}
  }, 2000)
}
const resetState = () => {
  currentProduct.id = ''
  currentProduct.data = {}
  files.value.length = 0
}
const changePage = page => {
  currentPage.value = page
  Velocity(document.documentElement, 'scroll', { offset: 0, mobileHA: false })
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

// modal display
const isModalActive = reactive({
  create: false,
  info: false,
  delete: false,
})
const openModal = async ({ id, ...data }, key) => {
  try {
    const { description, imageUrl } = await productStore.getProduct(id)
    isModalActive[key] = true
    currentProduct.id = id
    currentProduct.data = { ...data, description, imageUrl }
    files.value = new Array(imageUrl.length).fill(null)
  } catch (error) {
    console.error(error)
  }
}

// modal 品牌選單
const brandSelected = computed({
  get() {
    if (isModalActive.create) {
      return brandOptions.value[0]
    } else {
      return {
        id: brands.value.find(item => item.brand === currentProduct.data.brand)?.id,
        label: currentProduct.data.fullBrand,
      }
    }
  },
  set({ id }) {
    const { brand, fullBrand } = brands.value.find(item => item.id === id)
    if (isModalActive.create) {
      newProduct.brand = brand
      newProduct.fullBrand = fullBrand
    } else {
      currentProduct.data.brand = brand
      currentProduct.data.fullBrand = fullBrand
    }
  },
})
const brandOptions = computed(() =>
  brands.value.map(item => ({
    id: item.id,
    label: item.fullBrand,
  }))
)

// 上傳圖片
const files = ref([])
const previewUrl = computed(() =>
  files.value.map(file => (file ? URL.createObjectURL(file) : null))
)
const uploadImage = () => {
  const promises = files.value.map(file => {
    if (!file) return null
    const fileRef = storageRef(storage, file.name)
    return uploadBytes(fileRef, file)
  })
  return Promise.all(promises)
}
const getUploadedImageUrl = () => {
  return new Promise(resolve => {
    let count = 0
    Array.from(files.value).forEach(async (file, index) => {
      if (file) {
        const fileRef = storageRef(storage, file.name)
        const url = await getDownloadURL(fileRef).then(url => url)
        if (currentProduct.data.imageUrl) {
          currentProduct.data.imageUrl[index] = url // 修改
          currentProduct.data.url = imageUrl[0]
        } else {
          newProduct.imageUrl[index] = url // 新增
        }
      }
      count++
      if (count === files.value.length) resolve()
    })
  })
}

// 新增商品
const newProduct = reactive({
  name: '',
  brand: '',
  fullBrand: '',
  description: '',
  price: '',
  discount: 1,
  imageUrl: [
    'https://fakeimg.ryd.tools/?text=photo',
    'https://fakeimg.ryd.tools/?text=photo',
    'https://fakeimg.ryd.tools/?text=photo',
    'https://fakeimg.ryd.tools/?text=photo',
  ],
  get url() {
    return this.imageUrl[0] // cover
  },
})
const openCreateModal = () => {
  isModalActive.create = true
  const { id, label } = brandOptions.value[0]
  newProduct.brand = brands.value.find(item => item.id === id)?.brand
  newProduct.fullBrand = label
}
const createProduct = async () => {
  try {
    if (files.value.length > 0) {
      await uploadImage()
      await getUploadedImageUrl()
    }
    await productStore.createProduct(newProduct)
    await productStore.getProducts()
    setNotification('success', '新增成功')
    resetState()
    resetNewProduct()
  } catch (error) {
    console.error(error)
  }
}
const onCreateModalCancel = () => {
  resetState()
  resetNewProduct()
}
const resetNewProduct = () => {
  Object.assign(newProduct, {
    name: '',
    brand: '',
    fullBrand: '',
    description: '',
    price: '',
    discount: 1,
    imageUrl: [
      'https://fakeimg.pl/1080x1080/?text=photo',
      'https://fakeimg.pl/1080x1080/?text=photo',
      'https://fakeimg.pl/1080x1080/?text=photo',
      'https://fakeimg.pl/1080x1080/?text=photo',
    ],
  })
  files.value.length = 0
}

// 取得品牌及商品
const getBrandsAndProducts = async () => {
  try {
    await Promise.all([productStore.getBrands(), productStore.getProducts()])
  } catch (error) {
    console.log(error)
  }
}

// 修改商品
const updateProduct = async () => {
  try {
    await uploadImage()
    await getUploadedImageUrl()
    await productStore.updateProduct(currentProduct)
    await productStore.getProducts()
    setNotification('success', '修改成功')
  } catch (error) {
    console.error(error)
  }
}

// 刪除商品
const deleteProduct = async () => {
  try {
    await productStore.deleteProduct(currentProduct.id)
    await productStore.getProducts()
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
  if (!brands.value.length || !products.value.length) {
    getBrandsAndProducts()
  }
})
</script>
