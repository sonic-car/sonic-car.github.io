<template>
  <el-container>
    <el-main>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button>sdfsdf</el-button>
    </el-main>
    <el-footer>
      <footer-view></footer-view>
    </el-footer>
  </el-container>
</template>

<script>
import FooterView from './FooterView.vue'

export default {
  name: 'ManageView',
  components: {
    FooterView,
  },
  data(){
    return {
      input: ''
    };
  }
}
</script>

<style scoped>

</style>
