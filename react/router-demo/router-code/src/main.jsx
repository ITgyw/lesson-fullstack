import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 1. BrowserRouter? 路由组件 
// raect-router-dom 路由组件库
// 2. 可以给我们的 
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
