<template>
  <div>
    <div class="todo-header">
      <input v-model="name" placeholder="请输入你的任务名称，按回车键确认" type="text" @keyup.enter="add"/>
    </div>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: 'MyHeader',
  props: ['addTodo'],
  data() {
    return {
      name: ''
    }
  },
  methods: {

    add() {
      //校验数据
      if (!this.name) return alert('输入不能为空！')
      //将用户输入包装成为一个todo对象
      const todoObj = {id: nanoid(), name: this.name, done: false}
      //通知App去添加一个todo对象
      this.addTodo(todoObj)
      //清空输入
      this.name = ''
    }
  }
}
</script>

<style lang="css" scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>