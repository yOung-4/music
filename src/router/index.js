import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import EntryView from '@/views/EntryView.vue'
import RoomView from '@/views/RoomView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: {name: "entry"},
    component: HomeView,
    children: [
      {
        path: "entry",
        name: "entry",
        component: EntryView,
        meta: {
          tab: "Now Listening"
        },
      },
      {
        path: "room",
        redirect: {name: "entry"},
      },
      {
        path: "room/:id",
        name: "room",
        component: RoomView,
        meta: {
          tab: "Now Listening",
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
