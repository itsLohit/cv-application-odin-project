import { useState } from "react"
import GeneralInformation from "../sections/generalInformation";
import { EducationalExperience } from "../sections/educationalExperience";
import { PracticalExperience } from "../sections/practicalExperience";
import { Skills } from "../sections/skills";
import { Projects } from "../sections/projects";

export default function EditCV(cvData, setCVData) {

    return (
        <div className="edit-CV">
            <GeneralInformation />
            <EducationalExperience />
            <PracticalExperience />
            <Skills />
            <Projects />
        </div>
    )
}