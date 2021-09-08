import "./send-message-part-2.styls.css";
import React from "react";
import ContactBox from "../contact-box/contact-box.components";

function SendMessagePart2() {
  return (
    <section id="send-message-part-2">
      <div className="send-message-part-2-warpper">
        <div className="send-message-part-2-right-side">
          <header className="send-message-part-2-right-side-main-header">
            <p>יש לבחור את הקבוצה הרלוונטית:</p>
          </header>
          <input
            className="send-message-part-2-right-side-search-input"
            type="text"
            placeholder="חיפוש בקבוצות שלי"
          />
          <div className="send-message-part-2-right-side-groupsList">
            <div className="group-box">
              <p>
                <strong>שם הקבוצה</strong>-100 משתתפים
              </p>
            </div>
            <div className="group-box">
              <p>
                <strong>שם הקבוצה</strong>-100 משתתפים
              </p>
            </div>
            <div className="group-box">
              <p>
                <strong>שם הקבוצה</strong>-100 משתתפים
              </p>
            </div>
        
          </div>
        </div>

        <div className="send-message-part-2-left-side">
          <div className="send-message-part-2-left-side-background"></div>
          <div className="send-message-part-2-left-side-container">
            <header className="send-message-part-2-left-side-main-header">
              <p>שם הקבוצה - 100 משתתפים</p>
            </header>

            <div className="contacts-table-headers">
              <div className="send-message-part2-left-side-list-header-first-column">
                <span>שם פרטי</span>
              </div>
              <div className="send-message-part2-left-side-list-header-second-column">
                <span>שם משפחה</span>
              </div>
              <div className="send-message-part2-left-side-list-header-third-column">
                <span>טלפון</span>
              </div>
            </div>
            <div className="contacts-list-container">
              <ContactBox />
              <ContactBox />
              <ContactBox />
              <ContactBox />
              <ContactBox />
              <ContactBox />
              
              
        
            </div>
          </div>
          <div className="send-message-part-2-left-side-button-warpper">
            <div className="send-message-part-2-left-side-button">
              <div className="send-message-part-2-left-side-button-background"></div>
              יאללה, המשכנו
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMessagePart2;
