 /* jshint esversion: 6 */
 import axios from 'axios';
 import router from '../router/index';
 export function fetch(options) {
   return new Promise((resovle, reject) => {
     const instance = axios.create({
       timeout: 30 * 1000,
       headers: {
         'Content-Type': 'application/json'
       }
     });
     //   请求拦截
     instance.interceptors.request.use(function (config) {
       let tokenVlaue = localStorage.getItem('STORAGE_TOKEN');
       if (tokenVlaue) {
         config.headers['Authorization'] = tokenVlaue;
       }
       return config;
     }, function (err) {
       return Promise.reject(error);
     });
     // 响应拦截
     instance.interceptors.response.use((response) => {
       if (response.data.status) {
         return response;
       } else {
         if (response.data.code === 1) {
           localStorage.removeItem('STORAGE_TOKEN');
           router.replace({
             path: '/Login',
             query: {
               redirect: router.currentRoute.fullPath
             }
           });
         } else {
           return Promise.reject(error);
         }
       }
     });

     error => {
       if (error.response) {
         console.log(error.response.data);
         return Promise.reject(error.response.data);
       }
     };
     instance(options).then(res => {
       resovle(res);
     }).catch(err => {
       console.log('请求异常' + err);
     });
   });

 }
