import { useState } from "react";
import "./contact-profile.styles.css";

function ContactProfile(props) {
  const { phoneNumber, _id } = props.contact;
  const { contact } = props;

  const [contactProfileState, setContactProfileState] = useState({
    firstname: contact?.contactProfile?.contactFirstName || "",
    lastname: contact?.contactProfile?.contactLastName || "",
    email: contact?.contactProfile?.email || "",
    age: contact?.contactProfile?.age || "",
    birthday: contact?.contactProfile?.birthDay || "",
    gender: contact?.contactProfile?.gender || "",
    phoneNumber: phoneNumber || "",
  });

  function handleProfileInputs(event) {
    const { name, value } = event.target;
    setContactProfileState({
      ...contactProfileState,
      [name]: value,
    });
  }

  return (
    <div className="contact-profile-canvas">
      <header className="contact-profile-header">
        <span onClick={() => props.reset()}>X</span>
        <p>פרופיל איש קשר</p>
      </header>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let newContact = {
            phoneNumber: contactProfileState.phoneNumber,
            contactProfile: {
              contactFirstName: contactProfileState.firstname,
              contactLastName: contactProfileState.lastname,
              email: contactProfileState.email,
              birthday: contactProfileState.birthday,
              age: +contactProfileState.age || undefined,
              gender: contactProfileState.gender,
            },
          };
          if (contact._id) {
            props.editGroup(_id, newContact);
          } else {
            props.editGroup(newContact);
          }
          props.reset();
        }}
      >
        <div className="contact-profile-content">
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">שם פרטי:</div>
            <input
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.firstname}
              name="firstname"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">שם משפחה:</div>

            <input
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.lastname}
              name="lastname"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">אימייל:</div>

            <input
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.email}
              name="email"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">פלאפון:</div>

            <input
              style={{ direction: "ltr" }}
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.phoneNumber}
              name="phoneNumber"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">תאריך לידה:</div>

            <input
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.birthDay}
              name="birthday"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">גיל:</div>

            <input
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.age}
              name="age"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
          <div className="contact-profile-field-warpper">
            <div className="contact-profile-field-name">מגדר:</div>

            <input
              onChange={(event) => handleProfileInputs(event)}
              value={contactProfileState.gender}
              name="gender"
              className="contact-profile-field-input"
              type="text"
            />
          </div>
        </div>
        <div className="save-contact-profile-changes">
          <button type="submit">שמור</button>
        </div>
      </form>
    </div>
  );
}

export default ContactProfile;
