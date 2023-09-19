<template>
  <div class="School">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'SchooL',
  data() {
    return {
      name: '河北地质大学',
      address: '石家庄'
    }
  },
  mounted() {
    // console.log('SchooL', this.$bus)
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是School组件，收到了数据', data)
    // })
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息，hello消息回调执行了', msgName, data)
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}

</script>

<style lang="css" scoped>

.School {
  background-color: #69ff97;
  padding: 5px;
  margin-top: 10px;
}
</style>