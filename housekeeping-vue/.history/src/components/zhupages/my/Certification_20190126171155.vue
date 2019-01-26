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
              <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
                <grid-item>
                  <uploader
                    :showHeader="true"
                    title="请上传身份证正面"
                    :images="images"
                    :handle-click="false"
                    :show-header="false"
                    :showTip="false"
                    :autoUpload="false"
                    :upload-url="uploadUrl"
                    name="img"
                    size="small"
                    @add-image="addImageMethod"
                    @remove-image="removeImageMethod"
                    @upload-image="chooseImg"
                  >
                     <!-- <img src="../../../assets/images/s1.png" alt="" class="upload_pannel_item_icon"> -->
                     <span class="upload_pannel_item_text">请上传身份证正面</span>
                  </uploader>
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
         <div class="certifi_btn">
             <div class="certifi_btn_item">认证</div>
         </div>
    </div>
    
</template>
<script>
import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea,Grid, GridItem } from 'vux'
import Uploader from 'vux-uploader'
export default {
    data(){
        return {
          options: ['男', '女'],
          optionVl:'男',
          images1:require('../../../assets/images/s1.png'),
          images:[{ url: this.images1 }],
          uploadUrl:'',
          valuename:'',//真实姓名
          orderNum:'',//身份证号码
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
            GridItem,
            Uploader
        },
        methods: {
            // 点击任意一张图片
            previewMethod(e){
              console.log(e)
            },
            //点击新增按钮
            addImageMethod(e){
              console.log(e)
            },
            //点击删除按钮
            removeImageMethod(e){
                console.log(e)
            },
            chooseImg(formData){
                console.log(formData)
            }

        }
}
</script>
<style scoped>
  .certifi{
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 1.6rem; 
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
 .upload_pannel /deep/ .weui-uploader__hd{
    display: block;
    text-align: center;
    font-size: .32rem;
    color: #333;
}
 .upload_pannel /deep/ .weui-uploader__bd.small .weui-uploader__input-box{
       width: 4.48rem;
       height: 2.83rem;
 }
  .upload_pannel /deep/ .weui-cell{
      padding: 0;
  }
.certifi_btn{
    width: 100%;
    height: 1.6rem;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0 .53rem;
}
.certifi_btn_item{
    width: 100%;
    height: 1.17rem;
    text-align: center;
    line-height: 1.17rem;
    color: #fff;
    font-size: .35rem;
    border-radius:8.93rem;
    background-color: #35acff;
}
</style>
