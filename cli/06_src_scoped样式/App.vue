<template>
  <div>
    <StudenT></StudenT>
    <SchooL></SchooL>
  </div>
</template>

<script>
import StudenT from "@/components/Student.vue";
import SchooL from "@/components/School.vue";

export default {
  name: 'App',
  components: {StudenT, SchooL},
}
</script>

<style lang="css" scoped>

</style>