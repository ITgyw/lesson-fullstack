import { useState, useEffect } from 'react'
import './App.css'
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

    </div>
  )
}

export default App