const state = {
  authUser: null
}

const actions = {
  setUserObject: ({commit}, userObj) => {
    commit('SET_AUTH_USER', userObj)
  }
}

const mutations = {
  SET_AUTH_USER (state, userObj) {
    state.authUser = userObj
  }
}

export default {
  state, mutations, actions
}
