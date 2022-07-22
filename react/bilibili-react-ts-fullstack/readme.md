#  高仿哔哩哔哩  
    - 全新的项目
        1. 仿， 大厂的新项目  掘进搜不到 
          小特
        2. react 全家桶（hooks + router + redux） + ts + node 
            d 

- npm init vite 
    - 创建了 react + ts + bilibili 移动端单页项目
        用户的浏览器
    - bilibili-api 后端
        服务器
        前端和后端会约定 在哪个 /url  接口  数据的对接
        大前端 node代码作为前端提供数据接口

- ts 前端
    1. vite  react-ts 模板来创建
    2. 强制类型声明
        @types/react  react 类型声明文件  React.Fc<PropTypes>
        - UI Component  组件位置声明  对props  interface 约定
        - ts + api  :Promise<MemberEntity[]>
        getMembers:Promise<MemberEntity[]>() {
            const p = new Promise();
            return p
        }
        - ts  redux
        - ts vites 配置
- api 服务  js来写
- alias 配置在ts 里对ts 组件不支持
    - 功能没有问题， ts错误提示
    - tsconfig.json  compilerOptions
        baseUrl
        paths 告诉我们ts  添加预编译的路径
        