<template>
    <div class="page">
        <div class="control-address">
            <div class="contaol-box flex flex_sb aic" v-for="(item, index) in address" v-key="index">
                <div class="control-left">
                    <div class="address-master flex flex_sb">
                        <div class="user-name">{{item.uername}}</div>
                        <div class="user-tel">{{item.uertel}}</div>
                    </div>
                    <div class="address-name ellipsis2">{{item.address}}</div>
                </div>
                <div class="control-right flex flex_right">
                    <div class="control-icon">
                        <x-icon type="ios-arrow-forward" class="icon-white" size="18"></x-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="addaddress">
            <x-button type="primary">添加地址</x-button>
        </div>
        
    </div>
</template>

<script>
import { XButton } from 'vux'
export default {
    data(){
        return {
            address: [{
                uername: '张三',
                uertel: '18225868037',
                address: '常州市武进去科教城大学城旁边1号楼软件园C座1号楼110室内'
            },{
                uername: '张三',
                uertel: '18225868037',
                address: '常州市武进去科教城大学城旁边1号楼软件园C座1号楼110室内'
            },{
                uername: '张三',
                uertel: '18225868037',
                address: '常州市武进去科教城大学城旁边1号楼软件园C座1号楼110室内'
            }]
        }
    },
    components: {
        XButton
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
.control-address .contaol-box:nth-of-type(1){
    margin-bottom: .266667rem;
}
.address-master{
    font-size: .426667rem;
}
.address-name{
    font-size: .4rem;
    margin-top: .266667rem;
}
.control-icon{
    height: .6rem;
    width: .6rem;
    background: #5876fb;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    line-height: .6rem;
}
.control-right{
    flex: 1.066667rem 0 0;
}
.addaddress{
    position: fixed;
    width: 90%;
    left: 5%;
    bottom: .533333rem;
}

</style>
