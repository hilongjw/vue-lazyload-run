import Vue from 'vue'
import App from './App.vue'
import vueLazy from './vue-lazy.js'

Vue.use(vueLazy, {
    error: 'dist/error.png',
    loading: 'dist/loading-spin.svg'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
