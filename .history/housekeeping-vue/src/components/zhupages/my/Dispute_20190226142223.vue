<template>
  <div clas="bgwhite">
     <myHd :tit="tit"></myHd>
    <div class="dispute-tit">
        <span class="dispute-tit-dage">*</span>请填写处理争议的联系人信息
    </div>
    <div class="border"></div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" class="group-item">
      <x-input class="cell" title="真实姓名" v-model="valuename" placeholder="请输入真实姓名"></x-input>
      <x-input class="cell" title="联系方式" v-model="valuetel" placeholder="请输入联系人的联系方式"></x-input>
      <x-input class="cell2" title="订单编号" v-model="orderNum" placeholder="请输入争议服务的订单编号"></x-input>
       <div class="dispute-tit">
            <span class="dispute-tit-dage">*</span>请填写争议的内容
        </div>
      <x-textarea class="cell2" v-model="textVal" :show-counter="false" :rows="3"></x-textarea>
    </group>
    <div class="prompt-info">
      <div class="prompt-info-tit">提示及说明：</div>
      <div class="prompt-info-cont">1.为了能尽快解决您的问题，请如实描述您与提供服务人员的争议内容和产生争议的过程。</div>
      <div class="prompt-info-cont">2.如因非如实描述争议过程，产生的其他问题或责任由客户自行承担。</div>
    </div>
    <div class="addaddress">
       <x-button type="primary" @click.native="determineFn">确定</x-button>
     </div>
  </div>
  
 
</template>

<script>
  import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea,XButton  } from 'vux'
  import {PostDispute} from "../../../axios/api.js"
  import myHd from "../../qinpages/header"
  export default {
    components: {
      CheckIcon,
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      XTextarea,
      XButton,
      myHd 
    },
    data () {
      return {
        valuename: '',//真实姓名
        valuetel: '',//联系方式
        orderNum:'',//订单编号
        textVal:"",//争议内容
        tit:"争议处理"
      }
    },
    methods: {
     determineFn(){
         if(!!!this.valuename){
            this.$vux.loading.show({
            text: '请输入真实姓名'
            })
            setTimeout(()=>{
            this.$vux.loading.hide()
            },1000)
            return;
        }
         if(!!!this.valuetel){
            this.$vux.loading.show({
            text: '请输入联系方式'
            })
            setTimeout(()=>{
            this.$vux.loading.hide()
            },1000)
            return;
        }
         if(!!!this.orderNum){
            this.$vux.loading.show({
            text: '请输入手机号码'
            })
            setTimeout(()=>{
            this.$vux.loading.hide()
            },1000)
            return;
        }
         if(!!!this.textVal){
            this.$vux.loading.show({
            text: '请输入争议内容'
            })
            setTimeout(()=>{
            this.$vux.loading.hide()
            },1000)
            return;
        }
        let data = {
            "RealName": this.valuename,
            "ContactTel": this.valuetel,
            "OrderNumber": this.orderNum,
            "Content": this.textVal,
            "token": localStorage.getItem('STORAGE_TOKEN')
            }
         PostDispute(data).then(res=>{
             console.log(res)
          this.$vux.loading.show({
            text: res.Msg
            })
            setTimeout(()=>{
            this.$vux.loading.hide()
            },1000)
         })   
     }
    }
  }
</script>
<style scope>
.bgwhite{
    width: 100%;
    box-sizing: border-box;
    padding-bottom:1.33rem;
}
.addaddress{
    position: fixed;
    width: 100%;
    height: 1.33rem;
    left: 0;
    bottom:0;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 5%;

}
.cell{
  border: 1px solid #868695;
  margin: .533333rem;
  border-radius: .266667rem;
}
.cell2{
  border: 1px solid #868695;
  margin: 0 .533333rem;
  border-radius: .266667rem;
}
.bgwhite{
  background: #fff;
}
.weui-cells{
  margin-top: 0!important;
}
.weui-icon-circle:before{
  margin: .266667rem;
}
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
  margin: .266667rem;
  color: #35acff!important
}
.bgwhite  /deep/ .weui-cell__bd input[type="button"], input[type="submit"], input[type="text"], input[type="tel"], input[type="email"], input[type="number"], textarea, button {
    font-size: .43rem !important;
}
.group-item /deep/ .weui-cells:before , .group-item /deep/ .weui-cells:after{
    display: none !important;
}
.dispute-tit{
    width: 100%;
    height: 1.33rem;
    font-size: .43rem;
    color: #4c4c4c;
    line-height:1.33rem;
    box-sizing: border-box;
    padding: 0 .4rem;
}
.dispute-tit-dage{
    color: #ff0000;
    margin-right:.16rem;
}
.border{
    width: 100%;
    height: .27rem;
    background-color: #f5f5f5;
}
.prompt-info{
    width: 100%;
    box-sizing: border-box;
    padding: .48rem .4rem 1.07rem;
    font-size: .32rem;
    color: #333;
}
</style>
