<template>
  <div class="page">
    <myHd :tit="tit"></myHd>
    <div class="index-tip flex aic" v-show="!bottomBol">
      <div class="index-tip-img">
        <img v-bind:src="headtit.Img">
      </div>
      <div class="ml20">
        <h4 class="fs30">{{headtit.Name}}</h4>
        <p class="line15 fs24 tj color6">{{headtit.Content}}</p>
      </div>
    </div>
    <!-- 切换 -->
    <div class="index-title flex flex_sa aic">
      <div class="index-title-cell" v-for="(item, index) in headtit.List" :class="{active:index == num}" @click="tab(index)" :data-id="item.Id">{{item.Name}}</div>
    </div>
    <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit" :down="mescrollDown">
      <div class="index-body flex flex_sb flex_wrap">
        <div class="index-body-cell" v-for="(item, index) in goodsList" :id="item.Id" ref="dataInfo">
          <div class="index-body-img">
            <img v-bind:src="item.Img" alt>
          </div>
          <div class="index-body-content">
            <h3 class="color3 fs30 ellipsis">{{item.Name}}</h3>
            <p class="color6 fs24 ellipsis">{{item.SubTitle}}</p>
            <div class="flex flex_sb aic mt20">
              <div class="select-mum">
                <span class="red fs24">￥{{item.Price}}元/{{item.UnitName}}</span>
              </div>
              <div class="cheose-num">
                <x-number
                  v-model="item.siginValue"
                  button-style="round"
                  :min="0"
                  :max="10"
                  @on-change="siginChange(item.siginValue,item.Id,item.sval)"
                ></x-number>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>
    <div style="height:1.3rem"></div>
    <div class="index-foot flex flex_sb">
      <div class="flex flex_sa fg1">
        <div class="index-home flex flex_column flex_sa" @click="goUrlhome">
          <span></span>
          <p class="home fs24 tc">首页</p>
        </div>
        <div class="index-server flex flex_column flex_sa" @click="tellServer">
          <span></span>
          <p class="home fs24 tc">客服</p>
        </div>
      </div>
      <div class="addcar tc fg1" @click="nowUpost">加入购物车</div>
    </div>
    <!-- 底部弹出层 -->
    <div v-transfer-dom>
      <popup v-model="show">
        <div class="popup0">
          <div class="bottom-popups">
            <div class="bottom-popups-item flex flex_sb">
              <span class="bottom-popups-item-tit">合计:</span>
              <span class="bottom-popups-mum">￥{{totalShopCar}}</span>
              <div class="cheose-num" style="width:10px"></div>
            </div>
            <div class="hr"></div>
            <!-- 购物车列表 -->
            <div class="bottom-popups-item flex flex_sb" v-for="(item, index) in shopCarList" :id="item.Id" :data-CommodityId ="item.CommodityId">
              <span class="bottom-popups-item-tit">{{item.Name}}</span>
              <span class="bottom-popups-mum">￥{{item.Price}}/{{item.UnitName}}</span>
              <div class="cheose-num" style="margin-top:4px">
                <x-number
                  v-model="item.ShopCount"
                  button-style="round"
                  :min="0"
                  :max="99"
                  @on-change="change(item.ShopCount, item.Id, item.CommodityId, item.sval)"
                ></x-number>
              </div>
            </div>
            <div class="hr"></div>
            <div class="bottom-popupo-item" @click="goPostPage">
              <x-button type="primary">立即下单</x-button>
            </div>
          </div>
        </div>
      </popup>
    </div>

    <!-- 提示去实名认证 -->
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="got-real-name">
          <div class="image-box">
            <img src="../../../assets/images/index-zindex.png" alt>
          </div>
          <div style="background:#fff; padding:20px 15px">
            <p class="fs32 color9 tc mt30">请先完成实名认证流程哦！</p>
            <div class="flex flex_sb">
              <div class="no-got-real-name" @click="showHideOnBlur=false">
                <x-button type="primary">暂不认证</x-button>
              </div>
              <div class="nowget-got-real-name" @click="gorealName">
                <x-button type="primary">立即认证</x-button>
              </div>
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
import MescrollVue from "mescroll.js/mescroll.vue";
import myHd from "../header.vue";
import {
  Alert,
  Popup,
  XDialog,
  XButton,
  Group,
  XSwitch,
  TransferDomDirective as TransferDom,
  Divider,
  XNumber
} from "vux";
import {
  getGoodTitle,
  getGoodsList,
  changeGoodsNum,
  getshopCar
} from "../../../axios/api.js";
export default {
  directives: {
    TransferDom
  },
  props: {
    parentPullUpState: {
      default: 0
    },
    onInfiniteLoad: {
      type: Function,
      require: false
    }
  },
  data() {
    return {
      tit:"保洁服务",
      carid: '',    //购物测id集合
      name: "", //功能名称
      bottomBol: false, //是否滚动的底部
      showHideOnBlur: false,
      show: false,
      headtit: null, //头部导航
      roundValue: 0,
      // siginValue: 0,
      goodsList: null, //商品列表
      shopCarList: null, //购物车列表
      totalShopCar: 0, //购物车总价
      num: 0,
      mescrollDown: {
        auto: true
      },
      // 上拉加载的配置.
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认20
        },
        noMoreSize: 5,
        auto: true,
        htmlNodata: '<p class="upwarp-nodata">-- 暂无更多数据 --</p>',
        onScroll: this.scrollHandel
      }
    };
  },
  components: {
    Alert,
    Popup,
    Divider,
    XDialog,
    XButton,
    Group,
    XNumber,
    MescrollVue,
    myHd
  },
  methods: {
    // 返回主页
    goUrlhome() {
      this.$router.push({
        path: "/Home"
      });
    },
    // 立即下单
    goPostPage() {
      this.$router.push({
        path: "/postOrder?carid="+this.carid
      });
    },
    // 拨打客服
    tellServer() {
      this.$router.push({
        path: "/CustomerService"
      });
    },
    //立即跳转实名认证
    gorealName(){
      this.$router.push({
        path: "/Certification"
      });
    },
    // 立即下单
    nowUpost() {
      let _this = this;
      if (_this.headtit.IsReal) {
        //如果认证了
        this.getShopCargoods();
      } else {
        _this.showHideOnBlur = true;
      }
    },

    // 获取购物车列表
    getShopCargoods() {
      let _this = this;
      let tempTotalshop = new Number();
      let carid = '';       //购物车id
      let data = { token: "071690289151821091qy" };
      getshopCar(data).then(res => {
        console.log(res);
        if(res.Data.length>0){
          _this.show = true;
          for (let i = 0; i < res.Data.length; i++) {
            tempTotalshop += res.Data[i].Price * res.Data[i].ShopCount;
            carid += res.Data[i].Id +',';
            res.Data[i].sval = 0;
          }
          _this.totalShopCar = tempTotalshop.toFixed(2);
          _this.shopCarList = res.Data;
          _this.carid = carid;
        }else{
          this.$vux.loading.show({
            text: '尚未选择商品'
          })
          setTimeout(()=>{
            this.$vux.loading.hide()
          },1000)
        }
        
      });
    },

    // 单个订单改变
    siginChange(val,id,sval) {
      let CommodityId = id;
      let Type = "";
      if (val > sval) {
        Type = 1;
      } else {
        Type = 2;
      }
      this.goodsList.map((item)=>{
        if(item.Id === id ){
          item.sval = val
        }
        return this.goodsList
      })
      this.svalNum = val;
      let data = { CommodityId, Type, token: "071690289151821091qy" };
      changeGoodsNum(data).then(res => {
      // this.goodsList
      });
    },


    // //订单总量改变
    change(val, id, CId, sval) {
      let _this = this;
      let initval = 0;
      let Type = "";
      if (val > sval) {
        Type = 1;
      } else {
        Type = 2;
      }
      this.shopCarList.forEach(ele => {
        if(ele.CommodityId == CId){
          ele.ShopCount = val
        }
      })
      this.shopCarList.forEach(ele => {
        initval += ele.ShopCount * ele.Price
      })
      _this.totalShopCar = initval.toFixed(2);
      let data = { CommodityId: id, Type, token: "071690289151821091qy" };
      changeGoodsNum(data).then(res => {
        console.log(res);
      });
      console.log("change", val);
    },
    showtitle() {
      let commoditySeriesId = this.$route.query.id;   //系列id
      let data = { commoditySeriesId, token: "071690289151821091qy" };
      getGoodTitle(data).then(res => {
        console.log(res.Data);
        this.headtit = res.Data;
      });
    },
    // 获取商品列表
    getGoodsLists(sindex) {
      let data = { commodityTypeId: sindex, page: 1, pageSize: 10 };
      getGoodsList(data).then(res => {
        res.Data.forEach(ele => {
        ele.siginValue = 0,
        ele.sval = 0
      });
        this.goodsList = res.Data;
      });
    },

    //tab切换
    tab(index) {
      this.num = index;
      this.goodsList.splice(0, this.goodsList.length);
      this.getGoodsLists(index + 1);
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    //滑动列表
    scrollHandel(mescroll, y, isUp) {
      // let root = document.getElementsByClassName('index-title')[0];
      this.$nextTick(function() {
        if (y > 10) {
          this.bottomBol = true;
          // root.style.cssText="position:fixed;top:0;left:0";
        } else {
          this.bottomBol = false;
          // root.style.cssText="position:relative;top:0;left:0";
        }
      });
    },
    //上拉加载更多
    upCallback(page, mescroll) {
      let data = {
        commodityTypeId: this.num + 1,
        page: page.num,
        pageSize: page.size
      };
      getGoodsList(data)
        .then(response => {
          // 请求的列表数据
          let arr = response.Data;
          // 如果是第一页需手动制空列表
          if (page.num === 1) this.goodsList = [];
          // 把请求到的数据添加到列表
          this.goodsList = this.goodsList.concat(arr);
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
          console.log(res.Data);
        })
        .catch(e => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr();
        });
    }
  },
  created: function() {
    console.log(this.$route.query.id)
    let that = this;
    this.showtitle();
    // 初始化加载第一页数据
    // this.getGoodsLists(that.num + 1)
  }
};
</script>

<style scope>
.hr {
  width: 100%;
  height: 0.133333rem;
  background: #f0f0f0;
}
.page {
  min-height: 100vh;
  background: #f0eff5;
  width: 100%;
}
.index-tip {
  padding: 0.266667rem 0.2rem;
}
.index-tip-img {
  width: 3.466667rem;
  height: 1.6rem;
  flex: 3.466667rem 0 0;
  overflow: hidden;
}
.index-title {
  height: 1.2rem;
  width: 100%;
  background: #3498ff;
  box-shadow: 5px 3px 5px #afafbc;
}
.index-title .index-title-cell {
  font-size: 0.32rem;
  color: #fff;
  position: relative;
}
.index-title .index-title-cell.active::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -10px;
  left: -10%;
  width: 120%;
  height: 2px;
  background: #fff;
}
.index-body {
  width: 100%;
  padding: 0.24rem 0.266667rem;
}
.index-body .index-body-cell {
  margin-right: 0.266667rem;
  width: 48%;
  margin-bottom: 0.266667rem;
  overflow: hidden;
}
.index-body .index-body-cell:nth-of-type(2n) {
  margin-right: 0;
}
.index-body-img {
  width: 100%;
  height: 3.12rem;
  overflow: hidden;
}
.index-body-content {
  background: #fff;
}
.cheose-mum {
  width: 2rem;
  flex: 2rem 0 0;
}
.index-body-content {
  padding: 0.2rem 5px;
}
.cheose-mum span {
  width: 0.6rem;
  height: 0.6rem;
  color: #fff;
  background: #5277fb;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  line-height: 0.48rem;
  text-align: center;
  font-size: 0.586667rem;
}
.cheose-mum > input {
  width: 0.693333rem;
  text-align: center;
}
.select-mum {
  font-size: 0.32rem;
  color: #ff3333;
}
.index-foot {
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 300;
  width: 100%;
  background: #f0eff5;
  box-shadow: 5px 0 10px #afafbc;
}
.index-home span {
  display: inline-block;
  width: 0.586667rem;
  height: 0.586667rem;
  border-radius: 50%;
  background: url("../../../assets/images/home.png") no-repeat center center;
  background-size: 100% 100%;
}
.index-server span {
  display: inline-block;
  width: 0.586667rem;
  height: 0.586667rem;
  border-radius: 50%;
  background: url("../../../assets/images/line-server.png") no-repeat center
    center;
  background-size: 100% 100%;
}
.addcar {
  text-align: center;
  line-height: 1.2rem;
  color: #fff;
  background: -webkit-linear-gradient(bottom, #2674fb 0%, #33a9fe 100%);
  background: -o-linear-gradient(bottom, #2674fb 0%, #33a9fe 100%);
  background: -ms-linear-gradient(bottom, #2674fb 0%, #33a9fe 100%);
  background: linear-gradient(to top, #2674fb 0%, #33a9fe 100%);
  font-size: 0.48rem;
}
.bottom-popups {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;
}
.index-right {
  flex: 2.613333rem 0 0;
}
.bottom-popups-item-tit {
  font-size: 0.48rem;
  color: #999;
}
.bottom-popups-mum {
  font-size: 0.426667rem;
  color: #ff3333;
}
.bottom-popups-item {
  padding: 0.233333rem 0.266667rem;
}
.no-got-real-name,
.nowget-got-real-name {
  width: 45%;
  margin-top: 0.933333rem;
}
.weui-dialog {
  background: transparent !important;
}
.bottom-popupo-item {
  width: 90%;
  margin: 0.266667rem auto;
}
.vux-number-round .vux-number-selector-sub,
.vux-number-round .vux-number-selector-plus {
  padding: 0 !important;
  background: #4478fd !important;
  border-color: #2674fb !important;
  border: none !important;
}
.vux-number-selector svg {
  fill: #fff !important;
  font-size: 10px;
}
.vux-number-selector {
  height: 0.533333rem !important;
  width: 0.533333rem !important;
}
.weui-cell {
  padding: 0 !important;
}
</style>
