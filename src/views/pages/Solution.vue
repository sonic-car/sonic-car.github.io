<template>
  <div>
    <div class="page-bg"></div>
    <div class="page-bg-mask"></div>
    <el-row type="flex" class="full page-section" justify="space-between">
      <el-col :span='14' class="center">
        <div class="slogan">
          自动驾驶解决方案
        </div>
      </el-col>
      <el-col :span='2' class="center">
          <div class="line"></div>
      </el-col>
      <el-col :span='8' class="v-center">
        <el-image :src="require('@/assets/xiaowei.png')" fit='cover'></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  name: 'MainView',
  components:{
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
  background: rgb(240, 242, 245) url("https://www.navinfo.com/images/about/group_about/brain-bg.png") center no-repeat;
  background-size: 60%;
}

.page-bg {
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: url('http://www.sonic-car.net/assets/img/IMG_0756.jpg') no-repeat;
  background-size: cover;
  z-index: -1;
  filter: blur(5px);
}

.page-bg-mask{
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: -1;
  opacity: 0.2;
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

</style>