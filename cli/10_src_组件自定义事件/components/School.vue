<template>
  <div class="School">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>

    <button @click="sendSchoolName">把学校名给App</button>


  </div>
</template>

<script>
export default {
  name: 'SchooL',
  props: ['getSchoolName'],
  data() {
    return {
      name: '河北地质大学',
      address: '石家庄'
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
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