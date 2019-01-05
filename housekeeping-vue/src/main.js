 /* jshint esversion: 6 */
 import Vue from 'vue';
 import FastClick from 'fastclick';
 import router from './router/index';
 import App from './App';
 import { AlertPlugin, ToastPlugin, Popup  } from 'vux'
 Vue.component('popup', Popup)

  Vue.use(AlertPlugin)
  Vue.use(ToastPlugin)

 import '../static/css/common.css';

 FastClick.attach(document.body);

 Vue.config.productionTip = false;

 /* eslint-disable no-new */
 new Vue({
   router,
   render: h => h(App)
 }).$mount('#app-box');
