import React, { useState } from "react";
import "./add-single-field.styles.css";

function AddSingleField(props) {
	const [fieldInput, setFieldInput] = useState("");
	const inputValueKeyName = props.inputValueKeyName;
	const [currentData, setCurrentData] = props.useCurrentData;
	function saveCurrentData(currentData) {
		if (currentData) {
			currentData[inputValueKeyName] = fieldInput;
			setCurrentData({
				...currentData,
				editMode: true,
			});
		} else {
			props.getFieldValue({ [inputValueKeyName]: fieldInput });
		}
		close();
	}
	function handleInputs(event) {
		const { value } = event.target;
		setFieldInput(value);
	}

	function close() {
		props.setOpenField(false);
	}

	return (
		<div className='add-single-field'>
			<header className='add-single-field-main-header'>
				<span onClick={close} className='close'>
					X
				</span>
			</header>
			<div className='add-single-field-field-warpper'>
				<span className='field-name'>{props.fieldsNames}</span>
				<input
					onChange={(event) => handleInputs(event)}
					className='field-input'
					type='text'
				/>
			</div>
			<div className='add-single-field-button-container'>
				<button onClick={() => saveCurrentData(currentData)}>הבא</button>
			</div>
		</div>
	);
}

export default AddSingleField;
