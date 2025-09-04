import '../styles/mainContent.css';
import { useState } from "react";
import EditCV from "./views/editCV";
import PreviewCV from "./views/previewCV";
import { DEFAULT_CV_DATA, EMPTY_CV_DATA } from "../data/cvDefaults";

export function AppMainContent () {
   
   
    const [cvData, setCVData] = useState(DEFAULT_CV_DATA);

    
    return (
        <div>
          <div className='cv-actions'>
            <button
              type="button"
              onClick={
                () => {
                        if(window.confirm("Are you sure you want to clear all fields?")) {
                          setCVData(EMPTY_CV_DATA);
                        }
                      }
              }
              aria-label="Clear all CV fields"
              tabIndex={0}
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={() => setCVData(DEFAULT_CV_DATA)}
              aria-label="Restore example CV"
              tabIndex={0}
            >
              Fill Example
            </button>
          </div>

          <div className="main-content">
              <EditCV
                cvData = {cvData}
                setCVData = {setCVData}
              />
              <PreviewCV
                cvData = {cvData}
              />
          </div>
        </div>
    )
}
