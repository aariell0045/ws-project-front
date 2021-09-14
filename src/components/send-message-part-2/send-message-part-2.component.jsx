import "./send-message-part-2.styls.css";
import React, { useEffect } from "react";
import ContactBox from "../contact-box/contact-box.components";
import { Link } from "react-router-dom";
import GroupBox from "../list-item-3/list-item-3.component";
import { useState } from "react";
import GoBack from "../../icons/icons-components/go-back-icon/go-back-icon.component"

const groups = [
  {
    groupName: "ariel",
    groupLength: 50,
    productionDate: "25.09.2000",
    contactsList: [
      {
        contactName: "ariel",
        contactLastName: "cohen",
        contactPhone: "0502203450",
      },
      {
        contactName: "ariel",
        contactLastName: "cohen",
        contactPhone: "0512203450",
      },
    ],
  },
  {
    groupName: "ariel",
    groupLength: 50,
    productionDate: "25.09.2000",
    contactsList: [
      {
        contactName: "ariel",
        contactLastName: "cohen",
        contactPhone: "0532203450",
      },
      {
        contactName: "ariel",
        contactLastName: "cohen",
        contactPhone: "0502203450",
      },
    ],
  },
  {
    groupName: "ariel",
    groupLength: 50,
    productionDate: "25.09.2000",
    contactsList: [
      {
        contactName: "ariel",
        contactLastName: "cohen",
        contactPhone: "0582203450",
      },
      {
        contactName: "ariel",
        contactLastName: "cohen",
        contactPhone: "0502203450",
      },
    ],
  },
];

function SendMessagePart2() {
  const [groupsList, setGroupsList] = useState(groups);
  const [state, setState] = useState({
    searchGroups: "",
    currentGroup: {},
  });
  console.log(groupsList);

  useEffect(() => {
    let currentState = groupsList.map((group) => {
      return { ...group, isActive: false };
    });
    setGroupsList(currentState);
  }, []);

  console.log(state.currentGroup);
  function handleInputs({ target }) {
    const { name, value } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }

  return (
    <section id="send-message-part-2">
      <div className="send-message-part-2-warpper">
        <div className="send-message-part-2-right-side">
          <header className="send-message-part-2-right-side-main-header">
            <Link to="/SendMessagePart1"><span ><GoBack/></span></Link>
            <p>יש לבחור את הקבוצה הרלוונטית:</p>
          </header>
          <input
            name="searchGroups"
            className="send-message-part-2-right-side-search-input"
            type="text"
            placeholder="חיפוש בקבוצות שלי"
            onChange={(event) => handleInputs(event)}
          />
          <div className="send-message-part-2-right-side-groupsList">
            {state.searchGroups &&
              groupsList.map((group, index) => {
                if (group.groupName.includes(state.searchGroups)) {
                  return (
                    <GroupBox
                      key={index}
                      item={[group.groupName, group.groupLength]}
                    />
                  );
                } else {
                  return null;
                }
              })}
            {!state.searchGroups &&
              groupsList.map((group, index) => {
                console.log(group);
                return (
                  <div
                    className={
                      groupsList[index]?.isActive
                        ? "group-box-clicked"
                        : "group-box"
                    }
                    onClick={() => {
                      let currentGroupsList = groupsList.map((group, i) => {
                        if (i === index) {
                          group.isActive = true;
                        } else {
                          group.isActive = false;
                        }
                        return group;
                      });

                      setGroupsList(currentGroupsList);

                      setState({
                        ...state,
                        currentGroup: group,
                      });
                    }}
                  >
                    <GroupBox
                      key={index}
                      item={[group.groupName, group.groupLength]}
                    />
                  </div>
                );
              })}
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
              {state.currentGroup?.contactsList?.map((contact, index) => {
                return (
                  <ContactBox
                    item={[
                      contact.contactName,
                      contact.contactLastName,
                      contact.contactPhone,
                    ]}
                  />
                );
              })}
            </div>
          </div>
          <Link to={state.currentGroup.isActive && "/SendMessagePart3"}>
            <div
              style={{ cursor: !state.currentGroup.isActive && "pointer" }}
              className="send-message-part-2-left-side-button-warpper"
            >
              <div className="send-message-part-2-left-side-button">
                <div
                  className={
                    state.currentGroup.isActive
                      ? "send-message-part-2-left-side-button-background-ready"
                      : "send-message-part-2-left-side-button-background"
                  }
                ></div>
                יאללה, המשכנו
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SendMessagePart2;
