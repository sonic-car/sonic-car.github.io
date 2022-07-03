<template>
  <div class="full page-section v-center">
    <div class="title">
      团队成员
    </div>
    <div style="flex: 1; display: flex; align-items: center;">
      <el-carousel :interval="4000" type="card" height="75vh" style="flex: 1;">
        <el-carousel-item v-for="item in team_members" :key="item.task">
          <h3 class="medium">{{ item.grade }}</h3>
          <div class="team-members-container">
            <div class="team-members">
              <div class="team-member" v-for="member in item.group_members" :key="member.name">
                <div class="photo-wrap">
                  <el-image class="photo" :src="member.photo" @click="onClick(member.homePage)" fit="cover"></el-image>
                </div>
                <p class="name">{{ member.name }}</p>
                <p class="position">{{ member.position}}</p>
                <p class="interest">{{ member.researchInterests}}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>

// import TeamMemberCard from '@/components/TeamMemberCard.vue'

import { TeamMembers } from '@/assets/data/TeamMembers'

export default {
  name: 'Team',
  components:{
    // TeamMemberCard
  },
  methods:{
    onClick(url){
      if(url)
        window.open(url,'_blank')
    }
  },
  data() {
    return {
      team_members: TeamMembers(),
    }
  }
}
</script>

<style scoped>
.full {
  height: 100vh;
  width: 100vw;
  background: url('../../assets/IMG_1457.jpg') no-repeat;
  background-size: cover;
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
  /* align-items: center; */
}

.line {
  height: 50vh;
  width: .5vw;
  background-color:whitesmoke;
  box-sizing: border-box;
  border-radius: .25vw;
}


.title {
  z-index: 3;
  font-size: 3rem;
  font-weight: 600;
  margin: 30px;
  color: black;
  font-family: "Microsoft YaHei","黑体","宋体",sans-serif;
}


.seamless-warp {
  width: 90%;
  height: 60vh;
  margin: 0 auto;
  overflow: hidden;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 1.5rem;
  /* line-height: 50px; */
  margin-top: 20px;
}

.el-carousel__container .is-active {
  background-color: rgb(211, 220, 230);
  opacity: 0.96;
}

.el-carousel__item {
  border-radius: 20px;
  background-color: rgb(211, 220, 230);
  opacity: 0.5;
}


/* .el-carousel__item:nth-child(2n) {
  background-color: rgba(153, 169, 191, 0.5);
}

.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(211, 220, 230, 0.5);
} */

.team-members-container {
  /* height: calc(100% - 90px); */
  margin-bottom: 20px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-members {
  flex: 1;
  display: grid;
  padding: 20px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  overflow-y: auto;
}

.team-member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 1rem;
  /* line-height: 0.6rem; */
  margin: 0;
  color: black;
  font-weight: 600;
}
.position {
  margin: 0;
  font-size: 0.8rem;
  color: gray;
  /* line-height: 0.5rem; */
}

.interest {
  margin: 5px;
  font-size: 0.7rem;
}

.photo{
  height: 180px;
  width: 180px;
  border-radius: 180px;
  transition: .3s all ease;
}

.photo-wrap{
  height: 190px;
  width: 190px;
  border-radius: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.el-carousel__container .is-active .photo-wrap .photo:hover{
  height: 190px;
  width: 190px;
  border-radius: 190px;
}


.el-carousel__container .is-active {
  width: 60vw;
  transform: translateX(20vw) !important;
}


</style>