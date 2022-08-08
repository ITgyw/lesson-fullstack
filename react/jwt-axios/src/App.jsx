import { useState, useEffect } from 'react'
import { addComment } from './api/request'
import './App.css'

function App() {
  useEffect(() => {
    addComment()
      .then(data => {
        console.log(data);
      })
    // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEzMTQ1NiwiaWF0IjoxNjU5OTQ2NjcwLCJleHAiOjE2NjAwMzMwNzB9.IaeFlG7-wg5eCltNbJ8quJjHJeHsNrOKgzqosM8e19Y')

  }, [])
  return (
    <div className="App">

    </div>
  )
}

export default App
