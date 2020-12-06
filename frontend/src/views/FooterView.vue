<template>
  <div id="footer">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="4">
        <span class="footer-item-title">关于我们</span>
        <span class="footer-item-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
        </span>
      </el-col>
      <el-col :span="4">
        <span class="footer-item-title">相关链接</span>
        <div>
          <el-link class="footer-item-content" href="http://linke.ustc.edu.cn/">Linke</el-link>
        </div>
      </el-col>
      <el-col :span="4">
        <span class="footer-item-title">关注我们</span>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <span class="footer-item-content">Copyright ©2020 All rights reserved | USTC Linke</span>
  </div>
</template>

<script>
export default {
    name: 'FooterView',
}
</script>

<style scoped>
#footer {
  padding: 1.5rem 0;
  background-color: #444444;
}

.footer-item-title {
  display: block;
  font-size: 1.5rem;
  color: white;
}

.footer-item-content {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

</style>
