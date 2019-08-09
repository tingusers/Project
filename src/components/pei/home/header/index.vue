<template>
    <div class="head_head">
        <div class="head_left">
            <a href="#">
                <img class="head_logo" src="../../img/logo.png">
            </a>
        </div>
        <div class="head_center">
            <div class="head_center_input">
                <span class="iconfont icon-magnifier"></span>
                <router-link to="grabble" tag="input" type="text" value="拍卖1元起"/>
                <!-- <input type="text" value="拍卖1元起"> -->
            </div>
        </div>
        <div class="head_right">
            <span class="iconfont icon-fenlei"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:"head_head",
}
</script>
<style>
    .head_head{
        width:100%;
        height:0.36rem;
        /* position: absolute; */
    }
    .head_logo,.head_left,.head_center,.head_right{
        height:0.36rem;
        float:left;

    }
    .head_left{
        width:0.44rem;
    }
    .head_center{
        width:2.44rem;
         margin-left:0.20rem
    }
    .head_center_input{
        height:0.25rem;
        background:#ddd;
        margin-top:0.05rem;
        border-radius:0.15rem;
        padding-left:0.10rem;
        overflow: hidden;
    }
    .head_center_input>span{
        height:0.25rem;
        line-height: 0.25rem;
        font-size:0.16rem;
    }
    .head_center_input>input{
        width:2.10rem;
        height:0.25rem;
        border:none;
        background:#ddd;
        outline: none;
        font-size: 0.14rem;
        color:#888;
    }
    .head_right{
        float:right;
       width:0.44rem; 
       text-align: center;
       line-height: 0.36rem;
    }
    .head_right>span{
        font-size:0.24rem
    }

</style>
