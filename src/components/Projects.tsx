import { projects } from "../data/projects.data";

// Forzar detección de cambios en el archivo
const testChange = true;

const Projects = () => {
  return (
    <section id="proyectos" className="projects">
      <h2>Mis Proyetos</h2> 
          

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-techs">
              {project.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Ver demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
