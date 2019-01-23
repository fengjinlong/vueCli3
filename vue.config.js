const path = require('path')
// const fs = require('fs')

function resolve (dir) {
  return path.join(__dirname, dir)
}
// const environment = process.env.NODE_ENV
module.exports = {
  // eslint
  // lintOnSave: environment !== 'production',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('utils', resolve('src/views'))
  },
  // http://localhost:8080/publicPath
  // publicPath: process.env.NODE_ENV === 'production' ? '/111111' : '/222222222',
  configureWebpack: config => {
    // Nginx 开启 Gzip 压缩配置后，其会根据配置情况对指定的类型文件进行压缩，主要针对 JS 与 CSS 。
    // 如果文件路径中存在与原文件同名（加了个 .gz），Nginx 会获取 gz 文件，如果找不到，会主动进行 Gzip 压缩。
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          /* global CompressionWebpackPlugin:true */
          new CompressionWebpackPlugin({
            // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询
            asset: '[path].gz[query]',
            // 使用 gzip 压缩
            algorithm: 'gzip',
            // 处理与此正则相匹配的所有文件
            test: new RegExp('\\.(js|css)$'),
            // 只处理大于10kB此大小的文件
            threshold: 10240,
            // 最小压缩比达到 0.8 时才会被压缩
            minRatio: 0.8
          })
        ]
      }
    }
  },
  // 全局注入通用样式
  // css: {
  //   loaderOptions: {
  //     stylus: {
  //       // data: fs.readFileSync('./src/assets/stylus/mixins.styl', 'utf-8')
  //       data: `@import "@/assets/stylus/mixins.styl"`
  //     }
  //   }
  // }
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/assets/stylus/mixins.styl')
      ]
    }
  }
}
