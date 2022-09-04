<script setup>
import { mdiCheckCircleOutline, mdiAlertCircle } from '@mdi/js'
import { useMainStore } from '@/stores/main'
import menu from '@/menu.js'
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import Overlay from '@/components/Overlay.vue'

const mainStore = useMainStore()
const route = useRoute()

const { isAsideLgActive, notificationState, isAsideMobileExpanded } = storeToRefs(mainStore)

mainStore.setUser({
  name: 'John Doe',
  email: 'john@example.com',
  avatar:
    'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
})

const overlayClick = () => {
  mainStore.asideLgToggle(false)
}
</script>

<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <router-view />
  <!-- <footer-bar /> -->
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
  <Transition>
    <div
      v-if="notificationState.type"
      :class="[
        'fixed inset-x-0 top-[70px] md:inset-x-6 lg:left-6 xl:left-[16.5rem]',
        { 'left-[16.5rem]': isAsideMobileExpanded },
        { 'md:!inset-x-0 mx-auto max-w-xl': route.name === 'login' },
      ]"
    >
      <notification
        v-if="notificationState.type === 'success'"
        color="success"
        :icon="mdiCheckCircleOutline"
      >
        {{ notificationState.message }}
      </notification>
      <notification v-if="notificationState.type === 'error'" color="danger" :icon="mdiAlertCircle">
        {{ notificationState.message }}
      </notification>
    </div>
  </Transition>
</template>
