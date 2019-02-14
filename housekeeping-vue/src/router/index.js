 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 import BaiduMap from 'vue-baidu-map'

 const test = () => import('@/components/qinpages/test');
 const Index = () => import('@/components/qinpages/order/Index');
 const postOrder = () => import('@/components/qinpages/order/postOrder');
 const Home = () => import('@/components/qinpages/map/Home');
 const Myorder = () => import('@/components/qinpages/order/Myorder');
 const orderDetail = () => import('@/components/qinpages/order/orderDetail');
 const choseAddress = () => import('@/components/qinpages/address/choseAddress');
 const controlAddress = () => import('@/components/qinpages/address/controlAddress');
 const editAddress = () => import('@/components/qinpages/address/editAddress');
 const local = () => import('@/components/qinpages/address/local');

 Vue.use(Router);
 Vue.use(BaiduMap, {
  ak: 'z5tYi3doukTrHxSlaWOHcM5cFuzXkpy2'
});
 const routes = [{
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
   },{
    path: '/local',
    component: local
   }];

 export default new Router({
   routes
 });
