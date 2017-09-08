import Vue from 'vue'
import App from './App.vue'
// import vueLazy from 'vue-lazyload'
import VueLazyload from './lazy'
// import VueLazyload from './vue-lazy'

window.Vue = Vue

Vue.use(VueLazyload, {
    // observer: true,
    preLoad: 1.3,
    lazyComponent: true,
    dispatchEvent: true,
    error: 'dist/404.png',
    loading: 'dist/loading-spin.svg',
    listenEvents: ['scroll'],
    adapter: {
        loaded (listener, fromCache, Init) {
           
        },
        loading (listener, Init) {
            // console.log('loading')
        },
        error (listener, Init) {
            // console.log('error')
        }
    },
    filter: {
        progressive (listener, options) {
            const isCDN = /qiniudn.com/
            if (isCDN.test(listener.src)) {
                listener.el.setAttribute('lazy-progressive', 'true')
                listener.loading = listener.src + '?imageView2/1/w/10/h/10'
            }
        },
        webp (listener, options) {
            if (!options.supportWebp) return
            const isCDN = /qiniudn.com/
            if (isCDN.test(listener.src)) {
                listener.src += '?imageView2/2/format/webp'
            }
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
