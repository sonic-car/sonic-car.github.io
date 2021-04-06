<template>
  <div>
    <el-container id="main" :style="windowHeight > windowWidth ? 'height: 130vh' : ''">
      <el-header height="auto">
        <nav-menu-view></nav-menu-view>
      </el-header>
      <el-main v-if="windowHeight < windowWidth">
        <el-row type="flex" class="main-content" justify="space-between">
          <el-col :span="12" class="main-item">
            <div class="car-image-container">
              <img class="car-image" src="@/assets/xiaowei.png"/>
            </div>
          </el-col>
          <el-col :span="12" class="main-item">
            <project-news></project-news>
          </el-col>
        </el-row>
      </el-main>
      <el-main v-else>
        <div class="car-image-container-mobile">
          <img class="car-image-mobile" src="@/assets/xiaowei.png"/>
        </div>
        <project-news class="project-news"></project-news>
      </el-main>
    </el-container>
    <page-section>
      <template slot="header">
        小车配置
      </template>
      <template slot="content">
        wertert
      </template>
    </page-section>
    <page-section>
      <template slot="header">
        相关视频
      </template>
      <template slot="content">
        <iframe class="video-player"
        src="//player.bilibili.com/player.html?aid=753226838&bvid=BV14k4y1679H&cid=193067375&page=1"
        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </template>
    </page-section>
    <page-section>
      <template slot="header">
        联系我们
      </template>
      <template slot="content">
        wertert
      </template>
    </page-section>
  </div>
</template>

<script>
import NavMenuView from '@/views/NavMenuView.vue'
import PageSection from '@/components/PageSection.vue'
import ProjectNews from '@/components/ProjectNews.vue'

export default {
  name: 'MainView',
  components:{
    NavMenuView,
    PageSection,
    ProjectNews,
  },
  data(){
    return{
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
			windowHeight: document.documentElement.clientHeight, //实时屏幕高度
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
  height: 100vh;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.main-content {
  margin: 30px;
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
</style>
