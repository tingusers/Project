<template>
    <div class="miaofooter">
         <router-link 
         class="miaofootcent"
         v-for="(item,index) in msg" :key="index"
         tag="div"
         :to="item.linkTo"
        >
            <span :class="item.icon"></span>
            <div>{{item.name}}</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"miaofooter",
    data(){
        return{
            msg:[
                {name:"秒杀",icon:"iconfont icon-miaosha",linkTo:"miao"},
                {name:"品牌秒杀",icon:"iconfont icon-pinpaimiaosha",linkTo:"pinmiao"},
                {name:"批团",icon:"iconfont icon-pintuan2",linkTo:"pintuan"},
            ],
            activeinfo:0,
        }
    },
    methods:{
        handlerfooter(index){
             console.log(index)
                this.activeinfo=index
               
                console.log(this.activeinfo)
        }
    }
}
</script>
<style>
 .miaofooter{
        width: 100%;
        position: absolute;
        bottom:0;
        height: 0.45rem;
        border-top:1px solid #ccc;
        display: flex;
        justify-content: space-around;
    }
    .miaofootcent{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:0.12rem;
    }
    .miaofootcent>span{
        font-size:0.22rem
    }
    .router-link-active {
        color:#ff0030
    }

</style>