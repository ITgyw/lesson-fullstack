- 项目介绍
    1. 使用stylus css 预编译器完成项目样式开发
        - 项目入口文件引入common/stylus/index.styl
        @import 先后引入 reset.style font.style mixin.style
        全局解决 css reset  自定义字体  mixin混合能力
    - 使用mixin  复用背景图片代码， 解决移动适配问题
        dpr 2 3
    - 组件样式模块化， 不污染全局， 也不受外界影响
2. Map代替JSON 优化用户信息模块输出  Map可以 for of 
    Object 不可以 优化