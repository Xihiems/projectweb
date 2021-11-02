import Vue from 'vue'
import App from './App.vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

Vue.use(Chakra)

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()
