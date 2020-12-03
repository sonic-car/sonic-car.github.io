<template>
  <div>
    <el-container id="main">
      <el-header height="auto">
        <nav-menu-view></nav-menu-view>
      </el-header>
      <div id="main-intro">
        <span> this is a MainView. </span>
      </div>
    </el-container>
    <page-section>
      <template slot="header" id="news">
        项目新闻
      </template>
      <template slot="content">
        <project-news></project-news>
      </template>
    </page-section>
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
}
</script>

<style scoped>
#main {
  height: 100vh;
  background:url('../assets/timg.jpeg') no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.el-header {
  border-bottom-style:solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  padding: 0 !important;
}

.video-player {
  width: 60vw;
  height: 45vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
