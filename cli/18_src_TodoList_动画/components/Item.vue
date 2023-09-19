<template>
  <div>
    <transition appear name="todo">
      <li>
        <label>
          <input :checked="todo.done" type="checkbox" @change="handleCheck(todo.id)"/>
          <!--        如下代码也能实现功能，但是不推荐使用，因为有点违反原则，修改了props-->
          <!--                <input type="checkbox" v-model="todo.done"/>-->
          <span v-show="!todo.isEdit">{{ todo.name }}</span>
          <input
              v-show="todo.isEdit"
              ref="inputTitle"
              :value="todo.name"
              type="text"
              @blur="handleBlur(todo,$event)"
          >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
      </li>
    </transition>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: 'IteM',
  //声明接收todo对象
  props: ['todo'],
  methods: {
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        //通知App组件将对应的todo对象删除
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }
    },

    handleEdit(todo) {
      if (todo.hasOwnProperty.call('isEdit')) {
        todo.isEdit = true
      } else {
        console.log('todo身上没有isEdit')
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updataTodo', todo.id, e.target.value)

    }
  }
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
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

.btn-edit {
  color: #fff;
  background-color: #f3a694;
  border: 1px solid #da4f49;
  margin-right: 5px;

}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}


</style>