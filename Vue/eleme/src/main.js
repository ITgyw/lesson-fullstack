import { createApp } from 'vue'
import App from './App.vue'
// css 的预编译器  Sass、Less和Stylus 
// 不用拘泥于 css的语法  加快速度
// 可以使用变量 嵌套{ } mixin(函数)  css更像js  更牛逼
import './common/stylus/index.styl'

createApp(App).mount('#app')
