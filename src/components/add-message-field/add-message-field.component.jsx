import React, { useState } from "react";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import "./add-message-field.styles.css";
function EditMessageField(props) {
	const [displayMessage, setDisplayMessage] = props.useDisplayMessageState;
	function handleInputs(event, index, content) {
		let row = Math.floor(content.contentField.length / 91 + 2);
		let counter = 0;
		for (let val of event.target.value) {
			if (val === "\n") {
				counter++;
			}
		}

		event.nativeEvent.path[0].rows = row + counter;
		const { value } = event.target;
		let newMessagesContent = [...displayMessage.contentMessage];
		debugger;
		newMessagesContent[index].contentField = value;
		setDisplayMessage({
			...displayMessage,
			contentMessage: newMessagesContent,
			editMode: true,
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

	function addNewField(fieldObj) {
		let newContainer = [...displayMessage.contentMessage];
		newContainer.push(fieldObj);
		setDisplayMessage({
			...displayMessage,
			contentMessage: newContainer,
		});
	}

	function rows(content) {
		let row = Math.floor(content.contentField.length / 91 + 2);
		let counter = 0;
		for (let val of content.contentField) {
			if (val === "\n") {
				counter++;
			}
		}

		row += counter;

		return row;
	}

	function removeField(event, container, setContainer, index) {
		const newContainer = { ...container };
		if (index === 0) {
			newContainer.contentMessage[index] = { contentField: "", mediaSrc: "" };
			newContainer.editMode = true;
			return setContainer(newContainer);
		}
		newContainer.contentMessage.splice(index, 1);
		newContainer.editMode = true;
		setContainer(newContainer);
	}
	return (
		<div className='add-message-container'>
			<header className='add-message-container-main-header'>
				<p onClick={() => props.setOpenMessageName(true)}>
					{displayMessage.messageName}
				</p>
			</header>

			{displayMessage.contentMessage
				? displayMessage.contentMessage.map((content, index) => {
						let row = rows(content);
						return (
							<div>
								<img
									className='image-url-upload-media'
									src={content.mediaSrc}
									alt=''
								/>
								<div className='add-message-field'>
									<textarea
										onFocus={() => {
											debugger;
											props.setCurrentMessage({
												id: index,
												...content,
											});
										}}
										id={index}
										onChange={(event) => {
											handleInputs(event, index, content);
										}}
										value={content.contentField}
										name=''
										cols={content.contentField.length + 10 + ""}
										rows={
											displayMessage.editMode
												? Math.floor(
														content.contentField.length /
															91 +
															2
												  )
												: row
										}
									></textarea>
									<div
										onClick={(event) =>
											removeField(
												event,
												displayMessage,
												setDisplayMessage,
												index
											)
										}
										className='message-field-trash-icon'
									>
										<TrashIcon disabled />
									</div>
								</div>
							</div>
						);
				  })
				: null}
			{displayMessage.contentMessage.length < 4 && returnField()}
		</div>
	);
}

export default EditMessageField;
