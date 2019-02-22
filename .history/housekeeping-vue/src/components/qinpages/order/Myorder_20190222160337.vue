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
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit" :down="mescrollDown">
      <!-- <div class="order-detail" v-for="(itemCon,index) in orderitem"  v-show="index == num"> -->
        <!-- 单个项目 -->
        <div class="myorder-box" v-for="(item,sindex) in orderitem" :id="item.Id">
          <!-- 暂无订单 -->
          <div class="nonow" v-show="isorder">
                <div class="nonowpng">
                  <img src="../../../assets/images/nonoew.png" alt="">
                </div>
                <p class="nonowtxt">暂无订单!</p>
          </div>
          <div class="myorder-tit flex flex_sb aic">
            <span>{{item.CommoditySeriesName}}</span>
            <i>{{item.StateName}}</i>
          </div>
          <div class="myorder-body">
            <div class="myorder-body-item flex flex_sb"
              v-for="(oitem,oindex) in item.CommodityDetailOne"
            >
              <div class="myorder-body-name fg2">{{oitem.Name}}</div>
              <div class="myorder-body-con fg1 flex flex_sb">
                <div class="myorder-con-item">￥{{oitem.Price}}/{{oitem.UnitName}}</div>
                <div class="myorder-con-mum">x{{oitem.totalCount}}</div>
              </div>
            </div>
          </div>
          <div class="myorder-foot flex flex_sb aic">
            <div class="myorder-foot-time">18.08.10 11:11</div>
            <div class="myorder-foot-total">合计：{{item.orderTotal}}元</div>
          </div>
        </div>
      <!-- </div> -->
      </mescroll-vue>
    </div>
    
  </div>
</template>
<script>
import { getorderlist } from "../../../axios/api.js";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  data() {
    return {
      name: "", //功能名称
      bottomBol: false, //是否滚动的底部
      mescrollDown: {
        auto: true
      },
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认20
        },
        noMoreSize: 5,
        auto: true,
        htmlNodata: '<p class="upwarp-nodata">-- 暂无更多数据 --</p>',
        onScroll: this.scrollHandel
      },
      orderList: ["全部", "待付款", "待服务", "服务中", "待评价"],
      isorder: true,
      orderitem: null,
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
    MescrollVue
  },
  methods: {
    tab(index) {
      this.num = index;
      this.orderitem.splice(0, this.orderitem.length);
      this.getorderlistshow(index + 1);
    },
    // 获取订单
    getorderlistshow(sindex){
      let _this = this;
      let data = {token: localStorage.getItem('STORAGE_TOKEN'),state: '', page:1, pageSize: 10}
      getorderlist(data).then(res => {
          console.log(res);
          if(res.Data.length > 0){
            _this.isorder = false;
            _this.orderitem = res.Data;
            let temptaotal = 0
            res.Data.forEach(element => {
              element.CommodityDetailOne.forEach(ele => {
                temptaotal +=ele.Price * ele.Count
              })
              element.orderTotal = temptaotal.toFixed(2)
            });
          }else{
              _this.isorder = true;
          }
         
      })
    },
     // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    //滑动列表
    scrollHandel(mescroll, y, isUp) {
      this.$nextTick(function() {
        if (y > 10) {
          this.bottomBol = true;
        } else {
          this.bottomBol = false;
        }
      });
    },
    //上拉加载更多
    upCallback(page, mescroll) {
      let data = {
        token: localStorage.getItem('STORAGE_TOKEN'),
        state: '',
        page: page.num,
        pageSize: page.size
      };
      getorderlist(data)
        .then(response => {
          // 请求的列表数据
          let arr = response.Data;
          // 如果是第一页需手动制空列表
          if (page.num === 1) this.goodsList = [];
          // 把请求到的数据添加到列表
          this.goodsList = this.goodsList.concat(arr);
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
          console.log(res.Data);
        })
        .catch(e => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr();
        });
    }
  },
  created: function (){
    // 获取订单
    this.getorderlistshow()
  }
};
</script>
<style scope>
.order-title {
  height: 1.133333rem;
  width: 100%;
  position: fixed;
  top: 1.173333rem;
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
  margin-top: 2.533333rem;
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

