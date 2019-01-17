<template>
    <div class="page">
        <!-- 订单详情状态 -->
        <div class="detail-header flex flex_sb aic" v-if="item.status" v-for="(item, index) in detailStatus" :key="index">
            <div class="detail-status-img" >
                <img v-bind:src="item.images" alt="">
            </div>
            <div class="detail-status-time">{{item.time}} 内上门服务</div>
            <div class="detail-status-name">{{item.name}}</div>
        </div>
        <!-- 选择地址 -->
        <div class="chose-address flex aic flex_sb">
            <div class="flex aic ml15">
                <img class="local" src="../../assets/images/local.png" alt="">
                <div class="fs28 color3 ml15" v-if="haslocal">请选择服务地址</div>
                <div class="accepter ml20" v-else>
                    <div class="flex flex_left"><span class="accepter-name">{{acceptername}}</span><span class="accepter-tel ml30">{{accepttel}}</span></div>
                    <div class="accepter-address">{{accepteraddress}}</div>
                </div>
            </div>
            <x-icon type="ios-arrow-right" size="20"></x-icon>
        </div>
        <img class="lineBar" src="../../assets/images/lineBar.jpg" alt="">
        <!-- 订单 -->
        <div class="order">
            <!-- 一个服务 -->
            <div class="order-cell">
                <div class="order-cell-tit">保洁服务</div>
                <div class="order-cell-box">
                    <!-- 单个订单 -->
                    <div class="order-cell-list flex flex_sb aic">
                        <div class="order-cell-list-img fg1">
                            <img src="../../assets/images/serverDemo.jpg" alt="">
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
                        <textarea class="unitarea" name="" id="" cols="30" rows="10" placeholder="请填写您需要留言的内容,请填写您需要留言的内容请填写您需要留言的内容请填写您需要留言的内容"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <!-- 待服务，显示订单编号 -->
        <div class="order-number">
            <div class="order-number-list flex flex_sb aic" v-if="item.status" v-for="(item, index) in orderNumber" :key="index">
                <span>{{item.listName}}</span><span>{{item.listValue}}</span>
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
            <div class="tell-server">评价服务</div>
            <!-- 服务中 -->
            <div class="tell-server">延长服务</div>
            <div class="tell-server">验收服务</div>
            <!-- 已退款 -->
            
            <div class="tell-server">联系客服</div>
            <!-- 已完成 -->
            <div class="tell-server">再来一单</div>
            <div class="tell-server">已评价</div>
        </div>

        
        
    </div>
   
</template>
<script>
export default {
  data() {
    return {
      haslocal: false,      //是否显示收货人
      acceptername: 'qinhuansky',   //收货人姓名
      accepttel: '111111',          //收货人手机号
      accepteraddress: '安徽身合肥市',  //收货人地址
      paytotal: 170,                     //总金额
      orderNumber: [{
          listName: '订单编号',
          listValue: '123123123123123',
          status: true,
      },{
          listName: '创建时间',
          listValue: '2018.10.11 12:00',
          status: true,
      },{
          listName: '支付时间',
          listValue: '2018.10.11 12:00',
          status: false,
      },{
          listName: '支付方式',
          listValue: '微信支付',
          status: false,
      },{
          listName: '退款时间',
          listValue: '2018.10.11 12:00',
          status: false,
      },{
          listName: '接单时间',
          listValue: '2018.10.11 12:00',
          status: false,
      },{
          listName: '退款时间',
          listValue: '2018.10.11 12:00',
          status: false,
      },{
          listName: '验收时间',
          listValue: '2018.10.11 12:00',
          status: false,
      }],
      detailStatus:[{
            images: require('../../assets/images/wait-server.png'),
            time: '23:59:59',
            name: "待服务",
            status: true
        },{
            images: require('../../assets/images/wait-pay.png'),
            name: "待付款",
            time: '',
            status: false
        },{
            images: require('../../assets/images/wait-order.png'),
            name: "待接单",
            time: '',
            status: false
        },{
            images: require('../../assets/images/wait-comment.png'),
            name: "待评价",
            time: '',
            status: false
        },{
            images: require('../../assets/images/servering.png'),
            name: "服务中",
            time: '',
            status: false
        },{
            images: require('../../assets/images/refunded.png'),
            name: "已退款",
            time: '',
            status: false
        },{
            images: require('../../assets/images/order-complete.png'),
            name: "已完成",
            time: '',
            status: false
        }]
    
    
    };
  },

};
</script>
<style scope>
    /* @import '../static/css/common.css'; */
    .detail-header{
        height: 1.026667rem;
        width: 100%;
        padding: 0 .266667rem;
        background: #fff;
        border-bottom: 1px solid #f5f5f5;
    }
    .detail-header .detail-status-img{
        width: .586667rem;
        height: .586667rem;
        vertical-align: middle;
    }
    .detail-header .detail-status-img>img{
        display: block;
    }
    .detail-header .detail-status-name{
        color: #191919;
        font-size: .32rem;
    }
    .order-number{
        background: #fff;
        width: 100%;
        padding: .133333rem .266667rem;
        border-bottom: 1px solid #f7f7f7;
    }
    .order-number .order-number-list{
        height: .586667rem;
        width: 100%;
        font-size: .32rem;
        color: #999;
    }
    .detail-status-time{
        color: #7a7a7a;
        font-size: .32rem;
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
    .tell-server{
        padding: 5px .586667rem;
        background: #34afff;
        color: #fff;
        font-size: .373333rem;
        box-shadow: 5px 5px 5px #eee;
        margin: .333333rem;
        border-radius: .666667rem;
    }
    

</style>

