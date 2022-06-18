#  CSS 底层
    CSS  StyleSheel  rules key:value

- 继承 inhert  解决一些问题引入的机制
    font-size color  减少很多操作
    - CSS部分属性 单纯的减少工作量， 可直接继承 不会有副作用有继承的能力
        - 可继承 
            1. 字体相关
                font-size font-family font-weigh  font-style
            2. 文本相关
                color  text-align  text-decoration text-indent 
                text-shadow(文字立体3D效果)  letter-spacing(文字间距)
                word-spacing  white-space
            3. 列表相关
                list-style  list-style-image  list-style-type
                list-style-position
            4. 其他属性
                visibility  opacity  cursor

        - 不可继承 CSS中布局相关的
            定位、display

- 文档流的概念
    文档(html 文档documnet) + 流(水),像水一样，  能够自适应所在的容器
        块级   行排列
            默认占满整行，   多个块级盒子  从上到下排列
        行内（内联） 列排列
            当一行放不下的时候， 会自动切换到下一行 white-space：nowrap;// 禁止换行
            行内元素有点弱，  需要新的规则
        文档流 + 盒模型 + 布局 + ...   渲染页面
    
    脱离文档流
        position(absolute  fixed) + float(左右) display:none

        脱离文档流指节点脱离正常文档流后， 在文档流中的其它节点会忽略该节点并填补原先空间

- margin  重叠问题
    两个块级相邻元素， margin  重叠  原则来自BFC
    BFC上场了
    1. 两个块级， 处于同一个BFC上下文环境中
    2. 块级盒子在垂直方向上， 一个个的放置也来自于BFC
    3. 如果属于同一个BFC的两个相邻盒子的margin会发生重叠

    - 根元素 html/body是最大的创建了BFC的元素

    如何创建BFC
        1. 根元素 html/body最大的创建BFC元素
        2. 非溢出的可见元素 overflow不为visible
        3. 设置float  浮动布局
        4. 设置定位 BFC   position 为absolute  fixed
        5. display: inline-block/table-cell/table-caption/flex
                    inline-flex/grid/inline-grid
        
页面展示计算规则 = 文档流 + 盒子模型 + BFC + 布局
