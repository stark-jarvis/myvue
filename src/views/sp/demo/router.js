/*!
 * Spcial Demo Router - v1.0 (2019-08-14T11:35:47+0800)
 * Copyright 2005-2019 56.com
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from './index/index'
import Seller from './seller/seller'
import Rating from './rating/rating'

Vue.use(Router);

const routers = {
  mode: 'hash',
  routes: [ // 神坑：是 routes，不是 router
    {
	  path: '/',
	  name: 'home',
	  redirect: '/index'
	},
    {
	  path: '/index',
	  name: 'index',
	  component: Index,
	},
	{
	  path: '/seller',
	  name: 'seller',
	  component: Seller 
	},
	{
	  path: '/rating',
	  name: 'rating',
	  component: Rating
	}
  ]
};
const router = new Router(routers);

router.afterEach((to, from, next) => {
	console.log('router afterEach');
	console.log(`Router To:`);
	console.dir(to);
	console.log(`Router From:`);
	console.dir(from);
	console.log(`Router Next: ${next}`);
});

export default router;

