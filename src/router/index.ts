import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import haveRoleGuard from "./role-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/products',
    name: 'products',
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
