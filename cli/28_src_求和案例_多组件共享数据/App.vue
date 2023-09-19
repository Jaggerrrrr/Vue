<template>
  <div>
    <Count></Count>
    <hr>
    <PersoN></PersoN>
  </div>
</template>

<script>
import Count from "@/components/CounT.vue";
import PersoN from "@/components/PersoN.vue";

export default {
  name: 'App',
  components: {Count, PersoN},
  mounted() {
    // console.log('App', this)
  }
}
</script>

<style scoped>

</style>
