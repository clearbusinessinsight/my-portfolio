import React from 'react'
import { Container  } from 'react-bootstrap'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Testimonials from './pages/Testimonials'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import socialLinks from './components/SocialLinks'

function App() {


    
  return (
    <>
      <div className='bg-gradient-to-b from-black to-gray-800 md:h-screen text-white'>

        <Header />
          <main>
        <Routes>
            <Route path="./sociallinks" element={<socialLinks />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
       
                  
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default App
