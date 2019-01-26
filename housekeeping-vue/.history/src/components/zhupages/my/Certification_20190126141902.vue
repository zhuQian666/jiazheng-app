<template>
    <div class="certifi">
        <div class="dispute-tit">
            <span class="dispute-tit-dage">*</span>请填写您的真实信息
        </div>
         <div class="border"></div>
          <group label-width="2.67rem" label-align="center" class="group-item">
            <x-input class="cell" title="真实姓名" v-model="valuename" placeholder="请输入真实姓名"></x-input>
            <x-input class="cell" title="身份证号码" v-model="orderNum" placeholder="请输入您的身份证号码"></x-input>
         </group>
    </div>
    
</template>
<script>
import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea } from 'vux'
export default {
    data(){
        return {

        }
    },
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
    },
}
</script>
<style scoped>
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


</style>
