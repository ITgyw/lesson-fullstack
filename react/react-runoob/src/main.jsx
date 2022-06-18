// 引入react框架，命名为React
// import from 为es6 的模块化的方案
// react + react-dom 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // css 文件也用import
import App from './App'; // 引入了根组件模块
ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <App></App>
)