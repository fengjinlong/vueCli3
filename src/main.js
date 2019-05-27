import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './commonComponent/com.js'
// 必须用ELEMENT 否则报错
Vue.use(ELEMENT)

Vue.config.productionTip = false
// console.log(Vue)
// console.log(Vue.prototype.$watch)
// console.log(Vue._watchs)
// console.log(Vue.prototype)
new Vue({
  data () {
    return {
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
