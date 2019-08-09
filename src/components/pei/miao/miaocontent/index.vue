<template>
    <div class="miaocontent">
        <pei-BScroll ref="peiscroll">
        <ul class="miaocontent_ul">
            <li class="miaocontent_li" v-for="(item,index) in productsInfolist[n]" :key="index" 
            ><a :href="item.jump_link">
                    <div class="miaocontent_left">
                        <img :src="item.img_url">
                    </div>
                    <div class="miaocontent_right">
                        <div class="miaocontent_top">{{item.product_name}}</div>
                        <div class="miaocontent_bottom">
                            <div class="miaocontent_bottom_left">
                                <span>￥{{item.directPrice}}</span>
                                <del>￥{{item.origin_price}}</del>
                                <p>已抢99%</p>
                            </div>
                            <div class="miaocontent_bottom_right">
                                马上抢
                            </div>
                        </div>
                    </div>
                </a></li>
        </ul>
    </pei-BScroll>
    </div>
</template>
<script>
import {home_api00,home_api,home_api16,home_api10,home_api1111} from 'api/movie';
import {mapActions,mapState,mapGetters} from "vuex"
export default {
    name:"miaocontent",
    data(){
        return{
            productsInfo00:[],
            productsInfo:[],
            productsInfo16:[],
            productsInfo10:[],
            productsInfo1111:[],
            productsInfolist:[],
        }
    },
    mounted(){
        // 调用子组件的方法
        this.$refs.peiscroll.handlepullingDown(()=>{
            console.log(111)
            alert("你正在刷新") 
        }),
        this.$refs.peiscroll.handlepullingUp(async()=>{
            this.$refs.peiscroll.handlepullingUp()
            for(var j=2;j<5;j++){            
            let data00=await home_api00(j);
            for(var i=0;i<data00.data.productsInfo.length;i++){
                this.productsInfo00.push(data00.data.productsInfo[i])
                this.$refs.peiscroll.handlepullingUp()
                }
            }
            let data11=await home_api(2);
            for(var i=0;i<data11.data.productsInfo.length;i++){
                this.productsInfo.push(data11.data.productsInfo[i])
                this.$refs.peiscroll.handlepullingUp()

                } 
        })
    },
    computed:{
        ...mapState({
            n:state=>state.shouheader.miao_liname
        })
    },
    async created(){
        let data00=await home_api00();
        let data11=await home_api();
        let data16=await home_api16();
        let data10=await home_api10();
        let data1111=await home_api1111();
        // console.log(data00.data.productsInfo)
        // console.log(data00)
        // 00:00
        for(var i=0;i<data00.data.productsInfo.length;i++){
            if(!data00.data.productsInfo[i].begintime){
                this.productsInfo00.push(data00.data.productsInfo[i]);
            }
        }
           // 11:00
        for(var i=0;i<data11.data.productsInfo.length;i++){
            if(!data11.data.productsInfo[i].begintime){
                this.productsInfo.push(data11.data.productsInfo[i])
            }
        }
           // 16:00
        for(var i=0;i<data16.data.productsInfo.length;i++){
            if(!data16.data.productsInfo[i].begintime){
                this.productsInfo16.push(data16.data.productsInfo[i])
            }
        }
        // 明天   // 00:00
        for(var i=0;i<data10.data.productsInfo.length;i++){
            if(!data10.data.productsInfo[i].begintime){
                this.productsInfo10.push(data10.data.productsInfo[i])
            }
        }
        // 明天   // 11:00
        for(var i=0;i<data1111.data.productsInfo.length;i++){
            if(!data1111.data.productsInfo[i].begintime){
                this.productsInfo1111.push(data1111.data.productsInfo[i])
            }
        }        
    this.productsInfolist.push(this.productsInfo00,this.productsInfo,this.productsInfo16,this.productsInfo10,this.productsInfo1111)
    },
}
</script>
<style>
.miaocontent{
    width:100%;
    position: absolute;
    top:0.88rem;
    bottom:0.45rem;
    overflow-y:auto;
}
.miaocontent_ul,.miaocontent_li>a{
    width:100%;
    height:auto;
}
.miaocontent_li{
    height:1.10rem;
    border:0.05rem solid #ddd;
    border-top:0;
    padding:0.05rem;
}

.miaocontent_left>img{
    width:0.9rem;
    height:0.9rem;
    float:left;
}
.miaocontent_right{
    width:2.55rem;
    height:0.9rem;
    float:right
}
.miaocontent_top{
    width:2.55rem;
    height:0.36rem;
    color:#444;
    font-size:0.14rem;
    overflow: hidden;
}
.miaocontent_bottom{
    width:2.55rem;
    height:0.48rem;
    margin-top:0.05rem;
}
.miaocontent_bottom_left{
    width:1.59rem;
    height:0.48rem;
    float:left;
}
.miaocontent_bottom_left>span{
    color:#ff463c;
    font-size:0.18rem;
}
.miaocontent_bottom_left>del{
    color:#ccc;
    font-size:0.12rem;
}
.miaocontent_bottom_left>p{
    color:#888;
    font-size:0.14rem;
}
.miaocontent_bottom_right{
    text-align: center;
    line-height: 0.28rem;
    width:0.6rem;
    height:0.28rem;
    float:right;
    background:#ff463c;
    border-radius: 0.05rem;
    margin:0.1rem;
    color:#fff;

}
</style>