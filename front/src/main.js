import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

Vue.use(Chakra)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
