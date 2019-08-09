<template>
  <div id="miaobox">
        <Miaoheader/>
        <Miaoheaderul/>
        <Miaocontent/>
        <!-- <Miaofooter/> -->
        <!-- <router-view></router-view>   -->
  </div>
</template>

<script>
import Miaoheader from './miaoheader/index'
import Miaoheaderul from './miaoheader/miaoheader'
import Miaocontent from './miaocontent/index'
// import Miaofooter from './miaofooter/index'
export default {
  name: 'miaobox',
  components: {
    Miaoheader,
    Miaoheaderul,
    Miaocontent,
    // Miaofooter,
  }
}
</script>

<style scoped>
#miaobox {
  width:100%;
  height:100%;
  font-size: 0.14rem;
  position: relative;
}
</style>