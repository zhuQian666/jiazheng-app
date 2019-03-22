<template>
    <div class="page">
        <div class="home-head">
            <div class="home-top flex flex_sb aic mt2">
                <div class="go-my" @click="goMy">
                    <img src="../../../assets/images/my.png" alt="">
                </div>
                <div class="chsoe-city" @click="gochoseCity">
                    <span class="city-name">{{clickCity}}</span>
                    <x-icon type="ios-arrow-down" class="icon-white" size="10"></x-icon>
                </div>
                <div class="go-overview">
                    <img src="../../../assets/images/overview.png" alt="" @click="goOrder">
                </div>
            </div>
            <!-- 头部导航 -->
            <div class="home-tit flex flex_sa aif">
                <div v-for="(item, index) in headitem" :key="index" @click="tab(index,item.Id, item.Name)" class="home-head-item flex flex_sb aic flex_column" :class="{active:index == num}">
                    <div class="home-head-item-img">
                        <img v-bind:src="item.Img" alt="">
                    </div>
                    <p class="tc color9 ">{{item.Name}}</p>
                </div>
            </div>
        </div>
        <div class="home-body">
           
            

            <div class="noserver" v-if="ishasServer">
                <div class="noserver-img">
                    <img src="../../../assets/images/no-server.png" alt="">
                </div>
                <p class="tc color9 fs32">地区未开放，敬请期待</p>
            </div>
            <template v-else>
                <baidu-map class="map bm-view" :center="clickCity" @ready="handler" ak="z5tYi3doukTrHxSlaWOHcM5cFuzXkpy2"> 
                    <bm-marker :position="autoLocationPoint" :icon="{url: require('../../../assets/images/local.png'), size: {width: 27, height: 38}}">
                    </bm-marker>
                </baidu-map>
            </template>
            <div  v-if="!ishasServer" class="chose-server" @click="goshop">选择服务 <span class="pointt"></span></div>
            
        </div>
    </div>
    <!-- <tab>
        <tab-item @on-item-click="handler"></tab-item>
    </tab> -->
</template>

<script>
import { Tab, TabItem } from 'vux';
import myHd from "../header"
import BaiduMap from 'vue-baidu-map/components/map/Map.vue';
import bmMarker from 'vue-baidu-map/components/overlays/marker.vue';
import bmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue';
// import BaiduMap from 'vue-baidu-map';
import { GetCommoditySeries } from "../../../axios/api.js";
export default {
    components: {
        BaiduMap,
        myHd,
        bmMarker,
        bmGeolocation
    },
    data() {
        return {
            clickCity: '合肥市',
            headitem: null,
            ishasServer: true,
            center: {lng: 0, lat: 0},
            initLocation: false,
            num: 0, //tab切换序号
            tit:"首页",
            titOther:"管理",
            autoLocationPoint:{},
            tabId :'1',
            tabName :''
        }
    },
    methods: {
        showtitle(){
            let name = this.$route.query.city || this.clickCity;
            let data = {name}
            GetCommoditySeries(data).then(res=>{
                this.headitem  = res.Data
                if(res.Data && res.Data.length>0){
                    this.ishasServer = false
                }else{
                    this.ishasServer = true
                }
            })
        },
        goMy(){
          this.$router.push({
              path:'/My'
          }) 
        },
         goOrder(){
          this.$router.push({
              path:'/Myorder'
          }) 
        },
        //tab切换
        tab(index, id, name){
            this.num = index;
            this.tabId = id;
            this.tabName = name;
        },
        //跳转到购物页面
        goshop(){
            let s = this.num + 1;
            this.$router.push({
                path: "/Index",
                query:{
                    id: this.tabId,
                    name: this.tabName
                }
            });
        },
        gochoseCity(){
            this.showtitle();
            this.$router.push({
                path: "/local",
                query:{clickCity:this.clickCity}
            });
        },
        handler ({BMap, map}) {      
            let _this = this;  // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                console.log(r)
                if(_this.$route.query.city ===_this.clickCity){
                    _this.clickCity = r.address.city;
                }
                _this.center = {lng: r.longitude, lat: r.latitude};   // 设置center属性值
                _this.$set(_this,'autoLocationPoint',{lng: r.longitude, lat: r.latitude});
                _this.initLocation = true; 
                console.log(_this.autoLocationPoint);  // 如果这里直接使用this是不行的
            },{enableHighAccuracy: true})

             
        },
    },
    created:function() {
        this.showtitle();
        if(this.$route.query.city){
           this.clickCity = this.$route.query.city;
        }
    }

}

</script>
<style scope>
    .page{
        margin-top: 0
    }
    .chose-server{
        position: fixed;
        width: 6rem;
        height: 1.2rem;
        bottom: 2.266667rem;
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
        left: 50%;
        margin-left: -3rem;
    }
    .chose-server .pointt{
        position: absolute;
        right: 1.2rem;
        top: .16rem;
        display: block;
        width: .72rem;
        height: .853333rem;
        background: url(../../../assets/images/point.png) no-repeat center center;
        background-size: .4rem .533333rem;
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
        height: 35%;
        width: 100%;
        padding: 0 .266667rem;
    }
    .home-top img{
        vertical-align: top
    }
    .home-tit{
        height: 63%;
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
        margin-top: .48rem
    }
    .home-tit .home-head-item-img:nth-of-type(2){
        width: .666667rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
        margin-top: .48rem
    }
    .home-tit .home-head-item-img:nth-of-type(3){
        width: .48rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
        margin-top: .48rem
    }
    .home-tit .home-head-item-img:nth-of-type(4){
        width: .666667rem;
        height: .666667rem;
        display: block;
        margin: 0 auto;
        margin-top: .48rem
    }
    .home-tit .home-head-item p{
        color: #fffafa;
        font-size: .32rem; 
        padding-bottom: 5px;
        margin-top: .4rem;
    }
    .home-tit .home-head-item{
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: transparent;
        width: 20%;
        /* padding-bottom: 20px; */
    }
    .home-tit .home-head-item.active{
        border-bottom-color: #FFF;
    }
    .noserver-img{
        width: 4.16rem;
        height: 4.8rem;
        display: block;
        margin: 1.76rem auto .866667rem;
    }
</style>
