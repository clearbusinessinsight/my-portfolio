import React from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
   
  return (
    <>
      <Header />
    
      <div className='bg-gradient-to-b from-black to-gray-800 md:h-screen text-white'>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
            
       
          <Footer />
        </main>
      </div>
    </>
  )
}
  
 
 
export default App

