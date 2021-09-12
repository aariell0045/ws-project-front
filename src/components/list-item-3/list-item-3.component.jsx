import React from "react";
import "./list-item-3.styls.css";

function GroupBox(props) {
    let [groupName,groupLentgh] = props.item;
  return (
      <p>
        <strong>{groupName}</strong> - {groupLentgh} משתתפים
      </p>
  );
}

export default GroupBox;