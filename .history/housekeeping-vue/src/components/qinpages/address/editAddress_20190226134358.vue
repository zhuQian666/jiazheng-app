<template>
  <div clas="bgwhite">
    <myHd :tit="tit"></myHd>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input class="cell" title="联系人员" v-model="valuename" placeholder="请输入联系人称呼"></x-input>
      <div class="cell">
          <popup-radio title="性别" :options="options" v-model="option"> </popup-radio>
        </div>
      <x-input class="cell" title="联系方式" v-model="valuetel" placeholder="请输入联系人的联系方式"></x-input>
      <x-address class="cell" title="服务地址" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea class="cell" placeholder="请输入详细地址" :show-counter="false" :rows="3" v-model="textVal"></x-textarea>
    </group>
     <group>
      <check-icon :value.sync="selectBol"> {{ '设为默认地址' }}</check-icon>
    </group>
    <div class="addaddress">
        <x-button  @click.native="submitFn" type="warn">删除地址</x-button>
        <x-button type="primary" @click.native="submitFn">确定</x-button>
      </div>
  </div>
  
 
</template>

<script>
  import { GroupTitle, Group, Cell, PopupRadio,CheckIcon, XInput,XButton, Selector, PopupPicker, ChinaAddressData, XAddress, XTextarea } from 'vux'
  import {ChangeAddress,GetUserAddress} from "../../../axios/api.js"
  import myHd from "../header.vue"
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
      PopupRadio,
      XButton,
      myHd

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
        addressArr:'',//地址信息
        tit:'',//头部标题
        deleteAddressBol:false,//是否显示删除地址
      }
    },
    methods: {
      submitFn(){
           if(!!!this.valuename){
                this.$vux.loading.show({
                  text: '请输入联系人称呼'
                })
              setTimeout(()=>{
                this.$vux.loading.hide()
              },1000)
              return;
          }
           if(!!!this.valuetel){
              this.$vux.loading.show({
                text: '请输入联系人的联系方式'
              })
            setTimeout(()=>{
              this.$vux.loading.hide()
            },1000)
            return;
          }
          if(!!!this.textVal){
              this.$vux.loading.show({
                text: '请输入详细地址'
              })
            setTimeout(()=>{
              this.$vux.loading.hide()
            },1000)
            return;
        }
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
                this.$vux.loading.hide();
                this.$router.back();
              },1000)
        })
      }
    },
    created() {
      if(Object.keys(this.$route.query)){
          this.id = this.$route.query.id;
          if(this.id === 0) {
            this.tit = "添加地址",
            this.deleteAddressBol = false
            return;
          }
          this.tit = "编辑地址"
          this.deleteAddressBol = true
          let data = {
            token:localStorage.getItem('STORAGE_TOKEN'),
            id:this.id
          }
          GetUserAddress(data).then(res=>{
            let obj = res.Data;
            this.valuename = obj.Contacts;
            this.selectBol = obj.IsDefault;
            this.textVal = obj.AddressDetail;
            this.valuetel = obj.ContactsTel;
            this.addressValue = [obj.CityIdOne,obj.CityIdTwo,obj.CityIdThree];
          })
          
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