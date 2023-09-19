<template>
  <div class="category">
    <h3>{{ title }}分类</h3>


    <!--    定义一个插槽（挖个坑，等组件的使用者进行填充）-->
    <slot>我是一些默认值，当使用者没有传递一些具体结构时，我就会出现</slot>
  </div>
</template>

<script>
export default {
  name: 'CategorY',
  props: ['title']
}
</script>

<style lang="css" scoped>
.category {
  background-image: linear-gradient(135deg, #fff6b7, #f6416c);
  width: 200px;
  height: 300px;
}


</style>