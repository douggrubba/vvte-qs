// initial state
const state = () => ({
  user: {}
})

// getters
const getters = {
  getUser: state => {
    return state.user
  }
}

// actions
const actions = {
  setUserData({ commit }, user) {
    commit('setUser', user)
  }
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
