import "./list-items1.styls.css";
import React, { useState } from "react";
import ContactsList from "../contacts-list/contacts-list.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";

function ListItems(props) {
  let [firstCoulmn, secondCoulmn, thirdCoulmn] = props.item;
  const [state, setState] = useState({ disabled: false });
  return (
    <div className="list-items-box">
      <div className="list-items-details-container">
        <div className="list-items-first-row">{firstCoulmn}</div>
        <div className="list-items-second-row">{secondCoulmn}</div>
        <div className="list-items-third-row">{thirdCoulmn}</div>
      </div>
      <div className="list-items-icons">
        <span className="list-items-display-icon"><ArrowDownIcon/></span>
        <span
          onMouseLeave={() => setState({ ...state, disabled: false })}
          onMouseEnter={() => setState({ ...state, disabled: true })}
          title="delete"
          className="list-items-trash-icon"
        >
          <TrashIcon disabled={state.disabled} />
        </span>
      </div>
    </div>
  );
}

export default ListItems;
