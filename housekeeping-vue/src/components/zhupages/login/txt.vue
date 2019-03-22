<template>
    <div class="page">
        <myHd :tit="tit"></myHd>
        <div class="txtcom">
            @所有人
总有那么一天球场会画上彩虹 ，挥洒的汗水不会白流，是谁将我心中的梦想一遍遍地敲碎，是谁一遍遍的告诉我只是炮灰，太阳下的大地会发芽，绿绿的草和暖暖的风，奔流的河水将不会停留🏸 🏸 🏸 
下午场开始报名啦 
3月11日，周一下午14:00~17:30亿丰羽毛球馆10元畅打，费用AA具体见群内账单。欢迎各位球友踊跃报名！谢谢
晚场18：30～21：00会员制费用AA，欢迎各位球友踊跃报名。谢谢 
球馆地址:合肥市瑶海区龙岗路与程士范路交口向东200米
预约电话:18356019733王经理
以球会友，友谊长存，相约亿丰羽毛球健身馆
        </div>
    </div>
</template>

<script>
import myHd from "../../qinpages/header"
export default {
  data() {
    return {
        tit:"协议详情"
    };
  },
  created() {},
  components: {
    myHd
  }
};
</script>

<style>
.txtcom{
    padding: .266667rem .4rem;
    color: #666;
    font-size: .426667rem;
    text-align: justify;
}
</style>
