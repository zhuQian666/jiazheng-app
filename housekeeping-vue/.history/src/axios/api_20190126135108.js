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
//忘记密码
export function UserReset(data) {
  return fetch({
    url: BASEURL + '/api/User/UserReset',
    method: 'POST',
    data: data
  });
}
// 获取用户信息
export function GetUserInfo(data) {
  return fetch({
    url: BASEURL + '/api/User/GetUserInfo',
    method: 'GET',
    params: data
  });
}
// 获取关于我们
export function GetAbout() {
  return fetch({
    url: BASEURL + '/api/User/GetAbout',
    method: 'GET',
  });
}
//争议异常处理
export function PostDispute(data) {
  return fetch({
    url: BASEURL + '/api/User/PostDispute',
    method: 'POST',
    data: data
  });
}