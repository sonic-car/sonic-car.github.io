<template>
  <div id="footer">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="8">
        <span class="footer-item-title">联系我们</span>
        <span class="footer-item-content">
          中国科学技术大学高新校区 信智大楼 B808
        </span>
        <br/>
        <span class="footer-item-content">
          中国科学技术大学西校区 科技楼 106
        </span>
        <br/>
        <span class="footer-item-content">
          张老师：
        </span>
        <a href= "mailto:yanyongz@ustc.edu.cn" class="footer-item-content"> 
          yanyongz@ustc.edu.cn
        </a>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <span class="footer-item-content">Copyright ©2022 by USTC Linke</span>
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
