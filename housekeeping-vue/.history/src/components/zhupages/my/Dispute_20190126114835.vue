<template>
  <div clas="bgwhite">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input class="cell" title="联系人员" v-model="valuename" aria-placeholder="请输入联系人称呼"></x-input>
      <x-input class="cell" title="联系方式" v-model="valuetel" aria-placeholder="请输入联系人的联系方式"></x-input>
      <x-input class="cell" title="订单编号" v-model="orderNum" aria-placeholder="请输入争议服务的订单编号"></x-input>
      <x-textarea class="cell" placeholder="请输入详细地址" :show-counter="false" :rows="3"></x-textarea>
    </group>
    <div class="addaddress">
            <x-button type="primary">确定</x-button>
        </div>
  </div>
  
 
</template>

<script>
  import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea } from 'vux'

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
    },
    data () {
      return {
        agreeTxt: true,
        valuename: '张三',
        valuetel: '',
        orderNum:''
      }
    },
    methods: {
      bind(){
        this.demo2=!demo1;
      }
    }
  }
</script>
<style scope>

.addaddress{
    position: fixed;
    width: 90%;
    left: 5%;
    bottom: .533333rem;
}
.cell{
  border: 1px solid #868695;
  margin: .533333rem;
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
</style>
