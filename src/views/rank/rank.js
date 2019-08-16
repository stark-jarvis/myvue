/*!
 * myVue Project Index Page - v1.0 (2019-08-02T11:30:00+0800)
 * Copyright 2005-2019 56.com
 */
import Vue from 'vue'
import router from './router/router'
import store from '../../store/store'
import Rank from './rank.vue'

new Vue({
  router,
  store,
  render: h => h(Rank)
}).$mount('#app')
