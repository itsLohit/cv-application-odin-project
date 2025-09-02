import { useState } from "react";

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

  if (!editing) {
    return (
      <div>
        <h2>{title}</h2>
        <button onClick={updateEditing}>Edit</button>
      </div>
    );
  }

  return (
    <div>
      <div>{title}</div>
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
                <button onClick={() => deleteSkill(skill.id)}>Delete</button>
                <button onClick={() => setEditingSkill(null)}>Save</button>
              </div>
            ) : (
              <div>
                <b>{skill.name || "No Skill"}</b>
                {skill.proficiency && <> — {skill.proficiency}</>}
                <button onClick={() => handleEditingSkill(skill.id)}>Edit</button>
                <button onClick={() => deleteSkill(skill.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
        <button onClick={addSkill}>Add Skill</button>
      </div>
    </div>
  );
}
