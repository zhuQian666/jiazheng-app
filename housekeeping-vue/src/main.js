 /* jshint esversion: 6 */
 import Vue from 'vue';
 import FastClick from 'fastclick';
 import router from './router/index';
 import App from './App';
<<<<<<< HEAD
 import VueCookie from 'vue-cookie';
 Vue.use(VueCookie);

=======
 import '../static/css/common.css';
 import { XButton, CheckIcon, Group, PopupRadio, Divider, Rater , XNumber , Actionsheet, Alert, InlineLoading, Loading, XDialog  } from 'vux';
 import vuei18n from 'vuex-i18n';
 
//  收货人地址
 Vue.component('x-button', XButton);
 Vue.component('check-icon', CheckIcon);
 Vue.component('group', Group)
 Vue.component('popup-radio', PopupRadio)

 Vue.component('actionsheet', Actionsheet);
 Vue.component('alert', Alert);
 Vue.component('inline-loading', InlineLoading);
 Vue.component('loading', Loading);
 Vue.component('x-dialog', XDialog);
 Vue.component('divider', Divider);
 Vue.component('rater', Rater);
 Vue.component('x-number', XNumber)

Vue.use(vuei18n)
>>>>>>> origin/featrue/20190101-view


 FastClick.attach(document.body);

 Vue.config.productionTip = false;

 /* eslint-disable no-new */
 new Vue({
   router,
   render: h => h(App)
 }).$mount('#app-box');
