 /* jshint esversion: 6 */
 import {
   fetch
 } from './fetch';
 const BASEURL = '/apis';
//  登录
 export function login(data) {
   return fetch({
     url: BASEURL + '/api/User/Login',
     method: 'POST',
     data: data
   })
  }
 export function GetCommoditySeries(data) {
   return fetch({
     url: BASEURL + '/api/User/GetCommoditySeries',
     method: 'get',
     params: data
   });
 }
//注册
export function Register(data) {
  return fetch({
    url: BASEURL + '/api/User/Register',
    method: 'POST',
    data: data
  });
}
// 获取验证码
export function Sms(data) {
  return fetch({
    url: BASEURL + '/api/User/Sms',
    method: 'GET',
    params: data
  });
}