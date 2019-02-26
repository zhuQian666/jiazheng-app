<template>
    <div class="certifi">
        <myHd :tit="tit"></myHd>
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
                <grid-item class="grid-item-ele">
                    <form name="form1" id="form1" class="form">
					   <input type="file"  id='image1' accept="image/*" capture='camera' ref="cap" @change="upload(1)" name="img1" class="user_pic">
					</form>
                    <img :src="images1" alt="" class="upload_pannel_item_icon">
                    <span class="upload_pannel_item_text">请上传身份证正面</span>
                </grid-item>
                <grid-item>
                  <form name="form2" id="form2" class="form">
					   <input type="file"  id='image2' accept="image/*" capture='camera' ref="cap" @change="upload(2)" name="img1" class="user_pic">
				 </form>  
                  <img :src="images2" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传身份证反面</span>
                </grid-item>
                <grid-item>
                    <form name="form3" id="form3" class="form">
                        <input type="file"  id='image3' accept="image/*" capture='camera' ref="cap" @change="upload(3)" name="img1" class="user_pic">
                    </form>
                  <img :src="images3" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传手持身份证照片</span>
                </grid-item>
                <grid-item>
                    <form name="form4" id="form4" class="form">
					   <input type="file"  id='image4' accept="image/*" capture='camera' ref="cap" @change="upload(4)" name="img1" class="user_pic">
					</form>
                  <img :src="images4" alt="" class="upload_pannel_item_icon">
                  <span class="upload_pannel_item_text">请上传个人自拍照</span>
                </grid-item>
             </grid>
         </div>
<<<<<<< HEAD
         <div class="certifi_btn">
=======
         <div class="certifi_btn" @click="nowgoin">
>>>>>>> origin/featrue/20190101-view
             <div class="certifi_btn_item">认证</div>
         </div>
    </div>
    
</template>
<script>
import { GroupTitle, Group, Cell, PopupRadio, XInput, Selector, PopupPicker,  Grid, GridItem } from 'vux'
import {PDUploadImage} from "../../../axios/api.js"
<<<<<<< HEAD
 export default {
    data(){
        return {
=======
import myHd from "../../qinpages/header.vue"
 export default {
    data(){
        return {
          tit: '实名认证',
>>>>>>> origin/featrue/20190101-view
          options: ['男', '女'],
          optionVl:'男',
          images1:require('../../../assets/images/s1.png'),
          images2:require('../../../assets/images/s2.png'),
          images3:require('../../../assets/images/s3.png'),
          images4:require('../../../assets/images/s4.png'),
          valuename:'',//真实姓名
          orderNum:'',//身份证号码
            }
        },
        components: {
            Group,
            GroupTitle,
            Cell,
            XInput,
            Selector,
            PopupPicker,
            Grid,
<<<<<<< HEAD
            GridItem
        },
        methods: {
=======
            GridItem,
            myHd,
            PopupRadio
        },
        methods: {
            nowgoin(){
                // this.$router.push({
                //     path: "/Index"
                // });
            },
>>>>>>> origin/featrue/20190101-view
            // 点击任意一张图片
            upload(type){
               switch(type){
                 case 1:
                    var form1 = document.getElementById("form1");
                    var imgdata = new FormData(form1);
                    PDUploadImage(data).then(res=>{
                        console.log(res)
                    })
                 break;
                 case 2:
                    var form2 = document.getElementById("form2");
                    var imgdata = new FormData(form2);
                    var data = {
                        img:imgdata
                    }
                    PDUploadImage(data).then(res=>{
                        console.log(res)
                    })
                 break;
                 case 3:
                    var form3 = document.getElementById("form3");
                    var imgdata = new FormData(form3);
                    var data = {
                        img:imgdata
                    }
                    PDUploadImage(data).then(res=>{
                        console.log(res)
                    })
                 break;
                 case 4:
                    var form4 = document.getElementById("form4");
                    var imgdata = new FormData(form4);
                    var data = {
                        img:imgdata
                    }
                    PDUploadImage(data).then(res=>{
                        console.log(res)
                    })
                 break;
               }

            }

        }
}
</script>
<style scoped>
  .certifi{
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 1.6rem; 
<<<<<<< HEAD
=======
        padding-top: 1.28rem;
>>>>>>> origin/featrue/20190101-view
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
 .upload_pannel_item_text{
    display: block;
    text-align: center;
    font-size: .32rem;
    color: #333;
    margin-top: .27rem;
}
 .user_pic{
    width: 4.48rem;
    height: 2.83rem;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
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
.grid-item-ele{
  position: relative;
}
</style>
