import "./history-list.styles.css";
import React, { useEffect } from "react";
import ListItem4 from "../list-item-4-open-item/list-item-4-open-item.component";
import { useState } from "react";
import { useSelector } from "react-redux";

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

  const userId = useSelector((state) => state.userReducer.userId);

  useEffect(async () => {
    const response = await fetch(
      `${process.env.React_App_HEROKU_SERVER_URL}/history/${userId}`
    );
    const history = await response.json();
    setHistoryList(history);
  }, []);

  function handleInputs({ target }) {
    const { name, value } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }

  function checkMedia(contentMessage) {
    const response = contentMessage?.some((media) => media.mediaSrc.length);
    if (response === undefined) {
      return "";
    }
    return response;
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
          </div>
          <div className="history-page-list-second-item history-page-list-content-item-warpper-header">
            <p className="history-page-content-header">שם הקבוצה</p>
          </div>
          <div className="history-page-list-third-item history-page-list-content-item-warpper-header">
            <p className="history-page-content-header">תאריך שליחה</p>
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
            const isMedia = checkMedia(history.contentMessage);
            let isMessageName = history.messageName
              .toLocaleLowerCase()
              .includes(searchHistoryLower);
            let isGroupName = history.groupName
              .toLocaleLowerCase()
              .includes(searchHistoryLower);
            let isDate = history.sendDate
              .toLocaleLowerCase()
              .includes(searchHistoryLower);
            if (isMessageName || isGroupName || isDate) {
              return (
                <ListItem4
                  key={index}
                  item={[
                    history.messageName,
                    history.groupName,
                    history.sendDate,
                    isMedia.toString(),
                  ]}
                />
              );
            } else {
              return null;
            }
          })}
        {!state.searchHistory &&
          historyList.map((history, index) => {
            const isMedia = checkMedia(history.contentMessage);
            return (
              <ListItem4
                key={index}
                item={[
                  history.messageName,
                  history.groupName,
                  history.sendDate,
                  isMedia.toString(),
                ]}
              />
            );
          })}
      </div>
    </section>
  );
}

export default HistoryList;
