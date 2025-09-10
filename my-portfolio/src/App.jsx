import './styles/main.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications' // Renamed import
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Certifications /> {/* Renamed component */}
      <Projects />
      <Contact />
    </div>
  )
}

export default App