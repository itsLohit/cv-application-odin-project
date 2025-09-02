import { useState } from "react";
import EditCV from "./views/editCV";
import PreviewCV from "./views/previewCV";

export function AppMainContent () {
    const [cvData, setCVData] = useState({generalInfo: {}, educationInfo: {}, experienceInfo: [], skills: [], projects: []});

    return (
        <div className="appMainContent">
            <EditCV 
              cvData = {cvData}
              setCVData = {setCVData}
            />
            <PreviewCV 
              cvData = {cvData}
            />
        </div>
    )
}
