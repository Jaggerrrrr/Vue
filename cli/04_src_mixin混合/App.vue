<template>
  <div>
    <StudenT></StudenT>
    <SchooL></SchooL>

  </div>
</template>

<script>
import StudenT from "@/components/Student.vue";
import SchooL from "@/components/School.vue";

export default {
  name: 'App',
  components: {StudenT, SchooL},
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