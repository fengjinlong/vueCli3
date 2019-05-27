// import Vue from 'vue'
// function capitalizeFirstLetter (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }
// function validateFileName (str) {
//   return /^\S+\.vue$/.test(str) && str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
// }
// const requireComponent = require.context('./', true, /\.vue$/)
// requireComponent.keys().forEach(filePath => {
//   const componentConfig = requireComponent(filePath)
//   const fileName = validateFileName(filePath)
//   const componentName = fileName.toLowerCase() === 'index' ? capitalizeFirstLetter(componentConfig.default.name) : fileName
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })
// //
