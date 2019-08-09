import Vue from 'vue'
import Vuex from 'vuex'
import shouheader from './shouheader'
import BooksDetail from './detail/books.js'
import cart from './cart/index.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    shouheader,
    BooksDetail,
    cart
  }
})
