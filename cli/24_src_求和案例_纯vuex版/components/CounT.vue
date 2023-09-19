<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
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
export default {
  name: 'CounT',
  props: [''],
  data() {
    return {
      n: 1
    }
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
    console.log('CounT', this)
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>