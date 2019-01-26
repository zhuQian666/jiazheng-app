<template>
    <div class="about-us">
       <div class="about-us-top">
           <img src="../../../assets/images/mylogo.png" alt="" class="about-us-top-icon">
           <div class="about-us-top-tit">保时家政</div>
       </div>
       <div class="about-us-info">
           {{info}}
       </div>
       <div class="about-us-bottom">
           <div class="about-us-bottom-name">苏州保时科技有限公司</div>
           <div class="about-us-bottom-ninfo">Copyright © 2018 - 2020 XXXXXX. All Rights Reserved</div>
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
  .about-us-info{
      width: 100%;
      box-sizing: border-box;
      padding: 0 .53rem 1.47rem;
      font-family: "宋体";
      font-size: .32rem;
      color: #4679ff;
      line-height: .37rem;
  }
  .about-us-bottom{
      padding: 0 .72rem;
      font-family: "宋体";
      font-size: .32rem;
      color: #4679ff;
      line-height:.53rem;
      text-align: center;
  }


</style>


