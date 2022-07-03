import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ModalBox from '@/components/ModalBox.vue'
import Products from './Products.vue'
import { useProductStore } from '@/stores/product'

jest.mock('@/api/product', () => ({
  apiGetProducts: jest.fn(),
  apiGetBrands: jest.fn(),
}))

describe('Product.vue', () => {
  const wrapper = mount(Products, {
    global: {
      plugins: [createTestingPinia()],
    },
  })
  const productStore = useProductStore()

  it('test list render', async () => {
    productStore.products = [
      {
        id: '-N4ovK54kX-522rdJi67',
        brand: 'agnes',
        fullBrand: 'agnes b.',
        name: '法式優雅手寫體時標時尚腕錶',
        price: 7500,
        discount: 0.8,
        url: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODYyNXwwfDF8c2VhcmNofDF8fHdyaXN0d2F0Y2h8ZW58MHwyfHx8MTYyNTgxNjg5Mw&ixlib=rb-1.2.1&q=80&w=1080',
      },
    ]
    await nextTick()
    expect(wrapper.findAll('tbody > tr').length).toBe(1)
  })
})
