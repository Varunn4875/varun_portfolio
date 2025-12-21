 import './typed.css'
function AboutSection(){
    return (
        <>
     <div className="container section-title fw-bold" data-aos="fade-up" id="About-me">
        <h2 className="project-heading">About</h2>
        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
      </div>

      <div className="container fw-bold" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 my-5 justify-content-center">
          <div className="col-lg-8 content themed-card" style={{ textAlign: 'justify', padding: '24px' }}>
                  <p className="about-text mb-3">
                   #  Hello, I’m Varun, a web developer from Karur, India.
                  </p>

                  {/* <p className="about-text mb-3">
                    # I am a self-employed web designer based in Tamil Nadu, specializing in crafting clean, responsive, and user-friendly web interfaces. My focus is on delivering visually appealing designs with strong usability and performance.
                  </p>

                  <p className="about-text mb-4">
                    # I hold a Bachelor of Computer Applications (BCA), which provides me with a solid foundation in both design principles and web technologies.
                  </p> */}

                  <p className="about-text mb-2">
                    # Beyond my professional work, I enjoy staying active and continuously learning through:
                  </p>

                  <ul className="about-list about-text">
                    <li> # Running to maintain fitness and focus</li>
                    <li> # Reading novels to broaden perspective</li>
                    <li> # Playing badminton for recreation and discipline</li>
                  </ul>
          </div>
        </div>

      </div>
      </>
      )
}
export default AboutSection
