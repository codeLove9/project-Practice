<template>
  <div>
    <!-- 千分位展示 -->
    <el-input v-model="iptValue" v-thousandFormat="iptValue" />
    <div @click="show">{{ realData }}</div>
    <DemoSlot>
      <!-- 具名+作用域插槽 -->
      <template v-slot:header="scope">
        {{ scope.demoData1 }}
      </template>
      <!-- 解构插槽 -->
      <template v-slot:middle="{ demoData2 }">
        {{ demoData2 }}
      </template>
      <!-- 默认插槽 -->
      <template v-slot="{ demoData3 }">
        {{ demoData3 }}
      </template>
    </DemoSlot>
  </div>
</template>

<script>
import DemoSlot from './DemoSlot.vue'

export default {
  data() {
    return {
      iptValue: 1111112222222
    }
  },
  methods: {
    show() {
      console.log(this.realData, 'log')
    }
  },
  components: {
    DemoSlot
  },
  computed: {
    realData() {
      return +this.iptValue.toString().replace(/,/g, '')
    }
  }
}
</script>

<style lang="sass">
.container
  display: flex
  justify-content: space-between
  padding: 10px 40px
  height: 70px
</style>
