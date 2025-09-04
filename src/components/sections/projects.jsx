import { useState } from "react";
import { EditIcon, AddProjectsIcon, DeleteIcon, SaveIcon, AddSkillsIcon } from "../icons/svg";


export function Projects({ cvData, setCVData, editing, updateEditing }) {
  const [editingProject, setEditingProject] = useState(null);

  function handleEditingProject(projectId) {
    setEditingProject(prevId => (prevId === projectId ? null : projectId));
  }

  const title = "Projects";

  function addProject() {
    const id = crypto.randomUUID();
    setCVData(prev => ({
      ...prev,
      projects: [
        ...(prev.projects || []),
        { id, name: "", description: "", link: "", fromDate: "", toDate: "" }
      ]
    }));
  }

  function deleteProject(id) {
    setCVData(prev => ({
      ...prev,
      projects: (prev.projects || []).filter(project => project.id !== id)
    }));
  }

  function handleProjectChange(id, field, newValue) {
    setCVData(prev => ({
      ...prev,
      projects: (prev.projects || []).map(project =>
        project.id === id ? { ...project, [field]: newValue } : project
      )
    }));
  }

  if(!editing) {
      return (
        <div className="non-edit-view-content">
          <h2>{title}</h2>
          <EditIcon onClick={updateEditing}/>
        </div>
      )
  }

  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {(cvData.projects || []).map(project => (
          <div key={project.id}>
            {editingProject === project.id ? (
              <div>
                <div>
                  <label htmlFor={`name-${project.id}`}>Name</label>
                  <input
                    id={`name-${project.id}`}
                    type="text"
                    value={project.name}
                    onChange={e =>
                      handleProjectChange(project.id, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor={`description-${project.id}`}>Description</label>
                  <input
                    id={`description-${project.id}`}
                    type="text"
                    value={project.description}
                    onChange={e =>
                      handleProjectChange(project.id, "description", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor={`link-${project.id}`}>Link</label>
                  <input
                    id={`link-${project.id}`}
                    type="url"
                    placeholder="https://github.com/..."
                    autoComplete="url"
                    value={project.link}
                    onChange={e =>
                      handleProjectChange(project.id, "link", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor={`fromDate-${project.id}`}>From</label>
                  <input
                    id={`fromDate-${project.id}`}
                    type="date"
                    placeholder="YYYY-MM-DD"
                    autoComplete="bday-month"
                    value={project.fromDate}
                    onChange={e =>
                      handleProjectChange(project.id, "fromDate", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor={`toDate-${project.id}`}>To</label>
                  <input
                    id={`toDate-${project.id}`}
                    type="date"
                    placeholder="YYYY-MM-DD"
                    autoComplete="bday-month"
                    value={project.toDate}
                    onChange={e =>
                      handleProjectChange(project.id, "toDate", e.target.value)
                    }
                  />
                </div>
                 <div className="inside-edit-btn">
                      <DeleteIcon onClick={() => deleteProject(project.id)} tabIndex={0} aria-label="Delete project"/>
                      <SaveIcon onClick={() => setEditingProject(null)} tabIndex={0} aria-label="Save project"/>
                  </div>
              </div>
            ) : (
              <div className="outside-edit-display">
                <div>
                  <b>{project.name || "No Name"}</b> &mdash;{" "}
                  {project.description || "No Description"}
                  {project.link && (
                    <>
                      {" "}
                      (<a href={project.link} target="_blank" rel="noopener noreferrer">
                        Link
                      </a>)
                    </>
                  )}
                  {" | "}
                  {project.fromDate || "?"} to {project.toDate || "?"}
                </div>
                <div className="outside-button">
                  <EditIcon onClick={() => handleEditingProject(project.id)} tabIndex={0} aria-label="Edit project"/>
                  <DeleteIcon onClick={() => deleteProject(project.id)} tabIndex={0} aria-label="Delete project"/>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="add-btn">
          <AddProjectsIcon onClick={addProject} tabIndex={0} aria-label="Add project"/>
        </div>
      </div>
    </div>
  );
}
