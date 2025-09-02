// name, job title, address, phone, email, github, linkedin


export default function GeneralInformation({cvData, setCVData, editing, updateEditing}) {

    const title = 'General Information';
    const sections = [
      {id: 'fullName', label: 'Full Name', value: cvData.personalInfo?.fullName || 'Lohit'},
      {id: 'jobTitle', label: 'Job Title', value: cvData.personalInfo?.jobTitle || 'Mechanical Engineer'},
    ];

    const contacts = [
      {id: 'address', label: 'Address', value: cvData.personalInfo?.address || '7/56, Pavithiram Mettukadai'},
      {id: 'phone', label: 'Phone', value: cvData.personalInfo?.phone || '+91 97901 59159'},
      {id: 'email', label: 'Email', value: cvData.personalInfo?.email || 'lohitworkmail@gmail.com'},
      {id: 'github', label: 'Github', value: cvData.personalInfo?.github || 'github.com/itsLohit'},
      {id: 'linkedin', label: 'LinkedIn', value: cvData.personalInfo?.linkedin || 'linkedin.com/lohitt'},
    ];

    function handlePersonalInfoChange (id, newValue) {
      setCVData(prev => ({ ...prev, personalInfo:{ ...prev.personalInfo, [id]: newValue}}));
    }

    if(!editing) {
      return (
        <div>
          <div>
            <h2>{title}</h2>
            <button onClick={updateEditing}>Edit</button>
          </div>
          <div>
            {sections.map(section => (
            <div key = {section.id}>
              <p>{section.value}</p>
            </div>
          ))}
            {contacts.map(contact => (
            <div key = {contact.id}>
              <p>{contact.value}</p>
            </div>
          ))}
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
              <input value={section.value} onChange={e => handlePersonalInfoChange(section.id, e.target.value)} />
            </div>
          ))}
          {contacts.map(contact => (
            <div key = {contact.id}>
              <label>{contact.label}</label>
              <input value={contact.value} onChange={e => handlePersonalInfoChange(contact.id, e.target.value)} />
            </div>
          ))}
        </div>
        <button onClick={updateEditing}>Save</button>
      </div>
    )
}