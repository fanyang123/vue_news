import Vue from 'vue'
import router from './router'

import App from './App.vue'

import './assets/css/app.css'


new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
