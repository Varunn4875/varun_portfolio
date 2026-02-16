import './typed.css'

function AboutSection() {
  return (
    <>
      <section className="about-section" id="About-me">
        
        <div className="container my-5 mb-5" >
          <h2 className="section-heading">About</h2>

          <div className="about-wrapper">

            <div className="experience-header">
              <h4>Software Developer – W3VJTech</h4>
              <span className="experience-date">July 2025 – Present</span>
            </div>

            <div className="about-content">
              <p>
                Hello, I’m Varun Selvakumar, a MERN Stack Developer based in Karur, India.
                I currently work as a Software Developer at W3VJTech, where I build scalable 
                full-stack web applications using React.js, Node.js, Express.js, and MongoDB.
              </p>

              <p>
                My experience includes developing secure REST APIs, implementing JWT 
                authentication and role-based access control (RBAC), integrating Razorpay 
                payment systems, and optimizing application performance through lazy loading 
                and API enhancements.
              </p>

              <p>
                I specialize in building responsive, user-focused interfaces using Tailwind CSS, 
                managing application state with Zustand, and working within Agile environments 
                with structured Git workflows and code reviews.
              </p>

              <p>
                I am passionate about delivering reliable, maintainable, and performance-driven 
                applications that scale from MVP to production-level systems.
              </p>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default AboutSection
