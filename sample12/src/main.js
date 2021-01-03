import Vue from 'vue'
import App from './App.vue'

import VAnimateCss from 'animate.css';

Vue.config.productionTip = false;

Vue.use(VAnimateCss);

new Vue({
  render: h => h(App),
}).$mount('#app')
