<template>
  <div class="news-card">
    <span class="title">{{newsInfo.title}}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsThumbnail',
  props:{
    newsInfo:{
      type: Object
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.news-card {
  display: flex;
  height: inherit;
  align-items: flex-end;
  justify-content: center;
  background-color:darkgrey;
}
</style>