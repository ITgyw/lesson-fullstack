1.react + ts 才是终极
    - js因为类型问题， 随意，容易出错
    - ts 是 js 的超级，多了类型约束
        加那么一点点 类型约束
        App: React.FC
    - 文件后缀 由.jsx -> .tsx
        webpack, vite 不怕 只要给相应的loader babel-loader
    - .babelrc 加了 preset @babel/preset-typescript
    - App: React.FC<{}>
        App是React函数组件