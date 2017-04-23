import Vue from 'vue';
import Router from 'vue-router';
import Goods from 'components/goods/Goods';
import Ratings from 'components/ratings/Ratings';
import Seller from 'components/seller/Seller';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'goods' }
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
});
