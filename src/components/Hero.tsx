import "./Hero.css";

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>¡Bienvenido a mi Portfolio!</h1>
        <p>
          Este es mi portfolio donde puedo mostrar mis proyectos y habilidades
          como desarrollador
        </p>
        <button className="cta-button">Explorar mis proyectos</button>
      </div>
    </section>
  );
};

export default Hero;