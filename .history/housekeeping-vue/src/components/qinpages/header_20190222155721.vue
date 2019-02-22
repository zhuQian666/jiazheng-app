<template>
    <div class="header flex flex_sb aic">
    <x-icon type="ios-arrow-left" size="30" class="white" @click="$router.back(-1)"></x-icon>
    <div class="header-tit">{{tit}}</div>
    <div class="header-contral">{{titOther}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: ['tit','titOther']
}
</script>
    
<style scope>
    .header{
        height: 1.173333rem;
        width: 100%;
        box-shadow: 0 3px 5px #ddd;
        padding: 0 .266667rem;
        color: #fff;
        background: #3498ff;
        position: fixed;
        left: 0;
        top: 0;
        margin-bottom: 1.173333rem;
        z-index: 99;
    }
    .header .header-tit{
        font-size: .48rem;
    }
    .header .header-contral{
        font-size: .426667rem;
    }
    .white{
        fill: #fff;
    }
</style>
