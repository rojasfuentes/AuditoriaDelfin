const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig(
{
  transpileDependencies: true,
  pages: {
    login: {
      entry: './src/pages/login/main.js',
      template: './public/index.html',
      filename: 'login.html',
    },
    mainpage: {
      entry: './src/pages/mainpage/main.js',
      template: './public/index.html',
      filename: 'mainpage.html',
    },
  },
})
