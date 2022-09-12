- Boss直聘  常刷
- react 深入 + hooks 手写 + ts 
    1. hooks 自定义hooks原因是什么？
        1. 变量状态useState
        2. 副作用的useEffect
        3. 性能相关的useCallback(函数) useMemo(值) React.memo（props）
            大的父组件 + n 个子组件
            useCallback + React.memo 
            useMemo  useMemo(_.throttle())
        4. 数据流useContext useReducer 代替redux
        5. useRef 标签的所有属性 高级使用方式


- 购物车组件
    - 勾选的工作状态
        复杂
    - 钩子函数
        1. 函数封装
        2. 复用
            在react 内置的hooks之外，根据公司业务开发一些自定义的hooks将大大的提高开发效率， 
            hooks库：ahooks
        3. 