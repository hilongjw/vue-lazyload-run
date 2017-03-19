import Vue from 'vue'
import App from './App.vue'
// import vueLazy from 'vue-lazyload'
import VueLazyload from './lazy'
// import VueLazyload from './vue-lazy.es5' 

window.Vue = Vue

Vue.use(VueLazyload, {
    preLoad: 1.3,
    lazyComponent: true,
    error: 'dist/404.png',
    loading: 'dist/loading-spin.svg',
    listenEvents: ['scroll'],
    adapter: {
        loaded (listender, Init) {
            // console.log('loaded')
        },
        loading (listender, Init) {
            // console.log('loading')
        },
        error (listender, Init) {
            // console.log('error')
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
