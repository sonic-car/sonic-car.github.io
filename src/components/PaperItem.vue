<template>
    <el-card class="paper-card">
        <el-row type="flex" justify="space-between">
            <el-col :span="4">
                <el-image :src="pubInfo.pic" fit='cover'></el-image>
            </el-col>
            <el-col :span="18" class="paper-info">
                <div class="info title">{{pubInfo.title}}</div>
                <div class="info author">{{pubInfo.author}}</div>
                <div class="info meeting">{{pubInfo.meeting}}</div>
                <div class="info">
                    <a :href="pubInfo.doi" target = "_blank" v-if="pubInfo.doi != ''">paper</a>
                    <el-divider v-if="(pubInfo.doi != '') && (pubInfo.video != '')" direction="vertical"></el-divider>
                    <a :href="pubInfo.video" target = "_blank" v-if="pubInfo.video != ''">video</a>
                    <el-divider v-if="(pubInfo.doi != '' || pubInfo.video != '') && (pubInfo.code != '')" direction="vertical"></el-divider>
                    <a :href="pubInfo.code" target = "_blank" v-if="pubInfo.code != ''">code</a>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
  name: 'PaperItem',
  props:{
    pubInfo:{
        type: Object,
        pic: String,
        title: String,
        author: String,
        meeting: String,
        doi: String,
        video: String
    }
  }
}

</script>


<style>
.el-card__body {
    width: 90%;
}
</style>


<style scoped>

.paper-card{
  width: 100%;
  min-height: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
}

.paper-info {
    display: flex;
    flex-direction: column;
	justify-content: center;
}


.info {
    text-align: left;
}

.title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgb(36,64,179);
}

.author {
    font-style:italic;
    color: gray;
    font-size: 1rem;
    margin-bottom: 5px;
}

.meeting {
    font-size: 1rem;
    font-weight: 700;
    margin: 10px 0;
}

</style>