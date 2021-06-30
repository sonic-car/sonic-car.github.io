<template>
  <div>
    <el-row type="flex" class="row-bg header-additional" justify="space-between">
      <el-col :span="18" class="icon">
        <el-image
        style="width:auto; height: 7vh"
        :src="url"
        fit="sacle-down"></el-image>
      </el-col>
      <el-col :span="6" class="icon" style="justify-content: center;">
        <el-image
        style="height: 8vh;"
        :src="require('../assets/LinkeLOGO.png')"
        fit="sacle-down"></el-image>
      </el-col>
    </el-row>
    <div class="header" v-if="isStiky">
    </div>
    <el-row type="flex" class="row-bg header" :class="isStiky? 'stiky' : ''" justify="space-around">
      <el-col :span="4" class="icon">
        <span class="title">SONIC</span>
      </el-col>
      <el-col :xs="16" :sm="16" :md="12" :lg="10" :xl="8" class="navbar">
          <el-col :span="4" class="menu-item">
            <a href="#main">主页</a>
          </el-col>
          <el-col :span="4" class="menu-item">
            <a href="#perception">感知</a>
          </el-col>
          <el-col :span="4" class="menu-item">
            <a href="#learning">学习</a>
          </el-col>
          <el-col :span="4" class="menu-item">
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
  computed: {
    scrollTop() {
      console.log((window.pageYOffset || document.documentElement.scrollTop || 	document.body.scrollTop));
      return (window.pageYOffset || document.documentElement.scrollTop || 	document.body.scrollTop);
    },
  },
  watch: {
    scrollTop(newVlue, oldValue) {
      console.log(newVlue, oldValue);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 	document.body.scrollTop;
      if(scrollTop > 50){
        this.isStiky = true;
      }else{
        this.isStiky = false;
      }
    },
  },
}
</script>

<style scoped>
.header {
  height: 7vh;
  padding: 0 1rem;
  transition: .5s all ease;
}

.header-additional {
  height: 8vh;
  padding: 1rem 1rem 0 1rem;
  transition: .2s all ease;
}

.icon {
  display: flex;
  align-items: center;
  transition: .5s all ease;
}

.title {
  font-size: 2rem;
  font-weight: 600;
}


.navbar {
  display: flex;
  align-items: center;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  height: 100%;
  color: rgb(255, 255, 255);
  transition: .3s all ease;
}

.menu-item a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 100%;
  font-weight:600;
  text-decoration: unset;
  color: rgb(255, 255, 255, 0.9);
  transition: .3s all ease;
}

.menu-item:hover {
  font-size: 1rem;
  color: rgb(255, 255, 255, 1);;
}
.menu-item a:hover {
  font-size: 1.2rem;
  color: rgb(255, 255, 255, 1);;
}

.stiky {
  position:fixed;
  z-index: 100;
  width: 100%;
  top:0;
  left:0;
  height: 6vh !important;
  padding: 0 1rem;
  /* background-color: white; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
}

</style>
