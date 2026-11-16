import { ArrowUpRight, MapPin } from "lucide-react";
import "../styles/projects.css";

const projects = [
  {
    number: "01",
    category: "ENERGY SOLUTIONS",
    title: "Power & Renewable Energy",
    description:
      "Energy solutions covering solar power, inverter systems and reliable power infrastructure.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    category: "ENGINEERING & CONSTRUCTION",
    title: "Engineering Development",
    description:
      "Engineering and construction capabilities supporting commercial and industrial requirements.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    category: "INFRASTRUCTURE",
    title: "Infrastructure Solutions",
    description:
      "Infrastructure-focused solutions designed to support businesses, industries and communities.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
  },
];

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <span className="section-tag">OUR PROJECTS</span>
            <h2>
              Solutions That <span>Move Us Forward</span>
            </h2>
            <p>
              Explore the areas where our energy, engineering and
              infrastructure capabilities create practical value.
            </p>
          </div>

          <a href="#contact" className="projects-heading-link">
            Work With Us <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-image-overlay"></div>
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact" className="project-link">
                  Make an Enquiry <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom">
          <div className="projects-bottom-icon">
            <MapPin size={22} />
          </div>

          <p>
            Have a project in mind? Let's discuss how Zobot can support
            your next project.
          </p>

          <a href="#contact">
            Talk to Our Team <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;