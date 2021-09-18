import React, { useState } from "react";
import "./add-single-field.styles.css";

function AddSingleField(props) {
	const [fieldInput, setFieldInput] = useState("");
	const [displayMessage, setDisplayMessage] = props.useDisplayMessage;
	function saveMessage(displayMessage) {
		if (displayMessage) {
			displayMessage.messageName = fieldInput;
			setDisplayMessage({
				...displayMessage,
				editMode: true,
			});
		} else {
			props.setCreateMessage({ messageName: fieldInput });
		}
		clase();
	}
	function handleInputs(event) {
		const { value } = event.target;
		setFieldInput(value);
	}

	function clase() {
		props.setOpenMessageName(false);
	}

	return (
		<div className='add-single-field'>
			<header className='add-single-field-main-header'>
				<span onClick={clase} className='close'>
					X
				</span>
			</header>
			<div className='add-single-field-field-warpper'>
				<span className='field-name'>שם ההודעה</span>
				<input
					onChange={(event) => handleInputs(event)}
					className='field-input'
					type='text'
				/>
			</div>
			<div className='add-single-field-button-container'>
				<button onClick={() => saveMessage(displayMessage)}>הבא</button>
			</div>
		</div>
	);
}

export default AddSingleField;
