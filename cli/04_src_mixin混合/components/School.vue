<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}}</h2>
  </div>
</template>

<script>

import {hunhe} from '../mixin'

export default {
  name: 'SchooL',
  data() {
    return {
      name: 'GEO',
      address: '石家庄'
    }
  },
  mixins: [hunhe]
}

</script>

<style lang="css" scoped>

.school {
  background-color: #f3a694;
}
</style>