import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import BootstrapVue from "bootstrap-vue";
import vuetify from './plugins/vuetify';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
