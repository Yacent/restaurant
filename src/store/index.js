import Vue from 'vue'
import Vuex from 'vuex'

import business from './modules/business'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    business
  },
  strict: debug
})
