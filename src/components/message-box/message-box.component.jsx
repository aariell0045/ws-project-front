import "./message-box.styles.css";
import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
function MessageBox(props) {
	let {
		updateCurrentMessage,
		messageName,
		messageLength,
		messagesInRow,
		id,
		deleteMessage,
		displayOnly,
		currentMessage,
	} = props;

	function displayMessageContent(messageContent) {
		return messageContent.split("").map((char, index) => {
			if (index === 100) {
				return "...";
			}
			if (index > 100) {
				return null;
			}
			return char;
		});
	}

	return (
		<div
			onClick={(event) => {
				updateCurrentMessage(messageName, messagesInRow, id);
			}}
			className="message-box"
		>
			<div style={{ backgroundColor: currentMessage.id == id ? "white" : "" }} className="message-box-background"></div>
			<header className="message-main-header">
				<p className="message-name">{messageName}</p>
				<p className="messages-in-a-row">{messageLength} הודעות ברצף</p>
			</header>
			<div className="message-content-first-message-in-row">
				{messagesInRow.length && displayMessageContent(messagesInRow[0].contentField)}
			</div>
			{!displayOnly && (
				<span
					onClick={(event) => {
						event.stopPropagation();
						deleteMessage(id);
					}}
					className="message-box-trash-icon"
				>
					<TrashIcon disabled={currentMessage.id == id ? false : true} />
				</span>
			)}
		</div>
	);
}

export default MessageBox;
