<template>
  <div>
    <ul class="todo-main">
      <Item
          v-for="todoObj in todos"
          :key="todoObj.id"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
          :todo="todoObj"
      ></Item>
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: 'LisT',
  components: {Item},
  props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>

<style lang="css" scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>