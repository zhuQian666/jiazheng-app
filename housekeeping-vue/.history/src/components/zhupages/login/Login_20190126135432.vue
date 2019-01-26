<template>
  <div class="index">
    <div class="logo"></div>
    <div class="enter-cont">
      <div class="enyet-cont-item">
        <img src="../../../assets/images/icon-phone.png" alt class="enyet-cont-item-icon">
        <input type="text" v-model="phoneval" class="enyet-cont-item-input" placeholder="输入手机号">
      </div>
      <div class="enyet-cont-item">
        <img src="../../../assets/images/icon-code.png" alt class="enyet-cont-item-icon">
        <input type="password" v-model="codeval" class="enyet-cont-item-input" placeholder="输入密码">
      </div>
      <div class="enyet-cont-item">
        <input
          type="checkbox"
          :checked="selectbol"
          class="enyet-cont-item-checkbox"
          id="checkbox-item"
        >
        <label for="checkbox-item" class="enyet-cont-item-label">记住帐号</label>
      </div>
      <div class="login_btn" @click="loginFn">登陆</div>
      <div class="index-info">
        <span @click="goRegistered">注册帐号</span> l
        <span @click="goForgetPassword">忘记密码</span>
      </div>
    </div>
    <div class="trademark">苏州保时科技有限公司</div>
  </div>
</template>

<script>
import { login } from "../../../axios/api.js";
export default {
  data() {
    return {
      phoneval: "", //电话好吗
      codeval: "", //密码
      selectbol: false //是否记住帐号
    };
  },
  created() {
    this.phoneval = this.$cookie.get("USERNAME") || "";
    this.codeval = this.$cookie.get("PASSOWRD") || "";
  },
  methods: {
    // 注册帐号
    goRegistered() {
      this.$router.push({
        path: "/Registered"
      });
    },
    //忘记密码
    goForgetPassword() {
      this.$router.push({
        path: "/ForgetPassword"
      });
    },
    //点击登录
    loginFn() {
      let data = {
        Tel: this.phoneval,
        Pwd: this.codeval,
        AppType: 1
      };
      if (this.selectbol) {
        this.$cookie.set("USERNAME", this.phoneval, 7);
        this.$cookie.set("PASSOWRD", this.codeval, 7);
      } else {
        this.$cookie.delete("USERNAME");
        this.$cookie.delete("PASSOWRD");
      }
      login(data).then(res => {
           this.$vux.loading.show({
                 text: res.Msg
              })
            setTimeout(()=>{
              this.$vux.loading.hide();
                if(Object.keys(res.Data).length){
                  localStorage.setItem('STORAGE_TOKEN',res.Data.Token);
                this.$router.push({
                  path:'/My'
                })
                }
            },1000)
      });
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
  margin-top: 3.2rem;
  box-sizing: border-box;
  padding: 0 0.93rem;
}
.enyet-cont-item {
  width: 100%;
  height: 1.813333rem;
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
</style>
