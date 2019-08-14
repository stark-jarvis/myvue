/*!
 * MyVue Project Demo - v1.0 (2019-08-08T18:16:03+0800)
 * Copyright 2005-2019 56.com
 */
import Vue from 'vue'
import router from './router'
import Home from './home.vue'

new Vue({
  router,  // 简写方法，正常是：router: router
  render: h => h(Home)
}).$mount('#app')
