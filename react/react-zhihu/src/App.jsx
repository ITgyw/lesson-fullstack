import { useState, lazy, Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
import { useNavigate, NavLink } from 'react-router-dom'
import RoutesConfig from './routes'

function App(props) {

  return (
    <div className="App">
      {/* <Header /> */}
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
      <Home />

    </div>
  )
}

export default App