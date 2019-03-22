<template>
    <div class="page">
        <myHd :tit="tit"></myHd>
        <!-- 选择地址 -->
        <div class="chose-address flex aic flex_sb" @click="chouseAddress">
            <div class="flex aic ml15">
                <img class="local" src="../../../assets/images/local.png" alt="">
                <div class="fs28 color3 ml15" v-if="haslocal">请选择服务地址</div>
                <div class="accepter ml20" :id="UserAddress.Id" v-else>
                    <div class="flex flex_left"><span class="accepter-name">{{UserAddress.Contacts}}</span><span class="accepter-tel ml30">{{UserAddress.ContactsTel}}</span></div>
                    <div class="accepter-address">{{UserAddress.Detail}}</div>
                </div>
            </div>
            <x-icon type="ios-arrow-right" size="20"></x-icon>
        </div>
        <div class="lineBar"><img src="../../../assets/images/lineBar.png" alt></div>
        <div class="linebars"></div>
        <!-- 订单 -->
        <div class="order">
            <!-- 一个服务 -->
            <div class="order-cell" v-for="(item, index) in serverKind" :key="index" :CommoditySeriesId = "item.CommoditySeriesId">
                <div class="order-cell-tit">{{item.TypeName}}</div>
                <div class="order-cell-box">
                    <!-- 单个订单 -->
                    <div class="order-cell-list flex flex_sb ait" v-for="sitem in item.Detail" :id="sitem.Id">
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
                        <textarea class="unitarea" @change="advice" :sid="item.CommoditySeriesId" cols="30" rows="10" placeholder="请填写您需要留言的内容,请填写您需要留言的内容请填写您需要留言的内容请填写您需要留言的内容"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-cell">
            <div class="order-cell-tit">支付方式</div>
            <div class="order-cell-box">
                <div class="flex flex_sb aic zhifu" @click="clickradio">
                    <label for="radioone" class="zhifu-icon fg1">
                        <img src="../../../assets/images/weixin.png" alt="">
                        微信支付
                    </label>
                    <div>
                        <input id="radioone" type="radio" name="pay" value="1">
                        <!-- <check-icon @click="clickradio" id="radioone" :value.sync="demo1"></check-icon> -->
                    </div>
                </div>
                <div class="flex flex_sb aic zhifu" @click="clickradio">
                    <label for="radiotwo" class="zhifu-icon fg1">
                        <img src="../../../assets/images/zhifubao.png" alt="">
                        支付宝支付</label>
                    </label>
                    <div>
                        <input id="radiotwo" type="radio" name="pay" checked value="3">
                        <!-- <check-icon @click="clickradio" id="radiotwo" :value="!demo1"></check-icon> -->
                    </div>
                </div>
            </div>
        </div>
    <!-- 提交订单 -->
        <div class="pay-moeny flex flex_sb aif">
            <div class="pay-total fg1 red tl">
                合计：<span class="ml2">￥{{paytotal}}</span>
            </div>
            <div class="post-order fg1" @click="postOrder">提交订单</div>
        </div>
    </div>
</template>
<script>
import { postOrderList, CreatOrder, UserAddress } from "../../../axios/api.js";
import myHd from "../header.vue";
import { ColorPicker, Group, Cell, CheckIcon } from 'vux';
export default {
 components: {
    ColorPicker,
    Group,
    Cell,
    CheckIcon,
    myHd
  },
  data() {
    return {
      tit: '确认订单',
      demo1: true,
      demo2: false,
      haslocal: false,      //是否显示收货人
      acceptername: 'qinhuansky',   //收货人姓名
      accepttel: '111111',          //收货人手机号
      accepteraddress: '安徽身合肥市',  //收货人地址
      paytotal: 0,                    //总金额
      serverKind: null,                 //服务类型
      UserAddress: null,
      paytype: '3',
    };
  },
  methods: {
    //   获取订单列表
      getOrderList(){
        let caridstr = this.$route.query.carid.toString();
        let ShopCartIds = caridstr.slice(0,caridstr.length-1);
        // 购物车id，跳过来时弹出框里的id
        let data = {ShopCartIds, token: localStorage.getItem('STORAGE_TOKEN')}
        postOrderList(data).then(res => {
            let paytoaltemple = 0;
            console.log(res);
            this.serverKind = res.Data.List;
            if(res.Data.List.length>0){
                if(this.$route.query.ids){
                    let datas = { "Token": localStorage.getItem('STORAGE_TOKEN') }
                    UserAddress(datas).then(resa =>{
                        resa.Data.forEach(ele =>{
                            if(this.$route.query.ids === ele.Id){
                                ele.Detail = ele.AddressDetail
                                this.UserAddress = ele;
                                return
                            }
                        })
                        
                    })
                }else{
                    this.UserAddress = res.Data.UserAddress;
                }
                this.haslocal = false;
            }else{
                this.haslocal = true;
            }
            
            for(let i=0; i<res.Data.List.length; i++){
                paytoaltemple += res.Data.List[i].Amount;
            }
            this.paytotal = paytoaltemple;
        })
        
        
      },
    chouseAddress(){
        let carid = this.$route.query.carid
        if(!this.haslocal){
            this.$router.push({
                path:'/choseAddress',
                query: {
                    carid
                }
            })
        }else{
            this.$router.push({
                path:'/editAddress',
                query: {
                    id: 0,
                    carid
                }
            })
        }
        
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
        this.paytype = this.getRadioValue("pay");
        console.log(this.paytype)    
    },
    // 服务备注
    advice(e){
        console.log(e.target.value)
        this.serverKind.forEach(ele =>{
            if(ele.CommoditySeriesId === e.target.attributes.sid){
                ele.Remark = e.target.value || null
            }
        })
    },
    getRadioValue(radioName){
        let radios = document.getElementsByName(radioName);
        let value;
        for(let i=0;i<radios.length;i++){
            if(radios[i].checked){
                value = radios[i].value;
                break;
            }
        }
        return value;
    },

    //   创建订单
    postOrder(){
        let _this = this;
        var pays = {};
        if(!this.paytype){
         this.$vux.loading.show({
            text: '请选择支付方式'
          })
          setTimeout(()=>{
            _this.$vux.loading.hide()
          },1000)
          return
        }
        let data = {};
        let arr = new Array();
        data.UserAddressId = this.UserAddress.Id;
        data.CreateOrderDetail = arr;
        data.Type = this.paytype;
        data.token = localStorage.getItem('STORAGE_TOKEN');
        for(let i=0; i<_this.serverKind.length; i++){
            let obj = {};
            let sarr = [];
            arr.push(obj);
            obj.ShopCartId = sarr
            obj.ShopSeriesId = _this.serverKind[i].CommoditySeriesId;
            for(let j=0; j<_this.serverKind[i].Detail.length; j++){
                sarr.push(_this.serverKind[i].Detail[j].Id)
            }
            obj.Remark = _this.serverKind[i].Remark || null;
        }
        console.log('订单参数');
        console.log(JSON.stringify(data))
        CreatOrder(data).then(res => {
            console.log(JSON.stringify(res))
            let channel=null; 
            let iap ='';
            let sdata = res.Data;
            // 获取支付通道  
            plus.payment.getChannels(function(channels){  
                for (let i in channels) {
                    let channell = channels[i];
                    if(_this.paytype === '1'){
                        if (channell.id === 'wxpay') { 
                            iap = channell
                        }
                    }else if(_this.paytype === '3'){
                        if (channell.id === 'alipay') { 
                            iap = channell
                        }
                    }
                    
                }
                console.log('请求参数：');
                console.log(JSON.stringify(iap));
                console.log(JSON.stringify(sdata))
                plus.payment.request(iap, sdata,function(result){  
                    console.log('支付返回');
                    console.log(JSON.stringify(result))
                    plus.nativeUI.alert("支付成功！",function(){  
                        // back();  
                    });  
                },function(error){  
                    console.log('失败');
                    console.log(JSON.stringify(error))
                    plus.nativeUI.alert("支付失败！", function(){
                        _this.$router.push({
                            path:'/Myorder'
                        }) 
                    }); 
                });      
                
            },function(e){
                alert("获取支付通道失败："+e.message);  
            });       
        })        
    }
  },
  created: function (){
    console.log(this.$route.query.carid)
    this.getOrderList()
  }

};
</script>
<style scope>
    /* @import '../static/css/common.css'; */
    .zhifu-icon{
        font-size: .4rem;
    }
    .page{
        padding-bottom: 2.666667rem;
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
        text-align: left;
        padding-left: 10px;
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
        padding: 0 .2rem;
        height: 1.866667rem;
        width: 100%;
        background: #fff;
    }
    .chose-address .local{
        width: .373333rem;
        height: .533333rem;
        flex: .373333rem 0 0;
    }
    .lineBar {
        width: 100%;
        height: 6px;
        position: relative;
    }
    .lineBar>img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0
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
    input[type=radio]{
        position: relative;
        
    }
    input[type=radio]::after{
        position: absolute;
        content: '';
        display:block;
        width: .666667rem;
        height: .666667rem;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #ccc;
        top: -2px;
        left: -0.266667rem;
        background-color: #fff;
        z-index: 9;
    }
    input[type=radio]:checked:after{
        background-color: #fff;
        background: url(../../../assets/images/checed.png) no-repeat center center;
        background-size: 100% 100%
    }

    

</style>

