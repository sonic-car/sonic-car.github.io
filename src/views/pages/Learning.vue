<template>
  <video-background :src="require('@/assets/videos/slam.mp4')" class="main-page">

    <div>
      <!-- <div class="page-bg"></div>
      <div class="page-bg-mask"></div> -->
      <el-row type="flex" class="full page-section" justify="space-between">
        <el-col :span="5" class="v-center pictures-wrap">
          <div class="item">
            <el-image :src="require('@/assets/pictures/learning (1).gif')" fit='cover' class="picture"></el-image> 
          </div>
          <div class="item">
            <el-image :src="require('@/assets/pictures/learning (2).gif')" fit='cover' class="picture"></el-image>
          </div>
          <div class="item">
            <el-image :src="require('@/assets/pictures/learning (3).gif')" fit='cover' class="picture"></el-image>
          </div>
          <!-- <div class="item">
            <el-image :src="require('@/assets/pictures/learning (5).gif')" fit='cover' class="picture"></el-image>
          </div> -->
        </el-col>
        <!-- <el-col :span="2" class="center">
            <div class="line"></div>
        </el-col> -->
        <el-col :span="14" class="center">
          <div class="slogan animate__animated animate__fadeInUp">
              <strong>学</strong>世界规律
              <br>
              <strong>习</strong>决策之道
            </div>
        </el-col>

        <el-col :span="5" class="v-center pictures-wrap">
          <div class="item">
            <el-image :src="require('@/assets/pictures/learning (4).gif')" fit='cover' class="picture"></el-image> 
          </div>
          <div class="item">
            <el-image :src="require('@/assets/pictures/learning (5).gif')" fit='cover' class="picture"></el-image>
          </div>
          <div class="item">
            <el-image :src="require('@/assets/pictures/learning (8).gif')" fit='cover' class="picture"></el-image>
          </div>
          <!-- <div class="item">
            <el-image :src="require('@/assets/pictures/learning (5).gif')" fit='cover' class="picture"></el-image>
          </div> -->
        </el-col>
      </el-row>
    </div>
  
  </video-background>
  
</template>

<script>
import VideoBackground from '@/components/VideoBackground.vue'



export default {
  name: 'MainView',
  components:{
    VideoBackground,
  }
}
</script>

<style scoped>
.full {
  height: 100vh;
  width: 100vw;
  /* background: url('../../assets/IMG_0756.jpg') no-repeat;
  background-size: cover; */
}
.page-section {
  padding-top: 62px;
}

.page-bg {
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: url('../../assets/IMG_0756.jpg') no-repeat;
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
  opacity: 0.1;
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
  height: 28vh;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
  /* border: 5px solid white;
  border-radius: 30px; */
}

.slogan {
  display: none;
  z-index: 3;
  font-size: 3rem;
  color: white;
  margin-bottom: 10vh;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  text-shadow: 2px 2px 6px #000000;
}

.slogan strong {
  font-size: 4rem;
  font-weight: 400;
  margin-right: 20px;
}

.active .slogan{
  display: block;
}

.picture {
  width: 90%;
  height: 80%;
  border: 1px solid white;
  border-radius: 10px;
}

.pictures-wrap {
  /* display: flex; */
  /* display: grid;
  padding: 20px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense; */
}

</style>