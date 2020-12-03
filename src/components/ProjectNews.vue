<template>
  <el-carousel :interval="4000" type="card" height="20rem">
    <el-carousel-item v-for="item in news" :key="item">
      <news-thumbnail :newsInfo="item"></news-thumbnail>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import NewsThumbnail from '@/components/news/NewsThumbnail.vue';

export default {
  name: 'ProjectNews',
  components:{
    NewsThumbnail,
  },
  data() {
    return {
      news: [
        {
          title: 'sdf',
          picture: '',
        },
        {
          title: 'sdfwer',
          picture: '',
        },
        {
          title: 'aefwef',
          picture: '',
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>