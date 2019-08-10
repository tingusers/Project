<template>
    <div class="content_con">
        <div class="content_conbox">
            <Banner/>
            <List/>
            <Hobby/>
        </div>
    </div>
</template>
<script>
import Banner from "./banner.vue";
import List from "./list"
import Hobby from "./hobby"

export default {
    name:"content_con",
    components:{
        Banner,
        List,
        Hobby
    }
}
</script>
<style>
   .content_con{
       /* position: absolute;
       overflow-y: auto;
       top:0.45rem; */
       width:100%;
       height:100%;
   }
   .content_conbox{
       width:auto;
       height:auto
   }
</style>
