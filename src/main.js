import Vue from 'vue';
import App from './App.vue';
import router from './router';

require('./assets/styles/main.scss');

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
