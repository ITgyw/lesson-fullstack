- fullstack 全栈
    1. 前端方向 vitejs/app  工程化生成单页应用
    2. 后端使用 开源的Neteasecloud
        - .gti 干掉
            同一个目录下不能有多个git
    3. 前端和后端怎么交流？
        axios api -> 
        frontend UI 组件  需要数据(fastmock 假数据)
        backend  api 3000 接口 
        前后端分离

- npm install -g cnpm -registry=http://registry.npm.taobao.org
    全局安装 cnpm  来自阿里
    npm i 国外的服务器上去把package.json 中依赖的包下下来  好慢 容易出错
    cnpm i 到阿里云上下载 更快
    -- registry 手动设置安装源
    cnpm 和npm 用法一样

- react 全家桶到位
    react 负责组件化， MVVM 响应式
    react-router 路由
    redux 负责 数据流管理
        前端 ->  api ->  redux（中央银行） -> 后端
