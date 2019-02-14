<template>
    <div class="body">
        <div class="body-list flex aic flex_sb">
            <input type="text" class="fg2" placeholder="输入城市中文名搜索" id="userEidter">
            <span class="go-search" @click="goSearch">搜索</span>
        </div>
        <div class="body-list flex aic flex_left">
            <span class="localCity-name">当前城市:</span>
            <input type="text" :value="cityCenter" class="localCity ml20">
        </div>
        <p class="fs32 color9">其他城市</p>
        <div class="box">
            <div class="box-list flex aic" v-for="(item, index) in cityArr" :key="index" @click="choseCity" :data-id="item.Id" :id="index" :class="{active:index == num}">
                <input type="text" :value="item.Name" readonly>
            </div>
        </div>
         <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="该区域暂未开通" :position="position">{{ 'Basic Usage' }}</toast>
    </div>    
</template>

<script>
import { Toast } from 'vux'
import { getaddress } from "../../../axios/api.js";
export default {
    components: {
        Toast
    },
    data() {
        return {
            show: true,
            localCity: '北京市',
            cityArr: null,
            cityCenter: '北京',
            num: -1,
            position: 'default',
            showPositionValue: false
        }
    },
    methods: {
        showPosition (position) {
            this.position = position
            this.showPositionValue = true
            },
        getcitylist(){
            getaddress().then(res =>{
                console.log(res)
                this.cityArr = res.Data
            })
        },
        // 选择地址
        choseCity(e){
            this.num = e.path[1].attributes[1].nodeValue;
            this.cityCenter = e.path[0].value
            console.log(e);
            // console.log(e.path[1].attributes[0].nodeValue);
            // console.log(e.path[1].attributes[1].nodeValue);
        },
        // 搜索
        goSearch(e){
            let _this = this;
            let userEidter = document.getElementById("userEidter").value
            console.log(userEidter);
            let arr = this.cityArr;
            let isfirst = 0;
            for(let i = 0; i<arr.length; i++){
                if(userEidter.indexOf(arr[i].Name) != -1){
                    isfirst++;
                    _this.cityCenter = arr[i].Name;
                    break;
                }else{
                    isfirst = 0;
                }
            }
            if(isfirst == 0){
               _this.showPositionValue = true
            }
        },

    },
    created: function(){
        this.getcitylist()
    }
}
</script>

<style scope>
    .body{
        padding:  .4rem .266667rem;
        background: #fff;
    }
    .body-list{
        font-size: .693333rem;
        padding: 0 .24rem;
        border: 1px solid #b3b3b3;
        border-radius: 5px;
        margin: .506667rem 0;
        height: 1.2rem;
    }
    .go-search{
        color: #999;
        font-size: .426667rem;
        display: block;
        padding: .266667rem;
    }
    .localCity-name, .localCity{
        font-size: .426667rem;
        color: #999
    }
    .box-list{
        font-size: .426667rem;
        padding: 0 .24rem;
        border: 1px solid #b3b3b3;
        border-radius: 5px;
        margin: .506667rem 0;
        height: 1.2rem;
        color: #999;
    }
    .box-list.active{
        border: 2px solid #3485ff;
        color:#3485ff;
    }
    
    .box-list input{
        width: 100%;
        color: #999;
        font-size: .426667rem;
    }
    .box-list.active input{
        color: #3485ff;
        font-weight: bold;
    }
</style>
