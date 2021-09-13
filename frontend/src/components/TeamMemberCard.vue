<template>
  <div class="team-member-card">
    <div class="center">
      <div class="v-center" @click="onClick">
        <img class="photo" :src="photo" fit="fill">
        <span class="name">{{name}}</span>
      </div>
      <div class="v-center">
        <p class="intro">{{intro.grade}}<br>
          {{intro.major}}<br>
          {{intro.role}}<br>
          {{intro.slogan}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TeamMemberCard',
  components:{

  },
  props:{
    name: {
      type: String,
    },
    photo:  {
      type: String,
    },
    intro:  {
      grade: String,
      major: String,
      role: String,
      slogan: String,
      homePage: String,
    }
  },
  data() {
    return {
      
    }
  },
  methods:{
    onClick(){
      console.log('ok')
      console.log(this.intro.homePage);
    }
  }
}
</script>

<style scoped>

.team-member-card{
  width: 90%;
  height: 150px;
  margin: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
  padding: 10px;
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

.photo{
  margin: 10px;
  height: 100px;
  width: 100px;
  border-radius: 120px;
  cursor: pointer;
}

.intro{
  text-align: left;
  padding: 10px;
	word-wrap: break-all;
	word-break: break-word;
	overflow: hidden;
  color: gray;
}




</style>