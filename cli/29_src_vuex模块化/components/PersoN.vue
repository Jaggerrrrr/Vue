<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: #da4f49">Count组件的求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input v-model="name" placeholder="请输入名字" type="text">
    <button @click="add">添加</button>
    <button @click="addPersonDuan">添加一个姓段的人</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in $store.state.personAbout.personList" :key="p.id">{{ p.name }}</li>

    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: 'PersoN',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"]
    }
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },
    addPersonDuan() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch('personAbout/addPersonDuan', personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }
}
</script>

<style lang="css" scoped>

</style>