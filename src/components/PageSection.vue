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
    // window.addEventListener("scroll", this.handleScroll);
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
  height: 100%;
  padding-top: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.header {
  height: 20%;
  width: 100%;
  font-size: 3rem;
  font-weight: 900;
  color: #007bff;
  margin-bottom: 1rem;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
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