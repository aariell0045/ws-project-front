import "./add-messages.styles.css";
import React, { useState } from "react";
import AddEvents from "../add-events/add-events.component";
import TrashIcon from "../../icons/icons-components/trash-icon/trash-icon.component";
import MediaIcon from "../../icons/icons-components/media-icon/media-icon.component";
import AddMessageField from "../add-message-field/add-message-field.component.jsx";

function AddMessage(props) {
	const [state, setState] = props.useState;

	function uploadFile(e) {
		let file = e.target.files[0];
		console.log(file);
		previewFile(file);
	}

	function previewFile(file) {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			if (state.currentMessage == null) {
				return alert("בבקשה תתמקד על אחת מתיבות הטקסט");
			}
			state.currentMessage.imageSrc = reader.result;
			console.log(state.currentMessage);
			setState({
				...state,
			});
		};
	}

	return (
		<section className='add-message'>
			<div className='message-name-warpper'>
				<header className='message-name'>
					<div
						onClick={() => {
							let currentState = { ...state };
							currentState.openAddMessageNameWindows = true;
							setState(currentState);
						}}
						className='create-message-header'
					>
						{state.messageName}
					</div>
				</header>
			</div>
			<div className='add-message-messages-list'>
				{state.messages.map((messageField, index) => {
					if (index === 4) {
						return null;
					}
					if (messageField.display) {
						return messageField.afterDisplay();
					} else {
						return messageField.beforDisplay();
					}
				})}

				<br />
			</div>

			{/* <img src={imageSrc} alt='' /> */}
			<div className='add-message-footer'>
				<button
					onClick={() => {
						let index = state.currrentField;
						state.fieldsErea[index] = state.fieldsErea[index].trimEnd() + " @ ";
						setState({
							...state,
						});
					}}
					className='add-contact-name'
				>
					@ הוספת תבנית שם
				</button>
				<button className='add-message-tool'>B</button>
				<button className='add-message-tool'>
					<em>I</em>
				</button>
				<input
					onChange={(event) => uploadFile(event)}
					type='file'
					name='upload-file'
					id='upload-file'
					style={{ display: "none" }}
				/>
				<label className='add-message-tool' htmlFor='upload-file'>
					<MediaIcon />
				</label>

				<button className='add-message-tool'>icon</button>
			</div>
		</section>
	);
}

export default AddMessage;
