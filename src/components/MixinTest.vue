<template>
  <div>
    <div>测试Mixin功能--------{{ mixinData }}</div>
    <button @click="hello">点我调用Mixin中的方法 hello</button>
  </div>
</template>

<script>
import Mixin from '@/Mixin';
export default {
  mixins: [Mixin]
}
</script>

<style></style>
