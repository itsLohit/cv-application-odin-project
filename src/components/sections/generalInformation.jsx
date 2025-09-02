export default function GeneralInformation(props) {
    return (
        <>
          <h2>General Information</h2>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={props.firstName}
              onChange={props.onFirstNameChange}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={props.lastName}
              onChange={props.onLastNameChange}
            />
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="text"
              id="phone_number"
              value={props.phoneNumber}
              onChange={props.onPhoneNumberChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={props.email}
              onChange={props.onEmailChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={props.address}
              onChange={props.onAddressChange}
            />
          </div>
          <div>
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              id="website"
              value={props.website}
              onChange={props.onWebsiteChange}
            />
          </div>
        </>
    )
}