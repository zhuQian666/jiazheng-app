 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
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
   }];

 export default new Router({
   routes
 });
