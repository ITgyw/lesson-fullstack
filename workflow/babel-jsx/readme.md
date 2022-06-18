- JSX是对象 不是html  怎么运行的
    1. 首先通过工程化的babel（js转义工具）
        @babel/preset-react  jsx代码转义
    2. react 可以运行的代码
        React.creatElement（dom标签,属性对象|null,...children(树)）
        这个调用的返回值是对象 并交给root挂载点
        document.getElementById('root').appendChild(JSX对象)
