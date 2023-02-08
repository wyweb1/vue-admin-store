import Vue from 'vue'

// 引入ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss'; // global css


import App from './App'
import router from './router'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
