<template>
    <div class="page">
        <!-- 选择地址 -->
        <div class="chose-address flex aic flex_sb">
            <div class="flex aic ml15">
                <img class="local" src="../../../assets/images/local.png" alt="">
                <div class="fs28 color3 ml15" v-if="haslocal">请选择服务地址</div>
                <div class="accepter ml20" v-else>
                    <div class="flex flex_left"><span class="accepter-name">{{acceptername}}</span><span class="accepter-tel ml30">{{accepttel}}</span></div>
                    <div class="accepter-address">{{accepteraddress}}</div>
                </div>
            </div>
            <x-icon type="ios-arrow-right" size="20"></x-icon>
        </div>
        <img class="lineBar" src="../../../assets/images/lineBar.jpg" alt="">
        <!-- 订单 -->
        <div class="order">
            <!-- 一个服务 -->
            <div class="order-cell" v-for="(item, index) in serverKind" :key="index">
                <div class="order-cell-tit">{{item.TypeName}}</div>
                <div class="order-cell-box">
                    <!-- 单个订单 -->
                    <div class="order-cell-list flex flex_sb ait" v-for="sitem in item.Detail" data-id="sitem.Id">
                        <div class="order-cell-list-img fg1">
                            <img v-bind:src="sitem.ImgUrl" alt="">
                        </div>
                        <div class="order-cell-list-txt fg2">
                            <div class="order-cell-list-head">{{sitem.Name}}</div>
                            <div class="order-cell-list-info ellipsis3">{{sitem.SubTitle}}</div>
                        </div>
                        <div class="order-cell-list-price fg1 flex flex_column flex_sb aib fs28 ml15 ass">
                            <div class="order-cell-list-unitprice tr red">￥{{sitem.Price}}</div>
                            <div class="order-cell-list-times tr red">X{{sitem.Count}}</div>
                        </div>
                    </div>
                    <div class="unitprice tr">合计：￥{{item.Amount}}</div>
                    <div class="unittips">
                        <div class="unittips-tit fs30">服务备注</div>
                        <textarea class="unitarea" name="" id="" cols="30" rows="10" placeholder="请填写您需要留言的内容,请填写您需要留言的内容请填写您需要留言的内容请填写您需要留言的内容"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-cell">
                <div class="order-cell-tit">支付方式</div>
                <div class="order-cell-box">
                   <div class="flex flex_sb aic zhifu">
                       <label for="radioone" class="zhifu-icon fg1">
                           <img src="../../../assets/images/weixin.png" alt="">
                           微信支付
                       </label>
                       <div>
                           <check-icon @click="clickradio" id="radioone" :value.sync="demo1"></check-icon>
                       </div>
                   </div>
                   <div class="flex flex_sb aic zhifu">
                       <label for="radiotwo" class="zhifu-icon fg1">
                           <img src="../../../assets/images/zhifubao.png" alt="">
                           支付宝支付</label>
                       </label>
                       <div>
                           <check-icon @click="clickradio" id="radiotwo" :value.sync="demo2"></check-icon>
                       </div>
                   </div>
                </div>
            </div>
    <!-- 提交订单 -->
        <div class="pay-moeny flex flex_sb aif">
            <div class="pay-total fg1 red">
                合计：<span class="ml2">￥{{paytotal}}</span>
            </div>
            <div class="post-order fg1" @click="postOrder">提交订单</div>
        </div>
    </div>
</template>
<script>
import { postOrderList, CreatOrder } from "../../../axios/api.js";
import { ColorPicker, Group, Cell, CheckIcon  } from 'vux';
export default {
 components: {
    ColorPicker,
    Group,
    Cell,
    CheckIcon 
  },
  data() {
    return {
      demo1: true,
      demo2: false,
      haslocal: false,      //是否显示收货人
      acceptername: 'qinhuansky',   //收货人姓名
      accepttel: '111111',          //收货人手机号
      accepteraddress: '安徽身合肥市',  //收货人地址
      paytotal: 0,                    //总金额
      serverKind: null,                 //服务类型
    };
  },
  methods: {
    //   获取订单列表
      getOrderList(){
        // 购物车id，跳过来时弹出框里的id
        let data = {ShopCartIds:'39,40', token: "071690289151821091qy"}
        postOrderList(data).then(res => {
            console.log(res);
            this.serverKind = res.Data;
            for(let i=0; i<res.Data.length; i++){
                this.paytotal += res.Data[i].Amount;
            }
        })
      },
      change (val, label) {
      console.log('change', val, label)
    },
    //点击判断是否有plus环境
    isplush(){
        let _this =this;
        if (window.plus) {  
            setTimeout(function() { //解决callback与plusready事件的执行时机问题(典型案例:showWaiting,closeWaiting)  
                _this.postOrder()
            }, 0);  
        } else {  
            document.addEventListener("plusready", function() {  
                _this.postOrder()
            }, false);  
        } 
    },
    clickradio(){
        this.demo1 = !this.demo2
    },

    //   创建订单
    postOrder(){
        let _this = this;
        let datarr = new Array();
        let dataDom = document.getElementsByClassName('order')[0];
        for(let i=0; i>dataDom.length; i++){
            
        }
        if(!_this.demo1 && !_this.demo2){
            this.$vux.loading.show({
            text: '请选择支付方式'
          })
          setTimeout(()=>{
            _this.$vux.loading.hide()
          },1000)
          return
        }else if(_this.demo1){
            var Type = 1
        }else if(_demo2){
            var Type = 3
        }
         
        let data = {
            "UserAddressId": 9,
            "CreateOrderDetail": [{
                "ShopSeriesId": 1,  //保洁系列tab切换
                "ShopCartId": [39,40],
                "Remark": ""
                }],
            "Type": 3,
            "token": "071690289151821091qy"
        }
        CreatOrder(data).then(res => {
            let channel=null; 
            let iap ='';
            let sdata = res.Data;
            // 获取支付通道  
            plus.payment.getChannels(function(channels){  
                for (let i in channels) {
                    let channell = channels[i]
                    if (channell.id === 'alipay') { 
                        iap = channell
                    }
                }
                plus.payment.request(iap, sdata,function(result){  
                    plus.nativeUI.alert("支付成功！",function(){  
                        // back();  
                    });  
                },function(error){  
                    plus.nativeUI.alert("支付失败：" + error.code);  
                });      
                
            },function(e){
                alert("获取支付通道失败："+e.message);  
            });       
        })        
    }
  },
  created: function (){
    this.getOrderList()
  }

};
</script>
<style scope>
    /* @import '../static/css/common.css'; */
    .zhifu-icon{
        font-size: .4rem;
    }
    .zhifu-icon img{
        width: .533333rem;
        height: .533333rem;
        margin-right: 10px;
    }
    .order-cell-box .zhifu{
        margin: 0 .266667rem;
        margin-bottom: .266667rem;
    }
    .order-cell-box .zhifu:last-child{
        padding: .266667rem 0;
        border-top: 1px solid #eee;
    }
    .pay-moeny{
        height: 1.2rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        background: #f0eff5;
        box-shadow: 5px 0 10px #afafbc;
        line-height: 1.2rem;
    }
    .pay-moeny .pay-total{
        font-size: .4rem;
        text-align: center;
    }
    .pay-moeny .post-order{
        text-align: center;
        font-size: .48rem;
        color: #fff;
        background: -webkit-linear-gradient(bottom, #2674fb 0%,#33a9fe 100%);
        background: -o-linear-gradient(bottom, #2674fb 0%,#33a9fe 100%);
        background: -ms-linear-gradient(bottom, #2674fb 0%,#33a9fe 100%);
        background: linear-gradient(to top, #2674fb 0%,#33a9fe 100%);
    }
    .chose-address{
        padding: 0 .4rem;
        height: 1.866667rem;
        width: 100%;
        background: #fff;
    }
    .chose-address .local{
        width: .373333rem;
        height: .533333rem;
        flex: .373333rem 0 0;
    }
    .lineBar{
        width: 100%;
        height: .32rem;
        margin-top: -0.8rem;
    }
    .accepter-name, .accepter-tel{
        font-size: .373333rem;
        color: #2b2b2b;
    }
    .accepter-address{
        font-size: .32rem;
        color: #7a7a7a;
    }
    .order{
        width: 100%;
    }
    .order-cell{
        background: #fff;
        padding-top: .266667rem;
        margin-bottom: .266667rem;
    }
    .order-cell-tit{
        font-size: .4rem;
        color: #1a1a1a;
        padding: .4rem .333333rem;
    }
    .order-cell-list{
        padding: .226667rem .333333rem 6px;
        border-bottom: 1px solid #f5f5f5;
    }
    .order-cell-list-img{
        width: 2.133333rem;
        height: 2.133333rem;
        flex: 2.133333rem 0 0;
        overflow: hidden;
    }
    .order-cell-list-txt{
        margin-left: .333333rem;
    }
    .order-cell-list-head{
        font-size: .373333rem;
        color: #2c2c2c;
    }
    .order-cell-list-info{
        font-size: .32rem;
        color: #999;
        text-align: justify;
        margin-top: .266667rem;
        line-height: .426667rem;
    }
    .unitprice{
        color: #f00;
        font-size: .373333rem;
        padding: .266667rem .4rem;
        border-bottom: 1px solid #f5f5f5;
    }
    .unittips{
        padding: .266667rem;
    }
    .unittips .unitarea{
        width: 100%;
        padding-top: .266667rem;
        height: 1.333333rem
    }
    

</style>

