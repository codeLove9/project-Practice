import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { thousandFormat } from '@/utils/thousandFormat'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)

thousandFormat(Vue)

new Vue({
  render: h => h(App)
}).$mount('#app')
