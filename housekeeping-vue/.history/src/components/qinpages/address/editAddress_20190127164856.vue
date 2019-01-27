<template>
  <div clas="bgwhite">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input class="cell" title="联系人员" v-model="valuename" aria-placeholder="请输入联系人称呼"></x-input>
      <div class="cell">
          <popup-radio title="性别" :options="options" v-model="option"> </popup-radio>
        </div>
      <x-input class="cell" title="联系方式" v-model="valuetel" aria-placeholder="请输入联系人的联系方式"></x-input>
      <x-address class="cell" title="服务地址" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea class="cell" placeholder="请输入详细地址" :show-counter="false" :rows="3" v-model="textVal"></x-textarea>
    </group>
     <group>
      <check-icon :value.sync="selectBol"> {{ '设为默认地址' }}</check-icon>
    </group>
    <div class="addaddress">
            <x-button type="primary" @click.native="submitFn">确定</x-button>
        </div>
  </div>
  
 
</template>

<script>
  import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea } from 'vux'
  import {ChangeAddress} from "../../../axios/api.js"
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
        valuename: '',
        valuetel: '',
        option: '男',
        options: ['男', '女'],
        id:0,//地址Id
        selectBol:true,
        textVal:'',//详细地址
      }
    },
    methods: {
      submitFn(){
        let data = {
          "Id": this.id,
          "CityIdOne":this.addressValue[0],
          "CityIdTwo": this.addressValue[1],
          "CityIdThree":this.addressValue[2],
          "AddressDetail": this.textVal,
          "Contacts": this.valuename,
          "ContactsTel": this.valuetel,
          "IsDefault": this.selectBol,
          "Token": localStorage.getItem('STORAGE_TOKEN')
        }
        ChangeAddress(data).then(res=>{
           this.$vux.loading.show({
              text: res.Msg
              })
              setTimeout(()=>{
                this.$vux.loading.hide()
              },1000)
        })
      }
    },
    created() {
      if(Object.keys(this.$route.query)){
          this.id = this.$route.query.id 
       }
    },
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
