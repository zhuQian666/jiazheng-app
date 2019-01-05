 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 const Home = () => import('@/components/zhupages/Login');
 const Index = () => import('@/components/qinpages/Index');
 Vue.use(Router);
 const routes = [{
   path: '/',
   component: Index
 }];
 export default new Router({
   routes
 });
