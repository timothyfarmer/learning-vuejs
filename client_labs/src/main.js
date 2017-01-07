// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', component: App, name: 'home'}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
