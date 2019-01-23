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
  // publicPath: process.env.NODE_ENV === 'production' ? '/111111' : '/222222222',
  configureWebpack: config => {
    console.log(process.env.NODE_ENV)
  }
}
