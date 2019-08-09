<template>
    <div class="miaohead">
        <div class="miaoheader">
            <span class="iconfont icon-fanhui miaoiconfont" @click="clickback()"></span>
            <div>秒杀</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"miaohead",
    methods:{
        clickback(){
            this.$router.back();
        }
    }
}
</script>
<style>
    .miaohead{
        position: absolute;
        top:0;
        width:100%;
        height:0.44rem;
        
    }
    .miaoheader{
        display: flex;
        text-align: center;
        height:0.44rem;
        line-height: 0.44rem;
    }
    .miaoheader>div{
        width:100%;
        margin-right:0.44rem;
        font-size:0.18rem;
    }
    .miaoiconfont{
        width:0.44rem;
        color:#444
    }
</style>