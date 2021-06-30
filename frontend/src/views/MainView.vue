<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <nav-menu-view id="header"></nav-menu-view>
      <div class="section">
        <video-background src="http://img0.singulato.com/video/video_bg_2.mp4"  class="main-page">
          <div class="slogan">
            用智能改变世界
          </div>
        </video-background>
      </div>
    
    <div class="section">
      <perception>
      </perception>
    </div>
    <div class="section">
      <learning>
      </learning>
    </div>
    <div class="section">
      <computing>
      </computing>
    </div>
    <div class="section">
      <page-section>
        <template slot="header">
          联系我们
        </template>
        <template slot="content">
          wertert
        </template>
      </page-section>
    </div>
    <div class="section fp-auto-height">
      <footer-view class="footer"></footer-view>
    </div>
    </full-page>
  </div>
</template>

<script>
import NavMenuView from '@/views/NavMenuView.vue'
import FooterView from './FooterView.vue'
import VideoBackground from '@/components/VideoBackground.vue'
import Perception from '@/views/pages/Perception.vue'
import Learning from '@/views/pages/Learning.vue'
import Computing from '@/views/pages/Computing.vue'


export default {
  name: 'MainView',
  components:{
    NavMenuView,
    FooterView,
    VideoBackground,
    Perception,
    Learning,
    Computing
  },
  data(){
    return{
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
			windowHeight: document.documentElement.clientHeight, //实时屏幕高度
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['main', 'perception', 'learning', 'computing', 'solution', 'team'],
        fixedElements: '#header',
        // paddingTop: "6vh",
      },
    };
  },
  mounted() {
    let that = this;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.windowHeight = window.fullHeight; // 高
        that.windowWidth = window.fullWidth; // 宽
      })()
    };

  }
}
</script>

<style scoped>
#main {
  /* height: 100vh; */
  background-size: cover;
  background-color:rgb(146, 179, 211);
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
#main-intro {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-header {
  padding: 0 !important;
}

.video-player {
  width: 80vw;
  height: 40vw;
  max-width: 1400px;
  max-height: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.main-content {
  margin: 6vh 6vw;
}

.main-item {
  padding: 10px;
}

.car-image-container {
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.car-image-container-mobile {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.car-image {
  /* height: 50vh; */
  width: 40vw;
  opacity: 0.95;
}

.car-image-mobile {
  height: 30vh;
  /* width: 40vw; */
  opacity: 0.95;
}

.car-image:hover {
  cursor: pointer;
  opacity: 1;
}

.project-news {
  width: 100%;
}

.full {
  height: 100vh;
  width: 100vw;
}

.slogan {
  position: relative;
  z-index: 3;
  font-size: 3rem;
  color: white;
  margin-bottom: 30vh;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}

</style>
