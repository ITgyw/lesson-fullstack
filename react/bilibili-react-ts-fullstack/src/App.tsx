import { useState, useEffect, Suspense } from 'react'
import './App.css'
import Routes from '@/routes'
import {
  getVideosRequest,
  getHotwordRequest
} from '@/api/index'

function App() {
  useEffect(() => {
    getVideosRequest()
      .then(data => {
        console.log(data, '/////////')
      })
    getHotwordRequest()
      .then(data => {
        console.log(data, '||||||||')
      })
  }, [])
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Routes />
      </Suspense>
    </div>
  )
}

export default App