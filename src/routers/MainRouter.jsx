import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </div>
  )
}

export default MainRouter
