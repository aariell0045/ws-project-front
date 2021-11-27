import "./messages-stock.styles.css";
import React, { useEffect, useState } from "react";
import MessageBox from "../message-box/message-box.component";
import AddMessageIcon from "../../icons/icons-components/add-message/add-message.component";
import AddSingleField from "../add-single-field/add-single-field.component";
import CurrentMessage from "../add-message-field/add-message-field.component";
import { useSelector } from "react-redux";
import CloseIcon from "../../icons/icons-components/close-icon";

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
	"😙",
	"😗",
	"😘",
	"🥰",
	"😍",
	"😌",
	"😉",
	"🙃",
	"🙂",
	"😇",
	"😊",
	"🤣",
	"😂",
	"😅",
	"😆",
	"😁",
	"😄",
	"😃",
	"😀",
	"☹️",
	"🙁",
	"😟",
	"😕",
	"😞",
	"😒",
	"😏",
	"🥳",
	"🤩",
	"😎",
	"🤓",
	"🧐",
	"🤨",
	"🤪",
	"😜",
	"😝",
	"😛",
	"😋",
	"😚",
	"😓",
	"😥",
	"😰",
	"😨",
	"😱",
	"😶‍🌫️",
	"🥶",
	"🥵",
	"😳",
	"🤯",
	"🤬",
	"😡",
	"😠",
	"😤",
	"😭",
	"😢",
	"🥺",
	"😩",
	"😫",
	"😖",
	"😣",
	"😵",
	"😮‍💨",
	"😪",
	"🤤",
	"😴",
	"🥱",
	"😲",
	"😮",
	"😧",
	"😦",
	"😯",
	"🙄",
	"😬",
	"😑",
	"😐",
	"😶",
	"🤥",
	"🤫",
	"🤭",
	"🤔",
	"🤗",
	"👽",
	"☠️",
	"💀",
	"👻",
	"💩",
	"🤡",
	"👺",
	"👹",
	"👿",
	"😈",
	"🤠",
	"🤑",
	"🤕",
	"🤒",
	"😷",
	"🤧",
	"🤮",
	"🤢",
	"🥴",
	"🤐",
	"😵‍💫",
	"✊",
	"👊",
	"👎",
	"👍",
	"🤝",
	"👏",
	"🙌",
	"👐",
	"🤲",
	"😾",
	"😿",
	"🙀",
	"😽",
	"😼",
	"😻",
	"😹",
	"😸",
	"😺",
	"🎃",
	"🤖",
	"👾",
	"💪",
	"🤙",
	"👋",
	"🖖",
	"🖐️",
	"🤚",
	"✋",
	"☝️",
	"👇",
	"👆",
	"👉",
	"👈",
	"🤏",
	"👌",
	"🤘",
	"🤟",
	"✌️",
	"🤞",
	"🤜",
	"🤛",
	"👅",
	"👄",
	"💋",
	"🦷",
	"🙏",
	"❤️",
	"💑",
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
		const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/message/${userId}`);
		const data = await response.json();
		setMessagesList(data);
	}, []);

	async function deleteMessage(id) {
		const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/message`, {
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

	async function saveMessage() {
		const newMessagesList = [...messagesList];
		const index = newMessagesList.findIndex((message) => message._id == currentMessage.id);

		if (index === -1) {
			const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/message`, {
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
			const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/edit-message`, {
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
		return showCurrentMessage ? setShowCurrentMessage(bool) : setCreateNewMessage(bool);
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
						<div className="message-stcok-left-side-nav-close-icon" onClick={resetState}>
							<CloseIcon />
						</div>
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
								{emojiList.map((emoji, index) => {
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
							<button onClick={() => AddNameTemplate()} className="left-side-button-1">
								הוספת תבנית שם
							</button>
							<button disabled={true} className="left-side-button-2">
								הוספת תבנית שם משפחה
							</button>
							<div className="left-side-tools-warpper-left-side">
								<button onClick={() => setOpenEmojiList(!openEmojiList)} className="left-side-button-5">
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
