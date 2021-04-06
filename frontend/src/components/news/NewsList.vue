<template>
  <div id="news-list">
    <el-row type="flex" class="row-bg" v-for="i in newsInfo" :key="i.title" justify="center">
        <el-col :span="2" class="icon"><i class="el-icon-news"></i></el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            {{ i.title }}
          </div>
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="2">
        <el-button class="el-icon-arrow-left bg-purple-light"></el-button>
      </el-col>
      <el-col :span="2">
        <el-button class="el-icon-arrow-right bg-purple-light"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  props:{
    newsInfo:{
      type: Array
    }
  }
}
</script>

<style scoped>
#news-list {
  /* background-color: #f9fafc; */
  /* opacity: 0.9; */
}

.el-row {
  margin-bottom: 0.2vh;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
  opacity: 0.5;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-bg {
  padding: 10px 0;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>