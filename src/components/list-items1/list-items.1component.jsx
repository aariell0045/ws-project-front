import "./list-items1.styls.css";
import React from "react";
import ContactsList from "../contacts-list/contacts-list.component";

function ListItems(props) {
  let [firstCoulmn,secondCoulmn,thirdCoulmn] = props.item;

  return (
    <div className="list-items-box">
      <div className="list-items-details-container">
        <div className="list-items-first-row">{firstCoulmn}</div>
        <div className="list-items-second-row">{secondCoulmn}</div>
        <div className="list-items-third-row">{thirdCoulmn}</div>
      </div>
      <div className="list-items-icons">
        <span className="list-items-display-icon">icon</span>
        <span className="list-items-trash-icon">icon</span>
      </div>
    </div>
  );
}

export default ListItems;
