<template>
  <!--  组件的结构-->

  <div class="demo">
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">showName</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
  name: 'StudenT',
  data() {
    return {
      studentName: 'jagger',
      age: 21
    }
  },
  methods: {
    showName() {
      alert(this.studentName)
    }
  }

}
</script>

<style>
/*组件的样式*/
.demo {
  background-color: #f3a694;
}
</style>