 import './typed.css'
function AboutSection(){
    return (
        <>
     <div className="container section-title fw-bold" data-aos="fade-up" id="About-me">
        <h2 className="project-heading">About</h2>
        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
      </div>

      <div className="container fw-bold" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          {/* <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="">
          </div> */}
          <div className="col-lg-8 content themed-card" style={{textAlign:'justify', padding:'24px'}}>
            <p className="about-text mb-3">Hi, I’m Varun from Karur, India.</p>
            <p className="about-text mb-3">I’m a self‑employed web designer based in Tamil Nadu, focused on building clean, responsive interfaces.</p>
            <p className="about-text mb-4">I hold a Bachelor of Computer Applications.</p>
            <p className="about-text mb-2">Outside of work, I enjoy:</p>
            <ul className="about-list about-text">
              <li>Running</li>
              <li>Reading novels</li>
              <li>Playing badminton</li>
            </ul>
          </div>
        </div>

      </div>
      </>
      )
}
export default AboutSection
