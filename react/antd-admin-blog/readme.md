- react单页应用 + 数据管理 全家桶开发
- 商城 网易云音乐 用户端App
    博客后台 
- 权限校验Blog Admin 后台管理系统
    1. login 管理员Admin 小编 一般工作人员
    2. antd 很快 antd design pc 国际化流行的专业框架 后台管理系统
        antd-mobile 移动用户端
    3. 新手？工作人员用的，用户量不大，并发，性能优化
        好用，方便。
        出些错没那么严重的
- vite升级到v3 npm init vite
- antd v4
- canvas 背景墙 属于数据可视化 
- 细节化处理 redux 性能
    开发阶段和生成阶段的需求是不一样的
    开发阶段 开发便利 代码方便调试，有注释，不要压缩 sourcemap
    上线 性能 压缩
    npm run dev
    npm run build
    环境变量的概念
    cross-env 跨操作系统 NODE_ENV="developmemt" 工程化 process.env.NODE_ENV

- 登录
    1. 表单提交 useState username password格式正确
    2. dispatch 异步的 action
    3. api 
    4. reducer case 重新计算
    5. state.login true