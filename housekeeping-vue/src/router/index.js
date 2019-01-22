 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 const Login = () => import('@/components/zhupages/login/Login');
 const Registered = () => import('@/components/zhupages/login/Registered');
 const ForgetPassword = () => import('@/components/zhupages/login/ForgetPassword');
 const My = () => import('@/components/zhupages/my/index');
 Vue.use(Router);
 const routes = [{
     path: '/Login',
     component: Login
   },
   {
     path: '/Registered',
     component: Registered
   },
   {
     path: '/ForgetPassword',
     component: ForgetPassword
   },
   {
     path: '/My',
     component: My
   },
 ];
 export default new Router({
   routes
 });
