import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/routes'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
//import VueMaterial from 'vue-material'

//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

var VueCookie = require('vue-cookie');

Vue.use(BootstrapVue)

//Vue.use(VueMaterial)

Vue.use(VueCookie)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
