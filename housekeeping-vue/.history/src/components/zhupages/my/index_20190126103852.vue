<template>
<div class="index">
<div class="index-top">
<div class="index-top-info">
<div class="index-top-user">
<img :src="userInfo.Img?userInfo.Img:imgUrl" alt class="index-top-user-icon">
</div>
</div>
<div class="index-top-user-name">{{userInfo.Name?userInfo.Name:'张三'}}</div>
<div class="index-top-user-phone">{{userInfo.Tel}}</div>
</div>
<div class="info">
<group>
<cell is-link :value="userInfo.sReal?'已认证':'未认证'" @click.native="handelFn(1)">
<span slot="title">
<img src="../../../assets/images/003.png" alt class="info-icon">
<span class="info-tit">实名认证</span>
</span>
</cell>
<cell is-link @click.native="handelFn(2)">
<span slot="title">
<img src="../../../assets/images/004.png" alt class="info-icon">
<span class="info-tit">地址管理</span>
</span>
</cell>
<cell is-link @click.native="handelFn(3)">
<span slot="title">
<img src="../../../assets/images/005.png" alt class="info-icon">
<span class="info-tit">争议处理</span>
</span>
</cell>
<cell is-link @click.native="handelFn(4)">
<span slot="title">
<img src="../../../assets/images/006.png" alt class="info-icon">
<span class="info-tit">关于我们</span>
</span>
</cell>
<cell is-link @click.native="handelFn(5)">
<span slot="title">
<img src="../../../assets/images/007.png" alt class="info-icon">
<span class="info-tit">客服中心</span>
</span>
</cell>
</group>
</div>
<div class="login_btn" @click="signOut">退出登陆</div>
</div>
</template>
<script>
import { Cell, Group } from "vux";
import { GetUserInfo } from "../../../axios/api.js";
export default {
data() {
  return {
    userInfo:{},//用户信息
    imgUrl:require('../../../assets/images/0014.png')
  };
},
created() {
  let data = {
  token:localStorage.getItem('STORAGE_TOKEN')
  }
  GetUserInfo(data).then(res=>{
  this.userInfo = res.Data;
  })
},
methods: {
  // 点击事件
  handelFn(type){
  // 地址管理
  switch(type){
    case 2:
    this.$router.push({
      path:'/choseAddress'
    }) 
    break;
    case 4:
    this.$router.push({
      path:'/AboutUs'
    }) 
    break;

  }
},
// 退出登录
signOut(){
  localStorage.removeItem('STORAGE_TOKEN');
  this.$router.push({
  path:'/Login'
  })
  }
},
components: {
  Cell,
  Group
}
};
</script>
<style scoped>
.index {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  }
.index-top {
  width: 100%;
  height: 5.95rem;
  background: url("../../../assets/images/my_bg.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  }
.index-top-info {
  width: 100%;
  padding-top: 0.8rem;
  display: flex;
  justify-content: center;
  }
.index-top-user {
  width: 2.19rem;
  height: 2.19rem;
  overflow: hidden;
  border-radius: 50%;
  }
.index-top-user-icon {
  width: 100%;
  height: 100%;
  }
.index-top-user-name {
  width: 100%;
  text-align: center;
  font-size: 0.37rem;
  color: #fff;
  margin: 0.48rem 0 0.37rem;
  }
.index-top-user-phone {
  width: 100%;
  text-align: center;
  font-size: 0.37rem;
  color: #fff;
  }
.info-icon {
  width: 0.59rem;
  height: 0.51rem;
  margin-right: 0.43rem;
  }
.info-tit {
  font-size: 0.43rem;
  color: #999;
  }
.info /deep/ .weui-cell_access .weui-cell__ft:after {
  width: 0.27rem;
  height: 0.27rem;
  margin-top: -0.13rem;
  }
.info /deep/ .weui-cells:before,
.info /deep/ .weui-cells:after,
.info /deep/ .weui-cell:before {
  display: none;
  }
.info /deep/ .weui-cell_access .weui-cell__ft {
  padding-right: 0.53rem;
  }
.info /deep/ .weui-cell {
  padding: 0.53rem 0.4rem;
  }
.login_btn {
  width: 5.973333rem;
  height: 1.173333rem;
  margin: 0.68rem auto 0;
  background: url("../../../assets/images/login-btn.png") no-repeat;
  background-size: 100% auto;
  border-radius: 1.173333rem;
  overflow: hidden;
  font-size: 0.48rem;
  color: #fff;
  text-align: center;
  line-height: 1.173333rem;
  }
</style>
