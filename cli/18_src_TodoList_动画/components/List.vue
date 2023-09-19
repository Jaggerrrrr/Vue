<template>
  <div>
    <ul class="todo-main">
      <transition-group appear name="todo">
        <Item
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
        ></Item>
      </transition-group>

    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: 'LisT',
  components: {Item},
  props: ['todos']
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

.todo-enter-active {
  animation: atguigu 0.5s linear;
}

.todo-leave-active {
  animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>