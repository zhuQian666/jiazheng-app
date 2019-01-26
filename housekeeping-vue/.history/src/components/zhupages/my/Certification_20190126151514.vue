<template>
    <div class="certifi">
        <div class="dispute-tit">
            <span class="dispute-tit-dage">*</span>请填写您的真实信息
        </div>
         <div class="border"></div>
          <group label-width="2.67rem" label-align="left" class="group-item">
            <x-input class="cell" title="真实姓名" v-model="valuename" placeholder="请输入真实姓名"></x-input>
             <popup-radio title="性别" :options="options" v-model="optionVl"></popup-radio>
            <x-input class="cell" title="身份证" v-model="orderNum" placeholder="请输入您的身份证号码"></x-input>
         </group>
         <div class="border"></div>
         <div class="upload_pannel">
              <grid cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
                <grid-item>
                  <img src="../../../assets/images/s1.png" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传身份证正面</span>
                </grid-item>
                <grid-item>
                  <img src="../../../assets/images/s2.png" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传身份证反面</span>
                </grid-item>
                <grid-item>
                  <img src="../../../assets/images/s3.png" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传手持身份证照片</span>
                </grid-item>
                <grid-item>
                  <img src="../../../assets/images/s4.png" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传个人自拍照</span>
                </grid-item>
             </grid>
         </div>
    </div>
    
</template>
<script>
import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea,Grid, GridItem } from 'vux'
export default {
    data(){
        return {
          options: ['男', '女'],
          optionVl:'男'
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
       Grid,
       GridItem
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
.group-item /deep/  input[type="text"] {
    font-size: .43rem !important;
}
.group-item /deep/ .weui-cell:before{
    left: 0;
}
.group-item /deep/ .weui-cells{
    margin-top: 0;
}
.upload_pannel /deep/ .weui-grid:after{
    display: none;
}
.upload_pannel_item_text{
    display: block;
    text-align: center;
    font-size: .32rem;
    color: #333;
}
</style>
