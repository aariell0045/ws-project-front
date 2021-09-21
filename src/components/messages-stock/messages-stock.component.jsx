import "./messages-stock.styles.css";
import React, { useState } from "react";
import MessageBox from "../message-box/message-box.component";
import AddMessage from "../add-message/add-message.component";
import AddMessageIcon from "../../icons/icons-components/add-message/add-message.component";
import AddEvents from "../add-events/add-events.component";
import AddSingleField from "../add-single-field/add-single-field.component";
import EditMessageField from "../add-message-field/add-message-field.component";
import CreateMessage from "../create-message-filed/create-message-field.component";
import MediaIcon from "../../icons/icons-components/media-icon/media-icon.component";

const messages = [
	{
		id: "1",
		messageName: "ariel",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
		isActive: false,
	},
	{
		id: "2",
		messageName: "ariel",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
		isActive: false,
	},
	{
		id: "3",
		messageName: "toam",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
		isActive: false,
	},
	{
		id: "4",
		messageName: "toam",
		contentMessage: [{ contentField: "שלום מה קורה אחשלי היקר מכל!!!!!", mediaSrc: "" }],
		isActive: false,
	},
];

function MessagesStock() {
	const [messagesList, setMessagesList] = useState(messages);
	const [displayMessage, setDisplayMessage] = useState(null);
	const [createMessage, setCreateMessage] = useState(null);
	const [openMessageName, setOpenMessageName] = useState(false);
	const [messagesInRow, setMessagesInRow] = useState([{ contentField: "", mediaSrc: "" }]);
	const [currentMessage, setCurrentMessage] = useState(null);
	console.log(currentMessage);

	function claseLeftSide() {
		setDisplayMessage(null);
	}

	function addName(currentMessage) {
		if (currentMessage) {
			currentMessage.contentField += " (שם פרטי) ";
			setCurrentMessage({ ...currentMessage });
			setCurrentMessage(null);
		} else {
			alert("please focus on the field");
		}
	}

	function uploadImage(event) {
		if (currentMessage) {
			// const media = event.target.files[0];
			// const reader = new FileReader();
			// reader.readAsDataURL(media);
			// reader.onloadend = (event) => {
			// 	const newCurrentMessage = { ...currentMessage };
			// 	const index = messagesList.findIndex(
			// 		(message) => newCurrentMessage.id + 1 == message.id
			// 	);
			// 	newCurrentMessage.mediaSrc = event.target.result || "";
			// 	const newMessagesList = [...messagesList];
			// 	newMessagesList[index].contentMessage.push({
			// 		contentField: newCurrentMessage.contentField,
			// 		mediaSrc: newCurrentMessage.mediaSrc,
			// 	});
			// 	setMessagesList(newMessagesList);
			// }
			alert("didnt work yet");
		} else {
			alert("please focus on the field");
		}
	}

	return (
		<section id='messages-stock'>
			<div className='messages-stcok-warrper-container'>
				<div className='messages-stock-right-side'>
					<header className='messages-stock-main-header'>
						<p>מאגר הודעות</p>
						<input type='text' placeholder='חיפוש במאגר ההודעות' />
						<button
							onClick={() => {
								setDisplayMessage(null);
								setOpenMessageName(true);
								setCreateMessage(null);
								setMessagesInRow([{ contentField: "", mediaSrc: "" }]);
							}}
							className='messages-stcok-add-message-icon'
						>
							<AddMessageIcon />
						</button>
					</header>

					<div className='messages-list'>
						{messagesList.map((message, index) => {
							let item = [
								message.messageName,
								message.contentMessage.length,
								message.contentMessage,
							];
							let useDisplayMessageState = [displayMessage, setDisplayMessage];
							let useCreateMessageState = [createMessage, setCreateMessage];

							return (
								<MessageBox
									key={index}
									id={message.id}
									item={item}
									useDisplayMessageState={useDisplayMessageState}
									useCreateMessageState={useCreateMessageState}
									color={message.isActive}
								/>
							);
						})}
					</div>
				</div>
				<div className='messages-stock-left-side'>
					<div className='messages-stock-left-side-background'></div>
					<nav className='message-stcok-left-side-nav-bar'>
						<button onClick={claseLeftSide}>X</button>
						<button>icon</button>
						<button>icon</button>
						<button
							disabled={
								(displayMessage && !displayMessage.editMode) ||
								(createMessage && false)
							}
							onClick={() => {
								debugger;
								if (displayMessage) {
									const index = messagesList.findIndex(
										(message) => message.id == displayMessage.id
									);

									const newMessagesList = [...messagesList];

									newMessagesList[index] = {
										id: newMessagesList[index].id,
										messageName: displayMessage.messageName,
										contentMessage: displayMessage.contentMessage,
									};
									console.log(newMessagesList);

									setDisplayMessage(null);
									setMessagesList(newMessagesList);
								}
								if (createMessage) {
									let newMessage = {
										id: messagesList.length,
										messageName: createMessage.messageName,
										contentMessage: messagesInRow,
									};
									const newMessagesList = [...messagesList];
									newMessagesList.push(newMessage);

									setMessagesList(newMessagesList);
								}

								// setMessagesInRow([{ contentField: "", mediaSrc: "" }]);
								// setCreateMessage(null);
							}}
							className={
								displayMessage?.editMode || createMessage
									? "messages-stcok-left-side-nav-bar-save-button-clicked"
									: "messages-stcok-left-side-nav-bar-save-button"
							}
						>
							שמור
						</button>
					</nav>

					<div className='left-side-display-list'>
						{displayMessage && (
							<EditMessageField
								useDisplayMessageState={[displayMessage, setDisplayMessage]}
								setOpenMessageName={setOpenMessageName}
								setCurrentMessage={setCurrentMessage}
							/>
						)}
						{createMessage && (
							<CreateMessage
								currentMessage={createMessage}
								container={messagesInRow}
								setContainer={setMessagesInRow}
								setOpenMessageName={setOpenMessageName}
								setCurrentMessage={setCurrentMessage}
							/>
						)}
					</div>
					<div className='left-side-footer-container'>
						<div className='left-side-tools-warpper'>
							<button
								onClick={() => addName(currentMessage)}
								className='left-side-button-1'
							>
								@ הוספת תבנית שם
							</button>
							<div className='left-side-tools-warpper-left-side'>
								<button className='left-side-button-3'>/</button>
								<button className='left-side-button-2'>B</button>
								<input
									onChange={(event) => uploadImage(event)}
									type='file'
									id='upload-media'
									name='upload-media'
									style={{ display: "none" }}
								/>

								<div className='left-side-button-4'>
									<label htmlFor='upload-media'>
										<div className='media-icon-upload-media'>
											<MediaIcon />
										</div>
									</label>
								</div>
								<button className='left-side-button-5'>icon</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{openMessageName && (
				<AddSingleField
					setOpenField={setOpenMessageName}
					getFieldValue={setCreateMessage}
					useCurrentData={[displayMessage, setDisplayMessage]}
					inputValueKeyName={"messageName"}
					fieldsNames={"שם ההודעה:"}
				/>
			)}
		</section>
	);
}

export default MessagesStock;
