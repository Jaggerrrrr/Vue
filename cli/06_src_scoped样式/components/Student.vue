<template>
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>


export default {
  name: 'StudenT',
  data() {
    return {
      name: 'jagger',
      sex: '男'
    }
  }
}
</script>

<style lang="css" scoped>
.demo {
  background-color: #f3a694;
}
</style>