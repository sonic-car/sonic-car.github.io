<template>
  <el-container>
    <el-main>
      <main-view></main-view>
    </el-main>
    <el-footer height="20vh">
      <footer-view></footer-view>
    </el-footer>
  </el-container>
</template>

<script>
import MainView from './MainView.vue'
import FooterView from './FooterView.vue'

export default {
  name: 'BasicView',
  components: {
    MainView,
    FooterView,
  }
}
</script>

<style>
</style>
