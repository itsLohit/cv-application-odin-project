import { useState } from "react";
import { EditIcon, AddExperienceIcon, DeleteIcon, SaveIcon, AddSkillsIcon } from "../icons/svg";

export function Skills({ cvData, setCVData, editing, updateEditing }) {
  const [editingSkill, setEditingSkill] = useState(null);

  function handleEditingSkill(skillId) {
    setEditingSkill(prevId => (prevId === skillId ? null : skillId));
  }

  const title = "Skills";

  function addSkill() {
    const id = crypto.randomUUID();
    setCVData(prev => ({
      ...prev,
      skills: [
        ...(prev.skills || []),
        { id, name: "", proficiency: "" }
      ]
    }));
  }

  function deleteSkill(id) {
    setCVData(prev => ({
      ...prev,
      skills: (prev.skills || []).filter(skill => skill.id !== id)
    }));
  }

  function handleSkillChange(id, field, newValue) {
    setCVData(prev => ({
      ...prev,
      skills: (prev.skills || []).map(skill =>
        skill.id === id ? { ...skill, [field]: newValue } : skill
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
      <h2>{title}</h2>
      <div>
        {(cvData.skills || []).map(skill => (
          <div key={skill.id}>
            {editingSkill === skill.id ? (
              <div>
                <div>
                  <label htmlFor={`skill-name-${skill.id}`}>Skill Name</label>
                  <input
                    id={`skill-name-${skill.id}`}
                    type="text"
                    value={skill.name}
                    onChange={e =>
                      handleSkillChange(skill.id, "name", e.target.value)
                    }
                    placeholder="e.g. JavaScript"
                  />
                </div>
                <div>
                  <label htmlFor={`skill-prof-${skill.id}`}>Proficiency</label>
                  <input
                    id={`skill-prof-${skill.id}`}
                    type="text"
                    value={skill.proficiency}
                    onChange={e =>
                      handleSkillChange(skill.id, "proficiency", e.target.value)
                    }
                    placeholder="e.g. Advanced"
                  />
                </div>
                <div className="inside-edit-btn">
                    <DeleteIcon onClick={() => deleteSkill(skill.id)} tabIndex={0} aria-label="Delete skill"/>
                    <SaveIcon onClick={() => setEditingSkill(null)} tabIndex={0} aria-label="Save skill"/>
                </div>
              </div>
            ) : (
              <div className="outside-edit-display">
                <div>
                  <b>{skill.name || "No Skill"}</b>
                  {skill.proficiency && <> — {skill.proficiency}</>}
                </div>
                <div className="outside-button">
                    <EditIcon onClick={() => handleEditingSkill(skill.id)} tabIndex={0} aria-label="Edit skill"/>
                    <DeleteIcon onClick={() => deleteSkill(skill.id)} tabIndex={0} aria-label="Delete skill"/>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="add-btn">
          <AddSkillsIcon onClick={addSkill} tabIndex={0} aria-label="Add skill"/>
        </div>
      </div>
    </div>
  );
}
