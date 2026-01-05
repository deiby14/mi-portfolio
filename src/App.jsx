import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Mi Portfolio</h1>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <h1>¡Bienvenido a mi Portfolio!</h1>
            <p>Este es mi portfolio donde puedo mostrar mis proyectos y habilidades como desarrollador</p>
            <button className="cta-button">Explorar mis proyectos</button>
          </div>
        </section>

        <section id="sobre-mi" className="about">
          <div className="about-content">
            <h2>Sobre mí</h2>
            <p>Soy un desarrollador apasionado por crear soluciones web modernas y funcionales. Me especializo en React, JavaScript y tecnologías web actuales.</p>
          </div>
        </section>

        <section id="proyectos" className="projects">
          <h2>Mis Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Proyecto 1</h3>
              <p>Descripción del proyecto 1</p>
              <a href="#" className="project-link">Ver más</a>
            </div>
            <div className="project-card">
              <h3>Proyecto 2</h3>
              <p>Descripción del proyecto 2</p>
              <a href="#" className="project-link">Ver más</a>
            </div>
            <div className="project-card">
              <h3>Proyecto 3</h3>
              <p>Descripción del proyecto 3</p>
              <a href="#" className="project-link">Ver más</a>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact">
          <h2>Contacto</h2>
          <p>¿Quieres colaborar conmigo? ¡Ponte en contacto!</p>
          <div className="contact-links">
            <a href="mailto:tu-email@ejemplo.com" className="contact-button">Email</a>
            <a href="#" className="contact-button">LinkedIn</a>
            <a href="#" className="contact-button">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Mi Portfolio. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
