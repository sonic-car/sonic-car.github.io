<template>
  <div>
    <el-row type="flex" class="row-bg header" justify="space-around">
      <el-col :span="4" class="icon">
        <span class="title">SONIC</span>
      </el-col>
      <el-col :xs="16" :sm="16" :md="12" :lg="10" :xl="8" class="navbar">
          <el-col :span="3" class="menu-item">
            <a href="#main">主页</a>
          </el-col>
          <el-col :span="3" class="menu-item">
            <a href="#perception">感知</a>
          </el-col>
          <el-col :span="3" class="menu-item">
            <a href="#learning">学习</a>
          </el-col>
          <el-col :span="3" class="menu-item">
            <a href="#computing">计算</a>
          </el-col>
          <el-col :span="4" class="menu-item">
            <a href="#solution">解决方案</a>
          </el-col>
          <el-col :span="4" class="menu-item">
            <a href="#team">团队介绍</a>
          </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavMenuView',
  data() {
    return {
      isStiky: true,
      url: require('../assets/logoi.png'),
    };
  },
}
</script>

<style scoped>
.header {
  position:fixed;
  z-index: 100;
  width: 100%;
  top:0;
  left:0;
  height: 62px !important;
  padding: 0px 32px;
  letter-spacing: 2px;
  background-color: rgb(255,255,255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .5), 0 0 6px rgba(0, 0, 0, .1)
}


.icon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: .5s all ease;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  /* color: rgb(255, 255, 255); */
  color: rgb(0, 0, 0, 1);
}


.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  height: 100%;
  /* color: rgb(255, 255, 255); */
  transition: .3s all ease;
}

.menu-item a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  width: 100%;
  height: 100%;
  font-weight:600;
  text-decoration: unset;
  /* color: rgb(255, 255, 255, 0.9); */
  color: rgb(0, 0, 0, 1);
  transition: .3s all ease;
}

.menu-item:hover {
  font-size: 1rem;
  color: black;
  background-color: rgb(255,255,255, 1);
}
.menu-item a:hover {
  font-size: 1rem;
  color: black;
}


</style>
