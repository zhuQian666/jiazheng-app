 /* jshint esversion: 6 */
 import {
   fetch
 } from './fetch';
 const BASEURL = 'http://182.61.21.61:8077';

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

// 获取订单列表
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

