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

//  地址列表
export function getaddress(){
  return fetch({
    url: BASEURL + '/api/User/GetProvince',
    method: 'get'
  })
}


 // 获取首页服务类型
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
// 图片上传
export function PDUploadImage(data) {
  return fetch({
    url: BASEURL + '/api/Upload/PDUploadImage',
    method: 'POST',
    data: data
  });
}
//添加更新地址
export function ChangeAddress(data) {
  return fetch({
    url: BASEURL + '/api/User/ChangeAddress',
    method: 'POST',
    data: data
  });
}
// 获取我的地址
export function UserAddress(data) {
  return fetch({
    url: BASEURL + '/api/User/UserAddress',
    method: 'GET',
    params: data
  });
}
// 删除地址
export function DeleteAddress(data) {
  return fetch({
    url: BASEURL + '/api/User/DeleteAddress',
    method: 'GET',
    params: data
  });
}
// 更新地址
export function GetUserAddress(data) {
  return fetch({
    url: BASEURL + '/api/User/GetUserAddress',
    method: 'GET',
    params: data
  });
}

//  获取商品页头部二级服务类型
export function getGoodTitle(data){
  return fetch({
    url: BASEURL + '/api/User/GetCommodityType',
    method: 'get',
    params: data
  })
}

//商品列表
export function getGoodsList(data){
  return fetch({
    url: BASEURL + '/api/User/GetCommodity',
    method: 'get',
    params: data
  })
}

// 添加商品到购物车
export function changeGoodsNum(data){
  return fetch({
    url: BASEURL + '/api/User/AddShopCart',
    method: 'post',
    data: data
  })
}

// 获取购物车商品
export function getshopCar(data){
  return fetch({
    url: BASEURL + '/api/User/GetShopCart',
    method: 'get',
    params: data
  })
}

// 创建订单列表
export function postOrderList(data){
  return fetch({
    url: BASEURL + '/api/User/OrderShop',
    method: 'get',
    params: data
  })
}

// 创建订单
export function CreatOrder(data){
  return fetch({
    url: BASEURL + '/api/Order/CreatOrder',
    method: 'post',
    data: data
  })
}

// 获取订单列表
export function getorderlist(data){
  return fetch({
    url: BASEURL + '/api/User/OrderList',
    method: 'get',
    params: data
  })
}

//订单详情
export function orderdetail(data){
  return fetch({
    url: BASEURL + '/api/User/OrderDetail',
    method: 'get',
    params: data
  })
}

//取消订单、
export function DetateOrder(data){
  return fetch({
    url: BASEURL + '/api/User/DetateOrder',
    method: 'get',
    params: data
  })
}

//延时订单
export function RenewOrderDetail(data){
  return fetch({
    url: BASEURL + '/api/User/RenewOrderDetail/'+data.id,
    method: 'get',
    params: data
  })
}

// 评价小星星
export function GetEvaluatemplates(data){
  return fetch({
    url: BASEURL + '/api/User/GetEvaluatemplate',
    method: 'get',
    params: data
  })
}

// 评价提交
export function PostEvaluate(data){
  return fetch({
    url: BASEURL + '/api/User/PostEvaluate',
    method: 'get',
    params: data
  })
}
// 更新用户头像
export function ChangeUserImg(data){
  return fetch({
    url: BASEURL + '/api/User/ChangeUserImg',
    method: 'get',
    params: data
  })
}

// 更新手机
export function ChangeUserTel(data){
  return fetch({
    url: BASEURL + '/api/User/ChangeUserTel',
    method: 'post',
    data: data
  })
}

