<template>
  <div class="page">
    <div class="index-tip flex aic">
      <div class="index-tip-img">
        <img src="../../assets/images/index-top.jpg" alt>
      </div>
      <div class="ml20">
        <h4 class="fs30">保洁服务</h4>
        <p class="line15 fs24 tj color6">日常家庭住宅室内保洁。为了保证服务的质量，本服务不适用于办公室、群租房、集体宿舍等类型的房间保洁。</p>
      </div>
    </div>
    <!-- 切换 -->
    <div class="index-title flex flex_sa aic">
      <div class="index-title-cell">家庭保洁</div>
      <div class="index-title-cell">家电保洁</div>
      <div class="index-title-cell">企业保洁</div>
      <div class="index-title-cell">家电清洁</div>
    </div>
    <div class="index-body flex flex_sb flex_wrap">
      <div class="index-body-cell">
        <div class="index-body-img">
          <img src="../../assets/images/demo.jpg" alt>
        </div>
        <div class="index-body-content">
          <h3 class="color3 fs30 ellipsis">油烟机清洁</h3>
          <p class="color6 fs24 ellipsis">清洗擦拭除胶除漆重点清洁</p>
          <div class="flex flex_sb aic mt20">
            <div class="select-mum">
              <span class="red fs24">￥118元/台</span>
            </div>
            <div class="cheose-mum flex flex_sb aic">
              <span class="addmum">-</span>
              <input type="tel" value="10">
              <span class="mum">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="index-body-cell">
        <div class="index-body-img">
          <img src="../../assets/images/demo.jpg" alt>
        </div>
        <div class="index-body-content">
          <h3 class="color3 fs30 ellipsis">油烟机清洁</h3>
          <p class="color6 fs24 ellipsis">清洗擦拭除胶除漆重点清洁</p>
          <div class="flex flex_sb aic mt20">
            <div class="select-mum">
              <span class="red fs24">￥118元/台</span>
            </div>
            <div class="cheose-mum flex flex_sb aic">
              <span class="addmum">-</span>
              <input type="tel" value="10">
              <span class="mum">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="index-body-cell">
        <div class="index-body-img">
          <img src="../../assets/images/demo.jpg" alt>
        </div>
        <div class="index-body-content">
          <h3 class="color3 fs30 ellipsis">油烟机清洁</h3>
          <p class="color6 fs24 ellipsis">清洗擦拭除胶除漆重点清洁</p>
          <div class="flex flex_sb aic mt20">
            <div class="select-mum">
              <span class="red fs24">￥118元/台</span>
            </div>
            <div class="cheose-mum flex flex_sb aic">
              <span class="addmum">-</span>
              <input type="tel" value="10">
              <span class="mum">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-foot flex flex_sb">
      <div class="flex flex_sa fg1">
        <div class="index-home">
          <span></span>
          <p class="home fs24 tc">首页</p>
        </div>
        <div class="index-server">
          <span></span>
          <p class="home fs24 tc">客服</p>
        </div>
      </div>
      <div class="addcar tc fg1">加入购物车</div>
    </div>
    <!-- 底部弹出层 -->
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <div class="bottom-popups">
            <div class="bottom-popups-item flex flex_sb">
              <span class="bottom-popups-item-tit">合计:</span>
              <span class="bottom-popups-mum">￥2020.00</span>
              <div class="cheose-num" style="width:10px"></div>
            </div>
            <div class="hr"></div>
            <div class="bottom-popups-item flex flex_sb">
              <span class="bottom-popups-item-tit">双开门冰箱清洗</span>
              <span class="bottom-popups-mum">￥2020.00</span>
              <div class="cheose-num">
                <x-number
                  v-model="roundValue"
                  button-style="round"
                  :min="0"
                  :max="10"
                ></x-number>
              </div>

                
            </div>
            <div class="hr"></div>
            <div class="bottom-popupo-item">
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
            <img src="../../assets/images/index-zindex.png" alt>
          </div>
          <div style="background:#fff; padding:20px 15px">
            <p class="fs32 color9 tc mt30">请先完成实名认证流程哦！</p>
            <div class="flex flex_sb">
              <div class="no-got-real-name">
                <x-button type="primary">暂不认证</x-button>
              </div>
              <div class="nowget-got-real-name">
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
    <div @click="aaa">dddd</div>
  </div>
</template>


<script>
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
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      showHideOnBlur: false,
      show: true,
      msg: "Hello World!"
    };
  },
  components: {
    Alert,
    Popup,
    Divider,
    XDialog,
    XButton,
    Group,
    XNumber
  },
  methods: {
    bottomPopups() {
      this.$vux.alert.show({
        title: "温馨提示",
        content: "此桌已被预定！",
        buttonText: "好的",
        hideOnBlur: true,
        maskZIndex: 100
      });
    },
    aaa() {
      this.$router.push({
        path: "/postOrder"
      });
    }
  },
  created() {}
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
.index-home p,
.index-server p {
  margin-top: -0.266667rem;
}
.index-home span {
  display: inline-block;
  width: 0.586667rem;
  height: 0.586667rem;
  border-radius: 50%;
  background: url("../../assets/images/home.png") no-repeat center center;
  background-size: 100% 100%;
}
.index-server span {
  display: inline-block;
  width: 0.586667rem;
  height: 0.586667rem;
  border-radius: 50%;
  background: url("../../assets/images/line-server.png") no-repeat center center;
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
  padding: 0.233333rem 0.533333rem;
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
.vux-number-round .vux-number-selector-sub, .vux-number-round .vux-number-selector-plus{
  padding: 0!important;
  background: #4478fd!important;
  border-color: #2674fb!important;
}
.vux-number-selector svg{
  fill: #fff!important;
  font-size: 10px;
}
.vux-number-selector{
  height: .666667rem!important;
  width: .666667rem!important;
}
.weui-cell{
  padding: 0!important;
}
</style>
