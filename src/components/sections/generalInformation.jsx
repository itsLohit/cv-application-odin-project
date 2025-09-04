// name, job title, address, phone, email, github, linkedin
import { EditIcon, GeneralInfoContact, SaveIcon } from "../icons/svg";

export default function GeneralInformation({cvData, setCVData, editing, updateEditing}) {

    const title = 'General Information';
    const sections = [
      {id: 'fullName', label: 'Full Name', value: cvData.generalInfo?.fullName || ''},
      {id: 'jobTitle', label: 'Job Title', value: cvData.generalInfo?.jobTitle || ''},
    ];

    const contacts = [
      {id: 'address', label: 'Address', value: cvData.generalInfo?.address || ''},
      {id: 'phone', label: 'Phone', value: cvData.generalInfo?.phone || ''},
      {id: 'email', label: 'Email', value: cvData.generalInfo?.email || ''},
      {id: 'github', label: 'Github', value: cvData.generalInfo?.github || ''},
      {id: 'linkedin', label: 'LinkedIn', value: cvData.generalInfo?.linkedin || ''},
    ];

    function handleGeneralInfoChange (id, newValue) {
      setCVData(prev => ({ ...prev, generalInfo:{ ...prev.generalInfo, [id]: newValue}}));
    }

    if(!editing) {
      return (
        <div>
          <div className='general-info-header'>
            <h2>{title}</h2>
            <EditIcon onClick={updateEditing} tabIndex={0} aria-label="Edit general information"/>
          </div>
          <div className='general-info-content'>
            <div>
              {sections.map(section => (
              <div key = {section.id}>
                <b>{section.value}</b>
              </div>
                        ))}
            </div>
            <div>
              {contacts
                .filter(contact => contact.value) // Only contacts with value are shown
                .map(contact => (
                  <div key={contact.id} className="edit-flex">
                    <GeneralInfoContact type={contact.id} />
                    <p>{contact.value}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      )
    }



    return (
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          {sections.map(section => (
            <div key = {section.id}>
              <label htmlFor={section.id}>{section.label}</label>
              <input id={section.id} value={section.value} onChange={e => handleGeneralInfoChange(section.id, e.target.value)} />
            </div>
          ))}
          {contacts.map(contact => (
            <div key = {contact.id}>
              <label htmlFor={contact.id}>{contact.label}</label>
              <input id={contact.id} value={contact.value} onChange={e => handleGeneralInfoChange(contact.id, e.target.value)} 
                type={
                       contact.id === 'email' ? 'email' :
                       contact.id === 'phone' ? 'tel' :
                       (contact.id === 'github' || contact.id === 'linkedin') ? 'url' :
                       'text'
                     }
                autoComplete={contact.id}
              />
            </div>
          ))}
        </div>
        <div className="save-btn">
          <SaveIcon onClick={updateEditing} tabIndex={0} aria-label="Save general information"/>
        </div>
      </div>
    )
}