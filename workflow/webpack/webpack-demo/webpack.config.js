const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// const { output } = require('./webpack.config1')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    // 配置loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },
    Plugin: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}