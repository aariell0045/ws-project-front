import "./contacts-list.styls.css";
import React,{useState} from "react";
import ListItems from "../list-items1/list-items.1component";
import { Link } from "react-router-dom";

const contacts = [
  { firstName: "ariel", lastName: "cohen", phoneNumber: "1502203450" },
  { firstName: "ariel", lastName: "cohen", phoneNumber: "0502203450" },
  { firstName: "toam", lastName: "fdd", phoneNumber: "0545233649" },
];

function ContactsList() {
  const [contactsList, setContactsList] = useState(contacts);
  const [state, setState] = useState({
    searchContacts: "",
  });

  function handleInputs({ target }) {
    const { name, value } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }
  return (
    <section id="contacts-page">
      <header className="contacts-page-main-header">
        <div className="contacts-page-main-header-right-side">
          <Link to="/Groups"><span className="contacts-page-main-header-back-button">icon</span></Link>
          <div className="contacts-page-main-header-title-container">
            <p className="contacts-page-main-header-title">
              <span>שם הקבוצה </span>- 1000 משתתפים
            </p>
          </div>
        </div>
        <div className="contacts-page-main-header-left-side">
          <div className="contacts-page-main-header-search-container">
            <input
              name="searchContacts"
              className="contacts-page-main-header-search"
              type="text"
              placeholder="חיפוש משתתפים בקבוצה"
              onChange={(event) => handleInputs(event)}
            />
          </div>
          <div className="contacts-page-main-header-add-new-contact-button-container">
            <button className="contacts-page-main-header-add-new-contact-button">
              icon
            </button>
          </div>
        </div>
      </header>

      <div className="contacts-page-contacts-container-header">
        <div className="contacts-page-contacts-container-header-first-column">
          <p>שם פרטי</p>
        </div>
        <div className="contacts-page-contacts-container-header-second-column">
          <p>שם משפחה</p>
        </div>
        <div className="contacts-page-contacts-container-header-third-column">
          <p>טלפון</p>
        </div>
      </div>
      <div className="contacts-page-contacts-list">
        {state.searchContacts &&
          contactsList.map((contact, index) => {
            const isContactName = contact.firstName.includes(state.searchContacts);
              const isContactPhoneNumber = contact.lastName.includes(state.searchContacts);
              const isContactLastName= contact.phoneNumber.includes(state.searchContacts);
            if (isContactLastName||isContactName||isContactPhoneNumber) {
              return (
                <ListItems
                  key={index}
                  item={[
                    contact.firstName,
                    contact.lastName,
                    contact.phoneNumber,
                  ]}
                />
              );
            } else {
              return null;
            }
          })}
        {!state.searchContacts &&
          contactsList.map((contact, index) => {
            return (
              <ListItems
                key={index}
                item={[
                  contact.firstName,
                  contact.lastName,
                  contact.phoneNumber,
                ]}
              />
            );
          })}
      </div>
    </section>
  );
}

export default ContactsList;
