<template>
  <div class="Student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>


export default {
  name: 'StudenT',
  data() {
    return {
      name: 'jagger',
      sex: '男',
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', '段红钰私发')
    }
  }
}
</script>

<style lang="css" scoped>
.Student {
  background-color: #f3a694;
  padding: 5px;
  margin-top: 10px;
}
</style>