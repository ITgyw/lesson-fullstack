- 为什么选择学前端(面试官想听什么？)
    前端的技术发展， 及未来的职业规划
    1. 行业的发展必然带来职业的细分，一年前，我就开始选择方向，最后决定学习前端
    2. js 在es6后，表现出强大的大型企业级开发的能力， 而且可以做前端，也可以node做后端
    3. 比较迷B站，迷罗翔老师，弹幕好有意思，搜索了是用前端canvas做的，就开始从html + css
    4. 掘金社区学习前端很方便， 开始是跟着文章学，写代码，后面写文章，发表到掘金，很有成就感

    怎么学习前端的
    1. 看书 你不知道的JavaScript JavaScript语言精粹
    2. 掘金 跟着大佬学
    3. B站上看些实战视频
    4. 写文章， 做开源项目， 提升自己的实例， 知行合一
    5. 希望来到贵公司后，您带我，向大佬们学习。
- 介绍项目中的难点， 怎么解决的？
    - 请介绍下自己的项目
    - 项目有什么特色
    - 难点

    1. 结合项目讲 为什么要仿这个项目
        学习完react 全家桶后，选择仿XXApp，练手
    2. 真实
        难点： 即特色

        - 开始写css的时候很乱，后面使用styled-components样式组件解决了很多问题
            1. 移动端的兼容性问题 rem.js 动态设置HTML字体大小， 设计稿宽度750px
            2. 全局级reset样式， 用styled-components GlobalStyle
                主题样式， 图标字体图库iconfont GlobalStyle来处理
            3. 模块化样式styled.div`` 样式的污染问题， css类名的hash化
            4. styled-components 有和stylus，sass 一样的变量 嵌套 mixin能力 方便复用 
                1px 问题 
            5. styled-components 好复用的样式组件
        - ajax 请求之前用fetch， 接口组件里到处都是，  不好管理
            使用axios， 配置 接管请求， 都放在api 目录下，方便管理
            1. 统一设置baseURL，方便根据运行环境dev/production, 无缝切换本地接口和线上接口
                接口文档 
            2. 登录使用jwt后，可以使用axios请求拦截带上后端返回的token，存在localStorage中，
                请求头authrization字段中
            3. 响应结果， 响应拦截器统一解析数据，统一处理报错。antd 有Toast组件
                status code 
        - 造接口数据
            - 开始用fastmock
            - 使用koa 返回接口数据
            - B站这样的接口， 支持跨域访问
        - 跨域
            - koa 写接口的时候遇到了， 开始fastmock没遇到
            - koa-cors中间件解决了
            - 通过设置一些Acess-Controll-Allow-Origin请求头
            - 后面了解jsop 
        - 滚动加载更多，及懒加载
            - better-scroll 滚动触感体验比较好， 上拉加载更多， 下拉刷新功能
            - 图片一多， 加载很慢， react-lazyload 包住图片
            - Scroll + forceCheck 一边滚动 一边延迟加载图片
        - 幻灯片swiper
        - 页面越写越多的时候，加载很慢，首页没必要开始加载运行那么多的组件， Suspense+ lazy 来实现路由懒加载
        - 页面路由的切换动画
        - lodsh
        - 日期格式 dayjs
        ......
        
            

    