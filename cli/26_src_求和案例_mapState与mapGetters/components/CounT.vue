<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一会儿再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: 'CounT',
  props: [''],
  data() {
    return {
      n: 1
    }
  },
  computed: {
    //靠程序员自己亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },

    //借助mapStare生成计算属性，从state中读取数据.（对象写法）
    // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),

    //借助mapStare生成计算属性，从state中读取数据.（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    //借助mapGetters生成计算属性，从state中读取数据.（对象写法）
    // ...mapGetters({bigSum: 'bigSum'})
    //借助mapStare生成计算属性，从state中读取数据.（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      if (this.$store.state.sum % 2) {
        this.$store.dispatch('jiaOdd', this.n)
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.$store.dispatch('jiaWait', this.n)
      }, 500)
    }

  },
  mounted() {
    const x = mapState({sum: 'sum', school: 'school', subject: 'subject'})
    console.log('@@@@@@', x)
    const y = mapGetters({bigSum: 'bigSum'})
    console.log('@@@@@@', y)
    console.log('CounT', this)
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>