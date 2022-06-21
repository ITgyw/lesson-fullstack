- 瞄点 
    页面的电梯， 诞生在PC时代，内容高度台那啥， 有用

    react  响应式开发  区别于 DOM编程
    + raect-router 加持  全家桶开发， # 单页应用 Single Page Application   SPA 

- 锚点   hash  #  url加#
    url发生了改变， 页面没有重新加载
    :3000/#aaa   在当前页面去找name=“aaa”的<a>
    不用像传统的<a> 向服务器重新发生请求， 也迷上你会白一下，SPA单页应用专门解决这个问题 
    前端路由的底层  /about

- react-router 为前端带来了路由功能，
    1. HashRouter   #/about     兼容性更好
        react-router 捕获hashChange事件，  当点击Link组件  hash -> Routes(Route)找到相应的页面级组件，动态
        切换， 单页应用（不应为了显示不同的页面白一下）， 会像幻灯片一样切换不同的页面
        
    2. BrowserRouter   /about   看上去更像传统（后端）路由
        不好兼容？  功能的实现通过 html5 history API

 