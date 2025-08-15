import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Element from './pages/Services'
import Properties from './pages/Properties'
import Notfoud from './pages/Notfoud'
// import './App.css'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Element/>}/>
      <Route path='/properties' element={<Properties/>}/>
      <Route path='*' element={<Notfoud/>}/>
     </Routes>
    </>
  )
}

export default App
