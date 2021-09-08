import "./contacts-list.styls.css";
import React from "react";
import ListItems from "../list-items1/list-items.1component";

function ContactsList() {
  return (
    <section id="contacts-page">
      <header className="contacts-page-main-header">
        <div className="contacts-page-main-header-right-side">
          <div className="contacts-page-main-header-title-container">
            <p className="contacts-page-main-header-title">
              שם הקבוצה-1000משתתפים
            </p>
          </div>
        </div>
        <div className="contacts-page-main-header-left-side">
          <div className="contacts-page-main-header-search-container">
            <input
              className="contacts-page-main-header-search"
              type="text"
              placeholder="חיפוש משתתפים או קבוצות"
            />
          </div>
          <div className="contacts-page-main-header-add-new-contact-button-container">
            <button className="contacts-page-main-header-add-new-contact-button">
              icon
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default ContactsList;
