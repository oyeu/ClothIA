import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/outfitGenerator'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/outfitGenerator'
      },
      {
        path: 'closet',
        component: () => import('@/views/closet.vue')
      },
      {
        path: 'outfitGenerator',
        component: () => import('@/views/outfitGenerator.vue')
      },
      {
        path: 'clothingUpload',
        component: () => import('@/views/clothingUpload.vue')
      },
      {
        path: 'documentList',
        component: () => import('@/views/documentList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
