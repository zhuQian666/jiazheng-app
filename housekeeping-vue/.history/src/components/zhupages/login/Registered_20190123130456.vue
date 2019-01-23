<template>
  <div class="index">
    <div class="logo"></div>
    <div class="enter-cont">
      <div class="enyet-cont-item">
        <img src="../../../assets/images/icon-phone.png" alt class="enyet-cont-item-icon">
        <input type="text" v-model="phoneval" class="enyet-cont-item-input" placeholder="输入手机号">
      </div>
      <div class="enyet-cont-item">
        <img src="../../../assets/images/icon-code.png" alt class="enyet-cont-item-icon big_icon">
        <input type="text" v-model="codeval" class="enyet-cont-item-input" placeholder="验证码">
        <div class="getcode" @click="getCode" v-if="btnBol">获取验证码</div>
        <div class="getcode" v-else>{{downTime}}秒</div>
      </div>
      <div class="enyet-cont-item">
        <img src="../../../assets/images/pass-icon.png" alt class="enyet-cont-item-icon big_icon">
        <input type="password" v-model="passwordval" class="enyet-cont-item-input" placeholder="登录密码">
      </div>
      <div class="enyet-cont-item">
        <img
          src="../../../assets/images/yaoqing-icon.png"
          alt
          class="enyet-cont-item-icon big_icon"
        >
        <input type="text" v-model="invitationCode" class="enyet-cont-item-input" placeholder="邀请码">
      </div>
      <div class="enyet-cont-item">
        <input
          type="checkbox"
          :checked="agreebol"
          class="enyet-cont-item-checkbox"
          id="checkbox-item"
        >
        <label for="checkbox-item" class="enyet-cont-item-label">同意《注册与使用协议》</label>
      </div>
      <div class="login_btn" @click="registerFn">注册</div>
      <div class="index-info">
        <span @click="gologin">登录帐号</span> l
        <span @click="goForgetPassword">忘记密码</span>
      </div>
    </div>
    <div class="trademark">苏州保时科技有限公司</div>
  </div>
</template>

<script>
import { Register,Sms } from "../../../axios/api.js";
export default {
  data() {
    return {
      phoneval: "", //电话好吗
      codeval: "", //验证码
      passwordval: "", //密码
      invitationCode: "", //邀请码
      agreebol: true, //是否记住帐号
      downTime: 60, //倒计时
      btnBol: true
    };
  },
  created() {},
  methods: {
    // 到登录页面
    gologin() {
      this.$router.push({
        path: "/Login"
      });
    },
    // 忘记密码
    goForgetPassword() {
      this.$router.push({
        path: "/ForgetPassword"
      });
    },
    // 验证码倒计时
    downTimeFn(val) {
      this.btnBol = false;
      setTimeout(() => {
        val--;
        this.downTime = val;
        if (val > 0) {
          this.downTimeFn(val);
        } else {
          this.btnBol = true;
        }
      }, 1000);
    },
    // 获取验证码
    getCode(){
       if(!!!this.phoneval){
        this.$vux.alert.show({
          title: '温馨提示',
          content: '请输入手机号码',
        })
        return;
      }
      this.downTimeFn(60) 
       let data = {
        tel:this.phoneval
      }
      Sms(data).then(res=>{
        console.log(res)
      })
    },
    // 注册
    registerFn(){
      if(!!!this.phoneval){
        this.$vux.alert.show({
          title: '温馨提示',
          content: '请输入手机号码',
        })
        return;
      }
       if(!!!this.codeval){
        this.$vux.alert.show({
          title: '温馨提示',
          content: '请输入验证码',
        })
        return;
      }
       if(!!!this.passwordval){
        this.$vux.alert.show({
          title: '温馨提示',
          content: '请输入密码',
        })
         return;
      }
      if(!agreebol){
         this.$vux.alert.show({
          title: '温馨提示',
          content: '请同意注册与使用协议',
        })
         return;
      }
       let data = {
          "Tel": this.phoneval,
          "Pwd": this.passwordval,
          "YZM": this.codeval,
          "Code": this.invitationCode
        }
       Register(data).then(res=>{
         console.log(res)
       })

    }
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  min-height: 100vh;
  background: url("../../../assets/images/login-bg.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 1.33rem 0 0.933333rem;
  position: relative;
}
.logo {
  width: 2.48rem;
  height: 2.48rem;
  border-radius: 50%;
  margin: 0 auto;
  background: url("../../../assets/images/logo.png") no-repeat;
  background-size: 100% 100%;
}
.enter-cont {
  width: 100%;
  margin-top: 3rem;
  box-sizing: border-box;
  padding: 0 0.93rem;
}
.enyet-cont-item {
  width: 100%;
  height: 1.413333rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.enyet-cont-item-icon {
  width: 0.373333rem;
  height: auto;
}
.enyet-cont-item-input {
  flex: 1;
  box-sizing: border-box;
  padding: 0 0.533333rem;
  font-size: 0.426667rem;
  color: #999;
  font-family: "黑体";
  outline: none;
  border: none;
}
.enyet-cont-item-label {
  flex: 1;
  box-sizing: border-box;
  padding: 0 0.533333rem;
  font-size: 0.293333rem;
  color: #999;
  font-family: "黑体";
}
.enyet-cont-item-checkbox {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 0;
  outline: none;
}
.login_btn {
  width: 5.973333rem;
  height: 1.173333rem;
  margin: 0.533333rem auto 0;
  background: url("../../../assets/images/login-btn.png") no-repeat;
  background-size: 100% auto;
  border-radius: 1.173333rem;
  overflow: hidden;
  font-size: 0.48rem;
  color: #fff;
  text-align: center;
  line-height: 1.173333rem;
}
.index-info {
  width: 100%;
  text-align: center;
  font-size: 0.373333rem;
  color: #477bff;
  margin-top: 0.4rem;
}
.trademark {
  width: 100%;
  height: 0.933333rem;
  box-sizing: border-box;
  font-size: 0.32rem;
  color: #4679ff;
  text-align: center;
  padding-bottom: 0.533333rem;
  position: absolute;
  left: 0;
  bottom: 0;
}
.getcode {
  width: 1.866667rem;
  height: 0.64rem;
  text-align: center;
  line-height: 0.64rem;
  font-size: 0.293333rem;
  color: #999;
  background-color: #ebebeb;
  border-radius: 0.16rem;
}
.big_icon {
  width: 0.42rem;
}
</style>
