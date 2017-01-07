'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _userStore = require('./components/user/userStore');

var _userStore2 = _interopRequireDefault(_userStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var debug = process.env.NODE_ENV !== 'production';
exports.default = new _vuex2.default.Store({
  modules: { userStore: _userStore2.default },
  strict: debug
});
//# sourceMappingURL=store.js.map