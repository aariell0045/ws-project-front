import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItems from "../list-items1/list-items.1component";
import "./groups-list.styles.css";

function GroupsList() {
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
              className="groups-page-main-header-search"
              type="text"
              placeholder="חיפוש משתתפים או קבוצות"
            />
          </div>
          <div className="groups-page-main-header-merge-groups-button-container">
            <button className="groups-page-main-header-merge-groups-button">
              איחוד קבוצות
            </button>
          </div>
          <div className="groups-page-main-header-add-new-group-button-container">
            <button className="groups-page-main-header-add-new-group-button">
              icon
            </button>
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
        <ListItems />
        <ListItems />
        <ListItems />
       
      </div>
    </section>
  );
}

export default GroupsList;
