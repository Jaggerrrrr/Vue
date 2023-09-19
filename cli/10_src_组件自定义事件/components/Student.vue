<template>
  <div class="Student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>number:{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑jagger事件</button>
    <button @click="death">销毁当前student组件中的实例（vc）</button>
  </div>
</template>

<script>


export default {
  name: 'StudenT',
  data() {
    return {
      name: 'jagger',
      sex: '男',
      number: 0
    }
  },
  methods: {
    add() {
      console.log('add回调被调用了')
      this.number++
    },
    sendStudentName() {
      //触发Student组件实例身上的jagger事件
      this.$emit('jagger', this.name, 666, 999)
      // this.$emit('demo')
    },
    unbind() {
      this.$off('jagger')//解绑一个自定义 事件
      // this.$off(['jagger', 'demo'])//解绑多个自定义 事件
      // this.$off()//解绑所有的自定义事件
    },
    death() {
      this.$destroy()//销毁了当前student组件中的实例（vc）,销毁后所有student实例的自定义事件全都不奏效
    },


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