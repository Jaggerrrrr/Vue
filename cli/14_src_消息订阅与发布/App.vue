<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>


import School from "@/components/School.vue";
import Student from "@/components/Student.vue";

export default {
  name: 'App',
  components: {Student, School},
  data() {
    return {
      msg: '你好啊！'
    }
  }
}
</script>

<style lang="css" scoped>
.app {
  background-color: #da4f49;
}
</style>