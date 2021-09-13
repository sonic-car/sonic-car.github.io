import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './plugins/element.js'
import './plugins/vue-fullpage.js'
import './plugins/videobg.js'
import animate from 'animate.css'
import scroll from 'vue-seamless-scroll'


// Vue.prototype.$video = Video
Vue.config.productionTip = false
Vue.use(animate)
Vue.use(scroll)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
