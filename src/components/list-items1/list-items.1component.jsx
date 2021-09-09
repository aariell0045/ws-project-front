import "./list-items1.styls.css";
import React from "react";
import ContactsList from "../contacts-list/contacts-list.component";

function ListItems(props) {
  let { groupName, groupLength, productionDate } = props.group;

  return (
    <div className="list-items-box">
      <div className="list-items-details-container">
        <div className="list-items-first-row">{groupName}</div>
        <div className="list-items-second-row">{groupLength}</div>
        <div className="list-items-third-row">{productionDate}</div>
      </div>
      <div className="list-items-icons">
        <span className="list-items-display-icon">icon</span>
        <span className="list-items-trash-icon">icon</span>
      </div>
    </div>
  );
}

export default ListItems;
