import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// ナビゲーションガード 
router.beforeEach((to, from, next) => {
  console.log("global-beforeEach");
  next();
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
