import axios from 'axios'
import { useMainStore } from '@/stores/main'
import router from '@/router'

const authRequest = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
  params: {
    key: import.meta.env.VITE_FIREBASE_API_KEY,
  },
})

authRequest.interceptors.request.use(
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
authRequest.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const mainStore = useMainStore()
    mainStore.notificationState.type = 'error'
    let message = ''

    // 登入失敗
    if (error.response.status === 400) {
      switch (error.response.data.error.message) {
        case 'EMAIL_NOT_FOUND':
          message = 'Email 不存在'
          break
        case 'INVALID_PASSWORD':
          message = '密碼錯誤'
          break
      }
    }

    // 身份驗證失敗
    if (error.response.status === 401) {
      message = '登入逾時，請重新登入！'
      localStorage.removeItem('idToken')
      router.push({ name: 'login' })
    }

    mainStore.notificationState.message = message || '出現錯誤，請稍後再試。'
    return Promise.reject(error)
  }
)

export const apiPostLogin = data =>
  authRequest.post('accounts:signInWithPassword', data).then(res => res.data)
export const apiPostLookup = data => authRequest.post('accounts:lookup', data).then(res => res.data)
