import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItems from "../list-items1/list-items.1component";
import "./groups-list.styles.css";

const groups = [
  { groupName: "ariel", groupLength: 50, productionDate: "25.09.2000" },
  { groupName: "ariel", groupLength: 50, productionDate: "25.09.2000" },
  { groupName: "toam", groupLength: 50, productionDate: "25.09.2000" },
];

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
              return <ListItems key={index} group={group} />;
            } else {
              return null;
            }
          })}
        {!state.searchGroups &&
          groupsList.map((group, index) => {
            return <ListItems key={index} group={group} />;
          })}
      </div>
    </section>
  );
}

export default GroupsList;
