import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'// 一切静态资源皆可引入  css js 图片 video audio 都是
// import './logo.svgs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
