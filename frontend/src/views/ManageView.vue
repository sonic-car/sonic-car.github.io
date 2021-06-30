<template>
  <el-container>
    <el-main>
      <div class="sec">
        <video-background src="http://mpvideo.qpic.cn/0bf2t4abkaaasiapxuvnh5qfbh6dcwpqafia.f10002.mp4?dis_k=2362350c91ca7c1e10eb6485e4d80d49&dis_t=1622105632&vid=wxv_1886080097544142849&format_id=10002&support_redirect=0">
        </video-background>
      </div>
    </el-main>
    <el-footer>
      <footer-view></footer-view>
    </el-footer>
  </el-container>
</template>

<script>
import FooterView from './FooterView.vue'
import VideoBackground from '@/components/VideoBackground.vue'

export default {
  name: 'ManageView',
  components: {
    FooterView,
    VideoBackground
  },
  data(){
    return {
      input: '',
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
    };
  }
}
</script>

<style scoped>

.sec{
  height: 100vh;
  width: 100vw;
}

</style>
