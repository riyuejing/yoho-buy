const webpack = require("webpack");
module.exports = {
    configureWebpack: {
        //配置webpack
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            })
        ]
    },
    devServer: {
        proxy: {
        '/api': {
            target: 'http://10.80.13.184:3000/',//我的服务器端口
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''//这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
            }
         }
        }
    },
}