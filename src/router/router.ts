import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
  },
  {
    path: '/',
    redirect: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
