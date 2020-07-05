const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 为什么使用path提供的方法拼接路径
// /src/ ,/src , index.js. /index.js
// /src//index.js
// /src/index.js

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 3000,
        hot: true
    },
    plugins: [ // 配置插件的节点
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(jpg|png|gif|bmp|svg)$/,
                use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
              },
              {
                test: /\.js$/,
                // 排除的部分，node_modules,1、没有必要2、node_modules特别大，打包比较慢
                exclude: /(node_modules|bower_components)/,
                // 使用数组和字符串配置，这里也可以使用对象配置，loader是js文件的处理模块，options是参数，里面参数的
                // 内容是根据不同loader有不同的内容，这里presets是指定babel-loader预置的翻译语法
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
             // 配置处理 .scss 文件的 第三方 loader 规则
        ]
    }
}


