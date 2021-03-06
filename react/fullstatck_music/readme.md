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

- react 是声明式的UI组件开发框架
    1. 那么多的组件 好复杂， 好多API
    2. 可以用组件来声明功能， 更好读 
    
- react + reactDOM 
    react-router + react-router-dom
    redux + react-redux 

- 数据仓库的搭建过程
    1. 从react-reduce 中解构Provider
        声明给应用添加数据管理功能
    2. 在store专有的目录下redux中creatStore 创建仓库实例
    3. createStore方法接收一个reducer函数

1. reset
    三元使用styled-components 提供的crateGlobalStyle 全局样式
    style.div`` wrapper容器 hash化
2. adapter

3. axios 功能点
    - 网络请求千千万，api axios 把单例干
    - 统一了vue raect  native app 三端的请求库
    - 每个请求 域名 + 端口部分 没必要重复，
        可以配置到baseURL中
    - 为了切换请求域名的需要
        http://localhost:3000/banner
    - 拦截器 interceptors.response.use()
        解构好res.data  处理错误
    interceptors.request.use()
    - 登录时， 服务器会给我们一个授权码 token
    - 我们每次请求时，需要手工带上
        拦截器 request 和 response
        req.header  请求头  Authorization 授权信息
        
- 组件数据管理功能被剥夺
    1. redux管理数据更专业
        - store store/index.js
        - reducer 集合 交个store
        - combineReducers 来提供reducer
        - 项目的各个模块  文章 评论 用户模块 ...
        - 每个模块都是一个reducer函数
        - reducer还可以多次运行 
        - dispatch 一个他想要的action
        - 页面会自动更新
        - connect mapStateToProps 获取状态
            mapDispathToProps 触发状态的改变

    2. mapStateToProps 状态读操作

    3. mapDispatchToProps 写操作
        - 状态不可直接修改 redux的起因
        - 有法可依 
        - dispatch getRankList 异步action action redux-thunk 支持
            data dispatch(changeRankList) 同步action
        - dispatch({type:'',data}) 在action里
        - reducer 根据type 重新计算
        - 状态发生改变，应用了状态的地方mvvm

- 小型项目没必要用redux，
    如果你在想要不要用redux，那就不要用
    - 如果足够复杂，模块化reducer迁移到pages相应模块下
        pages/store 新的目录架构
    - store 中央 src/store + 模块化  @pages/store{n}

- 修改状态有固定的流程
    - 属于actionCreators
    - 一般标配两个action， 一个同步的， 一个异步的，
    - dispatch才能触发
    - action 对象固定格式 {type：}
    - type 方便我们把action为什么要改变记录下来
    - 从init -> action状态 都是可被追溯的
    - 数据管理的严谨性

- styled-components
    页面播放歌曲动态高度，props 传参
    ${函数} 函数的返回值
    页面的播放状态

- 移动端 一般必须better-scroll 生成scroll 组件
    1. 滚动体验更好
    2. 下拉刷新， 上拉加载更多
    3. 使用了神三元封装的Scroll组件
    4. 移动端加载更多的标配

- 数据管理跨页面级别的组件
    redux 可以用来共享数据， 也是redux本质
    父子组件之间共享数据 好搞
    爷孙  周围的人共享  难搞  redux  connect 一下
    redux 数据可以跨页面级别，跨层级

- redux 架构师
    1. 数据管理和组件， 在有了redux后， 是平级关系
        /store   /pages
    2. 模块化数据管理， 每个模块reducer + action  下放到
        页面路由模块中
    3. 每个模块都提供index.js 灵魂（所有的reducer，action，constants 
        都在一起export  是清单文件）

- react 组件渲染原理 
    1. 挂载
    2. 当状态更新时，
        MVVM，JSX 从头到尾 重新编译
    3. recommend中， 多个主要子组件 Slider等
    4. 给相对独立， 组件加memo，只要外界给他的props没有变，则不会重新编译
    5. 热更新  页面局部

- memo 组件性能优化
    1. 子组件
    2. 父组件数据复杂，多项改变状态的地方
    3. 父组件的改变没有影响到子组件（props未变，没有props）
    4. 组件外面都加一个memo

- styled-components 原则
    1. 最外层容器 styled-components 接管
        Wrapper Container
    2. List + ListItem  样式的复用
    
- 图片延迟加载
    1. react-lazyload  声明式组件 LazyLoad + placeholder
        包住 原来的图片 
    2. Scroll  onScroll react-lazyload 去 forceCheck


## 复杂组件业务分析
    1. 这个阶段要刻意练习复杂组件 
        搜索
        登录
    2. redux 的设计思路
        api 请求的肯定redux了
        跨模块共享状态没问题
    3. 热词 
        建议

- 三元react 风格
    1. 命名风格
        api请求 getXXXRequest
        页面级别组件中 getXXXXDispatch
        action 异步 getXXX
        action 同步 changeXXX
        actionTypes SET_XXX_XXX
    2. react 处理流程风格
        - 分析页面，看透业务，网络请求 和 状态 XHR
        - mapStateToProps 需要哪些状态
        - store 模块 defaultState
        - reducer case 修改
        - constants 写完了
        - actionCreators 
        - api 填写
- CSSTransition 页面交互组件
    1. 给页面的路由切换带来动画效果
    2. 来自react-transition-group
    3. in + 私有的useState(show)
        初始时show为false 内存 异步的
        useEffect mounted(挂载上去了) 浏览器上  shoe true
    4. classNames fly 
    5. fly-enter 先立马上
        opactiy: 0;;
        translate: transform(100%,0,0);
        一小会儿 因为transition需要 transition: all 0.3s;
        opcity: 1;
        translate: transfrom(0%,0,0)
    6. fly-exit
        fly-exit-active
    7. transform-origin基点在右下角
    8. GPU加速用  transform:translate3d
    9. 页面后退按钮只需要setShow(false),CSSTransition 组件的onExit接管

- 界面技巧
    1. 带有后退、第二按钮 页面 弹性布局
        flex
        align-items:center
        margin: 0 0.3rem;
    2. input 搜索用户体验
        focus  自动聚焦
        - useRef()  生成一个对象  DOM关联对象  {current: null}
        - jsx dom  ref={refObj}
        - useEffect  current 被关联成功了  DOMElement
        - refObject.current.focus()
    3. 清除功能
        style-loader  行内样式   display: 动态

- useMemo 用法  及吹牛指南
    1. input change事件 需要 debounce的 来自于utils文件 手写的
    2. debounce的计算结果是useMemo的前提条件， 缓存的是计算结果
    3. react 父组件 有MVVM 更新， 他会通知所有的子组件更新
    4. 组件更新的本质， 组件是一个函数，函数重新运行， jsx也会重新运行
    5. debounce 只需要计算一次，结果缓存就好， 没必要重新计算
    6. 如useEffect 如果万一它的计算结果过时了呢？
        由它的第二个参数负责 [handleQuery] 神三元要表达对useMemo理解的地方 
    面试是当面展示自己，可以表演的 

- 内外双修 query
    页面级别组件 query 为action的dispatch 做准备
    useEffect 监听 query  dispatch action
    input 子组件 query  debounce  useMemo  
    useEffect query  去向父组件报告通信
    
- Hooks 是react 编程风格
    1. hooks use开头的函数式编程风格
    2. class Search  extends Components {
        constructor() {

        }
        render() {
            return (
                jsx
            )
        }
    } 缺点是 为了面向对象而面向对象
    很多形式主义代码
    3. useState useEffect useMemo useCallback...
        函数 带来便捷功能
    4. useEffect  高级使用技巧和模板
        一个组件内可以多次使用useEffect 
        - useEffect 匹配多个生命周期
            mounted updated  unmounted
        - search 中  分而治之 逻辑条理清晰
            首先使用mounted 生命周期 input ref useRef  聚焦功能  第一次
            query 发生改变的时候 与父组件通信 useEffect(,[query])只调用父组件传来的函数
            input value 是可以被父组件管理的，newQuery 
            useEffect(,[newQuery]) input value 的设置， redux newQuery 发生改变重新运行
    5. useMemo 好高级

- styled-components 2.0阶段
    1. 接受props 的 并在css 中动态输出
        和 行内样式一样效果
    2. 是否要构建多个样式组件
        styled-components 是支持嵌套的
        如果样式有复用的需要 
        List ListItem  
    3. 当有了CSS 不具备的变量、嵌套模块化 等功能
        当styled-components 方便复用 我们可以多写样式组件 少写UI组件 因为大部分的UI组件业务简单 

    4. 项目的风格主题文件 可以参考三元的global-style

- 热搜 hotkey  绝对定位
    show的切换  不会影响接下来的文档流
 
- 搜索  对歌手 专辑 歌 都提供列表模糊查询
    1. 接口数据
        接口文档  /search/suggest?keywords=${query}
    2. 推荐
    3. 页面级别组件 比较长的， jsx的函数模块化

 npm i prop-types

 npm i better-scroll@2.0.0-beta.4



 cmd: npm i -g creat-react-app
 
