import React, { useState } from "react";
import "./add-single-field.styles.css";

function AddSingleField(props) {
	const { containerNameKey, nextStep, setOpenField } = props;
	const [currentData, setCurrentData] = props.useCurrentData;
	const [input, setInput] = useState("");

	function saveContainerName(currentData) {
		const newCurrentData = { ...currentData };
		newCurrentData[containerNameKey] = input;
		console.log(newCurrentData);
		setCurrentData(newCurrentData);
		props.isCombineGroups ? nextStep(input) : nextStep();
		close();
	}
	function handleInputs(event) {
		const { value } = event.target;
		setInput(value);
	}

	function close() {
		setOpenField(false);
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
				<button onClick={() => saveContainerName(currentData)}>הבא</button>
			</div>
		</div>
	);
}

export default AddSingleField;
