import novaImg from "../assets/nova.jpg";
import atlasImg from "../assets/atlas.jpg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects-content">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <h2>
            Digital solutions designed with purpose and precision.
          </h2>
        </div>

        <div className="projects-grid">
          <div className="project-item">
            <div className="project-image">
              <img src={novaImg} alt="Nova Commerce project" />
            </div>
            <h3>Nova Commerce</h3>
            <p>E-commerce Platform · UX Redesign · Performance Optimization</p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <img src={atlasImg} alt="Atlas Systems project" />
            </div>
            <h3>Atlas Systems</h3>
            <p>Corporate Website · Digital Strategy · Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;