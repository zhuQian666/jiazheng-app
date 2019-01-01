 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 const Home = () => import('@/components/zhupages/Login');
 Vue.use(Router);
 const routes = [{
   path: '/',
   component: Home
 }];
 export default new Router({
   routes
 });
