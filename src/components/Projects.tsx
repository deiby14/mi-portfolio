import "./Projects.css";

const Projects = () => {
  return (
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
  );
};

export default Projects;