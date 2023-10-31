import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import MapsPage from '../views/MapsPage.vue'
import ChatPage from '../views/ChatPage.vue'
import MiniGame from '../views/MiniGame.vue'
import CharacterPage from '../views/CharacterPage.vue'
import ArchonPage from '../views/ArchonPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/maps',
      name: 'maps',
      component : MapsPage
    },
    {
      path: '/chats',
      name: 'chats',
      component : ChatPage
    },
    {
      path: '/game',
      name: 'game',
      component : MiniGame
    },
    {
      path: '/characters/:id',
      name: 'detailChar',
      component : CharacterPage
    },
    {
      path: '/archons',
      name: 'archonPage',
      component : ArchonPage
    }
  ]
})


export default router
