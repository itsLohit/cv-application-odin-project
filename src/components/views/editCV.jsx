import { useState } from "react"
import GeneralInformation from "../sections/generalInformation";
import { EducationalExperience } from "../sections/educationalExperience";
import { PracticalExperience } from "../sections/practicalExperience";
import { Skills } from "../sections/skills";
import { Projects } from "../sections/projects";

export default function EditCV({cvData, setCVData}) {

    const [editingSection, setEditingSection] = useState(null);

    return (
        <div className="edit-CV">
            <GeneralInformation 
              cvData = {cvData}
              setCVData = {setCVData}
              editing = {editingSection === 'personalInfo'}
              updateEditing = {() => setEditingSection(editingSection === 'personalInfo' ? null : 'personalInfo')}
            />
            <EducationalExperience 
              cvData = {cvData}
              setCVData = {setCVData}
              editing = {editingSection === 'educationInfo'}
              updateEditing = {() => setEditingSection(editingSection === 'educationInfo' ? null : 'educationInfo')}
            />
            <PracticalExperience 
              cvData = {cvData}
              setCVData = {setCVData}
              editing = {editingSection === 'experienceInfo'}
              updateEditing = {() => setEditingSection(editingSection === 'experienceInfo' ? null : 'experienceInfo')}
            />
            <Skills 
              cvData = {cvData}
              setCVData = {setCVData}
              editing = {editingSection === 'skills'}
              updateEditing = {() => setEditingSection(editingSection === 'skills' ? null : 'skills')}
            />
            <Projects 
              cvData = {cvData}
              setCVData = {setCVData}
              editing = {editingSection === 'projects'}
              updateEditing = {() => setEditingSection(editingSection === 'projects' ? null : 'projects')}
            />
        </div>
    )
}