// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
//import router from './router'
import config from './router-config'

//Vue.config.productionTip = false

/* eslint-disable no-new */
//new Vue({
//el: '#app',
//router,
//template: '<App/>',
//components: { App }
//})



Vue.use(VueRouter)

const router = new VueRouter()
router.map(config)
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')