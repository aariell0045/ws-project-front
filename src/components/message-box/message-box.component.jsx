import "./message-box.styles.css";
import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import MediaIcon from "../../icons/icons-components/media-icon/media-icon.component";

function MessageBox(props) {
	let [firstColumn, secondColumn, thirdColumn] = props.item;
	const [displayMessage, setDisplayMessage] = props?.useDisplayMessageState || [
		undefined,
		undefined,
	];
	const [createMessage, setCreateMessage] = props?.useCreateMessageState || [
		undefined,
		undefined,
	];
	const [isMediaExist, setMediaExist] = useState(false);

	for (let media of thirdColumn) {
		if (media.mediaSrc) {
			setMediaExist(true);
		}
	}
	return (
		<div
			onClick={(event) => {
				let message = {
					messageName: firstColumn,
					contentMessage: JSON.parse(JSON.stringify(thirdColumn)),
					id: props.id,
				};
				setDisplayMessage({ ...message });
				if (createMessage) {
					setCreateMessage(null);
				}
			}}
			className='message-box'
		>
			<div st className='message-box-background'>
				{" "}
			</div>
			<header className='message-main-header'>
				<p className='message-name'>{firstColumn}</p>
				<p className='messages-in-a-row'>{secondColumn} הודעות ברצף</p>
			</header>
			<div className='message-content-first-message-in-row'>
				{thirdColumn[0].contentField}
			</div>
			<div className='message-box-footer'>
				<span className='message-box-media-icon'>
					<MediaIcon />
				</span>
			</div>
			<span className='message-box-trash-icon'>
				<TrashIcon />
			</span>
		</div>
	);
}

export default MessageBox;
