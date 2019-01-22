<template>
    <div class="page">
        <div class="home-head">
            <div class="home-top flex flex_sb aic mt2">
                <div class="go-my">
                    <img src="../../assets/images/my.png" alt="">
                </div>
                <div class="chsoe-city">
                    <span class="city-name">{{clickCity}}</span>
                    <x-icon type="ios-arrow-down" class="icon-white" size="10"></x-icon>
                </div>
                <div class="go-overview">
                    <img src="../../assets/images/overview.png" alt="">
                </div>
            </div>
            <div class="home-tit flex flex_sa aic">
                <div class="home-head-item" v-for="(item, index) in headitem" :key="index">
                    <div class="home-head-item-img">
                        <img v-bind:src="item.images" alt="">
                    </div>
                    <p class="tc color9 ">{{item.text}}</p>
                </div>
            </div>
        </div>
        <div class="home-body">
            <!-- <template>
                <baidu-map class="map" center="北京" :zoom="zoom" @ready="handler">
                    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
                </baidu-map>
            </template> -->
            <template>
                <baidu-map class="map bm-view" @ready="handler" ak="z5tYi3doukTrHxSlaWOHcM5cFuzXkpy2">
                    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"
                    :locationIcon="{url: require('../../assets/images/local.png'), size: {width: 27, height: 38}}" >
                    </bm-geolocation>
                    <!-- 自定义定位图标覆盖物 -->
                    <bm-marker :position="autoLocationPoint" :icon="{url: require('../../assets/images/local.png'), size: {width: 27, height: 38}}" v-if="initLocation">
                    </bm-marker>
                </baidu-map>
            </template>
            <div class="chose-server">选择服务</div>

            <div class="noserver" v-if="ishasServer">
                <div class="noserver-img">
                    <img src="../../assets/images/no-server.png" alt="">
                </div>
                <p class="tc color9 fs32">地区未开放，敬请期待</p>
            </div>
            
        </div>
    </div>
    <!-- <tab>
        <tab-item @on-item-click="handler"></tab-item>
    </tab> -->
</template>

<script>
// import { Tab, TabItem } from 'vux';
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
    data() {
        return {
            msg: "Hello World!",
            clickCity: '北京市',
            headitem: [{
                images: require('../../assets/images/clear-keeping.png'),
                text: "保洁"
            },{
                images: require("../../assets/images/alarm-keeping.png"),  
                text: "小时工"
            },{
                images: require("../../assets/images/lock-keeping.png"),
                text: "开锁"
            },{
                images: require("../../assets/images/maintain-keeping.png"),
                text: "维修"
            }],
            ishasServer: false,
            center: {lng: 0, lat: 0},
            initLocation: false,
        };
    },
    components: {
        BaiduMap
    },
    methods: {
        handler ({BMap, map}) {
            let _this = this;  // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                console.log(r);
                _this.clickCity = r.address.city;
                _this.center = {lng: r.longitude, lat: r.latitude};   // 设置center属性值
                _this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};   // 自定义覆盖物
                _this.initLocation = true; 
                console.log('center:', _this.center)  // 如果这里直接使用this是不行的
            },{enableHighAccuracy: true})
        },
        // getLoctionSuccess(){
        //     this.clickCity = 
        // }
    }

}
</script>
<style scope>
    .chose-server{
        position: fixed;
        width: 6rem;
        height: 1.2rem;
        bottom: 2.266667rem;
        left: 2rem;
        background: -moz-linear-gradient(left, #34acff 0%, #142af5 100%);
        background: -webkit-linear-gradient(left, #34acff 0%,#142af5 100%);
        background: -o-linear-gradient(left, #34acff 0%,#142af5 100%);
        background: -ms-linear-gradient(left, #34acff 0%,#142af5 100%);
        background: linear-gradient(to right, #34acff 0%,#142af5 100%);
        border-radius: 1.2rem;
        color: #fff;
        font-size: .48rem;
        text-align: center;
        line-height: 1.2rem;
        cursor: pointer;
    }
    .home-body{
        height: 80vh;
    }
    .map {
        width: 100%;
        height: 100%;
    }
    .anchorBL{
        display: none;
    }
    .home-head{
        width: 100%;
        height: 20vh;
        background: -webkit-linear-gradient(bottom, #224df9 0%,#3485ff 100%);
        background: -o-linear-gradient(bottom, #224df9 0%,#3485ff 100%);
        background: -ms-linear-gradient(bottom, #224df9 0%,#3485ff 100%);
        background: linear-gradient(to top, #224df9 0%,#3485ff 100%);
    }
    .icon-white{
        fill: #fff
    }
    .city-name{
        font-size: .48rem;
        color: #fff;
    }
    .home-top{
        height: 1.333333rem;
        width: 100%;
        padding: 0 .266667rem;
    }
    .home-top img{
        vertical-align: top
    }
    .home-tit{
        height: 2rem;
        width: 100%;

    }
    .go-my, .go-overview{
        width: .586667rem;
        height: .586667rem;
        overflow: hidden;
        margin-top: 10px;
    }
    .home-tit .home-head-item-img:nth-of-type(1){
        width: .586667rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
    }
    .home-tit .home-head-item-img:nth-of-type(2){
        width: .666667rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
    }
    .home-tit .home-head-item-img:nth-of-type(3){
        width: .48rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
    }
    .home-tit .home-head-item-img:nth-of-type(4){
        width: .666667rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
    }
    .home-tit .home-head-item p{
        color: #fffafa;
        font-size: .32rem;
        margin-top: .4rem;
    }
    .noserver-img{
        width: 4.16rem;
        height: 4.8rem;
        display: block;
        margin: 1.76rem auto .866667rem;
    }
</style>
