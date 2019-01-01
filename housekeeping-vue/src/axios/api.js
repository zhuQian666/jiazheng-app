 /* jshint esversion: 6 */
 import {
   fetch
 } from './fetch';
 const BASEURL = 'api';
 export function login(data) {
   return fetch({
     url: BASEURL + '/postLogin',
     method: 'post',
     data: data
   });
 }
