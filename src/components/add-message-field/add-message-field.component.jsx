import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import "./add-message-field.styles.css";
function CurrentMessage(props) {
	const { setCurrentFieldIndex } = props;
	const [currentMessage, setCurrentMessage] = props.useCurrentMessageState;

	function textEreaSize(event, message) {
		const { value } = event.target;
		let row = Math.floor(message.contentField.length / 91 + 2);
		let counter = 0;
		for (let val of value) {
			if (val === "\n") {
				counter++;
			}
		}
		event.nativeEvent.path[0].rows = row + counter;
	}

	function handleInputs(event, index, message) {
		debugger;
		textEreaSize(event, message);
		const { value } = event.target;

		const newContentMessage = [...currentMessage.contentMessage];
		newContentMessage[index].contentField = value;
		setCurrentMessage({
			...currentMessage,
			contentMessage: newContentMessage,
		});
	}

	function returnField() {
		return (
			<div className='add-new-field'>
				<span onClick={() => addNewField({ contentField: "", mediaSrc: "" })}>
					הוספת תת הודעה{" "}
				</span>
			</div>
		);
	}

	function addNewField(field) {
		let newContentMessage = [...currentMessage.contentMessage];
		newContentMessage.push(field);
		setCurrentMessage({
			...currentMessage,
			contentMessage: newContentMessage,
		});
	}

	function rows(contentField) {
		let row = Math.floor(contentField.length / 91 + 2);
		let counter = 0;
		for (let val of contentField) {
			if (val === "\n") {
				counter++;
			}
		}

		row += counter;

		return row;
	}

	function removeField(currentMessage, setCurrentMessage, index) {
		const newCurrentMessage = { ...currentMessage };
		if (index === 0) {
			newCurrentMessage.contentMessage[index].contentField = "";
			newCurrentMessage.contentMessage[index].mediaSrc = "";
		} else {
			newCurrentMessage.contentMessage.splice(index, 1);
			newCurrentMessage.editMode = true;
		}
		return setCurrentMessage(newCurrentMessage);
	}

	return (
		<div className='add-message-container'>
			<header className='add-message-container-main-header'>
				<p onClick={() => props.setOpenSingleField(true)}>
					{currentMessage.messageName}
				</p>
			</header>

			{currentMessage.contentMessage.map((message, index) => {
				let rowLength = rows(message.contentField);
				let { contentField, mediaSrc } = message;
				debugger;
				const newMediaSrc = mediaSrc?.get ? JSON.parse(mediaSrc?.get("media")) : null;
				console.log(newMediaSrc);
				return (
					<div>
						{mediaSrc && (
							<img
								className='image-url-upload-media'
								src={newMediaSrc}
								alt=''
							/>
						)}
						<div className='add-message-field'>
							<textarea
								id={index}
								onChange={(event) => handleInputs(event, index, message)}
								value={contentField}
								cols={contentField.length + 10 + ""}
								rows={rowLength}
								onFocus={() => setCurrentFieldIndex(index)}
							></textarea>
							<div
								onClick={() => {
									removeField(currentMessage, setCurrentMessage, index);
								}}
								className='message-field-trash-icon'
							>
								<TrashIcon disabled />
							</div>
						</div>
					</div>
				);
			})}

			{currentMessage.contentMessage.length < 4 && returnField()}
		</div>
	);
}

export default CurrentMessage;
