import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 必须用ELEMENT 否则报错
Vue.use(ELEMENT)

Vue.config.productionTip = false
new Vue({
  data () {
    return {
      dddd: 666
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
