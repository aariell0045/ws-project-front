import React from "react";
import "./list-item-3.styls.css";

function GroupBox(props) {
  let { groupName, groupAmount, id } = props;
  return (
    <p>
      <strong>{groupName}</strong> - {groupAmount} משתתפים
    </p>
  );
}

export default GroupBox;
