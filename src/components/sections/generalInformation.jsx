// name, job title, address, phone, email, github, linkedin


export default function GeneralInformation({cvData, setCVData}) {

    const title = 'General Information';
    const sections = [
      {id: 'fullName', label: 'Full Name', value: cvData.personalInfo?.fullName || ''},
      {id: 'jobTitle', label: 'Job Title', value: cvData.personalInfo?.jobTitle || ''},
    ];

    const contacts = [
      {id: 'address', label: 'Address', value: cvData.personalInfo?.address || ''},
      {id: 'phone', label: 'Phone', value: cvData.personalInfo?.phone || ''},
      {id: 'email', label: 'Email', value: cvData.personalInfo?.email || ''},
      {id: 'github', label: 'Github', value: cvData.personalInfo?.github || ''},
      {id: 'linkedin', label: 'LinkedIn', value: cvData.personalInfo?.linkedin || ''},
    ];

    function handlePersonalInfoChange (id, newValue) {
      setCVData(prev => ({ ...prev, personalInfo:{ ...prev.personalInfo, [id]: newValue}}));
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
      </div>
    )
}