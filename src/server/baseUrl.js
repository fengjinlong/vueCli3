let baseUrl
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "11111111"
        break
    case 'alpha':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "tttttttt"  //这里是测试环境中的url
        break
    case 'production':
        baseUrl = "222222222"   //生产环境url
        break
}

export default baseUrl;