import Vue from 'vue'
import App from './App.vue'
// import vueLazy from 'vue-lazyload'
// import vueLazy from './vue-lazy.js'
import vueLazy from './vue-lazy.es5'

Vue.use(vueLazy, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading-spin.svg'
})
Vue.config.silent = false

Vue.config.errorHandler = function (err, vm) {
  console.log('error', err, vm)
}

Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1
}

Vue.config.keyCodes = { esc: 27 }

new Vue({
  el: '#app',
  render: h => h(App)
})
