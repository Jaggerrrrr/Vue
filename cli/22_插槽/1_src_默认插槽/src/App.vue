<template>
  <div class="container">
    <CategorY title="游戏">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ul>
    </CategorY>

    <CategorY title="美食">
      <img src="https://pic3.zhimg.com/50/v2-861e429c550a53e152d8b2f42b14faa0_720w.jpg?source=1940ef5c">
    </CategorY>

    <CategorY title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </CategorY>
  </div>
</template>

<script>
import CategorY from "@/components/CounT.vue";

export default {
  name: 'App',
  components: {CategorY},
  data() {
    return {
      games: ['Apex', 'LOL', 'R6', 'DevilMayCry'],
      foods: ['猪蹄子', '火锅', '自助餐', '烧烤'],
      films: ['铃芽户缔', '天气之子', '你的名字', '海贼王：红']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>