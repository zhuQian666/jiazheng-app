 /* jshint esversion: 6 */
 import {
   fetch
 } from './fetch';
 const BASEURL = 'http://182.61.21.61:8077';
 export function login(data) {
   return fetch({
     url: BASEURL + '/api/User/Login',
     method: 'POST',
     data: data
   });
 }
