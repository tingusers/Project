<template>
    <div class="miaoheadul">
        <ul class="miao_ul">
            <v-touch :class="miao_liname===index ?'miaonameactive miao_li':'miao_li'" v-for="(item,index) in miao_time" :key="index"
            @tap="handlermiaoname(index)"
            tag="li"
            >
                <span>{{item.miao_litime}}</span>
                <i>{{item.miao_litext}}</i>
            </v-touch>
        </ul>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    name:"miaoheadul",
    data(){
        return{
            miao_time:[
                {miao_litime:"00:00",miao_litext:"已开抢"},
                {miao_litime:"11:00",miao_litext:"已开抢"},
                {miao_litime:"16:00",miao_litext:"进行中"},
                {miao_litime:"明天00:00",miao_litext:"即将开抢"},
                {miao_litime:"明天11:00",miao_litext:"即将开抢"}
            ]
        }
    },
    watch:{
        
    },
    computed:{
        ...mapState({
            miao_liname:state=>state.shouheader.miao_liname
        })
    
    },
   methods:{
       ...mapActions({
           handlermiaoname:"shouheader/handlermiaoname"
       })
   }
  
}
</script>
<style>
    .miaonameactive{
        background:#ff463c
    }
    .miaoheadul{
        position: absolute;
        top:0.44rem;
        width:100%;
        height:0.44rem;
        
    }
    .miao_ul{
        height:0.44rem;
        background:#454c5b;
        color:#fff;
        margin:0;
        padding-top:0.04rem;
        overflow: hidden;

    }
    .miao_li{
        width:0.75rem;
        height:0.36rem;
        /* background:red; */
        border-radius: 0.04rem;
        margin-bottom:0.04rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.12rem;
        float: left;
    }
    .miao_li>span{
        font-size: 0.16rem;
    }
</style>