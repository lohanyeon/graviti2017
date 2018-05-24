// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'
// import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(VueCookies)
// Vue.use(vueScrollBehavior, {
//   router: router,
//   maxLength: 100,
//   delay: 100
// })

Vue.config.productionTip = false

Vue.prototype.$http = axios

var EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: function () {
      return EventBus
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
