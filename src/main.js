import Vue from 'vue'
// import Vue from './vue-v1.026'
import App from './App.vue'
// import VueLazyload from './lazy'
// import VueLazyload from './vue-lazy'
import VueLazyload from 'vue-lazyload'

window.Vue = Vue

Vue.use(VueLazyload, {
  // observer: true,
  preLoad: 1.3,
  lazyComponent: true,
  lazyImage: true,
  dispatchEvent: true,
  error: 'dist/avatar/404.jpg',
  loading: 'dist/avatar/loading.svg',
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

// Vue.prototype.$Lazyload.config({ loading: 'dist/loading-spin.svg' })

const app = new Vue({
  el: '#app',
  // template: '<div><App/></div>',
  components: {
    App
  },
  render: h => h(App)
})

window.app = app
