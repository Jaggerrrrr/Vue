//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from "vuex";
import Vue from "vue";
import countOptions from "@/store/count";
import personOptions from "@/store/perosn";
//应用
Vue.use(Vuex)//store


//创建store并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,

    }
})

