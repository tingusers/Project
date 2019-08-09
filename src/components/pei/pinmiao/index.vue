<template>
  <div id="pinmiaobox">
        <Pincontent/>
        <!-- <Miaofooter/> -->
  </div>
</template>

<script>
import Pincontent from './pincontent/index'
// import Miaofooter from '../miao/miaofooter/index'
export default {
  name: 'pinmiaobox',
  components: {
    Pincontent,
    // Miaofooter,
  }
}
</script>

<style scoped>
#pinmiaobox {
  width:100%;
  height:100%;
  font-size: 0.14rem;
  position: relative;
}
</style>