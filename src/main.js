import Vue from 'vue'
import App from './App.vue'
// import vueLazy from 'vue-lazyload'
// import vueLazy from './vue-lazy'
import vueLazy from './vue-lazy.es5' 

import VueSave from './list-save'

Vue.use(vueLazy, {
    preLoad: 1.3,
    error: 'dist/404.png',
    loading: 'dist/loading-spin.svg',
    adapter: {
        loaded (listender, Init) {
            console.log('loaded')
        },
        loading (listender, Init) {
            console.log('loading')
        },
        error (listender, Init) {
            console.log('error')
        }
    },
    filter: {
        webp ({ src }) {
            const isCDN = /qiniudn.com/
            if (isCDN.test(src)) {
                src += '?imageView2/2/format/webp'
            }
            return src
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
