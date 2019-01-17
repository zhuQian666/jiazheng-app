<template>
  <div class="page">
    <div @click="bottomPopups">dddd</div>
  </div>
</template>
<script>
import { Alert, Confirm } from 'vux'

export default {
  data() {
    return {
      haslocal: false,      //是否显示收货人
      acceptername: 'qinhuansky',   //收货人姓名
      accepttel: '111111',          //收货人手机号
      accepteraddress: '安徽身合肥市',  //收货人地址

    };
  },
  components: {
    Alert,
    Confirm
  },
  methods:{
   bottomPopups(){
        const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
        this.$vux.confirm.show({
          // 组件除show外的属性
          onCancel () {
            console.log(this) // 非当前 vm
            console.log(_this) // 当前 vm
          },
          onConfirm () {}
        })
    },
  }
}
</script>
