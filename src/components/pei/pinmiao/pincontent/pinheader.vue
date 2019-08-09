<template>
    <div class="pinmiaohead">
        <div class="pinmiaohead">
            <span class="iconfont icon-fanhui pinmiaoiconfont" @click="clickback()"></span>
            <div>品牌秒杀</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"pinmiaohead",
    methods:{
        clickback(){
            this.$router.back();
        }
    }
}
</script>
<style>
    .pinmiaohead{
        width:100%;
        height:0.44rem;
        
    }
    .pinmiaohead{
        display: flex;
        text-align: center;
        height:0.44rem;
        line-height: 0.44rem;
    }
    .pinmiaohead>div{
        width:100%;
        margin-right:0.44rem;
        font-size:0.18rem;
    }
    .pinmiaoiconfont{
        width:0.44rem;
        color:#444;
        margin-right:0.44rem;
    }
</style>