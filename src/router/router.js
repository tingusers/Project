import Vue from 'vue'
// import App from 'module';
import Router from 'vue-router'
import Miao from "../components/pei/miao/miao.vue"
import Home from "../components/pei/home/index.vue"
import Pinmiao from "../components/pei/pinmiao/index.vue"
import Pintuan from "../components/pei/pintuan/index.vue"
import Grabble from "../components/pei/grabble/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        miaofooter:false,
        auth:false,
        homefooter:true,
      }
    },
    {
      path: '/miao',
      name: 'miao',
      component: Miao,
      meta:{
        miaofooter:true,
        auth:false
      }
    },
    {
      path: '/pinmiao',
      name: 'pinmiao',
      component: Pinmiao,
      meta:{
        miaofooter:true,
        auth:false
      },
      // component:()=>import('../../components/pei/pinmiao/index.vue')
    },
    {
      path: '/pintuan',
      name: 'pintuan',
      component: Pintuan,
      meta:{
        miaofooter:true,
        auth:false
      },
      // component:()=>import('../../components/pei/pintuan/index.vue')
    },
    {
      path: '/grabble',
      name: 'grabble',
      component: Grabble,
      meta:{
        miaofooter:false,
        auth:false
      },
      // component:()=>import('../components/pei/grabble/index.vue')
    },
    {
      path:'/fenlie',
      redirect:'/dd_category',
      meta:{
        miaofooter:false,
        auth:false
      }
    },
    {
      path: '/dd_category',
      name: 'ctgPage',
      meta:{
        title:'商品分类',
        miaofooter:false,
        auth:false,
        homefooter:true,

      },
      component: ()=>import('components/ctgPage/index.vue')
    },
    {
      path: '/dd_category/cid',
      name: 'ctgDetailPage',
      meta:{
        title:'商品详情',
        miaofooter:false,
        auth:false,
        homefooter:true,
        
      },
      component: () => import('components/ctgDetailPage/index.vue'),
    },
    {
      path:'/filter',
      name:'filterCid',
      meta:{
        title:'筛选',
        miaofooter:false,
        auth:false
        
      },
      component:resolve=>require(['../components/select/index.vue'],resolve)
    },
    {
      path:'/cart',
      name:'cart',
      meta:{
        title:'购物车',
        miaofooter:false,
        auth:false
        
      },
      component:resolve=>require(['../components/cart/index.vue'],resolve)
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'login',
        miaofooter:false,
        auth:false
        
      },
      component:resolve=>require(['../components/login/index.vue'],resolve)
    },
    
  ]
})
