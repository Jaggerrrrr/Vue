<template>
  <div class="school">
    <h2>学校名称：{{ name |mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试hello按钮</button>
  </div>
</template>

<script>
export default {
  name: 'SchooL',
  data() {
    return {
      name: '河北地质大学',
      address: '石家庄'
    }
  },
  methods: {
    test() {
      this.hello()
    }
  }
}

</script>

<style lang="css" scoped>

.school {
  background-color: #f3a694;
}
</style>