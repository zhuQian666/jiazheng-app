 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 const Login = () => import('@/components/zhupages/Login');
 const Registered = () => import('@/components/zhupages/Registered');
 Vue.use(Router);
 const routes = [{
     path: '/Login',
     component: Login
   },
   {
     path: '/Registered',
     component: Registered
   },
 ];
 export default new Router({
   routes
 });
