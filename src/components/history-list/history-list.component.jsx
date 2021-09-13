import "./history-list.styles.css";
import React from "react";
import ListItem4 from "../list-item-4-open-item/list-item-4-open-item.component";
import { useState } from "react";

const historys = [
  { messageName: "ariel", groupName: "king", date: "25.09.2000", madia: "a" },
  {
    messageName: "eylon",
    groupName: "ליצמן-בנות",
    date: "25.09.2000",
    madia: "a",
  },
  { messageName: "ariel", groupName: "king", date: "21.11.1999", madia: "a" },
];

function HistoryList() {
  const [historyList, setHistoryList] = useState(historys);
  const [state, setState] = useState({
    searchHistory: "",
  });

  function handleInputs({ target }) {
    const { name, value } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }
  return (
    <section id="hisotry-page">
      <header className="history-page-main-header">
        <div className="history-page-main-header-right-side">
          <p className="history-page-main-header-text-content">
            היסטורית הודעות
          </p>
        </div>
        <div className="history-page-main-header-left-side">
          <input
            name="searchHistory"
            className="history-page-main-header-input"
            type="text"
            placeholder="חיפוש הודעה בהיסטוריה"
            onChange={(event) => handleInputs(event)}
          />
        </div>
      </header>

      <div className="history-page-list-container-header">
        <div className="history-page-list-item-header">
          <div className="history-page-list-first-item history-page-list-content-item-warpper-header">
            <p className="history-page-content-header">שם ההודעה</p>
            <span className="history-page-icon-header"> icon </span>
          </div>
          <div className="history-page-list-second-item history-page-list-content-item-warpper-header">
            <p className="history-page-content-header">שם הקבוצה</p>
            <span className="history-page-icon-header"> icon </span>
          </div>
          <div className="history-page-list-third-item history-page-list-content-item-warpper-header">
            <p className="history-page-content-header">תאריך שליחה</p>
            <span className="history-page-icon-header"> icon </span>
          </div>
          <div className="history-page-list-four-item history-page-list-content-item-warpper-header">
            <p className="history-page-content-header">קבצים מצורפים</p>
          </div>
        </div>
      </div>

      <div className="history-page-list-container">
        {state.searchHistory &&
          historyList.map((history, index) => {
            let searchHistoryLower = state.searchHistory.toLocaleLowerCase();

            let isMessageName = history.messageName.toLocaleLowerCase().includes(searchHistoryLower);
            let isGroupName = history.groupName.toLocaleLowerCase().includes(searchHistoryLower);
            let isDate = history.date.toLocaleLowerCase().includes(searchHistoryLower);
            if (isMessageName || isGroupName || isDate) {
              return (

                <ListItem4
                  key={index}
                  item={[
                    history.messageName,
                    history.groupName,
                    history.date,
                    history.madia,
                  ]}
                />
              );
            } else {
              return null;
            }
          })}
        {!state.searchHistory &&
          historyList.map((history, index) => {
            return (
              <ListItem4
                key={index}
                item={[
                  history.messageName,
                  history.groupName,
                  history.date,
                  history.madia,
                ]}
              />
            );
          })}
      </div>
    </section>
  );
}

export default HistoryList;
