- vue 和 react
    1. 组件 
    2. 响应式
        vue 如何做？ api 不一样而已  思想一样的
    3. UI界面开发
    4. 全家桶 + Element 框架
    5. todolist
- MVVM 之前的前端世界
    DOM 编程 JQUERY

- react 区别
    1. vue语法更多 对新手更友好
        v- 指令 
        @keydown.enter 事件和修饰符
    2. 固定的结构
        data() {}  状态
        methods{ } 添加事件
        - react 不用this(16 后，函数式组件) 函数里面 没有this 丢失的问题 好
        - 简单了， 不如react 函数式 那么简洁 vue2 -> vue3
    3. 状态可以直接修改 不需要调用 setState
    4. 动态类名输出 
        - react classnames 库 难
        - vue 给出了 : 语法 动态绑定语法  基于"{}"里面的代码运行的返回结果
    5. vue 提供了计算属性 
        - 专门的语法区域  methods 函数， 结果是要绑定的计算属性
        - react 需要一样的绑定的话， 需要声明一个新的状态 + useEffect()
        - {{todos.filter(v => !v.todo).length}} / {{todos.length}}
            提升模板的可读性
            
# 一个完整项目的步骤
1. npm init vite
2. set name
3. select vue
4. api 文件夹

- css 的预编译器：
   Sass、Less和Stylus