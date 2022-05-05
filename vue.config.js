const { defineConfig } = require('@vue/cli-service')

// vue.config.js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: './', 

  chainWebpack: config => {
 
    // svgRule.uses.clear()
    // svgRule
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   });

      config.module
        .rule('text-loader')
        .test(/\.md$/)
            .use()
            .loader( 'text-loader')
            .options("$")
            .end()

  },
  
  
})
