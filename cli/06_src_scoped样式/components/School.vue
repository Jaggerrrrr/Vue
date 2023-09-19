<template>
  <div class="demo">
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
}

</script>

<style lang="css" scoped>

.demo {
  background-color: #69ff97;
}
</style>