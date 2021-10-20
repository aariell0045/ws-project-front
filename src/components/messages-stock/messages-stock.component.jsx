import "./messages-stock.styles.css";
import React, { useEffect, useState } from "react";
import MessageBox from "../message-box/message-box.component";
import AddMessage from "../add-message/add-message.component";
import AddMessageIcon from "../../icons/icons-components/add-message/add-message.component";
import AddEvents from "../add-events/add-events.component";
import AddSingleField from "../add-single-field/add-single-field.component";
import CreateMessage from "../create-message-filed/create-message-field.component";
import MediaIcon from "../../icons/icons-components/media-icon/media-icon.component";
import CurrentMessage from "../add-message-field/add-message-field.component";
import { useSelector } from "react-redux";
// const reader = new FileReader();
// const fromData = new FormData();

// reader.readAsDataURL(event.target.files[0]);
// if (currentMessage) {
// 	reader.onload = () => {
// 		if (currentFieldIndex !== -1) {
// 			const newContentMessage = [...currentMessage.contentMessage];
// 			fromData.append("media", JSON.stringify(reader.result));
// 			console.log(event.target.files[0].path);
// 			newContentMessage[currentFieldIndex].mediaSrc = fromData;
// 			setCurrentMessage({
// 				...currentMessage,
// 				contentMessage: newContentMessage,
// 			});
// 		}
// 	};
// } else {
// 	alert("please focus on the field");
// }
const emojiList = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🤣",
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🤣",
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🤣",
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🤣",
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🤣",
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "🧐",
];

function MessagesStock() {
  const [messagesList, setMessagesList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({
    messageName: "",
    contentMessage: [{ contentField: "", mediaSrc: "" }],
    id: "",
  });
  const [currentFieldIndex, setCurrentFieldIndex] = useState(-1);
  const [searchMessageInput, setSearchMessageInput] = useState("");
  const [createNewMessage, setCreateNewMessage] = useState(false);
  const [showCurrentMessage, setShowCurrentMessage] = useState(false);
  const [openSingleField, setOpenSingleField] = useState(false);
  const [openEmojiList, setOpenEmojiList] = useState(false);
  const userId = useSelector((state) => state.userReducer.userId);

  useEffect(async () => {
    const response = await fetch(`http://localhost:8080/message/${userId}`);
    const data = await response.json();
    setMessagesList(data);
  }, []);

  async function deleteMessage(id) {
    const response = await fetch("http://localhost:8080/message", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        messageId: id,
      }),
    });
    const data = await response.json();

    if (data === "deleted") {
      const index = messagesList.findIndex((message) => message._id == id);
      const newMessagesList = [...messagesList];
      if (currentMessage.id == messagesList[index]._id) resetState();
      newMessagesList.splice(index, 1);
      setMessagesList(newMessagesList);
    }
  }

  function resetState() {
    const newCurrentMessage = { ...currentMessage };
    newCurrentMessage.messageName = "";
    newCurrentMessage.id = "";
    newCurrentMessage.contentMessage = [{ contentField: "", mediaSrc: "" }];
    setCurrentMessage(newCurrentMessage);
    setCreateNewMessage(false);
    setShowCurrentMessage(false);
    setCurrentFieldIndex(-1);
  }

  function AddNameTemplate() {
    if (currentFieldIndex !== -1) {
      const newContentMessage = [...currentMessage.contentMessage];
      newContentMessage[currentFieldIndex].contentField += `( שם פרטי )`;
      setCurrentMessage({
        ...currentMessage,
        contentMessage: newContentMessage,
      });
    }
  }

  function AddEmojiTemplate(emoji) {
    if (currentFieldIndex !== -1) {
      const newContentMessage = [...currentMessage.contentMessage];
      newContentMessage[currentFieldIndex].contentField += emoji;
      setCurrentMessage({
        ...currentMessage,
        contentMessage: newContentMessage,
      });
    }
  }

  async function uploadImage(files) {
    const fromData = new FormData();
    fromData.append("file", files[0]);
    fromData.append("upload_preset", "p5tka4xo");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dz7i3o5mo/image/upload",
      {
        method: "POST",
        body: fromData,
      }
    );

    const data = await response.json();
    console.log(data);
    if (currentMessage) {
      if (currentFieldIndex !== -1) {
        const newContentMessage = [...currentMessage.contentMessage];

        newContentMessage[currentFieldIndex].mediaSrc = data.url;
        setCurrentMessage({
          ...currentMessage,
          contentMessage: newContentMessage,
        });
      }
    } else {
      alert("please focus on the field");
    }
  }

  async function saveMessage() {
    const newMessagesList = [...messagesList];
    const index = newMessagesList.findIndex(
      (message) => message._id == currentMessage.id
    );

    console.log(currentMessage.contentMessage);
    if (index === -1) {
      const response = await fetch("http://localhost:8080/message", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          messageName: currentMessage.messageName,
          contentMessage: currentMessage.contentMessage,
        }),
      });

      const newMessage = await response.json();

      newMessagesList.push(newMessage);
    } else {
      const response = await fetch("http://localhost:8080/edit-message", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          messageId: currentMessage.id,
          messageName: currentMessage.messageName,
          contentMessage: currentMessage.contentMessage,
        }),
      });

      const editedMessage = await response.json();

      newMessagesList[index] = editedMessage;
    }
    setMessagesList(newMessagesList);
    resetState();
  }

  function nextStep() {
    let bool = true;
    return showCurrentMessage
      ? setShowCurrentMessage(bool)
      : setCreateNewMessage(bool);
  }

  function updateCurrentMessage(messageName, messagesInRow, id) {
    let newCurrentMessage = { messageName: "", contentMessage: [] };
    newCurrentMessage.messageName = messageName;
    for (let contentMessage of messagesInRow) {
      newCurrentMessage.contentMessage.push({ ...contentMessage });
    }
    resetState();
    setShowCurrentMessage(true);
    newCurrentMessage.id = id;
    setCurrentMessage(newCurrentMessage);
  }

  return (
    <section id="messages-stock">
      <div className="messages-stcok-warrper-container">
        <div className="messages-stock-right-side">
          <header className="messages-stock-main-header">
            <p>מאגר הודעות</p>
            <input
              onChange={(event) => {
                setSearchMessageInput(event.target.value);
              }}
              type="text"
              placeholder="חיפוש במאגר ההודעות"
            />
            <button
              disabled={false}
              onClick={() => {
                resetState();
                setOpenSingleField(true);
              }}
              className="messages-stcok-add-message-icon"
            >
              <AddMessageIcon />
            </button>
          </header>

          <div className="messages-list">
            {searchMessageInput &&
              messagesList.map((message) => {
                console.log(currentMessage.contentMessage);
                if (message.messageName.includes(searchMessageInput)) {
                  return (
                    <MessageBox
                      key={message._id}
                      id={message._id}
                      messageName={message.messageName}
                      messageLength={message.contentMessage.length}
                      messagesInRow={message.contentMessage}
                      deleteMessage={deleteMessage}
                      updateCurrentMessage={updateCurrentMessage}
                      currentMessage={currentMessage}
                    />
                  );
                } else {
                  return null;
                }
              })}
            {!searchMessageInput &&
              messagesList.map((message) => {
                console.log(currentMessage.contentMessage);
                return (
                  <MessageBox
                    key={message._id}
                    id={message._id}
                    messageName={message.messageName}
                    messageLength={message.contentMessage.length}
                    messagesInRow={message.contentMessage}
                    deleteMessage={deleteMessage}
                    updateCurrentMessage={updateCurrentMessage}
                    currentMessage={currentMessage}
                  />
                );
              })}
          </div>
        </div>
        <div className="messages-stock-left-side">
          <div className="messages-stock-left-side-background"></div>
          <nav className="message-stcok-left-side-nav-bar">
            <div onClick={resetState}>X</div>
            <div>icon</div>
            <div>icon</div>
            <button
              disabled={showCurrentMessage || createNewMessage ? false : true}
              className="message-stock-left-side-nav-bar-save-button"
              onClick={saveMessage}
            >
              שמור
            </button>
          </nav>

          <div className="left-side-display-list">
            {showCurrentMessage && (
              <CurrentMessage
                useCurrentMessageState={[currentMessage, setCurrentMessage]}
                setOpenSingleField={setOpenSingleField}
                setCurrentFieldIndex={setCurrentFieldIndex}
              />
            )}
            {createNewMessage && (
              <CurrentMessage
                useCurrentMessageState={[currentMessage, setCurrentMessage]}
                setOpenSingleField={setOpenSingleField}
                setCurrentFieldIndex={setCurrentFieldIndex}
              />
            )}
          </div>
          <div className="left-side-footer-container">
            {openEmojiList && (
              <div className="emoji-list">
                {emojiList.map((emoji) => {
                  return (
                    <li
                      onClick={() => {
                        AddEmojiTemplate(emoji);
                      }}
                    >
                      {emoji}
                    </li>
                  );
                })}
              </div>
            )}
            <div className="left-side-tools-warpper">
              <button
                onClick={() => AddNameTemplate()}
                className="left-side-button-1"
              >
                @ הוספת תבנית שם
              </button>
              <div className="left-side-tools-warpper-left-side">
                <button className="left-side-button-3">/</button>
                <button className="left-side-button-2">B</button>
                <input
                  onChange={(event) => uploadImage(event.target.files)}
                  type="file"
                  id="upload-media"
                  name="upload-media"
                  multiple
                  style={{ display: "none" }}
                />

                <div className="left-side-button-4">
                  <label htmlFor="upload-media">
                    <div className="media-icon-upload-media">
                      <MediaIcon />
                    </div>
                  </label>
                </div>
                <button
                  onClick={() => setOpenEmojiList(!openEmojiList)}
                  className="left-side-button-5"
                >
                  😀
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openSingleField && (
        <AddSingleField
          setOpenField={setOpenSingleField}
          nextStep={nextStep}
          useCurrentData={[currentMessage, setCurrentMessage]}
          containerNameKey={"messageName"}
          fieldsNames={"שם ההודעה:"}
        />
      )}
    </section>
  );
}

export default MessagesStock;
