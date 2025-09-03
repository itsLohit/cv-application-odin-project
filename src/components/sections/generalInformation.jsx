// name, job title, address, phone, email, github, linkedin
import { EditIcon, GeneralInfoContact, SaveIcon } from "../svg";

export default function GeneralInformation({cvData, setCVData, editing, updateEditing}) {

    const title = 'General Information';
    const sections = [
      {id: 'fullName', label: 'Full Name', value: cvData.generalInfo?.fullName || 'Lohit'},
      {id: 'jobTitle', label: 'Job Title', value: cvData.generalInfo?.jobTitle || 'Mechanical Engineer'},
    ];

    const contacts = [
      {id: 'address', label: 'Address', value: cvData.generalInfo?.address || '7/56, Pavithiram Mettukadai'},
      {id: 'phone', label: 'Phone', value: cvData.generalInfo?.phone || '+91 97901 59159'},
      {id: 'email', label: 'Email', value: cvData.generalInfo?.email || 'lohitworkmail@gmail.com'},
      {id: 'github', label: 'Github', value: cvData.generalInfo?.github || 'github.com/itsLohit'},
      {id: 'linkedin', label: 'LinkedIn', value: cvData.generalInfo?.linkedin || 'linkedin.com/lohitt'},
    ];

    function handleGeneralInfoChange (id, newValue) {
      setCVData(prev => ({ ...prev, generalInfo:{ ...prev.generalInfo, [id]: newValue}}));
    }

    if(!editing) {
      return (
        <div>
          <div className='general-info-header'>
            <h2>{title}</h2>
            <EditIcon onClick={updateEditing}/>
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
              {contacts.map(contact => (
              <div key = {contact.id} className="edit-flex">
                <GeneralInfoContact key={contact.id} type={contact.id}/>
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
              <label>{section.label}</label>
              <input value={section.value} onChange={e => handleGeneralInfoChange(section.id, e.target.value)} />
            </div>
          ))}
          {contacts.map(contact => (
            <div key = {contact.id}>
              <label>{contact.label}</label>
              <input value={contact.value} onChange={e => handleGeneralInfoChange(contact.id, e.target.value)} />
            </div>
          ))}
        </div>
        <div className="save-btn">
          <SaveIcon onClick={updateEditing}/>
        </div>
      </div>
    )
}