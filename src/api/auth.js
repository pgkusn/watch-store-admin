import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { useMainStore } from '@/stores/main'
import router from '@/router'

// 登入
export const apiPostLogin = async ({ email, password }) => {
  const mainStore = useMainStore()
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const idToken = await userCredential.user.getIdToken()
    return { idToken, user: userCredential.user }
  } catch (error) {
    mainStore.notificationState.type = 'error'
    let message = ''

    switch (error.code) {
      case 'auth/user-not-found':
        message = 'Email 不存在'
        break
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        message = '密碼錯誤'
        break
      case 'auth/invalid-email':
        message = 'Email 格式不正確'
        break
      default:
        message = '出現錯誤，請稍後再試。'
    }

    mainStore.notificationState.message = message
    throw error
  }
}

// 監聽認證狀態變化
export const onAuthChange = callback => {
  return onAuthStateChanged(auth, user => {
    if (!user) {
      localStorage.removeItem('idToken')
      router.push({ name: 'login' })
    }
    callback(user)
  })
}

// 取得當前用戶
export const getCurrentUser = () => auth.currentUser
