const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
  
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("utils", resolve("src/views"))
  },
  configureWebpack: config => {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      publicPath: '111111111'
    } else {
      // 为开发环境修改配置...
      publicPath: '2222222'
    }

  }
}
