import { useState } from "react";


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
                                <button onClick={() => deleteStudy(study.id)}>Delete</button>
                                <button onClick={() => setEditingStudy(null)}>Save</button>
                            </div>
                        ): (
                            <div>
                              <b>{study.field || 'No Field'}</b> at <b>{study.university || 'No University'}</b> ({study.fromDate || '?'} to {study.toDate || '?'})
                              <button onClick={() => handleEditingStudy(study.id)}>Edit</button>
                              <button onClick={() => deleteStudy(study.id)}>Delete</button>
                            </div>
                           )}
                    </div>
                ))}
                {<button onClick={addStudy}>Add Education</button>}
            </div>
        </div>
    )
}