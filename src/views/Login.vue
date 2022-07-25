<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import { apiPostLogin } from "@/api/auth";
import { useMainStore } from "@/stores/main";

const form = reactive({
  email: 'email@example.com',
  password: 'Password',
})

const router = useRouter()
const mainStore = useMainStore()

const submit = async () => {
  try {
    const { idToken } = await apiPostLogin(form)
    localStorage.setItem('idToken', idToken)
    mainStore.notificationState = {}
    router.push({ name: 'products' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <full-screen-section
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
    <card-component
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <field
        label="Login"
        help="Please enter your login"
      >
        <control
          v-model="form.email"
          :icon="mdiAccount"
          name="email"
          autocomplete="email"
        />
      </field>

      <field
        label="Password"
        help="Please enter your password"
      >
        <control
          v-model="form.password"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </field>

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Login"
        />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>
