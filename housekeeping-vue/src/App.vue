<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.page{
  margin-top: 1.173333rem;
}
</style>
