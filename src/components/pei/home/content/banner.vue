<template>
<!-- // 轮播图 -->
  
  <div class="banner">
    <a-carousel autoplay>
      <div v-for="(item,index) in msg" :key="index">
        <img class="imgico" :src="item"/>
      </div>
    </a-carousel>
    <!-- 列表 -->
    <div class='list'>
      <ul class="listul">
            <li v-for="(item,index) in arr" :key="index">
            <a href="#"><img :src="item"></a>
          </li>
      </ul>  
    </div>
    <!-- 秒杀 -->
    <div class="seckll">
        <router-link class="miaobox" to="miao" tag="div">
            <img src="../../img/mao_title.jpg">
        </router-link>
        <div class="jishi">{{date}}</div>
        <div class="skell_list">
          <ul class="skell_ul">
            <li class="skell_li" v-for="(item,index) in productsInfolist[number]" :key="index">
              <a :href="item.jump_link">
                <img :src="item.img_url">
                <p>{{item.product_name}}</p>
                <span>￥{{item.directPrice}}</span>
                <del>￥{{item.origin_price}}</del>
              </a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
// 轮播图  使用ant design插件
import img1 from"../../img/206770066099656_y.jpg";
import img2 from"../../img/206770066099656_y.jpg";
import img3 from"../../img/206770066099656_y.jpg";
import img4 from"../../img/206770066099656_y.jpg";
// 列表
import a1 from"../../img/chagnxiao-1562827477.png";
import a2 from"../../img/xinshubang2-1562825207.png";
import a3 from"../../img/SY-iCON-3-5.10-1557488951.png";
import a4 from"../../img/icon-5.28-1559032809.png";
import a5 from"../../img/icon-jrcx-1559563476.png";
import a6 from"../../img/116550067538580_y.jpg";
import a7 from"../../img/9zhongxin-1545121233.png";
import a8 from"../../img/7chaoshi-1545121233.png";
import a9 from"../../img/00000-1564393723.png";
import aa from"../../img/12311-1556245256.jpg";
import Vue from "vue";
import {carousel} from 'ant-design-vue';
// 获取秒杀数据
import {home_api00,home_api,home_api16,home_api10,home_api1111} from 'api/movie';
Vue.use(carousel)
import {mapActions} from "vuex"
export default {
  name: "banner",
  data(){
    return{
      msg:[img1,img2],
      arr:[a1,a2,a3,a4,a5,a6,a7,a8,a9,aa],
      // daojishi
      endtime:new Date("2019/8/6 24:00:00"),
      newdate:new Date(),
      date:"",
      // productsInfo:[]
      productsInfo00:[],
      productsInfo:[],
      productsInfo16:[],
      productsInfo10:[],
      productsInfo1111:[],
      productsInfolist:[],
      number:0,
      endtime1:[new Date("2019/8/7 00:00:00"),
                new Date("2019/8/7 11:00:00"),
                new Date("2019/8/7 16:00:00"),
                new Date("2019/8/8 00:00:00"),
                new Date("2019/8/8 11:00:00")
               ],
    }
  },
  // methods:{
  //   ...mapActions({
  //     productsInfolistactions:"shouheader/productsInfolistactions"
  //   })
  // },
  async created(){
// 秒杀列表
        let data00=await home_api00();
        let data11=await home_api();
        let data16=await home_api16();
        let data10=await home_api10();
        let data1111=await home_api1111();
        console.log(data00.data.productsInfo)
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
    // this.productsInfolistactions(this.productsInfolist);


// 秒杀计时
    setInterval((animation) => {
      for(var i=0;i<this.endtime1.length;i++){
        var s=this.endtime1[i].getTime()-this.newdate.getTime()
        if(s>0){
          var second=parseInt(s/1000)%60;
          var minutes=parseInt(s/1000/60%60);
          var hours=parseInt(s/1000/60/60%24);
          this.date=hours+"时"+minutes+"分"+second+"秒";
          this.number=i-1;
          break;
        }
      }
      } ,16)


  }  
}
</script>
<style>
 
.ant-carousel , .slick-slide {
  text-align: center;
  width:100%;
  height:1.10rem;
  background: #364d79;
  overflow: hidden;
}
.imgico{
  width:100%;
   height:100%;
}
.ant-carousel , .slick-slide h3 {
  color: #fff;
}
/* 列表 */
.list{
  width:100%;
  height:1.55rem;
  overflow: hidden;
  /* positio */
}
.listul,.listul>li{
  height:0.78rem;  
}
.listul>li{
  /* padding: 0,0.05rem; */
  width:0.75rem;
  float:left;
}
.listul>li>a>img{
  margin-left:0.06rem;
  width:0.60rem;
  height:0.76rem;
}

/* 秒杀 */
.seckll{
  width:100%;
  height:2.70rem;
 border-top:0.1rem solid #ddd; 
}
.miaobox{
  width:100%;
  height:0.41rem;
}
.miaobox>img{
  width:100%;
   height:100%;
}
.jishi{
  width:100%;
  height:0.25rem;
  padding-left:1.5rem;
  font-size:0.16rem;
  color:#c30
}
/* 秒杀列表 */
.skell_list{
  width:100%;
  height:1.8rem;
  font-size:0.12rem;
  overflow: hidden;
}
.skell_ul{
  height:1.8rem;
  display: flex;
  overflow-x: auto
}

.skell_li{
  padding-left:0.02rem;
  width:0.9rem;
  height:1.8rem;
 flex-shrink:0;
}
.skell_li>a{
  width:100%;
  height:100%;
}
.skell_li>a>img{
  
  width:0.96rem;
  height:0.9rem;
}
.skell_li>a>p{
  margin:0.1rem 0;
  width:0.96rem;
  height:0.34rem;
  overflow: hidden;
  font-size:0.12rem;
  color:#444
}
.skell_li>a>span,.skell_li>a>del{
   padding-left:0.1rem;
  display:block;
  width:0.96rem;
  height:0.19rem;
}
.skell_li>a>del{
  color:#ccc;
}
.skell_li>a>span:nth-child(3){
  color:#c30;
  font-size:0.14rem;
}
</style>
