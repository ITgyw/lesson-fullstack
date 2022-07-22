import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@/assets/font.css'
import Home from '@/pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
)
