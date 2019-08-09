<template>
  <div id="grabble">
    <Grabheader/>
    <Grabcontent/>
  </div>
</template>

<script>
import Grabheader from './grabheader/index'
import Grabcontent from './gerbcontent/index'

export default {
  name: 'grabble',
  components: {
    Grabheader,
    Grabcontent,
  }
}
</script>

<style scoped>
#grabble {
  width:100%;
  height:100%;
  font-size: 0.14rem;
  position: relative;
}
</style>