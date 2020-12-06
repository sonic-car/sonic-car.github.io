<template>
  <div id="news-list">
    <el-row type="flex" class="row-bg" v-for="i in 5" :key="i" justify="center">
        <el-col :span="1"><i class="el-icon-news"></i></el-col>
        <el-col :span="20"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="2">
        <el-button class="el-icon-arrow-left"></el-button>
      </el-col>
      <el-col :span="2">
        <el-button class="el-icon-arrow-right"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  props:{
    newsInfo:{
      type: Object
    }
  }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>