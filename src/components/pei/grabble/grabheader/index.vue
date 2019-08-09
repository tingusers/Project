<template>
  <div class="grabheaderbox">
    <div class="grabheader">
      <span class="iconfont icon-fanhui grabiconfont" @click="clickback()"></span>
      <div class="grabheader_center">
        <div class="grabheader_center_input">
          <span class="iconfont icon-magnifier grabiconfont"></span>
          <input type="text" v-model="searchVal" placeholder="30万图书地址九折"/>
        </div>
      </div>
      <div class="grabheader_right">搜索</div>
    </div>
  </div>
  
</template>
<script>
import {home_list} from "api/movie"
import {mapActions,mapState} from "vuex"
export default {
  name: "grabheaderbox",
  data() {
      return{
            searchVal:"",
            searchlist:[],
      }
  },
      methods:{
        ...mapActions({
            sousuohandler:"shouheader/sousuohandler"
        })
      },
  computed:{
    ...mapState({productsInfolist:state=>state.shouheader.productsInfolist})
  },
  watch:{
     async searchVal(newval,oldval){
        let seach=await home_list(newval)
        this.searchlist=seach.reco_list?seach.reco_list:[]
        this.sousuohandler(this.searchlist)
      }
  },
};
</script>
<style>
.grabheaderbox {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.44rem;
}
.grabheader,
.grabheader_right {
  display: flex;
  text-align: center;
  height: 0.44rem;
  margin-top: 0.05rem;
}
.grabheader_right {
  margin-left: 0.2rem;
  margin-top: 0.08rem;
}
.grabheader > span {
  margin-top: 0.05rem;
}
.grabiconfont {
  width: 0.44rem;
  color: #444;
  font-size:0.16rem;
}
.grabheader_center {
  width: 2.44rem;
  margin-left: 0.2rem;
}
.grabheader_center_input {
  height: 0.25rem;
  background: #e8ecf0;
  margin-top: 0.05rem;
  border-radius: 0.15rem;
  padding-left: 0.1rem;
  overflow: hidden;
}
.grabheader_centerr_input > span {
  height: 0.25rem;
  line-height: 0.25rem;
}
.grabheader_center_input > input {
  width: 2.1rem;
  height: 0.25rem;
  border: none;
  background: #e8ecf0;
  outline: none;
  font-size: 0.14rem;
  color: #ccc;
}
</style>