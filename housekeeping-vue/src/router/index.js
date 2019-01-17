 /* jshint esversion: 6 */
 import Vue from 'vue';
 import Router from 'vue-router';
 import BaiduMap from 'vue-baidu-map'


 const Index = () => import('@/components/qinpages/Index');
 const postOrder = () => import('@/components/qinpages/postOrder');
 const Home = () => import('@/components/qinpages/Home');
 const Myorder = () => import('@/components/qinpages/Myorder');
 const orderDetail = () => import('@/components/qinpages/orderDetail');

 Vue.use(Router);
 Vue.use(BaiduMap, {
  ak: 'z5tYi3doukTrHxSlaWOHcM5cFuzXkpy2'
});
 const routes = [{
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
}];

 export default new Router({
   routes
 });
