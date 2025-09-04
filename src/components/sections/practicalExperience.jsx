import { useState } from "react";
import { EditIcon, AddExperienceIcon, DeleteIcon, SaveIcon } from "../icons/svg";

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
                {(cvData.experienceInfo.experiences || []).map(experience => (
                    <div key = {experience.id}>
                        {editingExperience === experience.id ? (
                            <div>
                                <div>
                                  <label htmlFor={`position-${experience.id}`}>Position</label>
                                  <input id={`position-${experience.id}`} type="text" value={experience.position} onChange={e => handleExperienceChange(experience.id, 'position', e.target.value)} />
                                </div>
                                <div>
                                  <label htmlFor={`company-${experience.id}`}>Company</label>
                                  <input id={`company-${experience.id}`} type="text" value={experience.company} onChange={e => handleExperienceChange(experience.id, 'company', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor={`fromDate-${experience.id}`}>From</label>
                                    <input id={`fromDate-${experience.id}`} type="date" autoComplete="bday-month" placeholder="YYYY-MM-DD" value={experience.fromDate} onChange={e => handleExperienceChange(experience.id, 'fromDate', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor={`toDate-${experience.id}`}>To</label>
                                    <input id={`toDate-${experience.id}`} type="date" autoComplete="bday-month" placeholder="YYYY-MM-DD" value={experience.toDate} onChange={e => handleExperienceChange(experience.id, 'toDate', e.target.value)} />
                                </div>
                                <div className="inside-edit-btn">
                                    <DeleteIcon onClick={() => deleteExperience(experience.id)} tabIndex={0} aria-label="Delete experience"/>
                                    <SaveIcon onClick={() => setEditingExperience(null)} tabIndex={0} aria-label="Save experience"/>
                                </div>
                            </div>
                        ): (
                            <div className="outside-edit-display">
                              <div><b>{experience.position || 'No Position'}</b> at <b>{experience.company || 'No Company'}</b> ({experience.fromDate || '?'} to {experience.toDate || '?'})</div>
                              <div className="outside-button">
                                  <EditIcon onClick={() => handleEditingExperience(experience.id)} tabIndex={0} aria-label="Edit experience"/>
                                  <DeleteIcon onClick={() => deleteExperience(experience.id)} tabIndex={0} aria-label="Delete experience"/>
                              </div>
                            </div>
                           )}
                    </div>
                ))}
                <div className="add-btn">{<AddExperienceIcon onClick={addExperience} tabIndex={0} aria-label="Add experience"/>}</div>
            </div>
        </div>
    )
}