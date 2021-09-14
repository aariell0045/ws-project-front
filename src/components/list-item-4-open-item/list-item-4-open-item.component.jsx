import "./list-item-4-open-item.styls.css";
import React from "react";
import ArrowDownIcon from "../../icons/icons-components/arrow-down-icon/arrow-down-icon.component";


function ListItem4(props) {
    let [massageName,groupName,date,media] = props.item;
      return (
    <div className="history-page-list-item">
      <div className="history-page-list-first-item history-page-list-content-item-warpper">
        <p className="history-page-content-message-name">{massageName}</p>
        
      </div>
      <div className="history-page-list-second-item history-page-list-content-item-warpper ">
        <p className="history-page-content">{groupName}</p>
        
      </div>
      <div className="history-page-list-third-item history-page-list-content-item-warpper ">
        <p className="history-page-content">{date}</p>
        
      </div>
      <div className="history-page-list-four-item history-page-list-content-item-warpper ">
        <p className="history-page-content">{media}</p>
      </div>
      <span className="history-page-list-open-item-icon"><ArrowDownIcon/></span>
    </div>
  );
}

export default ListItem4;