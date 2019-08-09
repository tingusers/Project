import Vue from 'vue'
import App from './App.vue'
import observer from './utils/observer.js'
Vue.prototype.$observer = observer
import router from './router/router.js'
// import router1 from '../src/router/pei/router.js'
// import store from './store/store.js'
import store from "./store/index.js"
import './common/components/index.js'
import VueTouch from "vue-touch";
import '../public/fonticon/iconfont.css';
Vue.use(VueTouch,{name:'v-touch'})


Vue.config.productionTip = false

new Vue({
  // store,
  router,
  store,
  // router1,
  render: h => h(App)
}).$mount('#app')
