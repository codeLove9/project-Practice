const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 原为: hotst: 'localhost'
    host: '192.168.1.4',
    port: 8080
  }
})
