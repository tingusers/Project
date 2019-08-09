<template>
    <div class="tuanheader">
        <div class="pintuanheader">
            <span class="iconfont icon-fanhui tuaniconfont" @click="clickback()"></span>
            <div>当当拼团</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"tuanheader",
    methods:{
        clickback(){
            this.$router.back();
        }
    }
}
</script>
<style>
    .tuanheader{
        position: absolute;
        top:0;
        width:100%;
        height:0.44rem;
        
    }
    .pintuanheader{
        display: flex;
        text-align: center;
        height:0.44rem;
        line-height: 0.44rem;
    }
    .pintuanheader>div{
        width:100%;
        margin-right:0.44rem;
        font-size:0.18rem;
    }
    .tuaniconfont{
        width:0.44rem;
        color:#444
    }
</style>