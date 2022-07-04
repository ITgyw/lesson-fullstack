// html模板指定
// common js 模块方案 为什么不用es6？ 整个webpack都是后端项目
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;

// 指定一下webpack目录上下文环境
module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "~": path.resolve(__dirname, 'src/assets'),
        }
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    entry: {
        app: ["./main.tsx"]
    },
    mode: "development",
    devServer: {
        hot: true,
        open: true,
        port: 1314
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                // loader加载器
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // 使用多个loader需要use
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ]
}

