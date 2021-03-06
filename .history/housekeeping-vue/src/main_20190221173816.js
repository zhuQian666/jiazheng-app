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
 
 //全局路由守卫
router.beforeEach((to,from,next)=>{
  let tokenVlaue = localStorage.getItem('STORAGE_TOKEN');
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
 import '../static/css/common.css';
//  import { XButton, CheckIcon, Group, PopupRadio, Divider, Rater , XNumber , Actionsheet, Alert, InlineLoading, Loading, XDialog  } from 'vux';
//  import vuei18n from 'vuex-i18n';
 
//  收货人地址
//  Vue.component('x-button', XButton);
//  Vue.component('check-icon', CheckIcon);
//  Vue.component('group', Group)
//  Vue.component('popup-radio', PopupRadio)

//  Vue.component('actionsheet', Actionsheet);
//  Vue.component('alert', Alert);
//  Vue.component('inline-loading', InlineLoading);
//  Vue.component('loading', Loading);
//  Vue.component('x-dialog', XDialog);
//  Vue.component('divider', Divider);
//  Vue.component('rater', Rater);
//  Vue.component('x-number', XNumber)

// Vue.use(vuei18n)


 FastClick.attach(document.body);

 Vue.config.productionTip = false;

 /* eslint-disable no-new */
 new Vue({
   router,
   render: h => h(App)
 }).$mount('#app-box');
