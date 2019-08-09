<template>
  <div id="home">
    <Header/>
    <!-- <Footer/> -->
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from './header/header'
// import Footer from './footer/index'

export default {
  name: 'home',
  components: {
    Header,
    // Footer,
  }
}
</script>

<style scoped>
#home {
  width:100%;
  height:100%;
  font-size: 0.14rem
}
</style>