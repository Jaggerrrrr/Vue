//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭提示
Vue.config.productionTip = false
//应用插件
Vue.use(plugins, 1, 2, 3)
//创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})