<template>
    <div class="page">
        <div class="control-address">
            <div class="contaol-box flex flex_sb aic" 
            :class="index === 0 ?'mar-bot':''" 
            v-for="(item, index) in address" 
            :key="index"
            @click="editAdress"
            >
                <div class="control-left">
                    <div class="address-master flex flex_sb">
                        <div class="user-name">{{item.uername}}</div>
                        <div class="user-tel">{{item.uertel}}</div>
                    </div>
                    <div class="address-name ellipsis2">{{item.address}}</div>
                </div>
                <div class="control-right flex flex_right">
                   <img src="../../../assets/images/address_right.png" alt="" class="control-right-icon">
                </div>
            </div>
        </div> 
        <div class="address_btn">
           <div class="address_btn_item" @click="newAdress">添加地址</div>
        </div>      
    </div>
</template>

<script>
import { CheckIcon } from 'vux'
export default {
    data(){
        return {
            address: [{
                uername: '张三',
                uertel: '18225868037',
                address: '常州市武进去科教城大学城旁边1号楼软件园C座1号楼110室内',
                check: true
            },{
                uername: '张三',
                uertel: '18225868037',
                address: '常州市武进去科教城大学城旁边1号楼软件园C座1号楼110室内',
                check: false
            },{
                uername: '张三',
                uertel: '18225868037',
                address: '常州市武进去科教城大学城旁边1号楼软件园C座1号楼110室内',
                check: false
            }]
        }
    },
    components: {
        CheckIcon
    },
    methods: {
        // 编辑地址
        editAdress(){
          this.$router.push({
              path:'/editAddress'
          })
        },
        //新建地址
         newAdress(){
          this.$router.push({
              path:'/editAddress'
          })
        }
    }

}
</script>

<style scope>
.page {
    min-height: 100vh;
    background: #f5f5f5;
    width: 100%;
}
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
.control-right-icon{
    width: .59rem;
    height: .59rem;
}
.mar-bot{
    margin-bottom: .27rem;
}
.address_btn{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 0 .53rem;
    display: flex;
    align-items: center;
}
.address_btn_item{
    width: 100%;
    height: 1.17rem;
    background-color: #35acff;
    color: #fff;
    font-size: .48rem;
    border-radius: 8.93rem;
    text-align: center;
    line-height: 1.17rem;
}
</style>
