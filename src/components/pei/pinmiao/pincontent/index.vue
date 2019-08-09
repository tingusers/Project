<template>
  <div id="pinmiaocontent">
    <Piniaoheader />
    <div id="pinmiaocut">
      <div
        :class="pinactive===index ?'active1' :'' "
        v-for="(item,index) in pinname"
        :key="index"
        @click="pinmiaocutclick(index)"
      >
        <span>{{item}}</span>
      </div>
    </div>
    <div class="pinmiaoconbox">
    <!-- 今日上新 -->
    <pei-BScroll v-show="pinshow">
      <div class="pinmiaocon" v-show="pinshow">
        <div class="pinskill" v-for="(item,index) in oldimg" :key="index">
          <img :src="item" />
          <div class="pinskill_bottom">
            <div class="pinskill_con" v-for="(item1,index) in olddate[index]" :key="index">
              <a href="#">
                <img :src="item1.img_url" />
                <span>￥{{item1.sale_price}}</span>
                <del>{{item1.original_price}}</del>
              </a>
            </div>
          </div>
        </div>
      </div>
  </pei-BScroll>
  <!-- 明日预告 -->
  <pei-BScroll v-show="pinshow1">
      <div class="pinmiaocon" >
        <div class="pinskill"  v-for="(item2,index) in newimg" :key="index">
          <img :src="item2" />
          <div class="pinskill_bottom">
            <div class="pinskill_con" v-for="(item3,index) in newdate[index]" :key="index">
              <a href="#">
                <img :src="item3.img_url" />
                <span>￥{{item3.sale_price}}</span>
                <del>{{item3.original_price}}</del>
              </a>
            </div>
          </div>
        </div>
      </div>
    </pei-BScroll> 
    </div>
  </div>
</template>

<script>
import Piniaoheader from "./pinheader";
import {pinmiao1,pinmiao2,pinmiao3,pinmiao4,pinmiao5,pinmiao6,
        pinmiao7,pinmiao8,pinmiao9,pinmiao10,pinmiao11,pinmiao12
} from "api/movie"
export default {
  name: "pinmiaocontent",
  components: {
    Piniaoheader
  },
  data() {
    return {
      pinname: ["今日上新", "明日预告"],
      pinactive: 0,
      pinshow:true,
      pinshow1:false,
      olddate:[],
      oldimg:[],
      newdate:[],
      newimg:[]
    };
  },
  methods: {
    pinmiaocutclick(index) {
      if(index===0){
        this.pinshow=true;
        this.pinshow1=false;
      }else{
        this.pinshow=false;
        this.pinshow1=true;
      }
      this.pinactive = index;
      
    }
  },
  // 渲染今日上新品牌秒杀数据1-6
  // 渲染明日预告品牌秒杀数据7-12
  async created(){
    let pinold1=await pinmiao1();
    let pinold2=await pinmiao2();
    let pinold3=await pinmiao3();
    let pinold4=await pinmiao4();
    let pinold5=await pinmiao5();
    let pinold6=await pinmiao6();
    let pinnew1=await pinmiao7();
    let pinnew2=await pinmiao8();
    let pinnew3=await pinmiao9();
    let pinnew4=await pinmiao10();
    let pinnew5=await pinmiao11();
    let pinnew6=await pinmiao12();
    this.oldimg.push(pinold1.data.shops.brand_entry_img,
                      pinold2.data.shops.brand_entry_img,
                      pinold3.data.shops.brand_entry_img,
                      pinold4.data.shops.brand_entry_img,
                      pinold5.data.shops.brand_entry_img,
                      pinold6.data.shops.brand_entry_img,
                      )
    this.newimg.push(pinnew1.data.shops.brand_entry_img,
                      pinnew2.data.shops.brand_entry_img,
                      pinnew3.data.shops.brand_entry_img,
                      pinnew4.data.shops.brand_entry_img,
                      pinnew5.data.shops.brand_entry_img,
                      pinnew6.data.shops.brand_entry_img,
                      )
    var olddate1=[],olddate2=[],olddate3=[],olddate4=[],olddate5=[],olddate6=[],
        newdate1=[],newdate2=[],newdate3=[],newdate4=[],newdate5=[],newdate6=[];
    for(var i=0;i<3;i++){
     olddate1.push(pinold1.data.productsInfo[i])
     olddate2.push(pinold2.data.productsInfo[i]),
     olddate3.push(pinold3.data.productsInfo[i]),
     olddate4.push(pinold4.data.productsInfo[i]),
     olddate5.push(pinold5.data.productsInfo[i]),
     olddate6.push(pinold6.data.productsInfo[i]),
     newdate1.push(pinnew1.data.productsInfo[i]),
     newdate2.push(pinnew2.data.productsInfo[i]),
     newdate3.push(pinnew3.data.productsInfo[i]),
     newdate4.push(pinnew4.data.productsInfo[i]),
     newdate5.push(pinnew5.data.productsInfo[i]),
     newdate6.push(pinnew6.data.productsInfo[i])            
    }
    this.olddate.push(olddate1,olddate2,olddate3,olddate4,olddate5,olddate6)
    this.newdate.push(newdate1,newdate2,newdate3,newdate4,newdate5,newdate6)
    // console.log(this.olddate)
  }
};
</script>

<style>
#pinmiaocut {
  width: 100%;
  height: 0.41rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.16rem;
}
.active1 {
  color: #ff463c;
  padding: 0.08rem 0;
  border-bottom: 0.03rem solid #ff463c;
}
/* 列表 */
#pinmiaocontent {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0.45rem;
  overflow-y: auto;
  font-size: 0.14rem;
 
}
.pinmiaoconbox{
  width: 100%;
  height:100%;
}
.pinmiaocon {
  width: 100%;
  /* height: auto; */
  padding: 0.1rem;
  margin-top:0.1rem;
}
.pinskill {
  width: 100%;
  height: 2.55rem;
  border-radius: 0.14rem;
  background: url("../../img/skill_bg.png") no-repeat;
  overflow: hidden;
  margin-top:0.1rem;
  
}
.pinskill > img {
  width: 3.55rem;
  height: 1.03rem;
}
.pinskill_bottom {
  width: 3.3rem;
  height: 1.34rem;
  margin: 0.1rem;
  overflow: hidden;
}
.pinskill_con {
  width: 1rem;
  height: 1.23rem;
  margin: 0.05rem;
  font-size: 0.16rem;
  float: left;
}
.pinskill_con > a {
  width: 100%;
  height: 100%;
}
.pinskill_con > a > img {
  width: 1rem;
  height: 1rem;
}
.pinskill_con > a > span {
  color: #ff463c;
}
.pinskill_con > a > del {
  color: #888;
  font-size: 0.14rem;
}
</style>