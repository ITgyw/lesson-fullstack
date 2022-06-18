#  es6新的数据类型 
    大数据  数值是有表示范围的
    bigint 
JS 简单数据类型
    String  boolean  number  undefined  null  bigint

- 大数据时代 es6 推出了新的简单数据类型 BigInt
- 适合大数相加 准确  但不适合 / * ，舍去小数
- 两种新建方式 1n 或者 BinInt(1)
- typeof bigint
- 不支持 隐式类型转换 可以强制类型转换  BinInt（）
- number 和 BigInt 相加  会报错   不能混用  需要强制类型转换


img 设置 float , img 脱离文档流居于左右某侧
- 浮动元素不只会影响自己（脱离文档流），它还会影响周围的元素对齐（左|右）进行环绕
- block （兄弟元素 不受影响）img 离开了文档流， 所以block 无视img
- 让inline 元素 （文本）围绕float元素实现浮动布局 其中文字环绕效果是float典型的应用
- 创建标签(element) document.createElemnet('p')
- 创建文本(textNode) document.createTextNode('45674sddg')


## float 元素特性

1. 块级框
    不管是行内还是块级元素，如果被设置了浮动， 浮动元素会生成一个块级框（盒子能力），

    一旦浮动， 立刻会像inline元素一样产生包裹性， 宽度会跟者内容适应（inline）可用于如多列布局（菜单）

2. 高度塌陷
    block 宽度是100%
    高度呢？ 是内容， 文档流来加高的 float元素的父元素的高要先计算好来
    浮动元素 不参加父元素的高度计算

    

