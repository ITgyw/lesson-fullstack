- node 和 es6 在模块化上可以共存
    1. react  es6+
        node cjs阶段
        js 优点就是前后端通吃 但cjs esm 代码风格不太OK，有点像两套代码
        不能接受

    2. 引入工程化解决
        babel 
        写的代码可以转变成能运行的代码
        @bable/core @babel/cli @babel/preset-env @babel/node
        babel.config.js:
            const presets = [
                ["@babel/env",
                    {
                        targets: {
                            edge: "17",
                            firefox: "60",
                            chrome: "67",
                            safari: "11.1",
                        },
                        useBuiltIns: "usage",
                    }],
            ];

            module.exports = { presets };
        npx babel-node 1.js 转义和运行
