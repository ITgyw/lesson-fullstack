import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 外面再包一层 数据管理功能 项目做大了，企业里的财务
  // 路由， SPA   BrowserRouter？来自 react-router-dom的组件
  // react 声明式开发 
  <Provider store={store}>
    <BrowserRouter>
      {/* react 组件 */}
      <App />
    </BrowserRouter>
  </Provider>
)
