import "./Header.css";

const Header = () => {
  return (
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
  );
};

export default Header;