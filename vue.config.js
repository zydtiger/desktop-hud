// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        win: {
          target: ["nsis", "msi", "portable"],
          icon: './public/favicon.ico'
        }
      }
    }
  }
}