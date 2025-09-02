import GeneralInformation from "../sections/generalInformation"

export default function PreviewCV(props) {
    return(
        <>
          <div>{props.firstName} {props.lastName}</div>
          <div>{props.phoneNumber}</div>
          <div>{props.email}</div>
          <div>{props.address}</div>
          <div>{props.website}</div>
        </>
    )
}