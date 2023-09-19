<template>
  <div class="School">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
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
  mounted() {
    console.log('SchooL', this.$bus)
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}

</script>

<style lang="css" scoped>

.School {
  background-color: #69ff97;
  padding: 5px;
  margin-top: 10px;
}
</style>