import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SobreMim from './pages/sobreMim'
import Skills from './pages/conhecimentos'
import Experience from './pages/experiencias'
import Header from './pages/header'
import Projects from './pages/projetos'
import Contact from './pages/meContrate'
import Footer from './pages/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <SobreMim/>
    <Skills/>
  <Experience/>
  <Projects/>
  <Contact/>
  <Footer/>
  </StrictMode>,
)
