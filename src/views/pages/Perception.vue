<template>
  <video-background src="http://img0.singulato.com/video/video_bg_2.mp4" img="https://www.singulato.com/wp-content/themes/singulato/index3/images/pc_video_bg.jpg"  class="main-page">
    <el-row type="flex" class="full page-section" justify="space-between">
      <el-col :span="12" class="v-center">
      </el-col>
      <el-col :span="10" class="center">
        <div class="circle">
        </div>
        <div class="slogan animate__animated animate__fadeInUp">
          <strong>感</strong>周遭万物
          <br>
          <strong>知</strong>毫厘变化
        </div>
      </el-col>
    </el-row>
  
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
}
.page-section {
  padding-top: 62px;
}

.center {
  position: relative;
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
  height: 60vh;
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


.circle {
  position:absolute;
  margin-bottom: 20vh;
  background-color:rgba(2, 74, 182, 0.7);
  height: 15em;
  width: 15em;
  margin-right: 30vh;
  border-radius: 15em;
  z-index: 1;
}

.active .slogan{
  display: block;
}

</style>