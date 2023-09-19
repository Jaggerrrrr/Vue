<template>
  <div>
    <div v-show="total" class="todo-footer">
      <label>
        <!--        <input :checked="isAll" type="checkbox" @change="checkAll"/>-->
        <input v-model="isAll" type="checkbox"/>
      </label>
      <span>
          <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      // const x = this.todos.reduce((pre, current) => {
      //   return pre + (current.done ? 1 : 0)
      // }, 0)
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    // isAll() {
    //   return this.doneTotal === this.total && this.total > 0
    // },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      set(value) {
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo', value)
      }

    }

  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked)
    // },
    clearAll() {
      // this.clearAllTodo()
      this.$emit('clearAllTodo')
    }
  }
}
</script>

<style scoped>

.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>