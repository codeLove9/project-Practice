<template>
  <div>
    <!-- 千分位展示 -->
    <div>input框千分位实现 使用自定义指令实现</div>
    <el-input v-model="iptValue" v-thousandFormat="iptValue" />
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
    <MixinTest></MixinTest>
  </div>
</template>

<script>
import DemoSlot from './DemoSlot.vue'
import MixinTest from './MixinTest.vue'

export default {
  data() {
    return {
      iptValue: 1111112222222
    }
  },
  methods: {},
  components: {
    DemoSlot,
    MixinTest
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
