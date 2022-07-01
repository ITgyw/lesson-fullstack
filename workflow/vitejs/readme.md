- react 官方脚手架
    creat-react-app
    npm i create-react-app -g

- npm -g 安装到哪？
    安装的是包 package 
    包全局会安放在 prefix 下 通过：npm config ls查看
    交给了 环境变量 path

- cnpm 是什么
    music  api  国内的源
- pnpm 
    高性能npm
    先设置 registry
- npx ？
    实验一些功能，或直接运行node_modules目录下的包时有用

- create-react-app  todolist
- pnpm create vite

- 为什么需要vite ？
    vite 是vue作者尤雨溪带货的工程化的套件 替代webpack
    - vite 为什么那么快？
    vite 比webpack 快 6倍
    1. 文件的请求 依赖  花时间
        webpack 叫 bundler 打包器 打包成一个文件 从入口到出口
        entry -> output   花时间的罪魁祸首
        vite  no bundler  按需加载 
        - 现代浏览器 直接支持es module加载
            <script type="module" script="/src/main/jsx">
        - 遇到的inport 都做为一个新的加载
        - 编译的过程 
            module script  -> mian.jsx  -> 按需加载 react
            react-dom  index.css... -> 编译器babael(实时)
        - 浏览到新的页面时，再通过import 编译执行

- 在vite项目中， 一个import 语句即代表一个HTTP请求
    Vite Dev Server 会读取本地文件 返回浏览器可以解析的代码
    vute 提倡的no bundle
    利用浏览器原生es模块的支持，实现开发阶段的devServer，
    进行模块的按需加载，而不是先整体打包再进行加载（webpack），
    






