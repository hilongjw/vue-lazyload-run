import Vue from 'vue'
import App from './App.vue'
import vueLazy from 'vue-lazyload'
// import vueLazy from './vue-lazy.js'

// Vue.use(vueLazy, {
//     preLoad: .5,
//     error: 'dist/error.png',
//     loading: 'dist/loading-spin.svg'
// })

Vue.use(vueLazy)

new Vue({
  el: '#app',
  render: h => h(App)
})
