<template>
  <div class="video-bg">
    <video autoplay="autoplay" loop="loop" muted poster="https://www.singulato.com/wp-content/themes/singulato/index3/images/pc_video_bg.jpg" data-autoplay controls="controls" ref="video">
      <source :src="src" type="video/mp4">
    </video>
    <div class="VideoBg__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBackground',
  props:{
    src:{
      type: String,
    },
    img:{
      type: String,
    }
  },
  data () {
    return {
      videoRatio: null
    }
  },
  mounted () {
    this.setImageUrl()
    this.setContainerHeight()
    if (this.videoCanPlay()) {
      this.$refs.video.oncanplay = () => {
        if (!this.$refs.video) return
        this.videoRatio = this.$refs.video.videoWidth / this.$refs.video.videoHeight
        this.setVideoSize()
        this.$refs.video.style.visibility = 'visible'
      }
    }
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      this.setContainerHeight()
      if (this.videoCanPlay()) {
        this.setVideoSize()
      }
    },
    videoCanPlay () {
      return !!this.$refs.video.canPlayType
    },
    setImageUrl () {
      if (this.img) {
        this.$el.style.backgroundImage = `url(${this.img})`
      }
    },
    setContainerHeight () {
      this.$el.style.height = `${window.innerHeight}px`
    },
    setVideoSize () {
      var width, height, containerRatio = this.$el.offsetWidth / this.$el.offsetHeight
      if (containerRatio > this.videoRatio) {
        width = this.$el.offsetWidth
      } else {
        height = this.$el.offsetHeight
      }
      this.$refs.video.style.width = width ? `${width}px` : 'auto'
      this.$refs.video.style.height = height ? `${height}px` : 'auto'
    },
    getMediaType (src) {
      return 'video/' + src.split('.').pop()
    }
  }
}
</script>

<style scoped>

.video-bg {
  position: relative;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.video-bg video{
  position: absolute;
  top: 50%;
  left: 50%;
  /* visibility: hidden; */
  transform: translate(-50%, -50%);
}

.VideoBg__content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>