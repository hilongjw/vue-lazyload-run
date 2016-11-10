import Vue from 'vue'
import App from './App.vue'
// import vueLazy from 'vue-lazyload'
// import vueLazy from './vue-lazy'
import vueLazy from './vue-lazy.es5' 

import VueSave from './list-save'

// Vue.use(vueLazy, {
//     preLoad: 1.3,
//     error: 'dist/404.png',
//     loading: 'dist/loading-spin.svg'
// })

Vue.use(vueLazy)

new Vue({
  el: '#app',
  render: h => h(App)
})
