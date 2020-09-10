import Vue from 'vue'
import router from './Router'
import App from './App.vue'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
