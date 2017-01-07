'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  authUser: null
};

var mutations = {
  SET_AUTH_USER: function SET_AUTH_USER(state, userObj) {
    state.authUser = userObj;
  }
};

var actions = {
  setUserObject: function setUserObject(_ref, userObj) {
    var commit = _ref.commit;

    commit('SET_AUTH_USER', userObj);
  }
};

exports.default = {
  state: state, mutations: mutations, actions: actions
};
//# sourceMappingURL=userStore.js.map