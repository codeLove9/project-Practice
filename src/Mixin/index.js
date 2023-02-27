export default {
  data() {
    return {
      mixinData: '我是mixinData'
    }
  },
  methods: {
    hello() {
      console.log(`Hello!`);
    }
  },
  created() {
    console.log(`this is MixinTest`);
  }
}