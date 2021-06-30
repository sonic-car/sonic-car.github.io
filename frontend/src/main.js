import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './plugins/element.js'
import './plugins/vue-fullpage.js'
import './plugins/videobg.js'
import animate from 'animate.css'
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

// Vue.prototype.$video = Video
Vue.config.productionTip = false
Vue.use(animate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
