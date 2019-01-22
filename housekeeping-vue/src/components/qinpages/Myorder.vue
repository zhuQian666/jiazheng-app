<template>
  <div class="page">
    <ul class="order-title flex flex_sa aif">
      <li
        v-for="(item,index) in orderList"
        :class="{active:index == num}"
        @click="tab(index)"
      >{{item}}</li>
    </ul>
    <div class="tabCon">
      <div class="order-detail" v-for="(itemCon,index) in orderDetail" v-show="index == num">
        <!-- 单个项目 -->
        <div class="myorder-box" v-for="(item,sindex) in itemCon">
          <!-- 暂无订单 -->
          <!-- <div class="nonow">
                <div class="nonowpng">
                  <img src="../../assets/images/nonoew.png" alt="">
                </div>
                <p class="nonowtxt">暂无订单!</p>
          </div>-->
          <div class="myorder-tit flex flex_sb aic">
            <span>{{item.ordername}}</span>
            <i>{{item.orderstatus}}</i>
          </div>
          <div class="myorder-body">
            <div
              class="myorder-body-item flex flex_sb"
              v-for="(oitem,oindex) in item.orderChildren"
            >
              <div class="myorder-body-name fg2">{{oitem.childrenName}}</div>
              <div class="myorder-body-con fg1 flex flex_sb">
                <div class="myorder-con-item">￥{{oitem.childrenPrice}}/台</div>
                <div class="myorder-con-mum">x{{oitem.childrenMum}}</div>
              </div>
            </div>
          </div>
          <div class="myorder-foot flex flex_sb aic">
            <div class="myorder-foot-time">{{item.orderTime}}</div>
            <div class="myorder-foot-total">合计：{{item.orderTotal}}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Alert, Confirm } from "vux";

export default {
  data() {
    return {
      orderList: ["全部", "待付款", "待服务", "服务中", "待评价"],
      orderDetail: [
        [
          {
            ordername: "保洁服务",
            orderstatus: "待付款",
            orderChildren: [
              {
                childrenName: "双开门冰箱清洗",
                childrenPrice: "80.00",
                childrenMum: "1"
              },
              {
                childrenName: "双开门冰箱清洗",
                childrenPrice: "80.00",
                childrenMum: "1"
              }
            ],
            orderTime: "18.08.10 11:11",
            orderTotal: "2012"
          },
          {
            ordername: "保洁服务",
            orderstatus: "待付款",
            orderChildren: [
              {
                childrenName: "双开门冰箱清洗",
                childrenPrice: "80.00",
                childrenMum: "1"
              },
              {
                childrenName: "双开门冰箱清洗",
                childrenPrice: "80.00",
                childrenMum: "1"
              }
            ],
            orderTime: "18.08.10 11:11",
            orderTotal: "2012"
          }
        ],
        [2],
        [3],
        [4],
        [5]
      ],
      num: 0
    };
  },
  components: {
    Alert,
    Confirm
  },
  methods: {
    tab(index) {
      this.num = index;
    }
  }
};
</script>
<style scope>
.order-title {
  height: 1.133333rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  box-shadow: 0 2px 5px #999;
  font-size: 0.32rem;
  color: #3487ff;
}
.order-title li {
  border-bottom: 2px solid #fff;
  line-height: 1.133333rem;
  padding: 0 0.4rem;
}
.order-title li.active {
  border-bottom: 2px solid #3487ff;
}
.tabCon {
  width: 100%;
  margin-top: 1.133333rem;
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
}
.nonowpng {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 2.4rem auto 1.133333rem;
  overflow: hidden;
}
.nonowtxt {
  color: #3386ff;
  font-size: 0.48rem;
  text-align: center;
}
.myorder-box {
  border-bottom: 0.266667rem solid #f5f5f5;
  width: 100%;
}
.myorder-box .myorder-tit {
  padding: 0 0.266667rem;
  height: 1.202667rem;
  border-bottom: 1px solid #f5f5f5;
}
.myorder-box .myorder-tit > span {
  color: #1a1a1a;
  font-size: 0.4rem;
}
.myorder-box .myorder-tit > i {
  color: #191919;
  font-size: 0.32rem;
}
.myorder-body-item {
  margin: 0.16rem 0.266667rem;
  font-size: 0.32rem;
  color: #191919;
}
.myorder-foot {
  height: 1.173333rem;
  padding: 0 0.266667rem;
  border-top: 1px solid #f5f5f5;
  font-size: 0.32rem;
  color: #191919;
}
.myorder-body {
  padding: 0.16rem 0;
}
</style>

