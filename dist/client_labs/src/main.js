'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _DashboardPage = require('./pages/DashboardPage');

var _DashboardPage2 = _interopRequireDefault(_DashboardPage);

var _LoginPage = require('./pages/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);

_vue2.default.component('app', _App2.default);

var routes = [{ path: '/', component: _LoginPage2.default, name: 'home' }, { path: '/dashboard', component: _DashboardPage2.default, name: 'dashboard', meta: { 'requiresAuth': true } }];

var router = new _vueRouter2.default({
  mode: 'history',
  routes: routes });

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth) {
    var authUser = JSON.parse(window.localStorage.getItem('authUser'));
    if (authUser && authUser.access_token) {
      next();
    } else {
      next({ name: 'home' });
    }
  }
  next();
});

new _vue2.default({
  router: router, store: _store2.default
}).$mount('#app');
//# sourceMappingURL=main.js.map