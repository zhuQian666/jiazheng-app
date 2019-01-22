<template>
  <div class="index">
    <div class="index-top">
      <div class="index-top-info">
        <div class="index-top-user">
          <img src="../../../assets/images/0014.png" alt class="index-top-user-icon">
        </div>
      </div>
      <div class="index-top-user-name">张三</div>
      <div class="index-top-user-phone">188 2222 2222</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.index-top {
  width: 100%;
  height: 5.95rem;
  background: url("../../../assets/images/my_bg.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}
.index-top-info {
  width: 100%;
  padding-top: 0.8rem;
  display: flex;
  justify-content: center;
}
.index-top-user {
  width: 2.19rem;
  height: 2.19rem;
  overflow: hidden;
  border-radius: 50%;
}
.index-top-user-icon {
  width: 100%;
  height: 100%;
}
.index-top-user-name {
  width: 100%;
  text-align: center;
  font-size: 0.37rem;
  color: #fff;
  margin: 0.48rem 0 0.37rem;
}
.index-top-user-phone {
  width: 100%;
  text-align: center;
  font-size: 0.37rem;
  color: #fff;
}
</style>

