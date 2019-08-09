<template>
    <div id="hobby">
        <ul class="hobby_ul">
            <li class="hobby_li" v-for="(item,index) in reco_list " :key="index"
            ><a :href="item.jump_url">
                    <div class="hobby_img"><img :src="item.image_url"></div>
                    <div class="hobby_text">{{item.name}}</div>
                    <p class="hobby_p">
                        <span>当当自营</span>
                        <i>折满</i>
                    </p>
                    <span class="hobby_span">￥{{item.price}}</span>
                </a></li>
        </ul>
    </div>
</template>
<script>
import {home_list} from 'api/movie';
// import {mapActions} from 'vuex'
export default {
    name:"hobby",
    data(){
        return{
            reco_list:[],
            sousuolist:[]
        }
    },
    async created(){
    // home_list
        let homeList=await home_list();
        this.reco_list=homeList.reco_list;
        // console.log(this.reco_list,111)
    }
}
</script>
<style>
    #hobby,.hobby_ul{
        width:100%;
        height:20rem;
        /* height:100%; */
    }
    .hobby_li{
        width:1.87rem;
        height:2.69rem;
        float:left;
        border:0.02rem solid #e8ecf0
    }
    .hobby_li>a{
        width:100%;
        height:100%;
        
    }
    .hobby_img,.hobby_img>img{
        width:1.8rem;
        height:1.8rem;
    }
    .hobby_text{
        width:1.8rem;
        height:0.36rem;
        overflow: hidden;
        margin-bottom:0.1rem;
        color:#232323;
    }
    .hobby_p,.hobby_span{
        display: block;
        width:1.85rem;
        height:0.21rem;
        padding:0;
        margin:0;
    }
    .hobby_p>span,.hobby_p>i{
        width:0.54rem;
        height:0.15rem;
        border:1px solid #f2303c;
        border-radius: 0.04rem;
        margin-right:0.1rem;
        color:#f2303c;
    }
    .hobby_p>i{
        background:#f2303c;
        color:#fff;
    }
    .hobby_span{
        color:#f2303c;
    }
</style>
