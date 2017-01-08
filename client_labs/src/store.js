import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/user/userStore'
import messageStore from './components/message/messageStore'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {userStore, messageStore},
  strict: debug
})
