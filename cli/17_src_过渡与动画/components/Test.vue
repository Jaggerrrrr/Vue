<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear name="hello">
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TesT',
  data() {
    return {
      isShow: true
    }
  },
}
</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active {
  animation: atguigu 0.5s linear;
}

.hello-leave-active {
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