// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

import App from './App'

import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('app', App)

const routes = [
  {path: '/', component: LoginPage, name: 'home'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { 'requiresAuth': true }}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})

new Vue({
  router, store
}).$mount('#app')
