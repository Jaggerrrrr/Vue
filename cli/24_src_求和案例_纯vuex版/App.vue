<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from "@/components/CounT.vue";

export default {
  name: 'App',
  components: {Count},
  mounted() {
    console.log('App', this)
  }
}
</script>

<style scoped>

</style>
