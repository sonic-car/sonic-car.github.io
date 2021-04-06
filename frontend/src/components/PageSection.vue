<template>
  <div class="page-section" ref="point">
    <transition name="fade">
      <div class="header" v-if="show">
        <slot name="header">header</slot>
      </div>
    </transition>
    <transition name="fade">
      <div class="content" v-if="show">
        <slot name="content">content</slot>
      </div>
    </transition>
  </div>
</template>

<script>
// import { WOW } from 'wowjs'

export default {
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods:{
    handleScroll() {
      let h = document.documentElement.clientHeight || document.body.clientHeight;
      let section2Top = this.$refs.point.getBoundingClientRect().top
      if((section2Top - h < -300)){
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
}
</script>

<style scoped>
.page-section {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  padding: 5em 0;
}

.header {
  height: 20%;
  font-size: 3rem;
  font-weight: 900;
  color: #007bff;
  margin-bottom: 1rem;
}

.content {
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: all .8s ease;
  opacity: 1;
  transform: translate(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition-property: all .8s ease;
  transform: translateY(100px);
}

</style>