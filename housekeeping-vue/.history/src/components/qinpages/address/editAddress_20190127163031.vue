<template>
  <div clas="bgwhite">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input class="cell" title="联系人员" v-model="valuename" aria-placeholder="请输入联系人称呼"></x-input>
      <div class="cell">
          <popup-radio title="性别" :options="options" v-model="option">
          </popup-radio>
        </div>
      <x-input class="cell" title="联系方式" v-model="valuetel" aria-placeholder="请输入联系人的联系方式"></x-input>
      <x-address class="cell" title="服务地址" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea class="cell" placeholder="请输入详细地址" :show-counter="false" :rows="3"></x-textarea>
    </group>
     <group>
      <check-icon :value.sync="option"> {{ '设为默认地址' }}</check-icon>
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
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        valuename: '张三',
        valuetel: '',
        option: 0,
        options: ['男', '女'],
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
