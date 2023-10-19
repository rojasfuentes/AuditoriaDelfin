const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig(
{
  transpileDependencies: true,
  pages: {
    component1: {
      entry: './src/pages/login/main.js',
      template: './public/index.html',
      filename: 'login.html',
    },
    component2: {
      entry: './src/pages/mainpage/main.js',
      template: './public/index.html',
      filename: 'mainpage.html',
    },
  },
})
