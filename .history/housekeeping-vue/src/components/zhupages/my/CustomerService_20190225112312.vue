<template>
  <div>
    <div class="about-us">
      <myHd :tit="tit"></myHd>
      <div class="about-us-top">
        <img src="../../../assets/images/mylogo.png" alt class="about-us-top-icon">
        <div class="about-us-top-tit">保时家政</div>
      </div>
      <div class="customer-info">
        <div class="customer-info-item">
          <span>客服热线</span>
          <span>{{tel}}</span>
        </div>
        <div class="customer-info-item">
          <span>客服微信</span>
          <div class="code">
            <span>{{code}}</span>
            <img src="../../../assets/images/code.png" @click="clickbig" alt class="code-icon">
          </div>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="../../../assets/images/code.png" style="max-width:100%">
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>
import { GetAbout } from "../../../axios/api.js";
import {
  XDialog,
  XButton,
  Group,
  XSwitch,
  TransferDomDirective as TransferDom
} from "vux";
import myHd from "../../qinpages/header.vue";
export default {
  directives: {
    TransferDom
  },
  components: {
    Xdialog,
    XButton,
    Group,
    XSwitch
  },
  data() {
    return {
      tit: "客服中心",
      showHideOnBlur: false,
      tel: "",
      code: ""
    };
  },
  created() {
    GetAbout().then(res => {
      (this.tel = res.Data.KFTel), (this.code = res.Data.KFCode);
    });
  },
  components: {
    myHd
  },
  methods: {
    clickbig() {
      this.showHideOnBlur = true;
    }
  }
};
</script>
<style scoped>
.weui-dialog {
  border-radius: 8px;
  padding-bottom: 8px;
}
.dialog-title {
  line-height: 30px;
  color: #666;
}
.img-box {
  height: 350px;
  overflow: hidden;
}
.vux-close {
  margin-top: 8px;
  margin-bottom: 8px;
}
.img-box {
  width: 300px;
  height: 300px;
}

.about-us {
  width: 100%;
  padding-bottom: 1.33rem;
  padding-top: 1.28rem;
}
.about-us-top {
  width: 100%;
  padding: 1.28rem 0 0.64rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-us-top-icon {
  width: 2.13rem;
  height: 2.13rem;
}
.about-us-top-tit {
  font-size: 0.38rem;
  color: #4679ff;
  margin-top: 0.4rem;
}
.customer-info {
  width: 100%;
  box-sizing: border-box;
  padding: 2.67rem 0.75rem 0;
  font-size: 0.43rem;
  color: #999;
}
.customer-info-item {
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: space-between;
}
.code-icon {
  width: 0.59rem;
  height: 0.59rem;
}

</style>


