<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: #da4f49">Count组件的求和为：{{ sum }}</h3>
    <input v-model="name" placeholder="请输入名字" type="text">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in $store.state.personList" :key="p.id">{{ p.name }}</li>

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
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    }
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('ADD_PERSON', personObj)
      this.name = ''
    }
  }
}
</script>

<style lang="css" scoped>

</style>