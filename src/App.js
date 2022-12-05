import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/projects"
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
      < Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
