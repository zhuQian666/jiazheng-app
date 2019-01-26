<template>
    <div class="about-us">
       <div class="about-us-top">
           <img src="../../../assets/images/mylogo.png" alt="" class="about-us-top-icon">
           <div class="about-us-top-tit">保时家政</div>
       </div>
       <div class="customer-info">
          <div class="customer-info-item">
              <span>客服热线</span>
              <span>123</span>
          </div>
           <div class="customer-info-item">
              <span>客服热线</span>
              <div class="code">
                  <span>456</span>
                  <img src="../../../assets/images/code.png" alt="" class="code-icon">
              </div>
          </div>

       </div>

    </div>

</template>
<script>
import {GetAbout} from "../../../axios/api.js";
export default {
    data(){
        return {
           info:'',//关于我们内容
        }
    },
    created() {
        GetAbout().then(res=>{
            this.info = res.Data.AboutUs
        })
    },
    methods: {
        
    }
}
</script>
<style scoped>
    .about-us{
       width: 100%;
        padding-bottom: 1.33rem;
    }
  .about-us-top{
      width: 100%;
      padding:1.28rem 0 .64rem;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .about-us-top-icon{
      width: 2.13rem;
      height:2.13rem;
  }
  .about-us-top-tit{
      font-size: .32rem;
      color: #4679ff;
      margin-top: .4rem;
  }
  .customer-info{
      width: 100%;
      box-sizing: border-box;
      padding: 2.67rem .75rem 0;
      font-size: .43rem;
      color: #999;
  }
  .customer-info-item{
      width: 100%;
      height: 1.6rem;
      display: flex;
      justify-content: space-between;
  }
 .code-icon{
     width: 1.17rem;
     height: 1.17rem;
 }
</style>


