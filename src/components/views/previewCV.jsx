import '../../styles/previewCV.css';
import { GeneralInfoContact } from "../svg";

export default function PreviewCV({ cvData }) {

  const contacts = [
    { type: "address", value: cvData.generalInfo?.address },
    { type: "phone", value: cvData.generalInfo?.phone },
    { type: "email", value: cvData.generalInfo?.email },
    { type: "github", value: cvData.generalInfo?.github },
    { type: "linkedin", value: cvData.generalInfo?.linkedin }
  ];
  return (
    <div className="preview-cv">
      <div className="page">

        <h1>{cvData.generalInfo?.fullName || "Full Name"}</h1>
        <div className="job-title">{cvData.generalInfo?.jobTitle || "Job Title"}</div>

        <div className="contact-items">
          {contacts.filter(c => c.value).map(c =>
            <span key={c.type}><GeneralInfoContact type={c.type} /> {c.value}</span>
          )}
        </div>
        
        {(cvData.educationInfo?.studies || []).length > 0 && (
          <section>
            <h2>Education</h2>
            {cvData.educationInfo.studies.map(study => (
              <div className="section-block" key={study.id}>
                <div className="section-row">
                  <div>
                    <b>{study.field || "Field of Study"}</b>
                    {study.university && <> - {study.university}</>}
                  </div>
                  <div className="date-right">
                    {(study.fromDate || "From") + (study.toDate ? ` to ${study.toDate}` : "")}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {(cvData.skills || []).length > 0 && (
          <section>
            <h2>Skills</h2>
            <ul className="skills-list">
              {cvData.skills.map(skill => (
                <li key={skill.id}>{skill.name}{skill.proficiency ? ` (${skill.proficiency})` : ""}</li>
              ))}
            </ul>
          </section>
        )}

        {(cvData.experienceInfo?.experiences || []).length > 0 && (
          <section>
            <h2>Experience</h2>
            {cvData.experienceInfo.experiences.map(exp => (
              <div className="section-block" key={exp.id}>
                <div className="section-row">
                  <div>
                    <b>{exp.position || "Position"}</b>
                    {exp.company && <><div className='section-inner-div'>{exp.company}</div></>}
                  </div>
                  <div className="date-right">
                    {(exp.fromDate || "From") + (exp.toDate ? ` to ${exp.toDate}` : "")}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {(cvData.projects || []).length > 0 && (
          <section>
            <h2>Projects</h2>
            {cvData.projects.map(project => (
              <div className="section-block" key={project.id}>
                <div className="section-row">
                  <div>
                    <b>{project.name || "Project"}</b>
                    {project.link && (
                      <> (<a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>)</>
                    )}
                  </div>
                  <div className="date-right">
                    {(project.fromDate || "From") + (project.toDate ? ` to ${project.toDate}` : "")}
                  </div>
                </div>
                {project.description && (
                  <div className="section-desc">{project.description}</div>
                )}
              </div>
            ))}
          </section>
        )}

      </div>
    </div>
  )
}
