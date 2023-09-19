<template>
  <div class="student">
    {{ msg }}
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">点我年龄+1</button>
  </div>
</template>

<script>
export default {
  name: 'StudenT',
  data() {
    return {
      msg: '欢迎学习Vue！',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  },
  // props: ['name', 'age']//简单声明接收

  //接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number
  //
  // }

  //接收的同时对数据进行类型限制+默认值的设置+必要性的限制
  props: {
    name: {
      type: String,//name的类型是字符串
      required: true//name是必要的
    },
    age: {
      type: Number,
      default: 21//默认值

    }
  }

}
</script>

<style lang="css" scoped>
.student {
  background-color: #f3a694;
}
</style>