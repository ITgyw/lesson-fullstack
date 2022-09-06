- 块级元素 block  div p form hr  table  h1....h6 dl dt dd ul ol
    - 独占一行，从上往下进行流体布局
    - 可以设置宽高， 默认父元素的100%
    - 作为容器元素，遵循盒模型的所有规则
- 行内元素 inline a span label i strong b em
    - 和其他元素占一行
    - 元素的高度，宽度 及顶部和底部边距不能设置
    - 元素的宽度为它包含的文字及图片的宽度，不能改变
- 行内块元素
    input img 
    - 和其他元素在一行上
    - 元素的高度、宽度及顶部和底部边距可以直接设置
    - 有个bug 
        列式布局
            - inline-block  bug
                - 消灭换行符 html标签首尾相连
                - 父元素font-size=0 子元素自己设置
            - flex
            - float
            - margin 负值

- 行内元素变块级元素的方法
    1. display inline -> block
    2. float
    3. flex
    4. postion fixed/absoult

- css 盒模型
    1. 由内到外
        content | padding border | margin

        content-box 标准盒模型 content
        borde-box  IE盒模型 content+padding+border
        - padding
            - 行内元素不会将水平padding大小计算在盒模型内，块级元素padding会
            - 一些标签元素内置padding大小 ul/li input 
            - padding不支持负值 增大点击区域
        - border 
            
- float 导致高度塌陷
    原因 离开文档流
    - 父元素声明为BFC 有很多方式：
        over-flow：hidden 是性价比最高的
        flex....
    - 定死 父元素的高度
        缺点 子元素不能撑起父元素
    - 清除浮动 
        1. clear:both;
            结尾使用display：block 元素
        2. 伪元素

- 响应式布局方案有哪些
    - px  和视窗
    - 百分比
    - em 
    - rem
    - vw/vh
    - 媒体查询

- px css像素  物理像素
    1px 是固定的？ 不是的

- css 中的1px（css 像素）由什么决定呢？
    css像素 为web开发者提供 一个抽象单位
    物理像素 只和硬件密度相关，
- css像素如何转换为物理像素？等比例的显示
- viewport
    device-width 多变  PC PAD  iphone/小米/锤子
    设计稿是不变的 750px 
    DPR (Device pixel ratio) 设备像素比
    设备1200  设计稿750
    1DPR = 物理像素/分辨率   750/1200
    iPhone 6   750/375 = 2px 

- 媒体查询
    media query 

    @media screen and (max-width:480) {
        body {
            background-color: #6633ff
        }
    }

- 502 与 504
    5XX 服务器端错误
    - 迟迟不响应  数据库    504  Gatway Timeout  
        很多台数据库服务器？ 同步机制 
        中间件 数据库连接 配置timeout
    - java/node/php 等后端错误  502 Bad Gatway  
        js 单线程的  如果挂了 就有pm2软件来重启
        服务器是多线程，多核CPU （node 哪个模块 多核运行 cluster）
        ngnix 负载均衡还有代理
        https  443
    
- 类型
    1. 深入理解JavaScript的基础类型和引用类型
    primitive  toString  Person  Number

       typeof Symbol()  简单数据
       typeof null
       Object.prototype.toString.call()  引用类型(复杂对象)  内置的子类  Array Object Data  Regexp
       why?  有一个内置的内部属性[[class]] Date
       instanceof 自定义类型的实例化， 原型关系   
    2. 隐式类型转换 遵守强制类型转换原则
        - String() 包装类
        - Number()     
    - 简单数据类型转换 比较和直觉
    - Object的子类型toString 不一致
        Object 类型进行toString
        原型链上的 toString方法
        调用了对象上的toString（）
    - Number（）没有String（）那么便利
        对象在转number之前，先转换为基础类型（过程是用valueof方法可以是number之外的基础类），再转换为number类型 这个过程叫toPrimitive
        1. valueOf
        2. toString() 有希望

- 隐式类型转换的套路 +(拼接，运算) ==（值等的话， 努力去类型转换）  
    - +
        1. 遵守强制类型转换的规则
            [] + {} = [object,Object]
            {} + [] = 0
        2. x + y 


    - == 
         ==(input number) === ?
        1. 对于数字和字符串的抽象比较，字符串 toNumber
        2. 对于boolean 和其他类型， 先将boolean ToNumber 比较
        3. 对于对象和基础类型的比较，将对象toPrimitive 比较
        4. 对象之间的比较 ，引用的同一对象 true ,否则false 



    







                              