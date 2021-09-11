import "./message-box.styles.css";
import React from "react";

function MessageBox(props) {
  let [messageName, contentMessage] = props.item;

  return (
    <div className="message-box">
      <header className="message-box-header">
        <h3>{messageName}</h3>
        <p>3 הודעות ברצף</p>
      </header>
      <div className="content">
        <p>{contentMessage}</p>
        <div className="media-footer">media</div>
      </div>
    </div>
  );
}

export default MessageBox;
