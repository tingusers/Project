
const state={
    miao_liname:0,
    productsInfolist:"",
    seachflag:false,
    grabflag:true
}
const actions={
    // 秒杀点击时间选择
    handlermiaoname({commit},index){
        commit("handlermiaonamemutations",index)
    },
    // 首页秒杀数据传到秒杀列表
    // productsInfolistactions({commit},params){
    //     commit("productsInfolistmutations",params)
    // }
    // 搜索页面的搜索数据
    sousuohandler({commit},params){
        commit("sousuohandlermutations",params)
    }
}
const mutations={
    handlermiaonamemutations(state,index){
        state.miao_liname=index;
        // console.log(111)
    },
    // productsInfolistmutations(state,params){
    //     state.productsInfolist=params;
    //     // console.log(state.productsInfolist)
    // }
    sousuohandlermutations(state,params){
            state.productsInfolist=params
            state.seachflag=true
            state.grabflag=false
    }
}
export default {
    state,
    actions,
    mutations,
    namespaced:true
}