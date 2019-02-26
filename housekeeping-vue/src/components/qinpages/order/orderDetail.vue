<template>
  <div class="page">
    <myHd :tit="tit"></myHd>
    <!-- 订单详情状态 -->
    <div
      class="detail-header flex flex_sb aic">
      <div class="detail-status-img">
        <img v-bind:src="thisIcon" alt>
      </div>
      <div class="detail-status-time" v-if="servertime">{{servertime}} 内上门服务</div>
      <div class="detail-status-name">{{StateName}}</div>
    </div>
    <!-- 选择地址 -->
    <div class="chose-address flex aic flex_sb">
      <div class="flex aic ml15">
        <img class="local" src="../../../assets/images/local.png" alt>
        <div class="fs28 color3 ml15" v-if="!address">请选择服务地址</div>
        <div class="accepter ml20" v-else>
          <div class="flex flex_left">
            <span class="accepter-name">{{address.Name}}</span>
            <span class="accepter-tel ml30">{{address.Tel}}</span>
          </div>
          <div class="accepter-address">{{address.Address}}</div>
        </div>
      </div>
      <x-icon type="ios-arrow-right" size="20"></x-icon>
    </div>
    <img class="lineBar" src="../../../assets/images/lineBar.jpg" alt>
    <!-- 订单 -->
    <div class="order">
      <!-- 一个服务 -->
      <div class="order-cell">
        <div class="order-cell-tit">{{CommoditySeriesName}}</div>
        <div class="order-cell-box">
          <!-- 单个订单 -->
          <div class="order-cell-list flex flex_sb aic" v-for="item in orderarr" :id="item.Id">
            <div class="order-cell-list-img fg1">
              <img v-bin:src="item.Img" alt>
            </div>
            <div class="order-cell-list-txt fg2">
              <div class="order-cell-list-head">{{item.Name}}</div>
              <div class="order-cell-list-info ellipsis3">{{item.SubTitle}}</div>
            </div>
            <div class="order-cell-list-price fg1 flex flex_column flex_sb aib fs28 ml15 ass">
              <div class="order-cell-list-unitprice tr red">￥{{item.Price}}/{{item.UnitName}}</div>
              <div class="order-cell-list-times tr red">X{{item.Count}}</div>
            </div>
          </div>
          <div class="unitprice tr">合计：￥{{AmountOne}}</div>
          <div class="unittips" v-if="Remark">
            <div class="unittips-tit fs30">服务备注</div>
            <textarea class="unitarea" cols="30" rows="10">{{Remark}}</textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- 待服务，显示订单编号 -->
    <div class="order-number">
      <div class="order-number-list flex flex_sb aic" v-if="Number">
        <span>订单编号</span>
        <span>{{Number}}</span>
      </div>
      <div class="order-number-list flex flex_sb aic" v-if="CreateTime">
        <span>创建时间</span>
        <span>{{CreateTime}}</span>
      </div>
      <div class="order-number-list flex flex_sb aic" v-if="PayTime">
        <span>支付时间</span>
        <span>{{PayTime}}</span>
      </div>
      <div class="order-number-list flex flex_sb aic" v-if="PayType">
        <span>支付方式</span>
        <span>{{PayType}}</span>
      </div>
      <div class="order-number-list flex flex_sb aic" v-if="GetTime">
        <span>接单时间</span>
        <span>{{GetTime}}</span>
      </div>
      <div class="order-number-list flex flex_sb aic" v-if="FinishTime">
        <span>验收时间</span>
        <span>{{FinishTime}}</span>
      </div>
    </div>
    <!-- 联系客服 -->
    <div class="flex flex_right flex_wrap">
      <!-- 待服务 -->
      <div class="tell-server" v-if="thishowBtn == 1" @click="getserver">联系客服</div>
      <!-- 待支付 -->
      <div class="tell-server" v-if="thishowBtn == 2" @click="deleteOrderFun">取消订单</div>
      <div class="tell-server" v-if="thishowBtn == 2">立即付款</div>
      <!-- 待接单 -->
      <div class="tell-server" v-if="thishowBtn == 3" @click="getserver">联系客服</div>
      <div class="tell-server" v-if="thishowBtn == 3" @click="deleteOrderFun">取消订单</div>
      <!-- 待评价 -->
      <div class="tell-server" @click="showHideOnBlur=true" v-model="showHideOnBlur" v-if="thishowBtn == 4">评价服务</div>
      <!-- 服务中 -->
      <div class="tell-server" v-if="thishowBtn == 5" @click="delaytTime">延长服务</div>
      <div class="tell-server" v-if="thishowBtn == 5">验收服务</div>
      <!-- 已退款 -->
      <div class="tell-server" v-if="thishowBtn == 6" @click="getserver">联系客服</div>
      <!-- 已完成 -->
      <div class="tell-server" v-if="thishowBtn == 7">再来一单</div>
      <div class="tell-server" v-if="thishowBtn == 7">已评价</div>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="commend-box">
          <div class="commend-header">服务结束</div>
          <div class="commend-body">
            <div class="server-img">
              <img src="../../../assets/images/demo.jpg" alt>
            </div>
            <div class="server-type">
              <divider>{{ '保洁服务' }}</divider>
            </div>
            <group @click.native="commendStar">
              <rater
                v-model="data3"
                star="★"
                :margin="10"
                :font-size="30"
                :max="5"
                active-color="#3386ff"
              ></rater>
            </group>
            <div class="user-tip flex flex_warp flex_c aic">
              <!-- <div class="user-list-tip">你好
                <x-icon type="ios-heart" size="20" class="icon-blue"></x-icon>
              </div> -->
              <div class="user-list-tip active" v-for="item in signTip">{{item}}
                <x-icon type="ios-heart" size="20" class="icon-blue"></x-icon>
              </div>
            </div>
            <textarea  class="advice" name="" rows="5" @change="advices" placeholder="请填写您对本次服务的评价，您的意见或建议是我们前进的方向">{{advice}}</textarea>
            <div class="submit-commend" @click="upostCommend">
              <x-button type="primary">提交</x-button>
            </div>
          </div>
        </div>
        <div class="close-style" @click="showHideOnBlur=false">
          <span class="vux-close">
            <br>
            <x-icon type="ios-close" style="fill:#fff;" size="30"></x-icon>
          </span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
import myHd from "../header.vue";
import { GetEvaluatemplates, orderdetail, PostEvaluate, DetateOrder } from "../../../axios/api.js";
import {
  Rater,
  XDialog,
  XButton,
  Group,
  XSwitch,
  TransferDomDirective as TransferDom,
  Divider
} from "vux";
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      tit: '订单详情',
      signTip: null,
      showHideOnBlur: false,
      data3: "5",
      orderShowCon: null,
      orderarr: null,
      address: null,
      StateName: '',    //订单状态
      AmountOne: '0',   //总价
      Remark: null, //评论
      CommoditySeriesName: '',    //服务名称
      Number: null,      //订单编号
      CreateTime: null,    //订单创建时间
      PayTime: null,      //支付时间
      GetTime: null,     //接单时间
      FinishTime: null,        //验收时间
      PayType: null,        //支付方式
      servertime: null,     //开始服务时间
      haslocal: false, //是否显示收货人
      acceptername: "qinhuansky", //收货人姓名
      accepttel: "111111", //收货人手机号
      accepteraddress: "安徽身合肥市", //收货人地址
      paytotal: 170, //总金额
      advice: "", //建议
      thisIcon: require("../../../assets/images/wait-server.png"),
      thishowBtn: ''      //要显示的按钮
    };
  },
  components: {
    Divider,
    XDialog,
    XButton,
    Group,
    Rater,
    myHd
  },
  mounted: function(){
    this.getOrderdetail();
    this.commendStar();
  },
  methods: {
    // 显示订单详情
    getOrderdetail(){
      let _this = this;
      let OrderId = this.$route.query.id;
      console.log(OrderId);
      let data = {
        token: localStorage.getItem('STORAGE_TOKEN'),
        id: OrderId,
      }
      orderdetail(data).then(res =>{
        console.log(res.Data);
        if(res.Data){
          _this.orderShowCon = res.Data;
          _this.address = res.Data.UserAddressHelp;
          _this.StateName = res.Data.StateName;
          _this.orderarr = res.Data.CommodityDetailOne;
          _this.AmountOne = res.Data.AmountOne;
          _this.Remark = res.Data.Remark;
          _this.CommoditySeriesName = res.Data.CommoditySeriesName;
          _this.Number = res.Data.Number;
          _this.CreateTime = res.Data.CreateTime;
          _this.PayTime = res.Data.PayTime;
          _this.GetTime = res.Data.GetTime;
          _this.FinishTime = res.Data.FinishTime;
          _this.PayType = res.Data.PayType;
          _this.thisicon(res.Data.StateName);
        }
      })
    },
    // 显示头部
    thisicon(StateNames){
      let _this = this;
      let thisicon = '';
      switch (StateNames) {
        case '待服务':
          _this.thishowBtn = 1;
          thisicon = require("../../../assets/images/wait-server.png")
          break;
        case '待支付':
          _this.thishowBtn = 2;
          thisicon = require("../../../assets/images/wait-pay.png")
          break;
        case '待接单':
          _this.thishowBtn = 3;
          thisicon = require("../../../assets/images/wait-order.png")
          break;
        case '待评价':
          _this.thishowBtn = 4;
          thisicon = require("../../../assets/images/wait-comment.png")
          break;
        case '服务中':
          _this.thishowBtn = 5;
          thisicon = require("../../../assets/images/servering.png")
          break;
        case '已退款':
          _this.thishowBtn = 6;
          thisicon = require("../../../assets/images/refunded.png")
          break;
        case '已完成':
          _this.thishowBtn = 7;
          thisicon = require("../../../assets/images/order-complete.png")
          break;
        default:
          break;
      }
      this.thisIcon = thisicon;
    },

    //取消订单
    deleteOrderFun(){
      let that = this;
      let token = localStorage.getItem('STORAGE_TOKEN');
      let orderId = this.$route.query.id;
      let data = {token, orderId}
      DetateOrder(data).then(res =>{
        console.log(res.data);
        if(res.Code =='200'){
          that.$router.go(-1)
        }
      })
    },
    getserver(){
      this.$router.push({
        path: "/CustomerService"
      });
    },
    delaytTime(){
      let orderid = this.$route.query.id;
      this.$router.push({
        path: "/delaytime",
        query:{
          id: orderid
        }
      });
    },
    
    
    // 评价星星
    commendStar(){
      let _this =this;
      let data = {level: _this.data3};
      _this.signTip = null;
      GetEvaluatemplates(data).then(res =>{
        console.log(res.Data);
        if(res.Data.length>0){
          _this.signTip = res.Data
        }
      })
    },
    // 获取评论
    advices(e){
      this.advice = e.target.value
    },
    // 提交评论
    upostCommend(){
      let level = this.data3
      let Title = this.signTip.toString();
      let Content =  this.advice;
      let OrderId = this.$route.query.id;
      let token = localStorage.getItem('STORAGE_TOKEN');
      let data = {
        level,Title,Content,OrderId,token
      }
      PostEvaluate(data).then(res =>{
        console.log(res.Data)
      })
    }
  }
};
</script>
<style scope>
/* @import '../static/css/common.css'; */
.weui-dialog {
  border-radius: 0.4rem;
  background: transparent !important;
}
.commend-box {
  background: #fff;
  padding-bottom: 0.266667rem;
}
.commend-header {
  font-size: 0.48rem;
  color: #3487ff;
  padding: 0.213333rem 0;
  width: 100%;
  border-bottom: 1px solid #eee;
}
.server-img {
  width: 1.546667rem;
  height: 1.546667rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0.4rem auto 0;
}
.server-type {
  font-size: 0.32rem;
  padding: 0 0.72rem;
  color: #3487ff;
}
.vux-divider:after {
  background-position: left 1em bottom 0 !important;
}
.weui-cells:before {
  display: none !important;
}
.weui-cells:after {
  display: none !important;
}
.vux-divider:before {
  background-position: right 1em bottom 0 !important;
}
.vux-divider {
  line-height: 4 !important;
  color: #3487ff !important;
}
.user-tip {
  padding: 0 0.266667rem;
  margin: 0.32rem 0;
}
.user-list-tip {
  text-align: center;
  color: #808080;
  font-size: 0.32rem;
  padding: 5px 10px;
  background: #f6f6f6;
  border-radius: 0.266667rem;
  margin: 10px;
}
.user-list-tip .icon-blue {
  vertical-align: middle;
  fill: #dcdcdc;
}
.user-list-tip.active {
  background: #3386ff;
  color: #fff;
}
.user-list-tip.active .icon-blue {
  fill: #fff;
}
.advice {
  color: #b6b6b6;
  font-size: 0.32rem;
  text-align: justify;
  padding: 0 0.4rem;
  width: 100%;
}
.detail-header {
  height: 1.026667rem;
  width: 100%;
  padding: 0 0.266667rem;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.detail-header .detail-status-img {
  width: 0.586667rem;
  height: 0.586667rem;
  vertical-align: middle;
}
.detail-header .detail-status-img > img {
  display: block;
}
.detail-header .detail-status-name {
  color: #191919;
  font-size: 0.32rem;
}
.order-number {
  background: #fff;
  width: 100%;
  padding: 0.133333rem 0.266667rem;
  border-bottom: 1px solid #f7f7f7;
}
.order-number .order-number-list {
  height: 0.586667rem;
  width: 100%;
  font-size: 0.32rem;
  color: #999;
}
.detail-status-time {
  color: #7a7a7a;
  font-size: 0.32rem;
}
.chose-address {
  padding: 0 0.4rem;
  height: 1.866667rem;
  width: 100%;
  background: #fff;
}
.chose-address .local {
  width: 0.373333rem;
  height: 0.533333rem;
  flex: 0.373333rem 0 0;
}
.lineBar {
  width: 100%;
  height: 0.32rem;
  margin-top: -0.8rem;
}
.accepter-name,
.accepter-tel {
  font-size: 0.373333rem;
  color: #2b2b2b;
}
.accepter-address {
  font-size: 0.32rem;
  color: #7a7a7a;
}
.order {
  width: 100%;
}
.order-cell {
  background: #fff;
  padding-top: 0.266667rem;
  margin-bottom: 0.266667rem;
}
.order-cell-tit {
  font-size: 0.4rem;
  color: #1a1a1a;
  padding: 0.4rem 0.333333rem;
}
.order-cell-list {
  padding: 0.226667rem 0.333333rem 6px;
  border-bottom: 1px solid #f5f5f5;
}
.order-cell-list-img {
  width: 2.133333rem;
  height: 2.133333rem;
  flex: 2.133333rem 0 0;
  overflow: hidden;
}
.order-cell-list-txt {
  margin-left: 0.333333rem;
}
.order-cell-list-head {
  font-size: 0.373333rem;
  color: #2c2c2c;
}
.order-cell-list-info {
  font-size: 0.32rem;
  color: #999;
  text-align: justify;
  margin-top: 0.266667rem;
  line-height: 0.426667rem;
}
.unitprice {
  color: #f00;
  font-size: 0.373333rem;
  padding: 0.266667rem 0.4rem;
  border-bottom: 1px solid #f5f5f5;
}
.unittips {
  padding: 0.266667rem;
}
.unittips .unitarea {
  width: 100%;
  padding-top: 0.266667rem;
  height: 1.333333rem;
}
.tell-server {
  padding: 5px 0.586667rem;
  background: #34afff;
  color: #fff;
  font-size: 0.373333rem;
  box-shadow: 5px 5px 5px #eee;
  margin: 0.333333rem;
  border-radius: 0.666667rem;
}
.submit-commend {
  width: 85%;
  margin: 0.8rem auto 0.4rem;
}

.vux-close {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>

