 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
<<<<<<< HEAD
 const Login = () => import('@/components/zhupages/login/Login');
 const Registered = () => import('@/components/zhupages/login/Registered');
 const ForgetPassword = () => import('@/components/zhupages/login/ForgetPassword');
 const My = () => import('@/components/zhupages/my/index');
=======
 import BaiduMap from 'vue-baidu-map'

 const test = () => import('@/components/qinpages/test');
 const Index = () => import('@/components/qinpages/Index');
 const postOrder = () => import('@/components/qinpages/postOrder');
 const Home = () => import('@/components/qinpages/Home');
 const Myorder = () => import('@/components/qinpages/Myorder');
 const orderDetail = () => import('@/components/qinpages/orderDetail');
 const choseAddress = () => import('@/components/qinpages/choseAddress');
 const controlAddress = () => import('@/components/qinpages/controlAddress');
 const editAddress = () => import('@/components/qinpages/editAddress');

>>>>>>> origin/featrue/20190101-view
 Vue.use(Router);
 Vue.use(BaiduMap, {
  ak: 'z5tYi3doukTrHxSlaWOHcM5cFuzXkpy2'
});
 const routes = [{
<<<<<<< HEAD
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
=======
   path: '/test',
   component: test
 },{
   path: '/',
   component: Home
 },{
    path: '/postOrder',
    component: postOrder
 },{
    path: '/Index',
    component: Index
 },{
    path: '/Myorder',
    component: Myorder
 },{
   path: '/orderDetail',
   component: orderDetail
  },{
    path: '/choseAddress',
    component: choseAddress
   },{
    path: '/controlAddress',
    component: controlAddress
   },{
    path: '/editAddress',
    component: editAddress
   }];

>>>>>>> origin/featrue/20190101-view
 export default new Router({
   routes
 });
