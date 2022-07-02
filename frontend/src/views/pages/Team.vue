<template>
  <div class="full page-section v-center">
    <div class="title">
      团队成员
    </div>
    <el-carousel :interval="3000" type="card" style="flex: 1;" height="60vh">
      <el-carousel-item v-for="item in team_members" :key="item.task">
        <h3 class="medium">{{ item.task }}</h3>
        <div class="team-members-container">
          <div class="team-members">
            <div class="team-member" v-for="member in item.group_members" :key="member.name">
              <el-image class="photo" :src="member.photo" @click="onClick(member.homePage)" fit="cover"></el-image>
              <p class="name">{{ member.name }}</p>
              <p class="position">{{ member.position}}</p>
            </div>
          </div>
        </div>
        
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

// import TeamMemberCard from '@/components/TeamMemberCard.vue'

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
      fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      team_members:[
        {
          task: '指导教师',
          group_members: [
            {
              name: '张燕咏',
              photo: require('@/assets/user.png'),
              homePage: 'http://staff.ustc.edu.cn/~yanyongz',
              position: '中国科学技术大学教授'
            },
            {
              name: '张昱',
              photo: 'http://www.sonic-car.net/assets/img/photo/张昱.jpg',
              homePage: 'http://staff.ustc.edu.cn/~yuzhang',
              position: '中国科学技术大学副教授'
            },
            {
              name: '吉建民',
              photo: 'http://www.sonic-car.net/assets/img/photo/吉建民.jpg',
              homePage: 'http://staff.ustc.edu.cn/~jianmin/',
              position: '中国科学技术大学副教授'
            }
          ],
        },
        {
          task: 'SLAM组',
          group_members: [
            {
              name: '段逸凡',
              photo: require('@/assets/user.png'),
              homePage: 'https://www.baidu.com'
            },
            {
              name: '张鑫燃',
              photo: require('@/assets/user.png')
            },
            {
              name: '王德全',
              photo: require('@/assets/user.png')
            }
          ],
        },
        {
          task: '检测组',
          group_members: [
            {
              name: '祝含祈',
              photo: require('@/assets/user.png')
            },
            {
              name: '褚晓萌',
              photo: require('@/assets/user.png')
            },
            {
              name: '毛秋宇',
              photo: require('@/assets/user.png')
            },
            {
              name: '王颖杰',
              photo: require('@/assets/user.png')
            },
            {
              name: '朱张斌',
              photo: require('@/assets/user.png')
            },
            {
              name: '何春望',
              photo: require('@/assets/user.png')
            },
          ]
        },
        {
          task: '追踪组',
          group_members: [
            {
              name: '李垚',
              photo: require('@/assets/user.png')
            },
            {
              name: '张莎',
              photo: require('@/assets/user.png')
            },
            {
              name: '任浩杰',
              photo: require('@/assets/user.png')
            },
            {
              name: '文涛',
              photo: require('@/assets/user.png')
            },
          ]
        },
        {
          task: '计算优化组',
          group_members: [
            {
              name: '龚磊',
              photo: require('@/assets/user.png')
            },
            {
              name: '翟祎',
              photo: require('@/assets/user.png')
            },
            {
              name: '刘硕',
              photo: require('@/assets/user.png')
            },
            {
              name: '王顺洪',
              photo: require('@/assets/user.png')
            },
          ]
        },
        {
          task: '导航组',
          group_members: [
            {
              name: '陈宇铵',
              photo: require('@/assets/user.png')
            },
            {
              name: '彭杰',
              photo: require('@/assets/user.png')
            },
            {
              name: '尤国良',
              photo: require('@/assets/user.png')
            },
          ]
        },
        {
          task: '联合标定组',
          group_members: [
            {
              name: '李星辰',
              photo: require('@/assets/user.png')
            },
            {
              name: '肖宇煊',
              photo: require('@/assets/user.png')
            },
          ]
        },
        {
          task: '毫米波雷达组',
          group_members: [
            {
              name: '赵园',
              photo: require('@/assets/user.png')
            },
            {
              name: '何晨铭',
              photo: require('@/assets/user.png')
            },
            {
              name: '孟成真',
              photo: require('@/assets/user.png')
            },
          ]
        },
      ],
    }
  }
}
</script>

<style scoped>
.full {
  height: 100vh;
  width: 100vw;
  background: url('http://www.sonic-car.net/assets/img/IMG_1457.jpg') no-repeat;
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
  margin: 50px;
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
  opacity: 0.95;
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
  height: calc(100% - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-members {
  flex: 1;
  display: grid;
  padding: 20px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 170px;
  grid-auto-flow: dense;
}

.team-member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 0.7rem;
  /* line-height: 0.6rem; */
  margin: 0;
  color: black;
  font-weight: 600;
}
.position {
  margin: 0;
  font-size: 0.5rem;
  /* line-height: 0.5rem; */
}

.photo{
  margin: 10px;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  transition: .3s all ease;
}

.el-carousel__container .is-active .photo:hover{
  height: 110px;
  width: 110px;
  border-radius: 110px;
}


</style>