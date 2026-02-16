import "./App.css";

function Projects() {
  const projects = [
    {
      title: "W-App",
      description:
        "Modern web application built with responsive UI and scalable architecture.",
      tech: ["React", "CSS", "JavaScript"],
      live: "https://w-app-rouge.vercel.app/",
      image: "/images/wapp.png", // add screenshot
    },
    {
      title: "TripNest",
      description:
        "Travel planning and booking interface with clean UX and dynamic layouts.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      live: "https://varunn4875.github.io/TripNest/",
      image: "/images/tripnest.png",
    },
    {
      title: "Rapid Keys",
      description:
        "Interactive typing speed test application with real-time performance tracking.",
      tech: ["JavaScript", "HTML", "CSS"],
      live: "https://varunn4875.github.io/Rapid-Keys/",
      image: "/images/rapidkeys.png",
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="project-heading">Featured Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                View Live Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
