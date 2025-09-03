import '../../styles/editCV.css';
import { useState } from "react"
import GeneralInformation from "../sections/generalInformation";
import { EducationalExperience } from "../sections/educationalExperience";
import { PracticalExperience } from "../sections/practicalExperience";
import { Skills } from "../sections/skills";
import { Projects } from "../sections/projects";

export default function EditCV({cvData, setCVData}) {

    const [editingSection, setEditingSection] = useState(null);

    return (
        <div className="edit-cv">
            <div className='sections'>
              <GeneralInformation
                cvData = {cvData}
                setCVData = {setCVData}
                editing = {editingSection === 'personalInfo'}
                updateEditing = {() => setEditingSection(editingSection === 'personalInfo' ? null : 'personalInfo')}
              />
            </div>
            <div className='sections'>
              <EducationalExperience
                cvData = {cvData}
                setCVData = {setCVData}
                editing = {editingSection === 'educationInfo'}
                updateEditing = {() => setEditingSection(editingSection === 'educationInfo' ? null : 'educationInfo')}
              />
            </div>
            <div className='sections'>
              <Skills
                cvData = {cvData}
                setCVData = {setCVData}
                editing = {editingSection === 'skills'}
                updateEditing = {() => setEditingSection(editingSection === 'skills' ? null : 'skills')}
              />
            </div>
            <div className='sections'>
              <PracticalExperience
                cvData = {cvData}
                setCVData = {setCVData}
                editing = {editingSection === 'experienceInfo'}
                updateEditing = {() => setEditingSection(editingSection === 'experienceInfo' ? null : 'experienceInfo')}
              />
            </div>
            <div className='sections'>
              <Projects
                cvData = {cvData}
                setCVData = {setCVData}
                editing = {editingSection === 'projects'}
                updateEditing = {() => setEditingSection(editingSection === 'projects' ? null : 'projects')}
              />
            </div>
        </div>
    )
}