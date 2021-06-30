<template>
  <div id="footer">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="8">
        <span class="footer-item-title">关于我们</span>
        <span class="footer-item-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
        </span>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <span class="footer-item-content">Copyright ©2021 All rights reserved | USTC Linke</span>
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
  /* height: 100%; */
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
