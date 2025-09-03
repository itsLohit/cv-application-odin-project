import { useState } from "react";
import { EditIcon, AddExperienceIcon, DeleteIcon, SaveIcon, AddSkillsIcon } from "../svg";

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
                  <label>Skill Name</label>
                  <input
                    value={skill.name}
                    onChange={e =>
                      handleSkillChange(skill.id, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>Proficiency</label>
                  <input
                    value={skill.proficiency}
                    onChange={e =>
                      handleSkillChange(skill.id, "proficiency", e.target.value)
                    }
                  />
                </div>
                <div className="inside-edit-btn">
                    <DeleteIcon onClick={() => deleteSkill(skill.id)}/>
                    <SaveIcon onClick={() => setEditingSkill(null)}/>
                </div>
              </div>
            ) : (
              <div className="outside-edit-display">
                <div>
                  <b>{skill.name || "No Skill"}</b>
                  {skill.proficiency && <> — {skill.proficiency}</>}
                </div>
                <div>
                    <EditIcon onClick={() => handleEditingSkill(skill.id)}/>
                    <DeleteIcon onClick={() => deleteSkill(skill.id)}/>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="add-btn">
          <AddSkillsIcon onClick={addSkill}/>
        </div>
      </div>
    </div>
  );
}
