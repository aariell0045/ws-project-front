import "./message-box.styles.css";
import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import MediaIcon from "../../icons/icons-components/media-icon/media-icon.component";

function MessageBox(props) {
	let {
		messageName,
		messageLength,
		messagesInRow,
		id,
		setCurrentMessage,
		setShowCurrentMessage,
		resetState,
		deleteMessage,
	} = props;

	function updateCurrentMessage() {
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
		<div onClick={updateCurrentMessage} className='message-box'>
			<div st className='message-box-background'></div>
			<header className='message-main-header'>
				<p className='message-name'>{messageName}</p>
				<p className='messages-in-a-row'>{messageLength} הודעות ברצף</p>
			</header>
			<div className='message-content-first-message-in-row'>
				{messagesInRow.length && messagesInRow[0].contentField}
			</div>
			<div className='message-box-footer'>
				<span className='message-box-media-icon'>
					<MediaIcon />
				</span>
			</div>
			<span
				onClick={(event) => {
					event.stopPropagation();
					deleteMessage(id);
				}}
				className='message-box-trash-icon'
			>
				<TrashIcon />
			</span>
		</div>
	);
}

export default MessageBox;
