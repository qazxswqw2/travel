// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
