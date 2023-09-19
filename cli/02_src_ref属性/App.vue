<template>
  <div>
    <h1 ref="title" v-text="msg"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <SchooL ref="sch"></SchooL>
  </div>
</template>

<script>
import SchooL from "@/components/Student.vue";

export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎学习Vue！'
    }
  },
  components: {SchooL},
  methods: {
    showDOM() {
      console.log(this.$refs.title)//真实DOM元素
      console.log(this.$refs.btn)//真实DOM元素
      console.log(this.$refs.sch)//School组件的实例对象
    }
  }
}
</script>

<style lang="scss" scoped>

</style>