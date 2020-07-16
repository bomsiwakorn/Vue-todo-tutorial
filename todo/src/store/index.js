import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem(state, items) {
      state.items.push(items)
    },
    initItem(state, items) {
      state.items = items
    }
  },
  actions: {
  },
  modules: {
  }
})
