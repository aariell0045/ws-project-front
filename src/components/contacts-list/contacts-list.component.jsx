import "./contacts-list.styls.css";
import React from "react";
import ListItems from "../list-items1/list-items.1component";

function ContactsList() {
  return (
    <section id="contacts-page">
      <header className="contacts-page-main-header">
        <div className="contacts-page-main-header-right-side">
          <span className='contacts-page-main-header-back-button'>icon</span>
          <div className="contacts-page-main-header-title-container">
            <p className="contacts-page-main-header-title">
              <span>שם הקבוצה </span>- 1000 משתתפים
            </p>
          </div>
        </div>
        <div className="contacts-page-main-header-left-side">
          <div className="contacts-page-main-header-search-container">
            <input
              className="contacts-page-main-header-search"
              type="text"
              placeholder="חיפוש משתתפים בקבוצה"
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
        <ListItems />
        <ListItems />
        <ListItems />
      </div>
    </section>
  );
}

export default ContactsList;
