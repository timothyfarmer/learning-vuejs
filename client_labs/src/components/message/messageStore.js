const state = {
  message: {
    text: ''
  }
}

const actions = {
  newMessage: ({commit}, messageObj) => {
    commit('SET_MESSAGE', messageObj)
  },
  removeMessage: ({commit}, messageObj) => {
    commit('REMOVE_MESSAGE', messageObj)
  }
}

const mutations = {
  SET_MESSAGE (state, messageObj) {
    state.message = messageObj
  },
  REMOVE_MESSAGE (state, messageObj) {
    state.message = messageObj
  }
}

export default {
  state, mutations, actions
}
