import Vue from 'vue'
import VueRouter from 'vue-router';
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'


Vue.use(VueRouter)
Vue.use(Chakra)

const router = new VueRouter({
    mode:'history',
    route:[
        { path: '/', component: require('./HomePage.vue')}
    ],
})

new Vue({
    el: '#app',
    render: (h) => h(CThemeProvider, [h(CReset), h(require('./App.vue'))]),
    router : router,
}).$mount()
