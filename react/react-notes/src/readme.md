#   第一个综合应用
    1. npm包有个指定可以查找的地方
        npmjs.org 查询package说明书
        "lodash": "^4.17.4",    js功能工具库
        "lokijs": "^1.5.1",     数据库
        "moment": "^2.19.1",    日期工具库
        "semantic-ui-css": "^2.2.12"

    2.  组件化

    3.  如何引入第三方CSS框架？
         -  vitejs react 脚手架中 import from '相对路径./../nodemodules'
                components
         -  css 文件 与 js文件不一样
                import React from 'react'
                import 'semantic-ui-css/semantic-ui.css' 一切静态资源都可以被引入
                框架样式在根组件内引入
        
    4.  父子组件传值之报告老板
         -  子组件有事情发生，要告知父组件时，
                父组件把函数传给子组件， 子组件调动父组件传过来的的函数

    5.  semantic-ui  框架
         -  简单的类名系统

    6.  循环列表项JSX 交给map