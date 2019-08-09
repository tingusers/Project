<template>
  <div id="grabcontent">
    <div v-show="grabflag">
        <h4 class="grabcontenth4" style="margin: '16px 0'">热门搜索:</h4>
        <div v-for="(item,index) in sousuo1" :key="index">
          <a :href="item.link_url">
              <a-tag class="grabcontenttag" color="pink">{{item.hot_word}}</a-tag>
          </a>
        </div>
        <div class="grabcontentfxed">
            <img src="../../img/redpct_icon-1541561310.gif">
        </div>
    </div>
    <div class="seachsou" v-show="seachflag">
        <ul class="seachul">
          <li>{{sss}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {tag} from 'ant-design-vue';
import {sousuo} from "api/movie"
import {mapState} from 'vuex'
Vue.use(tag)
export default {
  name: 'grabcontent',
  data(){
    return{
      sousuo1:[],
      // seachflag:false,
      // grabflag:true
    }
  },
  computed:{
    ...mapState({
      sss:state=>state.shouheader.productsInfolist,
      seachflag:state=>state.shouheader.seachflag,
      grabflag:state=>state.shouheader.grabflag,

    })
  },
  async created(){
      let sou=await sousuo();
      this.sousuo1=sou;
      console.log(this.sousuo1)
      console.log(this.sss)
  }

}
</script>

<style>
#grabcontent,.seachsoul {
  width:100%;
  height:100%;
  font-size: 0.14rem;
  position:absolute;
  top:0.45rem;
  border-top:1px solid #ccc;
  background:#f2f2f2;
}
.grabcontenth4{
    font-size:0.18rem;
    color: #646464
}
.grabcontenttag{
    height:0.28rem;
    text-align: center;
    line-height: 0.28rem;
    float: left;
    margin:0.05rem;
    font-size:0.16rem;
}
.grabcontentfxed,.grabcontentfxed>img{
    width:0.5rem;
    height:0.5rem;
    position: fixed;
    right:0;
    top:3.5rem;
}
/* .seachul>li{
  width:100%;
  height:0.5rem;
  line-height: 0.5rem;
  font-size:0.16rem;
  border-bottom:1px solid #ccc
} */
</style>