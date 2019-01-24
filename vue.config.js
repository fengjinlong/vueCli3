const path = require('path')
// const fs = require('fs')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'element-ui': 'ELEMENT'
}
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const cdn = {
  // 生产环境
  build: {
    css: [
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://unpkg.com/element-ui/lib/index.js'
    ]
  }
}

const environment = process.env.NODE_ENV
module.exports = {
  devServer: {
    port: 8080, // 端口号
    open: environment === 'development',
    https: false,
    proxy: {
      '/api': {
        // target: 'http://210.12.23.78:8082',
        target: 'https://www.baidu.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: function (app) {
      app.get('/syncStuCourseRecord/loadRecord?pageNum=1&pageSize=20', function (req, res) {
        res.json({})
      })
    }
  },
  outputDir: 'dist',
  // eslint
  lintOnSave: environment !== 'production',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('utils', resolve('src/views'))
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
        // 打包分析
        config.plugin('webpack-report')
          .use(BundleAnalyzerPlugin, [{
            analyzerMode: 'static'
          }])
      }
      return args
    })
  },
  // http://localhost:8080/publicPath
  // publicPath: process.env.NODE_ENV === 'production' ? '/111111' : '/222222222',
  configureWebpack: config => {
    // Nginx 开启 Gzip 压缩配置后，其会根据配置情况对指定的类型文件进行压缩，主要针对 JS 与 CSS 。
    // 如果文件路径中存在与原文件同名（加了个 .gz），Nginx 会获取 gz 文件，如果找不到，会主动进行 Gzip 压缩。
    if (environment === 'production') {
      config.externals = externals
    }
  }
  // 全局注入通用样式   不行
  // css: {
  //   loaderOptions: {
  //     css: {
  //       // data: fs.readFileSync('./src/assets/stylus/mixins.styl', 'utf-8')
  //       data: `
  //         @import "@/assets/stylus/mixins.styl"
  //       `
  //     }
  //   }
  // }
  // pluginOptions: {
  //   'style-resources-loader': {
  //     'preProcessor': 'stylus',
  //     'patterns': [
  //       path.resolve(__dirname, './src/assets/stylus/mixins.styl')
  //     ]
  //   }
  // }
}
