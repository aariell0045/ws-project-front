import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItems from "../list-items1/list-items.1component";
import "./groups-list.styles.css";


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

function mergeGroups(groupName, groups) {
  let newGroup = {groupName, contactsList: []};
  for (let group of groups) {
    newGroup.contactsList.push(...group.contactsList);
  }
  newGroup.contactsList = checkDuplicate(newGroup.contactsList);
  newGroup.groupLength = newGroup.contactsList.length;
  return newGroup;
}

function checkDuplicate(contactsList) {
  let newObjectContactsList = {};
  let newArrayContactsList = [];

  for (let contact of contactsList) {
    let phone = contact.contactPhone;
    newObjectContactsList[phone] = contact;
  }
  for (let key in newObjectContactsList) {
    newArrayContactsList.push(newObjectContactsList[key]);
  }
  return newArrayContactsList;
}

console.log(mergeGroups("king",groups));


function GroupsList() {
  const [groupsList, setGroupList] = useState(groups);
  const [state, setState] = useState({
    searchGroups: "",
  });

  function handleInputs({ target }) {
    const { name, value } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }

  function deleteItem(itemsContainer, index) {
    let currentState = { ...state };
  }
  return (
    <section id="groups-page">
      <header className="groups-page-main-header">
        <div className="groups-page-main-header-right-side">
          <div className="groups-page-main-header-title-container">
            <p className="groups-page-main-header-title">כל הקבוצות שלי</p>
          </div>
        </div>

        <div className="groups-page-main-header-left-side">
          <div className="groups-page-main-header-search-container">
            <input
              name="searchGroups"
              className="groups-page-main-header-search"
              type="text"
              placeholder="חיפוש משתתפים או קבוצות"
              onChange={(event) => handleInputs(event)}
            />
          </div>
          <div className="groups-page-main-header-merge-groups-button-container">
            <button className="groups-page-main-header-merge-groups-button">
              איחוד קבוצות
            </button>
          </div>
          <div className="groups-page-main-header-add-new-group-button-container">
            <Link to="/AddGroup">
              <button className="groups-page-main-header-add-new-group-button">
                icon
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="groups-page-groups-container-header">
        <div className="groups-page-groups-container-header-first-column">
          <p>שם הקבוצה</p>
        </div>
        <div className="groups-page-groups-container-header-second-column">
          <p>כמות משתתפים</p>
        </div>
        <div className="groups-page-groups-container-header-third-column">
          <p>תאריך יצירה</p>
        </div>
      </div>
      <div className="groups-page-groups-list">
        {state.searchGroups &&
          groupsList.map((group, index) => {
            if (group.groupName.includes(state.searchGroups)) {
              return (
                <ListItems
                  key={index}
                  item={[
                    group.groupName,
                    group.groupLength,
                    group.productionDate,
                  ]}
                />
              );
            } else {
              return null;
            }
          })}
        {!state.searchGroups &&
          groupsList.map((group, index) => {
            return (
              <ListItems
                key={index}
                item={[
                  group.groupName,
                  group.groupLength,
                  group.productionDate,
                ]}
              />
            );
          })}
      </div>
    </section>
  );
}

export default GroupsList;
