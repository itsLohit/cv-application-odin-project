import { useState } from "react";
import { EditIcon, AddProjectsIcon, DeleteIcon, SaveIcon, AddSkillsIcon } from "../svg";


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
                  <label>Name</label>
                  <input
                    value={project.name}
                    onChange={e =>
                      handleProjectChange(project.id, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>Description</label>
                  <input
                    value={project.description}
                    onChange={e =>
                      handleProjectChange(project.id, "description", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>Link</label>
                  <input
                    value={project.link}
                    onChange={e =>
                      handleProjectChange(project.id, "link", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>From</label>
                  <input
                    value={project.fromDate}
                    onChange={e =>
                      handleProjectChange(project.id, "fromDate", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>To</label>
                  <input
                    value={project.toDate}
                    onChange={e =>
                      handleProjectChange(project.id, "toDate", e.target.value)
                    }
                  />
                </div>
                 <div className="inside-edit-btn">
                      <DeleteIcon onClick={() => deleteProject(project.id)}/>
                      <SaveIcon onClick={() => setEditingProject(null)}/>
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
                <div>
                  <EditIcon onClick={() => handleEditingProject(project.id)}/>
                  <DeleteIcon onClick={() => deleteProject(project.id)}/>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="add-btn">
          <AddProjectsIcon onClick={addProject}/>
        </div>
      </div>
    </div>
  );
}
