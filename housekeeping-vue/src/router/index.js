 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 const Login = () => import('@/components/zhupages/login/Login');
 const Registered = () => import('@/components/zhupages/login/Registered');
 const ForgetPassword = () => import('@/components/zhupages/login/ForgetPassword');
//  const My = () => import('@/components/zhupages/my/index');
 import My  from '@/components/zhupages/my/index'
 const AboutUs = () => import('@/components/zhupages/my/AboutUs');
 const CustomerService = () => import('@/components/zhupages/my/CustomerService');
 const Dispute = () => import('@/components/zhupages/my/Dispute');
//  const Certification = () => import('@/components/zhupages/my/Certification');
import Certification  from '@/components/zhupages/my/Certification'
 const TubAddress = () => import('@/components/zhupages/my/TubAddress');
 const txt = () => import('@/components/zhupages/login/txt');


 const header = () => import('@/components/qinpages/header');
 const Index = () => import('@/components/qinpages/order/Index');
 const postOrder = () => import('@/components/qinpages/order/postOrder');
 const Home = () => import('@/components/qinpages/map/Home');
 const Myorder = () => import('@/components/qinpages/order/Myorder');
//  const orderDetail = () => import('@/components/qinpages/order/orderDetail');
import orderDetail  from '@/components/qinpages/order/orderDetail'
 const choseAddress = () => import('@/components/qinpages/address/choseAddress');
 const controlAddress = () => import('@/components/qinpages/address/controlAddress');
 const chosecity = () => import('@/components/qinpages/address/chosecity');
//  const editAddress = () => import('@/components/qinpages/address/editAddress');
import editAddress  from '@/components/qinpages/address/editAddress'
 const local = () => import('@/components/qinpages/address/local');
 const delaytime = () => import('@/components/qinpages/order/delaytime');

 Vue.use(Router);

 const routes = [{
     path: '/',
     name:'Home',
     component: Home
   },{
    path: '/Login',
    name:'Login',
    component: Login
  },
   {
     path: '/Registered',
     name:'Registered',
     component: Registered
   },
   {
     path: '/ForgetPassword',
     name:'ForgetPassword',
     component: ForgetPassword
   },
   {
    path: '/txt',
    name:'txt',
    component: txt
  },
   {
     path: '/My',
     name:'My',
     component: My
   },
   {
    path: '/AboutUs',
    name:'AboutUs',
    component: AboutUs
    },
    {
      path: '/CustomerService',
      name:'CustomerService',
      component: CustomerService
    },
    {
      path: '/Dispute',
      name:'Dispute',
      component: Dispute
     },
     {
      path: '/Certification',
      name:'Certification',
      component: Certification
     },
     {
      path: '/TubAddress',
      name:'TubAddress',
      component: TubAddress
     },
   {
     path: '/header',
     name:'header',
     component: header
   },
   {
     path: '/Home',
     name:'Home',
     component: Home
   },
   {
     path: '/postOrder',
     name:'postOrder',
     component: postOrder
   },
   {
     path: '/Index',
     name:'Index',
     component: Index
   },
   {
     path: '/Myorder',
     name:'Myorder',
     component: Myorder
   },
   {
     path: '/orderDetail',
     name:'orderDetail',
     component: orderDetail
   },
   {
     path: '/choseAddress',
     name:'choseAddress',
     component: choseAddress
   },
   {
     path: '/controlAddress',
     name:'controlAddress',
     component: controlAddress
   },
   {
     path: '/editAddress',
     name:'editAddress',
     component: editAddress
   },{
    path: '/delaytime',
    name:'delaytime',
    component: delaytime
  },{
    path: '/chosecity',
    name: 'chosecity',
    component: chosecity
  },{
    path: '/local',
    name: 'local',
    component: local
  }
 ];

 export default new Router({
   routes
 });
