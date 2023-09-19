<template>
  <div class="app">
    <h2>{{ msg }},学生姓名是:{{ studentName }}</h2>
    <!--    通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
    <SchooL :getSchoolName="getSchoolName"></SchooL>
    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法使用@或 v-on)-->
    <StudenT @demo="m1" @jagger="getStudentName"></StudenT>
    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法使用ref)-->
    <!--    <StudenT ref="student"></StudenT>-->
  </div>
</template>

<script>
import StudenT from "@/components/Student.vue";
import SchooL from "@/components/School.vue";

export default {
  name: 'App',
  components: {StudenT, SchooL},
  data() {
    return {
      msg: '你好啊！',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name, ...params) {
      console.log('App收到了学生名：', name, params)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被出发了')
    }
  },
  mounted() {
    // this.$refs.student.$on('jagger', this.getStudentName)
    // this.$refs.student.$once('jagger', this.getStudentName)//once只能触发一次

  }

}
</script>

<style lang="css" scoped>
.app {
  background-color: #da4f49;
}
</style>