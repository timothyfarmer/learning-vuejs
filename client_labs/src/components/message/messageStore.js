const state = {
  message: {
    text: ''
  }
}

const actions = {
  newMessage: ({commit}, messageObj) => {
    commit('SET_MESSAGE', messageObj)
    console.log('Message object', messageObj)
  }
}

const mutations = {
  SET_MESSAGE (state, messageObj) {
    state.message = messageObj
  }
}

export default {
  state, mutations, actions
}
