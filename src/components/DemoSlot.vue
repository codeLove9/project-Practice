<template>
  <div>
    <div>
      <slot name="header" :demoData1="a"> </slot>
    </div>
    <div>
      <slot name="middle" :demoData2="b">123</slot>
    </div>
    <div>
      <slot :demoData3="c"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: '作用域插槽',
      b: '解构插槽',
      c: '默认插槽'
    }
  }
}
</script>

<style></style>
