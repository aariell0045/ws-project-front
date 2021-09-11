import "./send-message-part-1.styles.css";
import React from "react";
import MessageBox from "../message-box/message-box.component";
import { Link } from "react-router-dom";
import { useState } from "react";

const messages = [
  { messageName: "ariel", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
  { messageName: "ariel", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
  { messageName: "toam", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
  { messageName: "toam", contentMessage: "שלום מה קורה אחשלי היקר מכל!!!!!" },
];

function SendMessagePart1() {
  const [messagesList, setMessageList] = useState(messages);
  const [state, setState] = useState({
    searchMessages: "",
  });

  function handleInputs({ target }) {
    const { name, value } = target;
    let currentState = { ...state };
    currentState[name] = value;
    setState(currentState);
  }
  return (
    <section id="send-message-part-1">
      <div className="send-message-part-1-warpper">
        <div className="send-message-part-1-right-side">
          <header className="send-message-part-1-main-header">
            <p>יש לבחור את ההודעה אותה תרצה לשלוח:</p>
          </header>
          <input
            name="searchMessages"
            className="send-message-part-1-search-input"
            type="text"
            placeholder="חיפוש במאגר ההודעות"
            onChange={(event) => handleInputs(event)}
          />
          <div className="send-message-part-1-messages-list">
            {state.searchMessages &&
              messagesList.map((message, index) => {
                if (message.messageName.includes(state.searchMessages)) {
                  return (
                    <MessageBox
                      key={index}
                      item={[message.messageName, message.contentMessage]}
                    />
                  );
                } else {
                  return null;
                }
              })}
            {!state.searchMessages &&
              messagesList.map((message, index) => {
                return (
                  <MessageBox
                    key={index}
                    item={[message.messageName, message.contentMessage]}
                  />
                );
              })}
          </div>
        </div>
        <div className="send-message-part-1-left-side">
          <div className="send-message-part-1-left-side-background"></div>
          <div className="send-message-part-1-left-side-button-warpper">
            <Link to="/SendMessagePart2">
              <div className="send-message-part-1-left-side-button">
                <div className="send-message-part-1-left-side-button-background"></div>
                יאללה, המשכנו
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMessagePart1;
