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
	  meta: {
	    title: 'Home'
	  }
	},
	{
	  path: '/seller',
	  name: 'seller',
	  component: Seller,
	  meta: {
	    title: 'Seller'
	  }
	},
	{
	  path: '/rating',
	  name: 'rating',
	  component: Rating,
	  meta: {
	    title: 'Rating'
	  }
	}
  ]
};
const router = new Router(routers);

router.beforeEach((to, from, next) => {
	console.log(`router beforeEach`);
	next && next();
});

router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
	console.log('router afterEach');
	console.log(`Router To:`);
	console.dir(to);
	console.log(`Router From:`);
	console.dir(from);
});

export default router;

