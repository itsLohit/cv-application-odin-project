import { useState } from "react";


export function PracticalExperience ({cvData, setCVData, editing, updateEditing}) {

    const [editingExperience, setEditingExperience] = useState(null);

    function handleEditingExperience(experienceId) {
        setEditingExperience(prevId => prevId === experienceId ? null : experienceId);
    }

    const title = 'Experience Information';
    
    function addExperience() {
        const id = crypto.randomUUID();
        setCVData(prev => ({
            ...prev, experienceInfo: {
                ...prev.experienceInfo, experiences: [
                    ...(prev.experienceInfo.experiences || []), {id, position: '', company: '', fromDate: '', toDate: ''}
                ]
            }
        }))
    }

    function deleteExperience(id) {
        setCVData(prev => ({
            ...prev, experienceInfo: {
                ...prev.experienceInfo, experiences: (prev.experienceInfo.experiences || []).filter(experience => (experience.id !== id))
            }
        }))
    }

    function handleExperienceChange (id, field, newValue) {
        setCVData(prev => ({
            ...prev, experienceInfo: {
                ...prev.experienceInfo, experiences: (prev.experienceInfo.experiences || []).map(experience => (
                        experience.id === id ? {...experience, [field]: newValue} : experience
                ))
            }
        }))
    }

    if(!editing) {
        return (
            <div>
                <h2>{title}</h2>
                <button onClick={updateEditing}>Edit</button>
            </div>
        )
    }

    return (
        <div>
            <div>{title}</div>
            <div>
                {(cvData.experienceInfo.experiences || []).map(experience => (
                    <div key = {experience.id}>
                        {editingExperience === experience.id ? (
                            <div>
                                <div>
                                  <label>Position</label>
                                  <input value={experience.position} onChange={e => handleExperienceChange(experience.id, 'position', e.target.value)} />
                                </div>
                                <div>
                                  <label>Company</label>
                                  <input value={experience.company} onChange={e => handleExperienceChange(experience.id, 'company', e.target.value)} />
                                </div>
                                <div>
                                    <label>From</label>
                                    <input value={experience.fromDate} onChange={e => handleExperienceChange(experience.id, 'fromDate', e.target.value)} />
                                </div>
                                <div>
                                    <label>To</label>
                                    <input value={experience.toDate} onChange={e => handleExperienceChange(experience.id, 'toDate', e.target.value)} />
                                </div>
                                <button onClick={() => deleteExperience(experience.id)}>Delete</button>
                                <button onClick={() => setEditingExperience(null)}>Save</button>
                            </div>
                        ): (
                            <div>
                              <b>{experience.position || 'No Position'}</b> at <b>{experience.company || 'No Company'}</b> ({experience.fromDate || '?'} to {experience.toDate || '?'})
                              <button onClick={() => handleEditingExperience(experience.id)}>Edit</button>
                              <button onClick={() => deleteExperience(experience.id)}>Delete</button>
                            </div>
                           )}
                    </div>
                ))}
                {<button onClick={addExperience}>Add Experience</button>}
            </div>
        </div>
    )
}