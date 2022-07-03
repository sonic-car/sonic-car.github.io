<template>
  <div>
    <div class="page-bg"></div>
    <div class="page-bg-mask"></div>
    <div class="full page-section">
      <div class="section-title">
        <h1>部分科研成果</h1>
      </div>
      <el-divider></el-divider>
      <div class="paper-list">
        <el-scrollbar style="height:100%;">
          <div class="paper-list-warp">
            <paper-item v-for="pubInfo in pubInfos" :key="pubInfo.title" :pubInfo="pubInfo"></paper-item>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import PaperItem from '@/components/PaperItem.vue'

import { PubData } from '@/assets/data/PubData.js'

export default {
  name: 'Publications',
  components:{
    PaperItem
  },
  data() {
    return {
      pubInfos: PubData(),
    }
  },
  created() {
		console.log(this.pubInfos);
	},
}
</script>

<style>
.el-scrollbar__wrap {
  overflow: hidden;
}
.el-scrollbar__thumb {
  background-color: white;
}

.el-scrollbar__view {
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
}

</style>


<style scoped>
.full {
  height: 100vh;
  width: 100vw;
}
.page-section {
  padding-top: 62px;
  /* background: rgb(240, 242, 245) url('../../assets/IMG_4200.jpeg') center no-repeat; */
  background-size: 100vw auto;
}

.page-bg {
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: url('../../assets/IMG_4200.jpeg') no-repeat;
  background-size: cover;
  z-index: -2;
  filter: blur(1px);
}

.page-bg-mask{
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: -1;
  opacity: 0.4;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  height: 50vh;
  width: .5vw;
  background-color:whitesmoke;
  box-sizing: border-box;
  border-radius: .25vw;
}

.item {
  height: 25vh;
  width: 90%;
  margin-bottom: 10px;
  border: 5px solid white;
  border-radius: 30px;
}

.slogan {
  position: relative;
  z-index: 3;
  font-size: 3rem;
  color: white;
  margin-bottom: 20vh;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}

.slogan strong {
  font-size: 4rem;
  font-weight: 400;
  margin-right: 20px;
}
.paper-list {
  height: 80vh;
  /* overflow-y: auto; */
  padding: 10px 50px;
}

.section-title {
  margin: 10px auto;
}



.paper-list-warp {
  max-width: 80%;
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
}

</style>