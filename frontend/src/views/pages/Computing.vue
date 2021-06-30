<template>
  <div>
    <el-row type="flex" class="full page-section" justify="space-between">
      <el-col span='8' class="v-center">
        <div class="item">
        </div>
        <div class="item">
        </div>
        <div class="item">
        </div>
      </el-col>
      <el-col span='2' class="center">
          <div class="line"></div>
      </el-col>
      <el-col span='14' class="center">
        <div class="slogan">
            <strong>学</strong>世界规律
            <br>
            <strong>习</strong>决策之道
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'MainView',
  components:{
  }
}
</script>

<style scoped>
.full {
  height: 100vh;
  width: 100vw;
}
.page-section {
  padding-top: 6vh;
  background: rgb(240, 242, 245) url("https://www.navinfo.com/images/about/group_about/brain-bg.png") center no-repeat;
  background-size: 60%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  height: 50vh;
  width: .5vw;
  background-color:whitesmoke;
  box-sizing: border-box;
  border-radius: .25vw;
}

.item {
  height: 25vh;
  width: 90%;
  margin-bottom: 10px;
  border: 5px solid white;
  border-radius: 30px;
}

.slogan {
  position: relative;
  z-index: 3;
  font-size: 3rem;
  color: white;
  margin-bottom: 20vh;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}

.slogan strong {
  font-size: 4rem;
  font-weight: 400;
  margin-right: 20px;
}

</style>