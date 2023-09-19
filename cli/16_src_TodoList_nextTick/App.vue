<template>
  <div>
    <div id="root">
      <div className="todo-container">
        <div className="todo-wrap">
          <MyHeader @addTodo="addTodo"/>
          <List :todos="todos"/>
          <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import List from "@/components/LisT.vue";

export default {
  name: 'App',
  components: {MyHeader, MyFooter, List},
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选或者取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //更新一个todo
    updataTodo(id, name) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.name = name
      })
    },
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    //清楚所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updataTodo', this.updataTodo)
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.off('checkTodo')
    this.$bus.off('updataTodo')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style lang="css" scoped>
body {
  background: #fff;
}


.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>