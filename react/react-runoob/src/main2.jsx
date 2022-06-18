import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// root 节点  根节点？
// root 节点范围内react起作用
// html -> js
// JSX 是JS 的扩展语法 只在react中生效
// JSX 是 React 用来表达UI组件的
// JSX 里 class不能用， 得用className
// 在js中class是一个关键字
// let name = '胡国斌';
// JSX 也可实现字符串模板的功能 称为JSX模板
// const elemnet = <h1 className='nie-bd'>Hello , {name}!</h1>;
// 自定义组件
// const Hello = () => {
//   return <div>hello {name}</div>
// }
// obj Proxy
let [dateStr, setDateStr] = useState(new Date().toLocaleTimeString());
// let dateStr = ;
setInterval(() => {
  dateStr = new Date().toLocaleTimeString();
}, 1000)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // elemnet
  // <Hello> </Hello>

  // UI 大舞台
  <div>
    <h1>Hello World</h1>
    <h2>现在是 {dateStr}</h2>
  </div>
)
