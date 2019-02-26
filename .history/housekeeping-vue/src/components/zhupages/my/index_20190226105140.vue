<template>
  <div class="index">
    <div class="index-top">
        <div class="index-top-info">
        <div class="index-top-user">
         <template>
           <photograph v-model="headImage"></photograph>
         </template>
        </div>
       </div>
      <div class="index-top-user-name">{{userInfo.Name?userInfo.Name:'张三'}}</div>
      <div class="index-top-user-phone" @click="changePhoneFn">{{userInfo.Tel}}</div>
    </div>
    <div v-if="!showChangePhone">
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
    <!-- 更换手机号码 -->
    <div v-if="showChangePhone">
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
            <img src="../../../assets/images/icon-phone.png" alt class="enyet-cont-item-icon">
            <input type="text" v-model="nwephoneval" class="enyet-cont-item-input" placeholder="新的手机号">
          </div>
          <div class="enyet-cont-item">
            <img src="../../../assets/images/icon-code.png" alt class="enyet-cont-item-icon big_icon">
            <input type="text" v-model="newodeval" class="enyet-cont-item-input" placeholder="验证码">
            <div class="getcode" @click="getCode2" v-if="btnBol2">获取验证码</div>
            <div class="getcode" v-else>{{downTime2}}秒</div>
          </div>
          <div class="login_btn" @click="changeBtn">确定</div>
      
        </div>
    </div>
  </div>
</template>
<script>
import { Cell, Group } from "vux";
import { GetUserInfo,Sms,ChangeUserTel } from "../../../axios/api.js";
import photograph from "../component/photograph"
export default {
data() {
  return {
    userInfo:{},//用户信息
    headImage:'',
    phoneval:'',//手机号
    nwephoneval:'',//新手机号
    codeval:'',//验证码
    newodeval:'',//新验证码
    downTime:60,//倒计时
    btnBol:true,//显示倒计时
    downTime2:60,//新倒计时
    btnBol2:true,//新显示倒计时
    showChangePhone:false,//是否更换手机

  };
},
created() {
  let data = {
     token:localStorage.getItem('STORAGE_TOKEN')
  }
  GetUserInfo(data).then(res=>{
    this.userInfo = res.Data;
    this.phoneval = res.Data.Tel
    localStorage.setItem('AVATAR',this.userInfo.Img)
  })
},
methods: {
    //更换手机
    changePhoneFn(){
      this.showChangePhone = true
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
          this.btnBol = true 
        }
      }, 1000);
    },
        // 验证码倒计时
    downTimeFn2(val) {
      this.btnBol2 = false;
      setTimeout(() => {
        val--;
        this.downTime = val;
        if (val > 0) {
          this.downTimeFn2(val);
        } else {
          this.btnBol2 = true 
        }
      }, 1000);
    },
    // 获取验证码
    getCode(){
       if(!!!this.phoneval){
         this.$vux.loading.show({
            text: '请输入手机号码'
          })
        setTimeout(()=>{
           this.$vux.loading.hide()
            },1000)
            return;
          }
        this.downTimeFn(60) 
        let data = {
          tel:this.phoneval
        }
        Sms(data).then(res=>{
           this.$vux.loading.show({
            text: res.Msg
            })
            setTimeout(()=>{
              this.$vux.loading.hide()
            },1000)
        })
    },
      // 获取验证码
    getCode2(){
       if(!!!this.nwephoneval){
         this.$vux.loading.show({
            text: '请输入手机号码'
          })
        setTimeout(()=>{
           this.$vux.loading.hide()
            },1000)
            return;
          }
        this.downTimeFn(60) 
        let data = {
          tel:this.nwephoneval
        }
        Sms(data).then(res=>{
           this.$vux.loading.show({
            text: res.Msg
            })
            setTimeout(()=>{
              this.$vux.loading.hide()
            },1000)
        })
    },
    //确定更换
    changeBtn(){
      if(!!!this.phoneval){
        this.$vux.loading.show({
        text: '请输入手机号码'
        })
        setTimeout(()=>{
          this.$vux.loading.hide()
        },1000)
        return;
      }
      if(!!!this.nwephoneval){
        this.$vux.loading.show({
        text: '请输入新的手机号码'
        })
        setTimeout(()=>{
          this.$vux.loading.hide()
        },1000)
        return;
      }
      if(!!!this.NewTelCode){
        this.$vux.loading.show({
        text: '请输入验证码'
        })
        setTimeout(()=>{
          this.$vux.loading.hide()
        },1000)
        return;
      }
       let data = {
         OldTel	:this.phoneval,
         NewTel:this.nwephoneval,
         NewTelCode:this.newodeval,
         token:localStorage.getItem("STORAGE_TOKEN")
       }
       ChangeUserTel(data).then(res=>{
         console.log(res)
       })
    },
  // 点击事件
  handelFn(type){
  // 地址管理
    switch(type){
      case 1:
      this.$router.push({
        path:'/Certification'
      }) 
      break;
      case 2:
      this.$router.push({
        path:'/TubAddress'
      }) 
      break;
      case 3:
      this.$router.push({
        path:'/Dispute'
      }) 
      break;
      case 4:
      this.$router.push({
        path:'/AboutUs'
      }) 
      break;
      case 5:
      this.$router.push({
        path:'/CustomerService'
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
  Group,
  photograph
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
  .enter-cont {
  width: 100%;
  margin-top:.53rem;
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
