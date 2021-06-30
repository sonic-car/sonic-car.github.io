<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin:0;
  padding:0;
}

.el-main {
  padding: 0 !important;
  overflow: hidden !important;
}
.el-footer {
  padding: 0 !important;
}

#main {
}


html {font-size: 62.5%!important; /* 10÷16=62.5% */}
@media only screen and (min-width: 481px){
    html {
        font-size: 94%!important; /* 15.04÷16=94% */
    }
}
@media only screen and (min-width: 561px){
    html {
        font-size: 109%!important; /* 17.44÷16=109% */
    }
}
@media only screen and (min-width: 641px){
    html {
        font-size: 125%!important; /* 20÷16=125% */
    }
}

.el-carousel__mask {
  display: none;
}

.fp-auto-height.fp-section, .fp-auto-height .fp-slide, .fp-auto-height .fp-tableCell {
  height: auto !important;
}
</style>
