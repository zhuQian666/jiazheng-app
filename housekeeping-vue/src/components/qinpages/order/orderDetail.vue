<template>
  <div class="page">
    <!-- 订单详情状态 -->
    <div
      class="detail-header flex flex_sb aic"
      v-if="item.status"
      v-for="(item, index) in detailStatus"
      :key="index"
    >
      <div class="detail-status-img">
        <img v-bind:src="item.images" alt>
      </div>
      <div class="detail-status-time">{{item.time}} 内上门服务</div>
      <div class="detail-status-name">{{item.name}}</div>
    </div>
    <!-- 选择地址 -->
    <div class="chose-address flex aic flex_sb">
      <div class="flex aic ml15">
        <img class="local" src="../../../assets/images/local.png" alt>
        <div class="fs28 color3 ml15" v-if="haslocal">请选择服务地址</div>
        <div class="accepter ml20" v-else>
          <div class="flex flex_left">
            <span class="accepter-name">{{acceptername}}</span>
            <span class="accepter-tel ml30">{{accepttel}}</span>
          </div>
          <div class="accepter-address">{{accepteraddress}}</div>
        </div>
      </div>
      <x-icon type="ios-arrow-right" size="20"></x-icon>
    </div>
    <img class="lineBar" src="../../../assets/images/lineBar.jpg" alt>
    <!-- 订单 -->
    <div class="order">
      <!-- 一个服务 -->
      <div class="order-cell">
        <div class="order-cell-tit">保洁服务</div>
        <div class="order-cell-box">
          <!-- 单个订单 -->
          <div class="order-cell-list flex flex_sb aic">
            <div class="order-cell-list-img fg1">
              <img src="../../../assets/images/serverDemo.jpg" alt>
            </div>
            <div class="order-cell-list-txt fg2">
              <div class="order-cell-list-head">油烟机清洗</div>
              <div class="order-cell-list-info ellipsis3">4小时/次/人，含擦玻璃和保洁。为了保障服务人员的生命安全，其中高层玻璃住...</div>
            </div>
            <div class="order-cell-list-price fg1 flex flex_column flex_sb aib fs28 ml15 ass">
              <div class="order-cell-list-unitprice tr red">￥89.00</div>
              <div class="order-cell-list-times tr red">X1</div>
            </div>
          </div>
          <div class="unitprice tr">合计：￥178.00</div>
          <div class="unittips">
            <div class="unittips-tit fs30">服务备注</div>
            <textarea
              class="unitarea"
              name
              id
              cols="30"
              rows="10"
              placeholder="请填写您需要留言的内容,请填写您需要留言的内容请填写您需要留言的内容请填写您需要留言的内容"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- 待服务，显示订单编号 -->
    <div class="order-number">
      <div
        class="order-number-list flex flex_sb aic"
        v-if="item.status"
        v-for="(item, index) in orderNumber"
        :key="index"
      >
        <span>{{item.listName}}</span>
        <span>{{item.listValue}}</span>
      </div>
    </div>
    <!-- 联系客服 -->
    <div class="flex flex_right flex_wrap">
      <div class="tell-server">联系客服</div>
      <!-- 待付款 -->
      <div class="tell-server">取消订单</div>
      <div class="tell-server">立即付款</div>
      <!-- 待接单 -->
      <div class="tell-server">联系客服</div>
      <div class="tell-server">取消订单</div>
      <!-- 待评价 -->
      <div class="tell-server" v-model="showHideOnBlur">评价服务</div>
      <!-- 服务中 -->
      <div class="tell-server">延长服务</div>
      <div class="tell-server">验收服务</div>
      <!-- 已退款 -->
      <div class="tell-server">联系客服</div>
      <!-- 已完成 -->
      <div class="tell-server">再来一单</div>
      <div class="tell-server">已评价</div>
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
            <group>
              <rater
                v-model="data3"
                star="★"
                margin="10"
                font-size="30"
                :max="5"
                active-color="#3386ff"
              ></rater>
            </group>
            <div class="user-tip flex flex_warp flex_left aic">
              <div class="user-list-tip">你好
                <x-icon type="ios-heart" size="20" class="icon-blue"></x-icon>
              </div>
              <div class="user-list-tip active">手动阀好
                <x-icon type="ios-heart" size="20" class="icon-blue"></x-icon>
              </div>
            </div>
            <p class="advice">{{advice}}</p>
            <div class="submit-commend">
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
import { Rater } from "vux";
import {
  XDialog,
  XButton,
  Group,
  XSwitch,
  TransferDomDirective as TransferDom,
  Divider
} from "vux";
import {orderdetail} from "../../../axios/api.js";
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      showHideOnBlur: true,
      data3: "5",
      haslocal: false, //是否显示收货人
      acceptername: "qinhuansky", //收货人姓名
      accepttel: "111111", //收货人手机号
      accepteraddress: "安徽身合肥市", //收货人地址
      paytotal: 170, //总金额
      advice: "请填写您对本次服务的评价，您的意见或建议是我们前进的方向", //建议
      orderNumber: [
        {
          listName: "订单编号",
          listValue: "123123123123123",
          status: true
        },
        {
          listName: "创建时间",
          listValue: "2018.10.11 12:00",
          status: true
        },
        {
          listName: "支付时间",
          listValue: "2018.10.11 12:00",
          status: false
        },
        {
          listName: "支付方式",
          listValue: "微信支付",
          status: false
        },
        {
          listName: "退款时间",
          listValue: "2018.10.11 12:00",
          status: false
        },
        {
          listName: "接单时间",
          listValue: "2018.10.11 12:00",
          status: false
        },
        {
          listName: "退款时间",
          listValue: "2018.10.11 12:00",
          status: false
        },
        {
          listName: "验收时间",
          listValue: "2018.10.11 12:00",
          status: false
        }
      ],
      detailStatus: [
        {
          images: require("../../../assets/images/wait-server.png"),
          time: "23:59:59",
          name: "待服务",
          status: true
        },
        {
          images: require("../../../assets/images/wait-pay.png"),
          name: "待付款",
          time: "",
          status: false
        },
        {
          images: require("../../../assets/images/wait-order.png"),
          name: "待接单",
          time: "",
          status: false
        },
        {
          images: require("../../../assets/images/wait-comment.png"),
          name: "待评价",
          time: "",
          status: false
        },
        {
          images: require("../../../assets/images/servering.png"),
          name: "服务中",
          time: "",
          status: false
        },
        {
          images: require("../../../assets/images/refunded.png"),
          name: "已退款",
          time: "",
          status: false
        },
        {
          images: require("../../../assets/images/order-complete.png"),
          name: "已完成",
          time: "",
          status: false
        }
      ]
    };
  },
  components: {
    Divider,
    XDialog,
    XButton,
    Group,
    Rater
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

