import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// ナビゲーションガード 
router.beforeEach((to, from, next) => {
  console.log("global-beforeEach");
  next();
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
