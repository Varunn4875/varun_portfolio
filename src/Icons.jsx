import './typed.css'

function Icons(){
    const skillChips = [
       "Html","CSS","Bootstrap","JavaScript","Bootstrap","TailwindCSS","ReactJS","Flutter","NodeJS","ExpressJS" 
    ]

    const cloudTools = [
       'MongoDB','SQL','Git','GitHub'
    ]

    // const coreConcepts = [
    //   'System Design','Microservices','API Development','State Management','Agile Methodologies'
    // ]

    return(
        <>
          <h1 className="project-heading">Professional Skillset</h1>
          <div className="container">
            <div className="chips-grid">
              {skillChips.map((label) => (
                <span key={label} className="chip">{label}</span>
              ))}
            </div>
          </div>

          <h1 className="project-heading">Cloud, Databases & Tools</h1>
          <div className="container">
            <div className="chips-grid">
              {cloudTools.map((label) => (
                <span key={label} className="chip">{label}</span>
              ))}
            </div>
          </div>

          {/* <h1 className="project-heading">Core Concepts</h1>
          <div className="container">
            <div className="chips-grid">
              {coreConcepts.map((label) => (
                <span key={label} className="chip">{label}</span>
              ))}
            </div>
          </div> */}
        </>
    )
}
export default Icons;
