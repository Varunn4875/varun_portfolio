import './typed.css'

function Icons(){
    const skillChips = [
       "Html","CSS","Bootstrap","JavaScript","TypeScript","TailwindCSS","ReactJS","Flutter","NodeJS","ExpressJS",'GraphQl'
    ]

    const cloudTools = [
       'MongoDB','MySQL','PostgreSql','Git','GitHub','Postman'
    ]

    // const coreConcepts = [
    //   'System Design','Microservices','API Development','State Management','Agile Methodologies'
    // ]

    return(
        <>
          <h1 className="project-heading ">Professional Skillset</h1>
          <div className="container">
            <div className="chips-grid">
              {skillChips.map((label) => (
                <span key={label} className="chip">{label}</span>
              ))}
            </div>
          </div>

          <h1 className="project-heading"> Databases & Tools</h1>
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
