<template>
    <div class="page">
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

    <!-- 提交订单 -->
        <div class="pay-moeny flex flex_sb aif">
            <div class="pay-total fg1 red">
                合计：<span class="ml2">￥{{paytotal}}</span>
            </div>
            <div class="post-order fg1">提交订单</div>
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
      paytotal: 170                     //总金额
    };
  },

};
</script>
<style scope>
    /* @import '../static/css/common.css'; */
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

