import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'perfume-8b21d.firebaseapp.com',
  databaseURL: 'https://perfume-8b21d-default-rtdb.firebaseio.com',
  projectId: 'perfume-8b21d',
  storageBucket: 'perfume-8b21d.appspot.com',
  messagingSenderId: '597712973003',
  appId: '1:597712973003:web:de7dde8daa03a2d47c7f4e',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export default app
