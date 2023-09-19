<template>
  <!--  组件的结构-->

  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我输出x</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
  name: 'Student',
  data() {
    return {
      name: 'GEO',
      age: 21
    }
  },
  methods: {
    showName() {
      alert(this.name)
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