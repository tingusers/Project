<template>
  <div class="maxlist">
    <div class="listimg">
      <img src="../../img/1242x366_lyx_0802-1564736562.jpg" />
    </div>
    <div class="card_list">
        <ul class="card_ul">
            <li class="card_li" v-for="(item,index) in homeList" :key="index">
                <a href="#">
                    <span>
                        <b>{{item.home_text1}}</b>
                        <i>{{item.home_text2}}</i>
                    </span>
                    <img :src="item.home_img">
                </a>
            </li>
            
        </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { card } from "ant-design-vue";
Vue.use(card);
import b1 from"../../img/shekeke-1564482338.png";
import b2 from"../../img/shenghuo1-1563346755.jpg";
import b3 from"../../img/tongs-1564565133.jpg";
import b4 from"../../img/tongshu1-1564482106.png";
import b5 from"../../img/weny-1564573590.jpg";
import b6 from"../../img/xiaoshuo2-1562724459.png";
import b7 from"../../img/jiaofu-1564482390.png";
import b8 from"../../img/jf-1564565133.jpg";
import b9 from"../../img/0-2-500x500-1552375788.jpg";
export default {
  name: "maxlist",
  data(){
    return{
      homeList:[
      {home_text1:"文学艺术",home_text2:"三件折上折",home_img:b1},
      {home_text1:"电子书",home_text2:"满3件6折",home_img:b2},
      {home_text1:"万种宣书",home_text2:"3件折上7折",home_img:b3},
      {home_text1:"亲子生活",home_text2:"3件折上7折",home_img:b4},
      {home_text1:"人文社科",home_text2:"3件折上7折",home_img:b5},
      {home_text1:"中小学教辅",home_text2:"每满79减30",home_img:b6},
      {home_text1:"科技图书",home_text2:"3件折上7折",home_img:b7},
      {home_text1:"经济管理",home_text2:"3件折上7折",home_img:b8},
      {home_text1:"考试图书",home_text2:"每满100减30",home_img:b9}
    ]
    }
  }
};
</script>
<style>
.maxlist {
  border-top: 0.1rem solid #ddd;
  width: 100%;
  height: 100%;
}
.listimg,
.listimg > img {
  width: 100%;
  height: 1rem;
}
.card_list,.card_ul{
    width:100%;
    height:4.68rem;
    
}
.card_li{
    width:1.25rem;
    height:1.56rem;
    padding:0.15rem 0 0.12rem 0.12rem;
    float: left;
    border-bottom:1px solid #ddd;
    border-right:1px solid #ddd;
}
.card_li>a{
    display:block;
    width:100%;
    height:100%;
}
.card_li>a>span{
    display:block;
    width:1rem;
    height:0.47rem;
    text-align: center;
    font-size:0.14rem;
}
.card_li>a>span>i,.card_li>a>span>b{
    display:block;
    padding:0.02rem;
    font-weight: normal;
    font-style: normal;
}
.card_li>a>span>i{
    font-size:0.12rem;
    color:#ef2933
}
.card_li>a>img{
    width:0.9rem;
    height:0.9rem;
}
</style>