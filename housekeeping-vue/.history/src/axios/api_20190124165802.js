 /* jshint esversion: 6 */
 import {
   fetch
 } from './fetch';
 const BASEURL = '/apis';

 export function GetCommoditySeries(data) {
   return fetch({
     url: BASEURL + '/api/User/GetCommoditySeries',
     method: 'get',
     params: data
   });
 }
