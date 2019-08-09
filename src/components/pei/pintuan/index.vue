<template>
  <div id="pintuan">
        <Tuanheader/>
        <Tuancontent/>
        <!-- <Miaofooter/> -->
  </div>
</template>

<script>
import Tuanheader from '../pintuan/tuanheader/index'
import Tuancontent from './tuancontent/index'
// import Miaofooter from '../miao/miaofooter/index'
export default {
  name: 'pintuan',
  components: {
    Tuanheader,
    Tuancontent,
    // Miaofooter,
  }
}
</script>

<style scoped>
#pintuan {
  width:100%;
  height:100%;
  font-size: 0.14rem;
  position: relative;
}
</style>