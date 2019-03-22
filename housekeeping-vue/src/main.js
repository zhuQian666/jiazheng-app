 /* jshint esversion: 6 */
 import Vue from 'vue';
 import FastClick from 'fastclick';
 import router from './router/index';
 import App from './App';
 import VueCookie from 'vue-cookie';
 Vue.use(VueCookie);
 import  { AlertPlugin } from 'vux'
 Vue.use(AlertPlugin)
 import  { LoadingPlugin } from 'vux'
 Vue.use(LoadingPlugin)
 import '../static/css/common.css'
 import amfeFlexible from 'amfe-flexible'
 import sheader from './components/qinpages/header.vue'
 
 //全局路由守卫
router.beforeEach((to,from,next)=>{
  let tokenVlaue = localStorage.getItem('STORAGE_TOKEN');
  if(!tokenVlaue){
      if(to.name == 'Login'||to.name == 'Registered'||to.name == 'ForgetPassword' || to.name == 'txt'){
          next();
      }else{
        next({ path: '/Login' })
      }
  }else{
       next();
  }
})
 import '../static/css/common.css';


 FastClick.attach(document.body);

 Vue.config.productionTip = false;

 /* eslint-disable no-new */

 Vue.component('my-header', sheader)
 new Vue({
   router,
   render: h => h(App)
 }).$mount('#app-box');
