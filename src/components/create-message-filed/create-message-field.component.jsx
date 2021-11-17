import "./create-message-field.styles.css";
import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";

function CreateMessage(props) {
  const { container, setContainer } = props;

  function addNewField(fieldObj) {
    let newContainer = [...container];
    newContainer.push(fieldObj);
    setContainer(newContainer);
  }
  function handleTextarea(event, index, message) {
    let row = Math.floor(message.contentField.length / 91 + 2);
    let counter = 0;
    for (let val of event.target.value) {
      if (val === "\n") {
        counter++;
      }
    }

    event.nativeEvent.path[0].rows = row + counter;

    let newContainer = [...container];
    newContainer[index].contentField = event.target.value;
    setContainer(newContainer);
  }
  function returnField() {
    return (
      <div className="add-new-field">
        <span onClick={() => addNewField({ contentField: "", mediaSrc: "" })}>
          הוספת תת הודעה{" "}
        </span>
      </div>
    );
  }

  function removeField(event, container, setContainer, index) {
    if (index === 0) {
      const newContainer = [...container];
      newContainer[index] = { contentField: "", mediaSrc: "" };
      return setContainer(newContainer);
    }
    const newContainer = [...container];
    newContainer.splice(index, 1);
    setContainer(newContainer);
  }

  return (
    <div className="create-message">
      <header className="create-message-main-header">
        <p onClick={() => props.setOpenMessageName(true)}>
          {props.currentMessage.messageName}
        </p>
      </header>
      <div className="create-message-messages-content-list">
        {container.length
          ? container.map((message, index) => {
              return (
                <div>
                  {message.mediaSrc && (
                    <img
                      className="image-url-upload-media"
                      src={message.mediaSrc}
                      alt=""
                    />
                  )}
                  <div className="message-field">
                    <textarea
                      onFocus={() => {
                        props.setCurrentMessage({
                          id: index,
                          ...message,
                        });
                      }}
                      onChange={(event) =>
                        handleTextarea(event, index, message)
                      }
                      value={message.contentField}
                      name=""
                      id={index}
                      cols={message.contentField.length + 10 + ""}
                      rows={Math.floor(message.contentField.length / 91 + 2)}
                    ></textarea>
                    <div
                      onClick={(event) =>
                        removeField(event, container, setContainer, index)
                      }
                      className="message-field-trash-icon"
                    >
                      <TrashIcon disabled />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        {container.length < 4 && returnField()}
      </div>
    </div>
  );
}
export default CreateMessage;
