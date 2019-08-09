<template>
    <!-- <keep-alive> -->
      <!-- <router-view></router-view> -->
    <!-- </keep-alive> -->
    <div id="app">
        <router-view> </router-view>
        <Homefooter v-if="$route.meta.homefooter"/>
        <Miaofooter v-if="$route.meta.miaofooter"/>
      </div>
</template>
<script>
    import Miaofooter from './components/pei/miao/miaofooter/index.vue'
    import Homefooter from "./components/pei/home/footer/index.vue"
    export default {
      name: 'app',
      components: {
        Miaofooter,
        Homefooter
        
      },
    }
</script>

<style lang="scss">
// #app {
//   width: 100%;
//   height: 100%;
//   font-size: 0.12rem;
// }
#app {
  width:100%;
  height:100%;
  font-size: 0.12rem
}
</style>


