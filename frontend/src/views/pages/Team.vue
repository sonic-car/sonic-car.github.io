<template>
  <div>
    <el-row type="flex" class="full page-section" justify="space-between">
      <el-col :span='8' class="v-center team-menbers-list ">
        <vue-seamless-scroll :data="team_members_infos" class="seamless-warp">
          <team-member-card v-for="member in team_members_infos" 
            :key="member.name" :name="member.name" :photo="member.photo" :intro="member.intro"></team-member-card>
        </vue-seamless-scroll>
      </el-col>
      <el-col :span='2' class="center">
          <div class="line"></div>
      </el-col>
      <el-col :span='14' class="center">
        <div class="slogan">
          团队活力
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import TeamMemberCard from '@/components/TeamMemberCard.vue'

export default {
  name: 'Team',
  components:{
    TeamMemberCard
  },
  data() {
    return {
      fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      team_members_infos: [
        {
          name: '王顺洪',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
            homePage:  'www.baidu.com',
          },
        },
        {
          name: '王顺洪1',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
          },
        },
        {
          name: '王顺洪2',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
          },
        },
        {
          name: '王顺洪3',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
          },
        },
        {
          name: '王顺洪4',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
          },
        },
        {
          name: '王顺洪5',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
          },
        },
        {
          name: '王顺洪6',
          photo:  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          intro: {
            grade: '研一',
            major: '计算机',
            role: 'Tracking',
            slogan: 'sdfaskdjhgaskjgbeb',
          },
        },
      ]
    }
  }
}
</script>

<style scoped>
.full {
  height: 100vh;
  width: 100vw;
}
.page-section {
  padding-top: 62px;
  /* background: rgb(240, 242, 245) url("https://www.navinfo.com/images/about/group_about/brain-bg.png") center no-repeat;
  background-size: 60%; */
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


.slogan {
  position: relative;
  z-index: 3;
  font-size: 3rem;
  color: black;
  margin-bottom: 20vh;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}

.slogan strong {
  font-size: 4rem;
  font-weight: 400;
  margin-right: 20px;
}

.team-menbers-list{
  

}

.seamless-warp {
  width: 90%;
  height: 60vh;
  margin: 0 auto;
  overflow: hidden;
}


</style>