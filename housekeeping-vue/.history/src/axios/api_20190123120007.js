 /* jshint esversion: 6 */
 import {
   fetch
 } from './fetch';
 const BASEURL = '/apis';
 export function login(data) {
   return fetch({
     url: BASEURL + '/api/User/Login',
     method: 'POST',
     data: data
   });
 }
