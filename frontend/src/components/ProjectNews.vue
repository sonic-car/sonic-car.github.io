<template>
  <div>
    <el-carousel :interval="4000" type="card" height="30vh" >
      <el-carousel-item v-for="i in 3" :key="i">
        <news-thumbnail :newsInfo="news[i-1]"></news-thumbnail>
      </el-carousel-item>
    </el-carousel>
    <news-list :newsInfo="news"></news-list>
    
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
          title: '强化学习算法取得重大成功!',
          image: `url(${require('@/assets/IMG_4200.jpeg')})`,
        },
        {
          title: '实车数据测试完成',
          image: `url(${require('@/assets/IMG_3436.jpeg')})`,
        },
        {
          title: 'sdfsdf',
          image: `url(${require('@/assets/IMG_4199.jpeg')})`,
        },
        {
          title: 'sdfsdf',
          image: `url(${require('@/assets/IMG_4199.jpeg')})`,
        },
        {
          title: 'sdfsdf',
          image: `url(${require('@/assets/IMG_4199.jpeg')})`,
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>