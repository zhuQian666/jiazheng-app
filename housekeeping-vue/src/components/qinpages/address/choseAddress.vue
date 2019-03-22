<template>
    <div class="page">
        <myHd :tit="tit"></myHd>
        <div class="control-address">
            <div class="contaol-box flex flex_sb aic" v-for="(item, index) in addressitem" :id="item.Id">
                <div class="control-left">
                    <div class="address-master flex flex_sb">
                        <div class="user-name">{{item.Contacts}}</div>
                        <div class="user-tel">{{item.ContactsTel}}</div>
                    </div>
                    <div class="address-name ellipsis2">{{item.AddressDetail}}</div>
                </div>
                <div class="control-right flex flex_right">
                    <div class="control-icon" @click="goback" :data-id="item.Id">
                        <check-icon :value.sync="item.check" :data-ids="item.Id"></check-icon>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
import { CheckIcon } from 'vux'
import {UserAddress} from "../../../axios/api.js"
import myHd from "../../qinpages/header"
export default {
    data(){
        return {
            addressitem: null,
            tit:"选择地址"
        }
    },
    components: {
        CheckIcon,
        myHd
    },
    created() {
      this.getUserAddress();  
    },
    methods: {
        //获取我的地址
        getUserAddress(){
          let data = {
            "Token": localStorage.getItem('STORAGE_TOKEN')
          }
          UserAddress(data).then(res=>{
              if(res.Data && res.Data.length >0){
                res.Data.forEach(element => {
                    element.check = false
                });
                this.addressitem = res.Data;
                console.log(this.addressitem)
              }else{
                  this.$vux.loading.show({
                    text: '暂无地址，请去个人中心设置'
                })
                setTimeout(()=>{
                    this.$vux.loading.hide()
                },1000)
                return;
              }
              
          })
        },
        // 选择地址返回订单页
        goback(e){
            let carid = this.$route.query.carid;
            let ids = '';
            this.addressitem.forEach(ele =>{
                if(ele.check == true){
                    ids = ele.Id;
                    return
                }
            })            
            this.$router.push({
                path:'/postOrder',
                query: {
                    carid, ids
                }
            })
        }
    }

}
</script>

<style scope>
.icon-white{
    fill: #fff;
}
.contaol-box{
    background: #fff;
    height: 3.066667rem;
    width: 100%;
    padding: 0 .4rem;
    color: #4c4c4c;
    border-bottom: 1px solid #eee;
}
.address-master{
    font-size: .426667rem;
}
.address-name{
    font-size: .4rem;
    margin-top: .266667rem;
}
.control-right{
    flex: 1.066667rem 0 0;
}
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
    color: #4c77fc!important;
}
.control-left{
    flex: 5.333333rem 0 0;
}

</style>
