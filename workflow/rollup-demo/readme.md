- 代码上线前，
    把模块化的一堆代码（入口文件）， 打包成一个文件
    大大的有利于页面打开速度，对网页性能的优化

    - 写代码只是工作的一部分， 代码上线也是我们的工作
      大前端整个工作 叫工作流

    - 怎么把会带来多个http请求的模块化文件s 合并成一个文件
        1. 合并
        2. 功能不受影响

        node 除了是后端环境外， 还可以给我们带来前端DOM没有的能力， 合并功能  rollup
        npm i rollup
        "scripts": {
                    "dev": "live-server",
                    "build": "rollup m2.js "
                },
        npm init -y 初始化
        npm run build  打包的bundle.js文件
        "scripts": {
                    "dev": "live-server",
                    "build": "rollup m2.js --file bundle.js"
                   },