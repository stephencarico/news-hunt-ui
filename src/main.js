import Vue from 'vue';
import AppLayout from './components/Layout.vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  ...AppLayout,
}).$mount('#app');
