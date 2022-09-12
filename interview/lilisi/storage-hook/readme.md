- hooks
    - 封装
    - 复用 自定义组件

- useLocalStorage
    - useState useEffect... hooks 封装进去， 并返回对象供函数式组件调用
    - 复用

- useRef 高级功能？
    - 缓存值 立刻拿到变量的值在useEffect挂载之前
        1. setState 异步？
            useRef {current：null}
    