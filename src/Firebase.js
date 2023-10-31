import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import Filter from 'bad-words'
import { ref, onUnmounted, computed } from 'vue'

firebase.initializeApp({
  apiKey: 'AIzaSyBVnewIIaBLXjFiy2AxiB0v59yUPJmFz9A',
  authDomain: 'genshin-info-63.firebaseapp.com',
  projectId: 'genshin-info-63',
  storageBucket: 'genshin-info-63.appspot.com',
  messagingSenderId: '723257262924',
  appId: '1:723257262924:web:a50506a85cff6a166445e9',
  measurementId: 'G-R9DSYLM06N'
})

const auth = firebase.auth()

export function useAuth() {
  const user = ref(null)
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user))
  onUnmounted(unsubscribe)
  const isLogin = computed(() => user.value !== null)

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider)
  }
  const signOut = () => auth.signOut()

  return { user, isLogin, signIn, signOut }
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)
const filter = new Filter()

export function useChat() {
  const messages = ref([])
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).reverse()
  })
  onUnmounted(unsubscribe)

  const { user, isLogin } = useAuth()
  const sendMessage = (text) => {
    if (!isLogin.value) return
    const { photoURL, uid, displayName } = user.value
    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: filter.clean(text),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return { messages, sendMessage }
}
