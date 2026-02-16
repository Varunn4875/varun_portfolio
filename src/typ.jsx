  import {ReactTyped} from 'react-typed'
  
  import './typed.css'
  
  
  function Typing(){
    
      return(
        <>
        <section className='hero container-xl'>
          <div className='hero-inner'>
            <h1 className='hero-title'>Hi, I'm Varun</h1>
            <h2 className='hero-subtitle'>Software Developer</h2>
            <div className='hero-pill'>Currently @ W3VJTech</div>
            <div className='hero-typed'>
              <ReactTyped
                strings={["ReactJS", "NodeJS", "Open Source Contributor", "Flutter"]}
                typeSpeed={120}
                backSpeed={80}
                loop
              />
            </div>
            <div className='hero-actions'>
              <a href='#contact' className='btn btn-primary rounded-pill'>Get in touch</a>
            </div>
            <div className='social-links'>
              <a href="http://github.com/Varunn4875" target='_blank' rel='noopener noreferrer'><i className="bi bi-github fw-bold"></i></a>
              <a href="https://www.instagram.com/varunn_4875?igsh=MXNleXlwMzlmNXVubQ==" target='_blank' rel='noopener noreferrer'><i className="bi bi-instagram fw-bold"></i></a>
              <a href="https://wa.me/919360141042"><i className="bi bi-whatsapp fw-bold"></i></a>
              <a href="https://www.linkedin.com/in/varunselvakumar4875/" target='_blank' rel='noopener noreferrer'><i className="bi bi-linkedin fw-bold"></i></a>
              {/* <a href="mailto:varunselvakumar6@gmail.com"><i className="bi bi-envelope fw-bold"></i></a> */}
            </div>
          </div>
        </section>
        
            </>
            

      )
  }
export default Typing;
