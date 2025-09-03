import { useState } from "react";
import { EditIcon, AddEducationIcon, DeleteIcon, SaveIcon } from "../svg";


export function EducationalExperience ({cvData, setCVData, editing, updateEditing}) {

    const [editingStudy, setEditingStudy] = useState(null);

    function handleEditingStudy(studyId) {
        setEditingStudy(prevId => prevId === studyId ? null : studyId);
    }

    const title = 'Education Information';
    
    function addStudy() {
        const id = crypto.randomUUID();
        setCVData(prev => ({
            ...prev, educationInfo: {
                ...prev.educationInfo, studies: [
                    ...(prev.educationInfo.studies || []), {id, field: '', university: '', fromDate: '', toDate: ''}
                ]
            }
        }))
    }

    function deleteStudy(id) {
        setCVData(prev => ({
            ...prev, educationInfo: {
                ...prev.educationInfo, studies: (prev.educationInfo.studies || []).filter(study => (study.id !== id))
            }
        }))
    }

    function handleStudyChange (id, field, newValue) {
        setCVData(prev => ({
            ...prev, educationInfo: {
                ...prev.educationInfo, studies: (prev.educationInfo.studies || []).map(study => (
                        study.id === id ? {...study, [field]: newValue} : study
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
                {(cvData.educationInfo.studies || []).map(study => (
                    <div key = {study.id}>
                        {editingStudy === study.id ? (
                            <div>
                                <div>
                                  <label>Field of Study</label>
                                  <input value={study.field} onChange={e => handleStudyChange(study.id, 'field', e.target.value)} />
                                </div>
                                <div>
                                  <label>University</label>
                                  <input value={study.university} onChange={e => handleStudyChange(study.id, 'university', e.target.value)} />
                                </div>
                                <div>
                                    <label>From</label>
                                    <input value={study.fromDate} onChange={e => handleStudyChange(study.id, 'fromDate', e.target.value)} />
                                </div>
                                <div>
                                    <label>To</label>
                                    <input value={study.toDate} onChange={e => handleStudyChange(study.id, 'toDate', e.target.value)} />
                                </div>
                                <div className="inside-edit-btn">
                                    <DeleteIcon onClick={() => deleteStudy(study.id)}/>
                                    <SaveIcon onClick={() => setEditingStudy(null)}/>
                                </div>
                            </div>
                        ): (
                            <div className="outside-edit-display">
                              <div><b>{study.field || 'No Field'}</b> at <b>{study.university || 'No University'}</b> ({study.fromDate || '?'} to {study.toDate || '?'})</div>
                              <div>
                                  <EditIcon onClick={() => handleEditingStudy(study.id)}/>
                                  <DeleteIcon onClick={() => deleteStudy(study.id)}/>
                              </div>
                            </div>
                           )}
                    </div>
                ))}
                <div className="add-btn">{<AddEducationIcon onClick={addStudy}/>}</div>
            </div>
        </div>
    )
}