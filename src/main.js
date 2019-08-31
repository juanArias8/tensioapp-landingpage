import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
