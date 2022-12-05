import React from 'react'
import { Container  } from 'react-bootstrap'
import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/projects"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <Header />
      <main>
        <Container className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
        </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
