<template>
  <div>
    <el-carousel :interval="4000" type="card" height="20rem">
      <el-carousel-item v-for="item in news" :key="item">
        <news-thumbnail :newsInfo="item"></news-thumbnail>
      </el-carousel-item>
    </el-carousel>
    <news-list></news-list>
    
  </div>
</template>

<script>
import NewsThumbnail from '@/components/news/NewsThumbnail.vue';
import NewsList from '@/components/news/NewsList.vue';

export default {
  name: 'ProjectNews',
  components:{
    NewsThumbnail,
    NewsList
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