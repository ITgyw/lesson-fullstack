#  浏览器重绘(repaint)重排(reflow)与优化[浏览器机制]

1. 面试回答切记崩关键词

- 浏览器渲染机制
    1. html 怎么解析
    2. css 如何绘制
    3. js 
- 知识点
    - 重排: reflow 性能开销更大
        页面渲染后的 再次排列
        html + css 渲染树 -> 浏览器渲染进程 绘制
        何时重排？
            - 窗口大小调整 onresize  防抖
            - display: block || none 除了自己还会影响周边
            - 修改 box 的 padding margin ...
    - 重绘 repaint  

    - 优化

- 网页生成过程：

1. HTML被HTML解析器解析成DOM 树
2. css则被css解析器解析成CSSOM 树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上

第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染。

