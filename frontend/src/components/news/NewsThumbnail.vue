<template>
  <div class="news-card title" :style="{background: this.newsInfo.image + ' no-repeat center', backgroundSize:'100% auto'}">
    {{newsInfo.title}}
  </div>
</template>

<script>
export default {
  name: 'NewsThumbnail',
  props:{
    newsInfo:{
      type: Object
    }
  },
}
</script>

<style scoped>
.title {
  font-size: 1.5rem;
  font-family: STSong;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}
.news-card {
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
  /* background-color:darkgrey; */
}
</style>