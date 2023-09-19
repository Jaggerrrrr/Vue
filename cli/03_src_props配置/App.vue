<template>
  <div>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <StudenT ref="sch" :age="22" name="jagger"></StudenT>
    <StudenT name="Dpiter"></StudenT>

  </div>
</template>

<script>
import StudenT from "@/components/Student.vue";

export default {
  name: 'App',
  components: {StudenT},
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