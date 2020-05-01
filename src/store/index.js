// vuex状态管理
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import sell from './modules/sell'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    sell
  }
})
