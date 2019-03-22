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
         <div class="upload_pannel" style="background:#fff">
              <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
                <grid-item class="grid-item-ele">
                    <!-- <form name="form1" id="form1" class="form" enctype="multipart/form-data">
					   <input type="file"  id='image1' accept="image/*" capture='camera' ref="cap" @click="showActionSheet(this,0)" name="img1" class="user_pic">
					</form> -->
                    <div class="fuckimg" @click="showActionSheet(0)">
                    <img :src="images1" alt="" class="upload_pannel_item_icon" style="width:160px;height:100px">
                    <span class="upload_pannel_item_text">请上传身份证正面</span>
                    </div>
                </grid-item>
                <grid-item>
                  <!-- <form name="form2" id="form2" class="form" enctype="multipart/form-data">
					   <input type="file"  id='image2' accept="image/*" capture='camera' ref="cap" @click="showActionSheet(this,1)" name="img1" class="user_pic">
				 </form>   -->
                 <div class="fuckimg" @click="showActionSheet(1)">
                  <img :src="images2" alt="" class="upload_pannel_item_icon" style="width:160px;height:100px">
                  <span class="upload_pannel_item_text">请上传身份证反面</span>
                  </div>
                </grid-item>
                <grid-item>
                    <!-- <form name="form3" id="form3" class="form" enctype="multipart/form-data">
                        <input type="file"  id='image3' accept="image/*" capture='camera' ref="cap" @click="showActionSheet(this,2)" name="img1" class="user_pic">
                    </form> -->
                    <div class="fuckimg" @click="showActionSheet(2)">
                  <img :src="images3" alt="" class="upload_pannel_item_icon" style="width:160px;height:100px">
                  <span class="upload_pannel_item_text">请上传手持身份证照片</span>
                  </div>
                </grid-item>
                <grid-item>
                    <!-- <form name="form4" id="form4" class="form" enctype="multipart/form-data">
					   <input type="file"  id='image4' accept="image/*" capture='camera' ref="cap" @click="showActionSheet(this,3)" name="img1" class="user_pic">
					</form> -->
                    <div class="fuckimg" @click="showActionSheet(3)">
                  <img :src="images4" alt="" class="upload_pannel_item_icon" style="width:160px;height:100px">
                  <span class="upload_pannel_item_text">请上传个人自拍照</span>
                  </div>
                </grid-item>
             </grid>
         </div>
         <div class="certifi_btn" @click="nowgoin">
             <div class="certifi_btn_item">认证</div>
         </div>
    </div>
    
</template>
<script>
import { GroupTitle, Group, Cell, PopupRadio, XInput, Selector, PopupPicker,  Grid, GridItem } from 'vux'
import {PDUploadImage, getrealName, setrealName, basePostImg} from "../../../axios/api.js"
import { pathToBase64, base64ToPath } from '../../../../node_modules/image-tools/index.js'
import myHd from "../../qinpages/header.vue"
 export default {
     inject: ['reload'],
    data(){
        return {
          reload: this.reload,
          tit: '实名认证',
          options: ['男', '女'],
          optionVl:'男',
          images1:require('../../../assets/images/s1.png'),
          images2:require('../../../assets/images/s2.png'),
          images3:require('../../../assets/images/s3.png'),
          images4:require('../../../assets/images/s4.png'),
          valuename:'',//真实姓名
          orderNum:'',//身份证号码
          forget: []
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
            GridItem,
            myHd,
            PopupRadio
        },
        created:function(){
            this.reload()
            this.initpageInfo();
        },
        methods: {
            initpageInfo(){
                let data= {token: localStorage.getItem('STORAGE_TOKEN')}
                getrealName(data).then(res => {
                    console.log(res.Data);
                    let arr = res.Data.CardImg.split('|');
                    console.log(arr)
                    this.valuename = res.Data.RealName || '';
                    if(res.Data.Sex === '1'){
                        this.optionVl = '女';
                    }else if(res.Data.Sex === '2'){
                        this.optionVl = '男';
                    }
                    this.orderNum = res.Data.Card || '';
                    this.images1 = arr[0] || require('../../../assets/images/s1.png');
                    this.images2 = arr[1] || require('../../../assets/images/s2.png');
                    this.images3 = arr[2] || require('../../../assets/images/s3.png');
                    this.images4 = arr[3] || require('../../../assets/images/s4.png');
                })
            },
            nowgoin(){
                if(!!!this.valuename){
                    this.$vux.loading.show({
                    text: '请输入真实姓名'
                    })
                    setTimeout(()=>{
                    this.$vux.loading.hide()
                    },1000)
                    return;
                }
                if(!!!this.optionVl){
                    this.$vux.loading.show({
                    text: '请选择性别'
                    })
                    setTimeout(()=>{
                    this.$vux.loading.hide()
                    },1000)
                    return;
                }
                if(!!!this.orderNum){
                    this.$vux.loading.show({
                    text: '请输入身份证号'
                    })
                    setTimeout(()=>{
                    this.$vux.loading.hide()
                    },1000)
                    return;
                }
                if(this.forget.length != '4'){
                    this.$vux.loading.show({
                    text: '请上传照片'
                    })
                    setTimeout(()=>{
                        this.$vux.loading.hide()
                    },1000)
                    return;
                }else{
                    console.log(this.forget)
                    var CardImg = this.forget.toString().replace(/,/g,"|");
                }
                console.log(CardImg)
                if(this.optionVl === '男'){
                    var Sex = '2'
                }else {
                    var Sex = '1'
                }
                let data = {
                    RealName: this.valuename,
                    Sex,
                    Card: this.orderNum,
                    CardImg,
                    token: localStorage.getItem('STORAGE_TOKEN')
                }
                setrealName(data).then(res => {
                    console.log('上传')
                    console.log(JSON.stringify(res));
                    if(res.Code =='200'){
                        this.$router.push({
                            path: "/Index?id=1"
                        });
                    }
                })
            },
            plusReady() {  
                //Android返回键监听事件  
                plus.key.addEventListener('backbutton',function(){  
                    myclose();  
                },false);  
            },
              //选取图片的来源，拍照和相册  
            showActionSheet(type){  
                // let divid = conf.id;  
                let that = this;
                let actionbuttons=[{title:"拍照"},{title:"相册选取"}];  
                let actionstyle={title:"上传图片",cancel:"取消",buttons:actionbuttons};  
                plus.nativeUI.actionSheet(actionstyle, function(e){  
                    if(e.index==1){  
                        that.getImage(type);  
                    }else if(e.index==2){  
                        that.galleryImg(type);  
                    }  
                });  
            },
            //相册选取图片  
            galleryImg(type) {  
                let that = this;
                plus.gallery.pick(function(path){
                    console.log('图片地址：')
                    console.log(path)
                    let image = new Image();
                    image.setAttribute('crossOrigin', 'anonymous');
                    if(type == '0'){
                        that.images1 = path;
                    }else if(type =='1'){
                        that.images2 = path;
                    }else if(type =='2'){
                        that.images3 = path;
                    }else if(type == '3'){
                        that.images4 = path;
                    }
                    image.src = path;
                    image.onload = function(){
                        // let base64 = that.getBase64Image(image);
                        let canvas = document.createElement("canvas");
                        canvas.width = image.width;
                        canvas.height = image.height;
                        let ctx = canvas.getContext("2d");
                        ctx.drawImage(image, 0, 0, image.width, image.height);
                        let ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();
                        let base64 = canvas.toDataURL("image/" + ext);
                            console.log('base64图片:')
                            console.log(base64);
                            let data = {Img: base64}
                            basePostImg(data).then(res =>{
                                console.log('返回图片信息')
                                console.log(JSON.stringify(res.fileWebPath))
                                console.log('1')
                                console.log(JSON.parse(JSON.stringify(res.fileWebPath)))
                                console.log('2')
                                console.log(JSON.parse(JSON.stringify(res.fileWebPath)))
                                that.forget[type] = JSON.parse(JSON.stringify(res.fileWebPath));
                                if(type == '0'){
                                    that.images1 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }else if(type =='1'){
                                    that.images2 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }else if(type =='2'){
                                    that.images3 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }else if(type == '3'){
                                    that.images4 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }
                            })
                            // let server = "http://182.61.21.61:8077/api/Upload/Base64Img"
                            // var task=plus.uploader.createUpload(server,
                            //     {method:"POST"},
                            //     function(t,status){ //上传完成
                            //         if(status==200){
                            //             console.log(JSON.stringify(t))
                            //         }else{
                            //             console.log(JSON.stringify(t))
                            //         }
                            //     }
                            // );
                            // //添加其他参数
                            // task.addData("Img",base64a);
                            // task.addFile("Img",base64a);
                            // task.start();
                    }
                });
            },
            // 拍照  
			getImage(type) {
                let that = this;
                // plus.camera.getCamera().captureImage(function(e){
                //     plus.io.resolveLocalFileSystemURL(e, function(entry) { 
                    let cam = plus.camera.getCamera()
                    let Resolutions = cam.supportedImageResolutions[0]
                    // 字符串数组,摄像头支持的拍照文件格式
                    let Formats = cam.supportedImageFormats[0]
                    cam.captureImage(function (capturedfile) {
                    // 拍照成功
                    plus.io.resolveLocalFileSystemURL(capturedfile, function (entry) {
                        var path = entry.toLocalURL();
                        console.log('图片地址：')
                        console.log(path)
                        let image = new Image();
                        if(type == '0'){
                            that.images1 = path;
                        }else if(type =='1'){
                            that.images2 = path;
                        }else if(type =='2'){
                            that.images3 = path;
                        }else if(type == '3'){
                            that.images4 = path;
                        }
                        image.src = path;
                        image.onload = function(){
                            let w = image.width
                            let h = image.height
                            let scale = w / h
                            w = 200
                            h = w / scale
                            // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
                            let quality = 0.7
                            // 生成canvas
                            let canvas = document.createElement('canvas')
                            let ctx = canvas.getContext('2d')
                            // 创建属性节点
                            let anw = document.createAttribute('width')
                            anw.nodeValue = w
                            let anh = document.createAttribute('height')
                            anh.nodeValue = h
                            canvas.width = w
                            canvas.height = h
                            ctx.drawImage(image, 0, 0, w, h)
                            let ext = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase()// 图片格式
                            let base64 = canvas.toDataURL('image/' + ext, quality);
                            let data = {Img: base64}
                            basePostImg(data).then(res =>{
                                console.log('返回图片信息')
                                console.log(JSON.stringify(res))
                                that.forget[type] = JSON.parse(JSON.stringify(res.fileWebPath));
                                if(type == '0'){
                                    that.images1 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }else if(type =='1'){
                                    that.images2 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }else if(type =='2'){
                                    that.images3 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }else if(type == '3'){
                                    that.images4 = JSON.parse(JSON.stringify(res.fileWebPath));
                                }
                            })
                        }
                       
                    },function(e) { 
                        plus.nativeUI.toast("读取拍照文件错误：" + e.message); 
                    }); 
    
                });  
            },
            getBase64Image(img) {
				var canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
				var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img.width, img.height);
                var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
                var dataURL = canvas.toDataURL("image/" + ext);
                return dataURL;
			},


            // 点击任意一张图片
            upload(type){
               switch(type){
                 case 0:
                    var form1 = document.getElementById("form1");
                    var imgdata1 = new FormData(form1);
                    PDUploadImage(imgdata1).then(res=>{
                        console.log(res);
                        that.forget[type] = res.Data.fileWebPath[0];
                        this.images1 = res.Data.fileWebPath[0];
                    })
                 break;
                 case 1:
                    let form2 = document.getElementById("form2");
                    let imgdata2 = new FormData(form2);
                    PDUploadImage(imgdata2).then(res=>{
                        console.log(res);
                        that.forget[type] = res.Data.fileWebPath[0];
                        this.images2 = res.Data.fileWebPath[0];
                    })
                 break;
                 case 2:
                    let form3 = document.getElementById("form3");
                    let imgdata3 = new FormData(form3);
                    PDUploadImage(imgdata3).then(res=>{
                        console.log(res);
                        that.forget[type] = res.Data.fileWebPath[0];
                        this.images3 = res.Data.fileWebPath[0];
                    })
                 break;
                 case 3:
                    let form4 = document.getElementById("form4");
                    let imgdata4 = new FormData(form4);
                    PDUploadImage(imgdata4).then(res=>{
                        console.log(res);
                        that.forget[type] = res.Data.fileWebPath[0];
                        this.images4 = res.Data.fileWebPath[0];
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
        padding-top: 1.28rem;
    }
  .dispute-tit{
    width: 100%;
    height: 1.33rem;
    font-size: .43rem;
    color: #4c4c4c;
    line-height:1.33rem;
    box-sizing: border-box;
    padding: 0 .4rem;
    background: #fff;
    margin-top: -1.2rem
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
.fuckimg{
    width: 100%;
    height: 3.44rem;
    overflow: hidden;
}
.fuckimg>img{
    width: 100%;
    height: 3.44rem;
    vertical-align: middle
}
.vux-radio-label{
   font-size: 16px!important;
 }
 
</style>
