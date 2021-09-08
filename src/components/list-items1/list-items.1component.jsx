import "./list-items1.styls.css";
import React from "react";

function ListItems() {
  return (
    <div className="list-items-box">
      <div className="list-items-first-row">שם הקבוצה</div>
      <div className="list-items-second-row">100 משתתפים</div>
      <div className="list-items-third-row">14.02.2021</div>
      <div className="list-items-icons">
        <span className="list-items-trash-icon">icon</span>
        <span className="list-items-display-icon">icon</span>
      </div>
    </div>
  );
}

export default ListItems;
