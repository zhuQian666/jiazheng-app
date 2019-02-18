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
 
 //全局路由守卫
router.beforeEach((to,from,next)=>{
  let tokenVlaue = localStorage.getItem('STORAGE_TOKEN');
  console.log(tokenVlaue)
  if(!tokenVlaue){
      if(to.name == 'Login'||to.name == 'Registered'||to.name == 'ForgetPassword'){
          next();
      }else{
          next({ path: '/Login' })
      }
  }else{
       next();
  }
})


 FastClick.attach(document.body);

 Vue.config.productionTip = false;

 /* eslint-disable no-new */
 new Vue({
   router,
   render: h => h(App)
 }).$mount('#app-box');
