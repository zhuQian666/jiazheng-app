<template>
  <div class="page">
      <div class="index-tip flex aic">
          <div class="index-tip-img">
            <img src="../../assets/images/index-top.jpg" alt="">
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
              <img src="../../assets/images/demo.jpg" alt="">
            </div>
            <div class="index-body-content">
              <h3 class="color3 fs30 ellipsis">油烟机清洁</h3>
              <p class="color6 fs24 ellipsis">清洗擦拭除胶除漆重点清洁</p>
              <div class="flex flex_sb aic mt20">
                  <div class="select-mum"><span class="red fs24">￥118元/台</span></div>
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
              <img src="../../assets/images/demo.jpg" alt="">
            </div>
            <div class="index-body-content">
              <h3 class="color3 fs30 ellipsis">油烟机清洁</h3>
              <p class="color6 fs24 ellipsis">清洗擦拭除胶除漆重点清洁</p>
              <div class="flex flex_sb aic mt20">
                  <div class="select-mum"><span class="red fs24">￥118元/台</span></div>
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
              <img src="../../assets/images/demo.jpg" alt="">
            </div>
            <div class="index-body-content">
              <h3 class="color3 fs30 ellipsis">油烟机清洁</h3>
              <p class="color6 fs24 ellipsis">清洗擦拭除胶除漆重点清洁</p>
              <div class="flex flex_sb aic mt20">
                  <div class="select-mum"><span class="red fs24">￥118元/台</span></div>
                  <div class="cheose-mum flex flex_sb aic">
                    <span class="addmum">-</span>
                    <input type="tel" value="10">
                    <span class="mum">+</span>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <!-- <div class="index-foot flex flex_sb">
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
        <div class="addcar tc fg1">
          加入购物车
        </div>
      </div> -->
      <!-- 底部弹出层 -->
      <!-- <div class="bottom-popups">
          <div class="bottom-popups-item flex flex_sb">
            <span class="bottom-popups-item-tit">合计: </span><span class="bottom-popups-mum">￥2020.00</span>
            <div class="cheose-mum flex flex_sb aic index-right"></div>
          </div>
          <div style="hr"></div>
          <div class="bottom-popups-item flex flex_sb">
            <span class="bottom-popups-item-tit">合计: </span>
            <span class="bottom-popups-mum">￥2020.00</span>
            <div class="cheose-mum flex flex_sb aic index-right">
              <span class="addmum">-</span>
              <input type="tel" value="10">
              <span class="mum">+</span>
            </div>
          </div>
          <div style="hr"></div>
          <div class="bottom-popupo-item">
            <button class="post-order">立即下单</button>
          </div>
      </div> -->
      <div @click="bottomPopups">dddd</div>
  </div>
</template>


<script>
import { Alert, Popup } from 'vux'
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  components: {
    Alert,
    Popup
  },
  methods: {
    bottomPopups(){
        this.$vux.alert.show({
          title: '温馨提示',
          content: '此桌已被预定！',
          buttonText: '好的',
          hideOnBlur: true,
          maskZIndex: 100
        })
    }
  },
  created() {}
};
</script>

<style scope>
  .hr{width: 100%;height: .133333rem;background: #f0f0f0}
  .page{
    min-height: 100vh;
    background: #f0eff5;
    width: 100%;
  }
  .index-tip{
    padding: .266667rem .2rem;
  }
  .index-tip-img{
    width: 3.466667rem;
    height: 1.6rem;
    flex: 3.466667rem 0 0;
    overflow: hidden;
  }
  .index-title{
    height: 1.2rem;
    width: 100%;
    background: #3498ff;
    box-shadow: 5px 3px 5px #afafbc;
  }
  .index-title .index-title-cell{
    font-size: .32rem;
    color: #fff
  }
  .index-body{
    width: 100%;
    padding: .24rem .266667rem
  }
  .index-body .index-body-cell{
    margin-right: .266667rem;
    width: 48%;
    margin-bottom: .266667rem;
    overflow: hidden;
  }
  .index-body .index-body-cell:nth-of-type(2n){
    margin-right: 0
  }
  .index-body-img{
    width: 100%;
    height: 3.12rem;
    overflow: hidden;
  }
  .index-body-content{
    background: #fff;
  }
  .cheose-mum{
    width: 2rem;
    flex: 2rem 0 0;
  }
  .index-body-content{
    padding: .2rem 5px;
  }
  .cheose-mum span{
    width: .6rem;
    height: .6rem;
    color: #fff;
    background: #5277fb;
    border-radius: 50%;
    overflow: hidden;
    display: block;
    line-height: .48rem;
    text-align: center;
    font-size: .586667rem
  }
  .cheose-mum>input{
    width: .693333rem;
    text-align: center;
  }
  .select-mum{
    font-size: .32rem;
    color: #ff3333;
  }
  .index-foot{
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background: #f0eff5;
    box-shadow: 5px 0 10px #afafbc;
  }
  .index-home p, .index-server p{
    margin-top: -0.266667rem;
  }
  .index-home span{
    display: inline-block;
    width: .586667rem;
    height: .586667rem;
    border-radius: 50%;
    background: url("../../assets/images/home.png") no-repeat center center;
    background-size: 100% 100%;
  }
  .index-server span{
    display: inline-block;
    width: .586667rem;
    height: .586667rem;
    border-radius: 50%;
    background: url("../../assets/images/line-server.png") no-repeat center center;
    background-size: 100% 100%;
  }
  .addcar{
    text-align: center;
    line-height: 1.2rem;
    color: #fff;
    background: -webkit-linear-gradient(bottom, #2674fb 0%,#33a9fe 100%);
    background: -o-linear-gradient(bottom, #2674fb 0%,#33a9fe 100%);
    background: -ms-linear-gradient(bottom, #2674fb 0%,#33a9fe 100%);
    background: linear-gradient(to top, #2674fb 0%,#33a9fe 100%);
    font-size: .48rem;
  }
  .bottom-popups{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
  }
  .index-right{
    flex:2.613333rem 0 0;
  }
  .bottom-popups-item-tit{
    font-size: .48rem;
    color: #999;
  }
  .bottom-popups-mum{
    font-size: .426667rem;
    color: #ff3333;
  }
  .bottom-popups-item{
    padding: .233333rem .533333rem;
  }
</style>
