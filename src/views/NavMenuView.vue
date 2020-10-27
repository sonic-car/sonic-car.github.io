<template>
  <div>
    <el-row type="flex" class="row-bg header-additional" :class="isStiky? 'hide' : ''" justify="space-between">
      <el-col :span="10" class="icon">
        <el-image
        style="width: 200%"
        :src="url"
        fit="sacle-down"></el-image>
      </el-col>
      <el-col :span="3" class="icon">
        <el-image
        style="width: 100%"
        :src="require('../assets/LinkeLOGO.png')"
        fit="sacle-down"></el-image>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg header" :class="isStiky? 'stiky' : ''" justify="space-around">
      <el-col :span="4" class="icon">
        <span class="title">XIAOWEI</span>
      </el-col>
      <el-col :xs="16" :sm="16" :md="12" :lg="10" :xl="12" class="navbar">
          <el-col :span="6" class="menu-item">
            <h3 href="#main">主页</h3>
          </el-col>
          <el-col :span="6" class="menu-item">
            <h3>项目介绍</h3>
          </el-col>
          <el-col :span="6" class="menu-item">
            <h3>小车配置</h3>
          </el-col>
          <el-col :span="6" class="menu-item">
            <h3>相关视频</h3>
          </el-col>
          <el-col :span="6" class="menu-item">
            <h3>联系方式</h3>
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
      isStiky: false,
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
      if(scrollTop > 0){
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
  height: 6rem;
  padding: 0 1rem;
  transition: .5s all ease;
}

.header-additional {
  height: 5rem;
  padding: 2rem 5rem 0 5rem;
  transition: .2s all ease;
}

.hide {
  height: 0;
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
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  transition: .3s all ease;
}
.menu-item:hover {
  font-size: 1.1rem;
  color: black;
}

.stiky {
  position:fixed;
  z-index: 1;
  width: 100%;
  top:0;
  left:0;
  height: 5rem !important;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

</style>
