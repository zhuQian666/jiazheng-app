<template>
  <div clas="bgwhite">
    <div class="dispute-tit">
        <span class="dispute-tit-dage">*</span>请填写处理争议的联系人信息
    </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input class="cell" title="联系人员" v-model="valuename" placeholder="请输入联系人称呼"></x-input>
      <x-input class="cell" title="联系方式" v-model="valuetel" placeholder="请输入联系人的联系方式"></x-input>
      <x-input class="cell" title="订单编号" v-model="orderNum" placeholder="请输入争议服务的订单编号"></x-input>
      <x-textarea class="cell" v-model="textVal" :show-counter="false" :rows="3"></x-textarea>
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
        orderNum:'',
        textVal:""
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
.bgwhite  /deep/ .weui-cell__bd input[type="button"], input[type="submit"], input[type="text"], input[type="tel"], input[type="email"], input[type="number"], textarea, button {
    font-size: .43rem !important;
}
.dispute-tit{
    width: 100%;
    height: 1.33rem;
    font-size: .43rem;
    color: #4c4c4c;
}
</style>
