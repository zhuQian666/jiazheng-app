<template>
  <div id="app">
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
#app{
  box-sizing:border-box;
-moz-box-sizing:border-box; /* Firefox */
-webkit-box-sizing:border-box; /* Safari */
  padding-top: 1.17rem;
}
</style>
